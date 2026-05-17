import { Request, Response } from 'express';

export const getProducts = async (req: Request, res: Response) => {
  res.json({ message: 'getProducts' });
};

export const getProduct = async (req: Request, res: Response) => {
  res.json({ message: 'getProduct' });
};

export const createProduct = async (req: Request, res: Response) => {
  res.json({ message: 'createProduct' });
};

export const updateProduct = async (req: Request, res: Response) => {
  res.json({ message: 'updateProduct' });
};

export const deleteProduct = async (req: Request, res: Response) => {
  res.json({ message: 'deleteProduct' });
};
