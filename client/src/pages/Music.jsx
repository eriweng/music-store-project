// import tools we need here...
import { useEffect, useState } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

export default function Music() {
  // build the data first!
  // => where should we put it in?
  // => how could we get the data? 
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    // fetch 跟 http://localhost:5000/api/albums 要 API
    fetch('http://localhost:5000/api/albums')
    
      .then(res => {
        console.log("🌐 API status:", res.status);
        // 先確認有無接上線？ any response? if not throw an Error
        if (!res.ok) throw new Error("API 回傳錯誤");
        // if it did have, give us res.json()
        return res.json();
      })
      .then(data => {
        console.log("✅ API 回傳資料：", data);
        // 回傳的資料叫 data, check the data is an Array or not?
        if (Array.isArray(data)) {
          // if it's an Array, put them in to Albums
          setAlbums(data);
        } else {
          // if it's not
          console.error("❌ API 資料不是陣列：", data);
        }
      })
      // check this request's statement
      .catch(err => {
        console.error("❌ API 請求錯誤：", err);
      });
  }, []);
  // [] means this function only work on the first time when client asks for

  // return things we want to see on website with the data we've got already
  return (
    <div className='music container'>
      <Header/>
      <h2>專輯清單</h2>
      {albums.length === 0 ? (
        <p>載入中...</p>
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
          {albums.map(album => (
            <div key={album.id} style={{ border: '1px solid #ccc', padding: '1rem' }}>
              <img src={album.coverImage} alt={album.title} style={{ width: '100%' }} />
              <h3>{album.title}</h3>
              <p>{album.artist}</p>
              <small>{album.songs.length} 首歌</small>
            </div>
          ))}
        </div>
      )}
      <Footer/>
    </div>
  );
}

