import CardContainer from "@/components/CardContainer";
const stories = [
  {
    id: 1,
    name: "Alice Johnson",
    university: "Harvard University",
    degree: "MBA",
    year: "2023",
    story:
      "Alice's journey to Harvard was filled with challenges. After working in a fast-paced corporate environment for five years, she decided to pursue her MBA to enhance her business acumen. Her hard work paid off, and she was accepted into one of the most prestigious programs in the world. Now, Alice is leading a successful startup.",
    photoUrl: "https://example.com/photos/alice.jpg",
  },
  {
    id: 2,
    name: "Bob Smith",
    university: "Stanford University",
    degree: "MS in Computer Science",
    year: "2022",
    story:
      "Bob had always been passionate about technology. After completing his undergraduate studies, he wanted to deepen his knowledge in computer science. His dedication and countless hours of studying led him to Stanford, where he not only excelled academically but also contributed to cutting-edge research.",
    photoUrl: "https://example.com/photos/bob.jpg",
  },
  {
    id: 3,
    name: "Catherine Lee",
    university: "University of Oxford",
    degree: "PhD in Physics",
    year: "2024",
    story:
      "Catherine's fascination with the mysteries of the universe drove her to pursue a PhD in Physics at Oxford. Despite facing numerous obstacles, her perseverance and passion for her field helped her overcome them. Today, she is a respected researcher, making significant contributions to astrophysics.",
    photoUrl: "https://example.com/photos/catherine.jpg",
  },
  {
    id: 4,
    name: "David Martinez",
    university: "MIT",
    degree: "MS in Mechanical Engineering",
    year: "2023",
    story:
      "David's journey from a small town to MIT is truly inspiring. He worked tirelessly during his undergraduate years, often balancing part-time jobs and studies. His dedication earned him a spot in MIT's prestigious Mechanical Engineering program, where he excelled and is now working on innovative engineering solutions.",
    photoUrl: "https://example.com/photos/david.jpg",
  },
  {
    id: 5,
    name: "Emily Zhang",
    university: "University of Cambridge",
    degree: "MA in Economics",
    year: "2021",
    story:
      "Emily's interest in global economics and policy led her to Cambridge. With a strong academic background and a drive to make a difference, she tackled her MA program with enthusiasm. Her thesis on sustainable economic development has been highly praised and is influencing policy discussions worldwide.",
    photoUrl: "https://example.com/photos/emily.jpg",
  },
];

const page = () => {
  return (
    <CardContainer title="Success Stories">
      {stories.map((story, i) => (
        <div key={i} className="card bg-base-100 shadow-xl">
          <figure>
            <img
              src={story.photoUrl}
              alt={story.name}
              className="sm:w-96 object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {story.name}
              <div className="badge badge-secondary">{story.university}</div>
            </h2>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">{story.degree}</div>
            </div>
            <p>{story.story}</p>
          </div>
        </div>
      ))}
    </CardContainer>
  );
};

export default page;
