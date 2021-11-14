import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Topbar } from './components/Topbar';
import { PostProvider } from './contexts/PostContext';
import { AppRoutes } from './routes';

export default function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <PostProvider>
          <Topbar />
          <AppRoutes />
        </PostProvider>
      </BrowserRouter>
    </div>
  );
}
