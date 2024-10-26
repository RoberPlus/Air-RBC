import CategoriesList from '@/components/home/CategoriesList';
import PropertiesContainer from '@/components/home/PropertiesContainer';
import { Suspense } from 'react';
import LoadingCards from '@/components/card/LoadingCards';

type SearchParams = {
  category?: string;
  search?: string;
};

interface PageProps {
  searchParams: Promise<SearchParams>;
}

const HomePage = async ({ searchParams }: PageProps) => {
  const { category, search } = await searchParams;

  return (
    <section>
      <CategoriesList category={category} search={search} />
      <Suspense fallback={<LoadingCards />}>
        <PropertiesContainer category={category} search={search} />
      </Suspense>
    </section>
  );
};

export default HomePage;