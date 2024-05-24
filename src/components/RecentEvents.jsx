import Link from "next/link";
import CardContainer from "./CardContainer";

const events = [
  {
    _id: "1",
    title: "Eager to Learn: A Virtual Event for Students",
    date: "2021-09-01",
    description: "This is an upcoming event",
    location: "Online",
    imgUrl:
      "https://res.cloudinary.com/dxouxwdor/image/upload/v1716579367/ruhsc-web/nwr2wxaqc9ene9fu2d4a.png",
  },
  {
    _id: "2",
    title: "Eager to Learn: A Virtual Event for Students",
    date: "2021-09-01",
    description: "This is an upcoming event",
    location: "Online",
    imgUrl:
      "https://res.cloudinary.com/dxouxwdor/image/upload/v1716579367/ruhsc-web/nwr2wxaqc9ene9fu2d4a.png",
  },
  {
    _id: "3",
    title: "Eager to Learn: A Virtual Event for Students",
    date: "2021-09-01",
    description: "This is an upcoming event",
    location: "Online",
    imgUrl:
      "https://res.cloudinary.com/dxouxwdor/image/upload/v1716579367/ruhsc-web/nwr2wxaqc9ene9fu2d4a.png",
  },
];

const RecentEvents = () => {
  return (
    <section className="w-full flex items-center justify-center flex-col">
      <CardContainer title="Recent Events">
        {events.map((event) => (
          <div className="card bg-base-100 shadow-xl" key={event._id}>
            <figure>
              <img src={event.imgUrl} alt={event.title} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{event.title}</h2>
              <p>{event.location}</p>
              <div className="card-actions justify-end">
                <Link
                  href={`/past-events/${event._id}`}
                  className="btn btn-primary"
                >
                  View
                </Link>
              </div>
            </div>
          </div>
        ))}
      </CardContainer>
      <Link href="/past-events" className="btn btn-secondary my-5">
        View More Events
      </Link>
    </section>
  );
};

export default RecentEvents;
