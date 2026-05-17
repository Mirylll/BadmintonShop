import { createApp } from '../src/app';
import serverless from '@vendia/serverless-express';

const app = createApp();

export const handler = serverless({ app });
