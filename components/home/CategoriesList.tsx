import { categories } from "@/lib/categories";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import Link from "next/link";

function CategoriesList({
  category,
  search,
}: {
  category?: string;
  search?: string;
}) {
  const searchTerm = search ? `&search=${search}` : "";

  return (
    <section>
      <ScrollArea className="py-5">
        <div className="flex space-x-10 px-2">
          {categories.map((item) => {
            const isActive = item.label === category;

            return (
              <Link
                key={item.label}
                href={`${isActive ? "/" : `/?category=${item.label}${searchTerm}`}`}
              >
                <article
                  className={`flex cursor-pointer flex-col items-center text-center duration-300 hover:text-primary ${
                    isActive ? "text-primary" : "text-gray-600"
                  }`}
                >
                  <item.icon className="h-9 w-9" />
                  <p className="mt-1 whitespace-nowrap text-sm capitalize">
                    {item.label}
                  </p>
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
