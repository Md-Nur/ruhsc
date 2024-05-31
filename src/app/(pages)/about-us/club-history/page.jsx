const membersResponsiblities = [
  "Latest news, updates, required info about Higher Study opportunities.",
  "Info about leadership programs, training courses around the globe.",
  "Top-class mentorship & guidance",
  "Personal Skill Development Lab facilities",
  "Interactive sessions with resourceful persons",
  "GRE & IELTS preparations with supplements",
  "A group of individuals with dedicated minds",
  "A healthy competitive mindset",
  "A well-occupied atmosphere with cultural diversity",
  "All associated info about contests, olympiads & so on",
];

const page = () => {
  return (
    <div className="p-5 md:p-10">
      <h2 className="text-3xl my-5">About RUHSC</h2>
      <p>
        Rajshahi University Higher Study Club (RUHSC) is one of the most
        functional & prominent communities among all well recognised
        institutions of Bangladesh, accumulated with visionary alumni & other
        higher study consultancies across the country.
      </p>
      <p>
        Since its inception in 2014 as a non affiliated voluntary organisation,
        its core objective is to provide comprehensive support & opportunities
        to the higher study aspirants with a view to enhancing their social
        inclusion, skill development, interpersonal & intrapersonal
        relationships, intellectual skills etc. From its past successful years,
        it&apos;s evident that most of the members are pursuing their post grad
        careers in reputed institutions across the globe. And thus RUHSC&apos;s
        alumni members are now linked to running club members & furthermore
        supervise RUHSC.
      </p>
      <p>
        RUHSC is, in fact, a hub of potential youths to flourish their
        capabilities in various fields. platform to explore unbounded
        opportunities & thus facilitate their career-oriented journey.
      </p>
      <div>
        What we strive to provide and ensure our registered members are:
        <ul>
          {membersResponsiblities.map((responsibility, i) => (
            <li className="ml-5 list-disc" key={i}>
              {responsibility}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex lg:flex-row flex-col">
        <div>
          <h2 className="text-3xl my-5">Our Mission</h2>
          <p>
            To facilitate higher study journeys in abroad and reduce the
            information asymmetry faced by students & aspiring students from
            University of Rajshahi.
          </p>
        </div>
        <div>
          <h2 className="text-3xl my-5">Our Vission</h2>
          <p>
            To be the leading club in Bangladesh working on Higher Study Abroad.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
