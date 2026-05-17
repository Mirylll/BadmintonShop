import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import routes from './routes'

export function createApp() {
  const app = express()

  app.use(cors({ origin: process.env.CORS_ORIGIN || '*', credentials: true }))
  app.use(helmet())
  app.use(morgan('dev'))
  app.use(express.json())

  app.get('/api/health', (_req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() })
  })

  app.use('/api/v1', routes)

  return app
}

const PORT = process.env.PORT || 8000

if (!process.env.VERCEL) {
  const app = createApp()
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
  })
}
