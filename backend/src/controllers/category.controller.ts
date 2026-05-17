import { Request, Response } from 'express';

export const getCategories = async (req: Request, res: Response) => {
  res.json({ message: 'getCategories' });
};

export const getCategory = async (req: Request, res: Response) => {
  res.json({ message: 'getCategory' });
};

export const createCategory = async (req: Request, res: Response) => {
  res.json({ message: 'createCategory' });
};

export const updateCategory = async (req: Request, res: Response) => {
  res.json({ message: 'updateCategory' });
};

export const deleteCategory = async (req: Request, res: Response) => {
  res.json({ message: 'deleteCategory' });
};
