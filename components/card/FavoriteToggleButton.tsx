import { Button } from '@/components/ui/button';
import { auth } from '@clerk/nextjs/server';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { CardSignInButton } from '../form/Buttons';
import { fetchFavoriteId } from '@/lib/actions';
import FavoriteToggleForm from './FavoriteToggleForm';

async function FavoriteToggleButton({ propertyId }: { propertyId: string }) {
  const { userId }: { userId: string | null } = await auth();

  if (!userId) return <CardSignInButton />;

  const favoriteId = await fetchFavoriteId({propertyId})

  return <FavoriteToggleForm favoriteId={favoriteId} propertyId={propertyId}/>
}

export default FavoriteToggleButton;
