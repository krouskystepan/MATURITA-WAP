import { ModeToggle } from './components/theme/mode-toggle'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="absolute right-4 bottom-4">
        <ModeToggle />
      </div>

      {children}
    </>
  )
}
