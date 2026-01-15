# WanderChat

An AI-powered travel planning application that generates personalized day-by-day itineraries. Built with Hono, React, KendoReact, and OpenAI.

## Links

- **Live App**: [wanderchat-app-production.up.railway.app](https://wanderchat-app-production.up.railway.app/)
- **Source Code**: [github.com/djirdehh/wanderchat-app](https://github.com/djirdehh/wanderchat-app)

## Local Development

### Prerequisites

- Node.js 20+
- OpenAI API key

### Setup

1. Clone the repository and install dependencies:

```bash
cd wanderchat-server
npm install

cd ../wanderchat-client
npm install
```

2. Create a `.env` file in `wanderchat-server/`:

```
OPENAI_API_KEY=your-api-key-here
```

3. Start both servers:

**Backend** (in `wanderchat-server/`):
```bash
npm run dev
```

**Frontend** (in `wanderchat-client/`):
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.
