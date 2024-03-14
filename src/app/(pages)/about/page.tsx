import TimeLine from "@/components/TimeLine";

const About = () => {
  return (
    <>
      <ul className="steps steps-vertical">
        <li className="step step-primary">Register</li>
        <li className="step step-primary">Choose plan</li>
        <li className="step">Purchase</li>
        <li className="step">Receive Product</li>
      </ul>
      <TimeLine />
      <TimeLine />
      <TimeLine />
    </>
  );
};

export default About;
