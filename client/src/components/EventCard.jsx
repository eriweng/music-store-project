export default function EventCard({ event }) {
  return (
    <>
      <div className="w-full h-full inline-flex justify-start items-center gap-3 text-white">
        <div className="aspect-square w-[120px]">
          <img
            className="object-cover w-full h-full"
            src={event.image}
            alt={event.title}
          />
        </div>
        <div className="inline-flex flex-col self-stretch items-start justify-between">
          <div className="flex flex-col gap-5 self-stretch justify-start items-start">
            <div className="flex flex-col justify-center color-white font-medium break-words">
              <span>{event.title}</span>
              <span>{event.tags.join(", ")}</span>
            </div>
          </div>

          <div className="flex flex-col self-stretch justify-start break-words text-white">
            <span>{event.date}</span>
          </div>
        </div>
        <div className="flex w-fit p-4 ml-auto self-stretch items-center word-wrap active:bg-white active:text-black active:font-bold cursor-pointer">
          <a className="whitespace-nowrap" href="">
            Ticket &gt;
          </a>
        </div>
      </div>
      <hr className="my-6 border-t-normal" />
    </>
  );
}
