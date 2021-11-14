import { createContext, ReactNode, useEffect, useState } from 'react';

import { IPost, NewPost } from '../interfaces';
import { api } from '../services/api';

interface PostContextData {
  posts: IPost[];
  newPost: (post: NewPost) => void;
  editPost: (post: IPost) => void;
  deletePost: (id: string) => void;
}

export const PostContext = createContext<PostContextData>(
  {} as PostContextData
);

export const PostProvider = ({ children }: { children: ReactNode }) => {
  const [posts, setPosts] = useState<IPost[]>([]);

  function newPost({ title, content, author }: NewPost) {
    api.post('/posts', { title, content, author });
  }

  function editPost(updatedPost: IPost) {
    api
      .put(`/posts/${updatedPost._id}`, updatedPost)
      .then(() => {
        setPosts(
          posts.map((post) =>
            post._id === updatedPost._id ? updatedPost : post
          )
        );
      })
      .catch(() => {
        alert('Erro ao atualizar post');
      });
  }

  function deletePost(id: string) {
    api
      .delete(`/posts/${id}`)
      .then(() => {
        setPosts([...posts.filter((post) => post._id !== id)]);
      })
      .catch(() => {
        alert('Erro ao deletar post');
      });
  }

  useEffect(() => {
    api.get('posts').then((response) => {
      setPosts(response.data);
    });
  }, []);

  return (
    <PostContext.Provider value={{ posts, newPost, editPost, deletePost }}>
      {children}
    </PostContext.Provider>
  );
};
