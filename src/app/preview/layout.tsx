export default function PreviewLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <main className="min-h-screen flex flex-col relative w-full">
      <div className="fixed left-0 top-0 -z-10 h-full w-full"><div className="absolute inset-0 h-full   w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div></div>
      {children}</main>
  }