import Image from "next/image";
import Link from "next/link";

const ScholarshipCountries = [
  {
    id: 1,
    name: "USA",
    image: "https://images.unsplash.com/photo-1576723658639-513237fdd520",
  },
  {
    id: 2,
    name: "UK",
    image: "https://images.unsplash.com/photo-1526129318478-62ed807ebdf9",
  },
  {
    id: 3,
    name: "Canada",
    image: "https://images.unsplash.com/photo-1517935706615-2717063c2225",
  },
  {
    id: 4,
    name: "Japan",
    image: "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc",
  },
  {
    id: 5,
    name: "Other",
    image: "https://images.unsplash.com/photo-1433883669848-fa8a7ce070b2",
  },
];

const ScholershipCategories = () => {
  return (
    <section className="w-full">
      <h2 className="text-center text-3xl font-bold text-base-content mt-10 mb-5">
        Scholarship Categories
      </h2>
      <div className="flex overflow-x-auto max-w-7xl mx-auto gap-3">
        {ScholarshipCountries.map((country) => (
          <div
            key={country.id}
            className="card image-full cursor-pointer transition-all duration-300 ease-in-out my-3"
          >
            <figure className="w-60">
              <Image
                height={700}
                width={500}
                src={country.image}
                alt={country.name}
                className="object-cover w-60 h-96"
              />
            </figure>
            <div className="card-body justify-center items-center">
              <Link
                href={`scholarship/${country.name.toLocaleLowerCase()}`}
                className="card-title link link-hover text-3xl font-bold"
              >
                {country.name}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ScholershipCategories;
