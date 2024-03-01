import Layout from './Layout'
import { ThemeProvider } from './components/theme/theme-provider'
import AppRoutes from './pages/AppRoutes'


export default function App() {
  return (
    <ThemeProvider storageKey="vite-ui-theme">
      <Layout>
        <AppRoutes />
      </Layout>
    </ThemeProvider>
  )
}
