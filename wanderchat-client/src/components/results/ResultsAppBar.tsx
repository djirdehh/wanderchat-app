import { AppBar, AppBarSection, AppBarSpacer, Breadcrumb } from '@progress/kendo-react-layout'

interface ResultsAppBarProps {
  destination: string
  onBack: () => void
}

export default function ResultsAppBar({ destination, onBack }: ResultsAppBarProps) {
  const breadcrumbItems = [
    { id: 'home', text: 'Home' },
    { id: 'destination', text: destination }
  ]

  const handleItemSelect = (event: { id?: string }) => {
    if (event.id === 'home') {
      onBack()
    }
  }

  return (
    <AppBar themeColor="inherit">
      <AppBarSection className="k-flex-basis-0 k-flex-grow">
        <Breadcrumb data={breadcrumbItems} onItemSelect={handleItemSelect} />
      </AppBarSection>
      <AppBarSpacer />
      <AppBarSection className="k-flex-basis-0 k-flex-grow k-justify-content-end">
        <span
          className="k-font-size-md k-font-weight-bold"
          style={{ fontFamily: "'Permanent Marker', cursive" }}
        >
          WanderChat
        </span>
      </AppBarSection>
    </AppBar>
  )
}
