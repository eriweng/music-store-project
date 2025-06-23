export default function EventCard({ event }) {
  return (
    <>
      <div className="w-full h-full lg:h-[200px] inline-flex lg:flex-row-reverse gap-3 items-center text-white cursor-pointer lg:hover:bg-white lg:hover:text-black lg:hover:font-black lg:hover:py-4 lg:hover:pl-4">
        <div className="event-img aspect-square w-[120px] lg:w-[200px] lg:float-start lg:ml-2">
          <img
            className="object-cover w-full h-full"
            src={event.image}
            alt={event.title}
          />
        </div>
        <div className="eventBoard-info inline-flex flex-col self-stretch items-start justify-between text-wrap lg:my-7 lg:mr-auto lg:flex-1">
          <div className="eventBoard-title-w-tags-outside flex flex-col gap-5 self-stretch justify-start items-start">
            <div className=" eventBoard-title-w-tags-inside flex flex-col justify-center">
              <span>{event.title}</span>
              <span>{event.tags.join(", ")}</span>
            </div>
          </div>

          <div className="eventBoard-date flex flex-col self-stretch justify-star">
            <span>{event.date}</span>
          </div>
        </div>
        <div className="eventBoard-ticket flex w-fit p-4 ml-auto lg:mr-auto  self-stretch items-center word-wrap transition duration-300 ease-in transform hover:bg-white hover:text-black hover:font-bold cursor-pointer lg:hidden">
          <a className="whitespace-nowrap" href="">
            Ticket &gt;
          </a>
        </div>
      </div>
      <hr className="my-6 border-t-normal" />
    </>
  );
}
