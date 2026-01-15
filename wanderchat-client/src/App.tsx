import { useState } from 'react'
import Welcome from './components/welcome/Welcome'
import Results from './components/results/Results'

type Itinerary = {
  summary: string
  days: {
    title: string
    items: {
      time: string
      name: string
      note?: string | null
    }[]
  }[]
}

function App() {
  const [dest, setDest] = useState('Paris')
  const [, setDays] = useState(3)
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<Itinerary | null>(null)

  const handlePlan = async (destination: string, numDays: number) => {
    setDest(destination)
    setDays(numDays)
    setLoading(true)
    setResult(null)

    try {
      const response = await fetch('/api/plan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ dest: destination, days: numDays })
      })

      const data = await response.json()
      setResult(data)
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleBack = () => {
    setResult(null)
    setLoading(false)
  }

  if (loading || result) {
    return (
      <Results
        itinerary={result}
        destination={dest}
        loading={loading}
        onBack={handleBack}
      />
    )
  }

  return <Welcome onDestinationSelect={handlePlan} />
}

export default App
