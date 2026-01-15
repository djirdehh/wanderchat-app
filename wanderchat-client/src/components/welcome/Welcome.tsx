import { useState } from 'react'
import { Button } from '@progress/kendo-react-buttons'
import { AutoComplete, type AutoCompleteChangeEvent } from '@progress/kendo-react-dropdowns'
import { Label } from '@progress/kendo-react-labels'
import { paperPlaneIcon } from '@progress/kendo-svg-icons'

const popularDestinations = [
  'Paris',
  'Tokyo',
  'New York',
  'London',
  'Barcelona',
  'Rome',
  'Dubai',
  'Singapore',
  'Sydney',
  'Maldives',
  'Bali',
  'Iceland',
  'Swiss Alps',
  'Santorini',
  'Amsterdam',
  'Prague',
  'Istanbul',
  'Bangkok',
  'Lisbon',
  'Vienna'
]

const daysOptions = ['1', '2', '3', '4', '5', '6', '7']

interface WelcomeProps {
  onDestinationSelect: (destination: string, days: number) => void
}

export default function Welcome({ onDestinationSelect }: WelcomeProps) {
  const [destination, setDestination] = useState('')
  const [days, setDays] = useState('3')

  const handleSubmit = () => {
    if (destination.trim()) {
      onDestinationSelect(destination, parseInt(days) || 3)
    }
  }

  return (
    <section
      className="k-d-flex k-flex-col k-align-items-center k-justify-content-center k-min-h-screen k-px-4"
      style={{
        background: 'linear-gradient(135deg, var(--kendo-color-app-surface) 0%, var(--kendo-color-primary-subtle) 100%)'
      }}
    >
      <div className="k-d-flex k-flex-col k-align-items-center k-gap-6 k-max-w-lg k-py-8">
        <div className="k-d-flex k-flex-col k-align-items-center k-gap-4 k-text-center">
          <h1
            className="k-h1 !k-m-0"
            style={{ fontFamily: "'Permanent Marker', cursive" }}
          >
            WanderChat
          </h1>
          <p className="k-font-size-lg k-color-subtle !k-m-0">
            Your AI-powered travel planner designed to help you discover amazing destinations
          </p>
        </div>

        <div className="k-d-flex k-flex-col k-w-full k-gap-4">
          <div className="k-d-flex k-flex-col k-flex-md-row k-gap-4 k-w-full">
            <div className="k-d-flex k-flex-col k-gap-2 k-flex-1">
              <Label className="k-font-size-sm k-font-weight-bold">
                Where would you like to go?
              </Label>
              <AutoComplete
                data={popularDestinations}
                value={destination}
                onChange={(e: AutoCompleteChangeEvent) => setDestination(e.value)}
                placeholder="e.g. Paris, Tokyo, Maldives"
              />
            </div>

            <div className="k-d-flex k-flex-col k-gap-2" style={{ width: '120px' }}>
              <Label className="k-font-size-sm k-font-weight-bold">
                Days
              </Label>
              <AutoComplete
                data={daysOptions}
                value={days}
                onChange={(e: AutoCompleteChangeEvent) => setDays(e.value)}
                placeholder="e.g. 3, 5, 7"
              />
            </div>
          </div>

          <Button
            svgIcon={paperPlaneIcon}
            themeColor="primary"
            size="large"
            onClick={handleSubmit}
            disabled={!destination.trim() || !days.trim()}
            className="k-w-full"
          >
            Plan My Trip
          </Button>
        </div>

        <p className="k-font-size-sm k-color-subtle !k-m-0">
          Built with{' '}
          <a
            href="https://www.telerik.com/kendo-react-ui"
            target="_blank"
            rel="noopener noreferrer"
            className="k-color-primary"
          >
            KendoReact
          </a>
        </p>
      </div>
    </section>
  )
}
