import express, { type Express, type Request, type Response } from 'express'

import { isEven } from '@avwie/is-even'
import { isOdd } from '@avwie/is-odd'

const app: Express = express()
const port = 8080

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server')
})

app.get('/is-even/:number', (req: Request, res: Response) => {
  const number = parseInt(req.params.number, 10)
  res.send(`${number} is ${isEven(number) ? 'even' : 'odd'}`)
})

app.get('/is-odd/:number', (req: Request, res: Response) => {
  const number = parseInt(req.params.number, 10)
  res.send(`${number} is ${isOdd(number) ? 'odd' : 'even'}`)
})

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
})
