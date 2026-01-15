import 'dotenv/config'
import OpenAI from 'openai'

export const MODEL = 'gpt-4.1-nano'

export const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})
