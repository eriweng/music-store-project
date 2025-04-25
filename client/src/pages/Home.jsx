import { Link } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

export default function Home() {

  console.log({Headers})
  return (
    <>
      <div className='home container'>
      <Header/>
      
      {/* main */}
      {/* music block */}
      <div>
        <Link to="/music">
          <button>Music & Vinyl</button>
        </Link>
        </div>
        <div>
        {/* events block */}
        <Link to="/events">
          <button>Events</button>
        </Link>
        </div>
        {/* subscribe form */}
        <Footer/>

      </div>
    </>
  );
}
