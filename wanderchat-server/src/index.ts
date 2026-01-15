import { serve } from '@hono/node-server'
import { serveStatic } from '@hono/node-server/serve-static'
import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { z } from 'zod'
import { zodTextFormat } from 'openai/helpers/zod'
import { openai, MODEL } from './openai.js'

const app = new Hono()

app.use('/api/*', cors({
  origin: (origin) => origin ?? '*',
  allowMethods: ['GET', 'POST', 'OPTIONS'],
  allowHeaders: ['Content-Type', 'Authorization']
}))

const ItinSchema = z.object({
  summary: z.string(),
  days: z.array(z.object({
    title: z.string(),
    items: z.array(z.object({
      time: z.string(),
      name: z.string(),
      note: z.string().optional().nullable()
    }))
  }))
})

app.post('/api/plan', async (c) => {
  const body = await c.req.json()
  const dest = body.dest ?? 'Lisbon'
  const days = Number(body.days ?? 3)

  const system = 'You are a concise travel planner.'
  const user = `Create a ${days}-day itinerary for ${dest} focusing on food and views. Group by day and include 3-5 items per day with short notes.`

  const resp = await openai.responses.parse({
    model: MODEL,
    input: [
      { role: 'system', content: system },
      { role: 'user', content: user }
    ],
    text: { format: zodTextFormat(ItinSchema, 'itinerary') }
  })

  return c.json(resp.output_parsed)
})

// Serve static files from the client build
app.use('/*', serveStatic({ root: './public' }))

// Fallback to index.html for client-side routing
app.get('*', serveStatic({ path: './public/index.html' }))

serve({
  fetch: app.fetch,
  port: Number(process.env.PORT) || 3000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})
