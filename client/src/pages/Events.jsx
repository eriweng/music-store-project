import { useEffect, useState } from "react";

export default function Events() {
  // build the data first!
  // => where should we put it in?
  const [events, setEvents] = useState([])
  // => how could we get the data? 

  useEffect(() => {
    // ask for API
    fetch('http://localhost:5000/api/events')

      .then(res => {
        // 先確認有無接上線？ any response? if not throw an Error
        console.log("API status", res.status)
        if (!res.ok) throw new Error("API 回傳錯誤")
          return res.json()
      })
      // 回傳的資料叫 data, check the data is an Array or not?
      .then(data => {
        if (Array.isArray(data)) {
           // if it's an Array, put them in to Albums
           setEvents(data) 
        } else {
          //if it's not
          console.error("❌ API 資料不是陣列：", data)
        }
      })
      .catch (err =>
         console.error("❌ API 請求錯誤：", err)
      )
  })

  return (
    <div>
      <h2>活動清單</h2>
      {events.length === 0 ? (
        <p>載入中...</p>
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
          {events.map(event => (
            <div key={event.id} style={{ border: '1px solid #ccc', padding: '1rem' }}>
              <img src={event.image} alt={event.title} style={{ width: '100%' }} />
              <h3>{event.title}</h3>
              <p>{event.date}</p>
              <p>{event.venue}</p>
              <small>#{event.tags[0]}, #{event.tags[1]}</small>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}