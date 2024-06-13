import Hero from "@/components/ui/Hero";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col items-center bg-zinc-900">
      <Hero />
      <div className="">{children}</div>
    </div>
  );
}
