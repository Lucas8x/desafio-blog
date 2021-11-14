import { useContext, useState } from 'react';
import { FiEdit } from 'react-icons/fi';

import './styles.css';
import { PostContext } from '../../contexts/PostContext';
import { IPost } from '../../interfaces';

interface EditPostCardProps {
  data: IPost;
  toggleEditing: () => void;
}

export const EditPostCard = ({ data, toggleEditing }: EditPostCardProps) => {
  const { editPost } = useContext(PostContext);

  const [title, setTitle] = useState(data.title);
  const [content, setContent] = useState(data.content);
  const [author, setAuthor] = useState(data.author);

  function handleSave() {
    editPost({ _id: data._id, title, content, author });
    toggleEditing();
  }

  return (
    <section key={data._id} className='post-card'>
      <header className='post-header'>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
      </header>
      <div className='post-content-container'>
        <textarea
          value={content}
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
            <FiEdit /> Save
          </button>
        </div>
      </footer>
    </section>
  );
};
