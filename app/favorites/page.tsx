import EmptyList from "@/components/home/EmptyList";
import PropertiesList from "@/components/home/PropertiesList";
import Title from "@/components/properties/Title";
import { fetchFavorites } from "@/lib/actions";

const FavoritesPage = async () => {
  const favorites = await fetchFavorites();

  return (
    <div className="flex flex-col space-y-10">
      <Title text="Your Favorites" />
      {favorites.length === 0 ? (
        <EmptyList />
      ) : (
        <PropertiesList properties={favorites} />
      )}
    </div>
  );
};

export default FavoritesPage;
