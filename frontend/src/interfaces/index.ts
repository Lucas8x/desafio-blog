export interface IPost {
  _id: string;
  title: string;
  content: string;
  author: string;
}

export interface NewPost extends Omit<IPost, '_id'> {}
