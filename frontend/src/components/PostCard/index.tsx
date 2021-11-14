import { useState, useContext } from 'react';
import { FiEdit, FiTrash } from 'react-icons/fi';

import './styles.css';
import { PostContext } from '../../contexts/PostContext';
import { IPost } from '../../interfaces';
import { EditPostCard } from '../EditPostCard';

interface PostCardProps {
  post: IPost;
}

export const PostCard = ({ post }: PostCardProps) => {
  const { deletePost } = useContext(PostContext);
  const [isEditing, setIsEditing] = useState(false);

  function handleDelete() {
    deletePost(post._id);
  }

  function toggleEditing() {
    setIsEditing(!isEditing);
  }

  return !isEditing ? (
    <section key={post._id} className='post-card'>
      <header className='post-header'>
        <h1>{post.title}</h1>
      </header>
      <div className='post-content-container'>
        <p>{post.content}</p>
      </div>
      <footer className='post-footer'>
        <p>Author: {post.author}</p>
        <div className='actions'>
          <button className='edit-button' onClick={toggleEditing}>
            {' '}
            <FiEdit /> Edit
          </button>
          <button className='delete-button' onClick={handleDelete}>
            {' '}
            <FiTrash /> Delete
          </button>
        </div>
      </footer>
    </section>
  ) : (
    <EditPostCard data={post} toggleEditing={toggleEditing} />
  );
};
