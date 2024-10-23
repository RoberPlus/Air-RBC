'use server';

import db from './db';
import { profileSchema } from './schemas';
import { auth, clerkClient, currentUser, User } from '@clerk/nextjs/server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

const getAuthUser = async (): Promise<User> => {
  const user = await currentUser();

  if (!user) throw new Error('You must be logged in, please back to homepage');
  if (!user.privateMetadata.hasProfile) redirect('/profile/create');

  return user;
};

const renderError = (error:unknown):{message:string}=>{
  return { message: error instanceof Error ? error.message : 'An error occurred!' };
}

export const createProfileAction = async (prevState: any, formData: FormData) => {
  try {
    const user = await currentUser();

    if (!user) throw new Error('You must be logged in, please back to homepage');

    const rawData = Object.fromEntries(formData);
    const validatedFields = profileSchema.parse(rawData);

    await db.profile.create({
      data: {
        clerkId: user?.id,
        email: user.emailAddresses[0].emailAddress,
        profileImage: user.imageUrl ?? '',
        ...validatedFields,
      },
    });

    const response = await clerkClient();

    response.users.updateUserMetadata(user.id, {
      privateMetadata: {
        hasProfile: true,
      },
    });
  } catch (error) {
    return renderError(error)
  }
  redirect('/');
};

export const fetchProfileImage = async () => {
  const user = await currentUser();
  if (!user) return null;

  const profile = await db.profile.findUnique({
    where: {
      clerkId: user.id,
    },
    select: {
      profileImage: true,
    },
  });

  return profile?.profileImage;
};

export const fetchProfile = async () => {
  const user = await getAuthUser();
  const profile = await db.profile.findUnique({
    where: {
      clerkId: user.id,
    },
  });

  if (!profile) redirect('/profile/create');
  return profile;
};

export const updateProfileAction = async (
  prevState: any,
  formData: FormData
): Promise<{ message: string }> => {
  const user = await getAuthUser();

  try {
    const rawData = Object.fromEntries(formData);
    const validatedFields = profileSchema.parse(rawData);

    await db.profile.update({
      where: {
        clerkId: user.id,
      },
      data: validatedFields,
    });

    revalidatePath('/profile');
    return { message: 'Profile Updated!' };
  } catch (error) {
    return renderError(error)
  }
};