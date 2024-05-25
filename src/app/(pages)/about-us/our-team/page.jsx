import CardContainer from "@/components/CardContainer";

const team = [
  {
    name: "Azmine Tasik",
    position: "President",
    imgUrl: "https://via.placeholder.com/150",
    department: "Management",
  },
  {
    name: "Muhammad Nur",
    position: "IT Operations",
    imgUrl: "https://via.placeholder.com/150",
    department: "CSE",
  },
  {
    name: "Sebabroto Roy Teertha",
    position: "Research Analyst",
    imgUrl: "https://via.placeholder.com/150",
    department: "EEE",
  },
  {
    name: "Dewan Adnan Sami",
    position: "Research Analyst",
    imgUrl: "https://via.placeholder.com/150",
    department: "EEE",
  },
  {
    name: "Tarif Jaman Dhrubo",
    position: "Media Manager",
    imgUrl: "https://via.placeholder.com/150",
    department: "ICE",
  },
];

const page = () => {
  return (
    <CardContainer title="Our Team">
      {team.map((member, i) => (
        <div key={i} className="card bg-base-100 shadow-xl">
          <figure>
            <img src={member.imgUrl} alt={member.name} className="sm:w-96 object-cover" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {member.name}
              <div className="badge badge-secondary">{member.department}</div>
            </h2>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">{member.position}</div>
            </div>
          </div>
        </div>
      ))}
    </CardContainer>
  );
};

export default page;
