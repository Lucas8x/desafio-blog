import { useHistory, useLocation } from 'react-router-dom';

import './styles.css';

export const Topbar = () => {
  const history = useHistory();
  const location = useLocation();
  const currentPath = location.pathname;

  function handleButtonNav() {
    history.push(currentPath !== '/' ? '/' : '/post/new');
  }

  return (
    <header className='topbar-container'>
      <div className='logotipo-container'>
        <p className='logotipo'>Blog</p>
      </div>
      <div>
        <button className='add-post-button' onClick={handleButtonNav}>
          {currentPath !== '/' ? 'Back to Home' : 'Add new post'}
        </button>
      </div>
    </header>
  );
};
