import { useEffect, useState } from "react";
import Header from "../components/layout/Header";
import EventCard from "../components/EventCard";
import Footer from "../components/layout/Footer";

export default function Events(event) {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    // 載入 events.json
    fetch("http://localhost:5000/api/events")
      .then((res) => {
        console.log("events API status:", res.status);
        if (!res.ok) throw new Error("events API res failed");
        // console.log(res.json())
        return res.json();
      })

      .then((data) => {
        console.log("events API data:", data);
        if (Array.isArray(data)) {
          setEvents(data);
        } else {
          console.error("events API data is not Array");
        }
      })
      .catch((err) => {
        console.error("events API req failed");
      });
  }, []);

  const eventCardElement = events.map((event) => {
    // console.log(event.image)
    return <EventCard key={event.id} event={event} />;
  });

  return (
    <div className="events container">
      <Header />
      <div className="event sm-container-space lg:lg-container-space">
        <h2 className="text-right text-white">EVENTS</h2>
        <hr className="border-normal" />
        <div className="event-block-group flex flex-col gap-5 my-5 justify-between">
          <div className="my-12">{eventCardElement}</div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
