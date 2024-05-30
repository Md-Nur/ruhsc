import CardContainer from "./CardContainer";

const sponsors = [
  {
    _id: "1",
    logoImg:
      "https://futurestartup.b-cdn.net/wp-content/uploads/2016/08/Samsung-logo-2015-Nobg.png",
  },
  {
    _id: "2",
    logoImg:
      "https://asset.brandfetch.io/idQ4a1iiRd/id79qFON1l.jpeg",
  },
  {
    _id: "3",
    logoImg:
      "https://d1yjjnpx0p53s8.cloudfront.net/bme_logo_sq.jpg",
  },
];

const Sponsors = () => {
  return (
    <CardContainer title="We are connected with">
      {sponsors.map((sponsor) => (
        <figure className="p-3 flex items-center justify-center" key={sponsor._id}>
          <img src={sponsor.logoImg} alt={sponsor._id} className="rounded " />
        </figure>
      ))}
    </CardContainer>
  );
};

export default Sponsors;
