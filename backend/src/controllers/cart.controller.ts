import { Request, Response } from 'express';

export const getCart = async (req: Request, res: Response) => {
  res.json({ message: 'getCart' });
};

export const addItem = async (req: Request, res: Response) => {
  res.json({ message: 'addItem' });
};

export const updateItem = async (req: Request, res: Response) => {
  res.json({ message: 'updateItem' });
};

export const removeItem = async (req: Request, res: Response) => {
  res.json({ message: 'removeItem' });
};
