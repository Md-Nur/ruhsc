import CardContainer from "@/components/CardContainer";

const alumniProfile = [
  {
    name: "John Doe",
    batch: "2015-2019",
    degree: "B.Tech",
    branch: "CSE",
    company: "Google",
    designation: "Software Engineer",
    location: "Bangalore",
    imgUrl: "https://via.placeholder.com/150",
  },
  {
    name: "Bipin Kumar",
    batch: "2016-2020",
    degree: "B.Tech",
    branch: "CSE",
    company: "Microsoft",
    designation: "Software Engineer",
    location: "Hyderabad",
    imgUrl: "https://via.placeholder.com/150",
  },
  {
    name: "Jawad Ahmed",
    batch: "2017-2021",
    degree: "B.Sc",
    branch: "Physics",
    company: "NASA",
    designation: "Astronaut",
    location: "USA",
    imgUrl: "https://via.placeholder.com/150",
  },
  {
    name: "Sneha Kumari",
    batch: "2018-2022",
    degree: "B.E",
    branch: "EEE",
    company: "Tata Power",
    designation: "Electrical Engineer",
    location: "Bangalore",
    imgUrl: "https://via.placeholder.com/150",
  },
  {
    name: "Rahul Singh",
    batch: "2019-2023",
    degree: "B.Sc",
    branch: "EEE",
    company: "Tesla",
    designation: "Electrical Engineer",
    location: "USA",
    imgUrl: "https://via.placeholder.com/150",
  },
  {
    name: "Sneha Kumari",
    batch: "2018-2022",
    degree: "B.Tech",
    branch: "CSE",
    company: "Amazon",
    designation: "Software Engineer",
    location: "Bangalore",
    imgUrl: "https://via.placeholder.com/150",
  },
  {
    name: "Rahul Singh",
    batch: "2019-2023",
    degree: "B.Tech",
    branch: "MSE",
    company: "Microsoft",
    designation: "Software Engineer",
    location: "USA",
    imgUrl: "https://via.placeholder.com/150",
  },
  {
    name: "Sneha Kumari",
    batch: "2018-2022",
    degree: "B.Tech",
    branch: "CSE",
    company: "Amazon",
    designation: "Software Engineer",
    location: "Bangalore",
    imgUrl: "https://via.placeholder.com/150",
  },
  {
    name: "Rahul Singh",
    batch: "2019-2023",
    degree: "B.Tech",
    branch: "CSE",
    company: "Facebook",
    designation: "Software Engineer",
    location: "USA",
    imgUrl: "https://via.placeholder.com/150",
  },
  {
    name: "Sneha Kumari",
    batch: "2018-2022",
    degree: "B.Tech",
    branch: "CSE",
    company: "Amazon",
    designation: "Software Engineer",
    location: "Bangalore",
    imgUrl: "https://via.placeholder.com/150",
  },
  {
    name: "Rahul Singh",
    batch: "2019-2023",
    degree: "B.A",
    branch: "English",
    company: "Google",
    designation: "Content Writer",
    location: "USA",
    imgUrl: "https://via.placeholder.com/150",
  },
];

const page = () => {
  return (
    <CardContainer title="Alumni Profile">
      {alumniProfile.map((profile, index) => (
        <div key={index} className="card bg-base-300">
          <img src={profile.imgUrl} alt={profile.name} />
          <div className="card-content p-2">
            <h3 className="text-center text-2xl font-bold">{profile.name}</h3>
            <p className="">{profile.batch}</p>
            <p>
              {profile.degree} in {profile.branch}
            </p>
            <p>{profile.company}</p>
            <p>{profile.designation}</p>
            <p>{profile.location}</p>
          </div>
        </div>
      ))}
    </CardContainer>
  );
};

export default page;
