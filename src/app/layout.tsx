import { Providers } from "./providers";
import Header from "@/components/header/Header";
import "./styles/globals.css";
import Footer from "@/components/footer/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url("/background.jpg")`,
        }}
        className="min-h-screen flex flex-col"
      >
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
