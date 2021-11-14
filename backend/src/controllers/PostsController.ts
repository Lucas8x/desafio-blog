import { Request, Response } from 'express';
import * as Yup from 'yup';

import { Post } from '../models/Post';

export default {
  async index(req: Request, res: Response) {
    const posts = await Post.find().sort({ createdAt: -1 });
    return res.json(posts);
  },

  async show(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const post = await Post.findById(id);

      if (!post) {
        return res.status(404).json({ error: 'Esse post não existe.' });
      }

      return res.json(post);
    } catch (error) {
      return res.status(500).json({ error: 'ID do post inválido.' });
    }
  },

  async create(req: Request, res: Response) {
    const { title, content, author } = req.body;

    const PostSchema = Yup.object().shape({
      title: Yup.string().required('Titulo obrigatório'),
      content: Yup.string().required('O conteudo é obrigatório'),
      author: Yup.string().required('O autor é obrigatório'),
    });

    PostSchema.validate(
      { title, content, author },
      { abortEarly: false }
    ).catch((err) => {
      return err && res.status(400).json({ errors: err.errors });
    });

    const post = await Post.create({ title, content, author });

    return res.status(201).json(post);
  },

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const post = await Post.findById(id);

    if (!post) {
      return res.status(404).json({ error: 'Esse post não existe.' });
    }

    const { title, content, author } = req.body;
    await Post.findByIdAndUpdate(id, { title, content, author });
    return res.json({ message: 'Post atualizado com sucesso' });
  },

  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await Post.findByIdAndDelete(id);
      return res.status(200).json({ message: 'Post deletado com sucesso.' });
    } catch (error) {
      return res.status(500).json({
        message: 'Não foi possivel deletar o post.',
        error: error,
      });
    }
  },
};
