import NavBar from "@/components/NavBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid grid-cols-1 gap-4 w-full h-full">
      <div>
        <NavBar />
      </div>
      <main>
        {children}
      </main>
    </div>
  );
}
