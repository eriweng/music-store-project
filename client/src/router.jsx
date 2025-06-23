// 控制畫面切換的地方
import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Music from './pages/Music';
import Events from './pages/Events';

export const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/music', element: <Music /> },
  { path: '/events', element: <Events />}
])