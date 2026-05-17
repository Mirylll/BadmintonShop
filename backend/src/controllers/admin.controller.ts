import { Request, Response } from 'express';

export const getDashboard = async (req: Request, res: Response) => {
  res.json({ message: 'getDashboard' });
};

export const getAiConfig = async (req: Request, res: Response) => {
  res.json({ message: 'getAiConfig' });
};

export const updateAiConfig = async (req: Request, res: Response) => {
  res.json({ message: 'updateAiConfig' });
};
