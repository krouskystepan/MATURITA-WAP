import Navbar from '@/components/shared/Navbar'

export default function CenterLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <section className="flex-1 h-screen grid place-items-center text-3xl font-bold">
        <div className="text-center space-y-2">{children}</div>
      </section>
    </div>
  )
}
