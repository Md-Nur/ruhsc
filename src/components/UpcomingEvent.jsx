import Image from "next/image";
import Link from "next/link";

const event = {
  title: "Eager to Learn: A Virtual Event for Students",
  date: "2021-09-01",
  description: "This is an upcoming event",
  location: "Online",
  imgUrl:
    "https://res.cloudinary.com/dxouxwdor/image/upload/v1716579367/ruhsc-web/nwr2wxaqc9ene9fu2d4a.png",
};
const UpcomingEvent = () => {
  return (
    <section className="p-5 md:p-10 flex justify-center items-center flex-col">
      <h2 className="text-xl md:text-3xl text-center font-bold my-5">
        Our Upcoming Event
      </h2>
      <p className="text-center text-xl"> {event.title}</p>
      <Link href="/upcomming-event">
        <Image
          className="my-5 rounded"
          src={event.imgUrl}
          alt={event.title}
          height={1000}
          width={1000}
        />
      </Link>
      <Link href="/past-events" className="btn btn-secondary">
        View Other Events
      </Link>
    </section>
  );
};

export default UpcomingEvent;
