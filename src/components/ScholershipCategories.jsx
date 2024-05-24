import Link from "next/link";

const ScholarshipCountries = [
  {
    id: 1,
    name: "USA",
    image:
      "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNhfGVufDB8fDB8fHww",
  },
  {
    id: 2,
    name: "UK",
    image:
      "https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "Canada",
    image:
      "https://images.unsplash.com/photo-1517935706615-2717063c2225?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    name: "Other",
    image:
      "https://images.unsplash.com/photo-1433883669848-fa8a7ce070b2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y291bnRyeXxlbnwwfHwwfHx8MA%3D%3D",
  },
];

const ScholershipCategories = () => {
  return (
    <section className="w-full">
      <h2 className="text-center text-3xl font-bold text-base-content mt-10 mb-5">
        Scholarship Categories
      </h2>
      <div className="flex gap-1 md:gap-3 w-full px-1 md:px-7 lg:px-10 ">
        {ScholarshipCountries.map((country) => (
          <div
            key={country.id}
            className="card w-96 bg-base-100 shadow-xl image-full"
          >
            <figure>
              <img src={country.image} alt={country.name} />
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
