import { Card, CardHeader, CardBody } from '@progress/kendo-react-layout'
import ResultsAppBar from './ResultsAppBar'
import ResultsSkeleton from './ResultsSkeleton'

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

interface ResultsProps {
  itinerary: Itinerary | null
  destination: string
  loading: boolean
  onBack: () => void
}

export default function Results({ itinerary, destination, loading, onBack }: ResultsProps) {
  if (loading) {
    return (
      <section
        className="k-d-flex k-flex-col"
        style={{
          background: 'linear-gradient(135deg, var(--kendo-color-app-surface) 0%, var(--kendo-color-primary-subtle) 100%)',
          minHeight: '100vh'
        }}
      >
        <ResultsAppBar destination={destination} onBack={onBack} />
        <div className="k-d-flex k-flex-col k-gap-6 k-py-8 k-px-4 k-px-md-8 k-px-lg-12 k-max-w-7xl">
          <ResultsSkeleton />
        </div>
      </section>
    )
  }

  if (!itinerary) {
    return null
  }

  return (
    <section
      className="k-d-flex k-flex-col"
      style={{
        background: 'linear-gradient(135deg, var(--kendo-color-app-surface) 0%, var(--kendo-color-primary-subtle) 100%)',
        minHeight: '100vh'
      }}
    >
      <ResultsAppBar destination={destination} onBack={onBack} />

      <div className="k-d-flex k-flex-col k-gap-6 k-mx-auto k-py-8 k-px-4 k-px-md-8 k-px-lg-12 k-max-w-7xl">
        <Card className="k-rounded-lg">
          <CardHeader>
            <h3 className="k-h3 !k-m-0">Trip Overview</h3>
          </CardHeader>
          <CardBody>
            <div className="k-d-flex k-gap-3 k-align-items-center">
              <div className="k-d-flex k-align-items-center k-justify-content-center k-px-2 k-py-1 k-rounded-md k-flex-none k-bg-primary-subtle k-color-primary k-font-size-sm k-font-weight-semibold">
                {itinerary.days.length}-day itinerary
              </div>
              <p className="k-font-size-lg !k-m-0">{itinerary.summary}</p>
            </div>
          </CardBody>
        </Card>

        <div className="k-d-grid k-grid-cols-1 k-grid-cols-md-2 k-grid-cols-lg-3 k-gap-6 k-justify-items-center">
          {itinerary.days.map((day, index) => (
            <Card key={index} className="k-rounded-lg k-w-full">
              <CardHeader>
                <h4 className="k-h5 !k-m-0">{day.title}</h4>
              </CardHeader>
              <CardBody>
                <div className="k-d-flex k-flex-col k-gap-4">
                  {day.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="k-d-flex k-gap-3 k-align-items-center">
                      <div className="k-d-flex k-align-items-center k-justify-content-center k-px-2 k-py-1 k-rounded-md k-flex-none k-bg-primary-subtle k-color-primary k-font-size-sm k-font-weight-semibold" style={{ width: 80 }}>
                        {item.time}
                      </div>
                      <div className="k-d-flex k-flex-col k-gap-1 k-flex-1">
                        <div className="k-font-weight-bold">{item.name}</div>
                        {item.note && (
                          <div className="k-font-size-sm k-color-subtle">{item.note}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
