import Navbar from '@/components/shared/Navbar'
import React from 'react'

export default function ViewLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <section className="flex-1 flex items-center justify-center">
        <div className="text-center space-y-2">{children}</div>
      </section>
    </div>
  )
}
