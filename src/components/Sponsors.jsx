import CardContainer from "./CardContainer";

const sponsors = [
  {
    _id: "1",
    logoImg:
      "https://www.logotypes101.com/logos/968/EB18661F12551319F1857C8AB597F58F/bangladesh_nazrul_sena.png",
  },
  {
    _id: "2",
    logoImg:
      "https://www.logotypes101.com/logos/302/A27E5B4EF779020C77CD3CF4658F8B72/chevron.png",
  },
  {
    _id: "3",
    logoImg:
      "https://www.logotypes101.com/logos/97/EF8A3E56F8F88AF49C9F5E25B668319C/rfl.png",
  },
];

const Sponsors = () => {
  return (
    <CardContainer title="We are connected with">
      {sponsors.map((sponsor) => (
        <figure className="p-3" key={sponsor._id}>
          <img src={sponsor.logoImg} alt={sponsor._id} className="rounded" />
        </figure>
      ))}
    </CardContainer>
  );
};

export default Sponsors;
