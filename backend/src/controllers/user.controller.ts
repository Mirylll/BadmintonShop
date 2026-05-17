import { Request, Response } from 'express';

export const getProfile = async (req: Request, res: Response) => {
  res.json({ message: 'getProfile' });
};

export const updateProfile = async (req: Request, res: Response) => {
  res.json({ message: 'updateProfile' });
};

export const getUsers = async (req: Request, res: Response) => {
  res.json({ message: 'getUsers' });
};

export const getUser = async (req: Request, res: Response) => {
  res.json({ message: 'getUser' });
};

export const updateUser = async (req: Request, res: Response) => {
  res.json({ message: 'updateUser' });
};

export const deleteUser = async (req: Request, res: Response) => {
  res.json({ message: 'deleteUser' });
};
