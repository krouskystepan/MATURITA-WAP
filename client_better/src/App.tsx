import { RootLayout } from './Layouts'
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
// 65e28f82f66b5ea7568f3598