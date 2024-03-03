import { RootLayout } from './layouts'
import { ThemeProvider } from './components/theme/theme-provider'
import Router from './pages/Router'

export default function App() {
  return (
    <ThemeProvider storageKey="vite-ui-theme">
      <RootLayout>
        <Router />
      </RootLayout>
    </ThemeProvider>
  )
}