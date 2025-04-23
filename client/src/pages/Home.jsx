import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h1>RanVin</h1>
      <p></p>

      <div>
        <Link to="/music">
          <button>Music & Vinyl</button>
        </Link>
        <Link to="/events">
          <button>Events</button>
        </Link>
      </div>
    </div>
  );
}
