import { useContext, useState } from 'react';
import { FiSave } from 'react-icons/fi';

import './styles.css';
import { PostContext } from '../../contexts/PostContext';
import { useHistory } from 'react-router-dom';

export const NewPost = () => {
  const history = useHistory();
  const { newPost } = useContext(PostContext);

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');

  function handleSave() {
    newPost({ title, content, author });
    history.push('/');
  }

  return (
    <div className='new-post-container'>
      <section className='post-card'>
        <header className='post-header'>
          <input
            value={title}
            placeholder='Title'
            onChange={(e) => setTitle(e.target.value)}
          />
        </header>
        <div className='post-content-container'>
          <textarea
            value={content}
            placeholder='Content'
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <footer className='post-footer'>
          <p>
            Author:
            <input value={author} onChange={(e) => setAuthor(e.target.value)} />
          </p>
          <div className='actions'>
            <button className='edit-button' onClick={handleSave}>
              <FiSave /> Send
            </button>
          </div>
        </footer>
      </section>
    </div>
  );
};
