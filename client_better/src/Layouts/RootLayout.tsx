import { ModeToggle } from '../components/theme/mode-toggle'
import { Toaster } from '../components/ui/toaster'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen">
      <Toaster />
      <div className="absolute right-4 bottom-4">
        <ModeToggle />
      </div>
      {children}
    </div>
  )
}
