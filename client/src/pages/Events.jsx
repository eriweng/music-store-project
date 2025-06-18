import { useEffect, useState } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

export default function Events(event) {

  return (
    <div className="events container">
      <Header/>
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
      <Footer/>
    </div>
  )
}