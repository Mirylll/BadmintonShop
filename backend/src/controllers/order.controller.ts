import { Request, Response } from 'express';

export const getOrders = async (req: Request, res: Response) => {
  res.json({ message: 'getOrders' });
};

export const getOrder = async (req: Request, res: Response) => {
  res.json({ message: 'getOrder' });
};

export const createOrder = async (req: Request, res: Response) => {
  res.json({ message: 'createOrder' });
};

export const cancelOrder = async (req: Request, res: Response) => {
  res.json({ message: 'cancelOrder' });
};
