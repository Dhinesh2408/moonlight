import "./globals.css";

export const metadata = {
  title: "Moonlight Makeover",
  description: "Glow with grace under every light",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-purple font-sans min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
