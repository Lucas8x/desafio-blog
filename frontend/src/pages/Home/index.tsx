import { useContext } from 'react';

import './styles.css';
import { PostCard } from '../../components/PostCard';
import { PostContext } from '../../contexts/PostContext';

export function Home() {
  const { posts } = useContext(PostContext);

  return (
    <div className='home-container'>
      <section className='post-table-container'>
        {posts.map((post) => (
          <PostCard post={post} />
        ))}
      </section>
    </div>
  );
}
