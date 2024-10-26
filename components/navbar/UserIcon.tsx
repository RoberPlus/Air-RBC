import { LuUser2 } from 'react-icons/lu';
import { fetchProfileImage } from '@/lib/actions';
import Image from 'next/image';

const UserIcon = async () => {
  const profileImage = await fetchProfileImage()

  if (profileImage) {
    return <Image src={profileImage} className='w-6 h-6 bg-primary rounded-full' alt='Profile user image'/>
  }
  return <LuUser2 className="w-6 h-6 bg-primary rounded-full text-white" />;
};

export default UserIcon;
