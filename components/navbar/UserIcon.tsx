import { LuUser2 } from 'react-icons/lu';
import { fetchProfileImage } from '@/lib/actions';

const UserIcon = async () => {
  const profileImage = await fetchProfileImage()

  if (profileImage) {
    return <img src={profileImage} className='w-6 h-6 bg-primary rounded-full'/>
  }
  return <LuUser2 className="w-6 h-6 bg-primary rounded-full text-white" />;
};

export default UserIcon;
