import Header from "@/components/header/Header";
import "./styles/globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="tw">
        <body>
          <Header />
          <main>{children}</main>
        </body>
      </html>
    </>
  );
}
