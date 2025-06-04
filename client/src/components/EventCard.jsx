export default function EventCard (image, title, date, tags) {
  return (
      <div className=" text-white">
        <div><img src={image} alt={title} /></div>
        <span>{date}</span>
        <span>{title}</span>
        <span>{tags}</span>
        <a href="">Ticket &gt;</a>
      </div>
  
  )
}