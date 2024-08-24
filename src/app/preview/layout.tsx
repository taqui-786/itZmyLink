export default function PreviewLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <main className="min-h-screen flex flex-col relative w-full">
      {children}</main>
  }