import FormContainer from '../../../components/form/FormContainer';
import FormInput from '../../../components/form/FormInput';
import SubmitButton from '../../../components/form/SubmitButton';
import { createProfileAction } from '@/lib/actions';
import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

const CreateProfilePage = async () => {
  const user = await currentUser();

  if (user?.privateMetadata?.hasProfile) redirect('/');

  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">New User</h1>
      <div className="border p-8 rounded-md max-w-lg">
        <FormContainer action={createProfileAction}>
          <div className="gird md:grid-cols-2 gap-4 mt-4">
            <FormInput type="text" name="firstName" label="First name" />
            <FormInput type="text" name="lastName" label="Last name" />
            <FormInput type="text" name="username" label="Username" />
          </div>
          <SubmitButton text="Create Profile" className="mt-8" />
        </FormContainer>
      </div>
    </section>
  );
};

export default CreateProfilePage;
