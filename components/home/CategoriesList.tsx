import { categories } from '@/lib/categories';
import { ScrollArea, ScrollBar } from '../ui/scroll-area';
import Link from 'next/link';

function CategoriesList({ category, search }: { category?: string; search?: string }) {
  const searchTerm = search ? `&search=${search}` : '';

  return (
    <section>
      <ScrollArea className="py-5">
        <div className="flex gap-x-3">
          {categories.map((item) => {
            const isActive = item.label === category;

            return (
              <Link key={item.label} href={`/?category=${item.label}${searchTerm}`}>
                <article
                  className={`p-2 flex flex-col items-center cursor-pointer duration-300 text-center hover:text-primary w-[100px] ${
                    isActive ? 'text-primary' : 'text-gray-600'
                  }`}
                >
                  <item.icon className="w-8 h-8 " />
                  <p className="capitalize text-sm mt-1">{item.label}</p>
                </article>
              </Link>
            );
          })}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </section>
  );
}

export default CategoriesList;
