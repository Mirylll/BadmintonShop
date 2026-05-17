import { Request, Response } from 'express';

export const register = async (req: Request, res: Response) => {
  res.json({ message: 'register' });
};

export const login = async (req: Request, res: Response) => {
  res.json({ message: 'login' });
};

export const forgotPassword = async (req: Request, res: Response) => {
  res.json({ message: 'forgotPassword' });
};

export const resetPassword = async (req: Request, res: Response) => {
  res.json({ message: 'resetPassword' });
};
