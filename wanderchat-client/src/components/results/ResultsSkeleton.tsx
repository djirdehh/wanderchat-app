import { Card, CardHeader, CardBody } from '@progress/kendo-react-layout'
import { Skeleton } from '@progress/kendo-react-indicators'

export default function ResultsSkeleton() {
  return (
    <>
      <Card className="k-rounded-lg">
        <CardHeader>
          <h3 className="k-h3 !k-m-0">Preparing your itinerary...</h3>
        </CardHeader>
        <CardBody>
          <p className="k-font-size-lg !k-m-0">
            This will take just under a minute.
          </p>
        </CardBody>
      </Card>

      <div className="k-d-grid k-grid-cols-1 k-grid-cols-md-2 k-grid-cols-lg-3 k-gap-6 k-justify-items-center k-text-center">
        {[1, 2, 3].map((index) => (
          <Card key={index} className="k-rounded-lg k-w-full">
            <CardHeader>
              <Skeleton shape="text" className="k-w-3/4" />
            </CardHeader>
            <CardBody>
              <Skeleton shape="rectangle" style={{ width: '100%', height: 350 }} />
            </CardBody>
          </Card>
        ))}
      </div>
    </>
  )
}
