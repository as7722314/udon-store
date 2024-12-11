import DefaultLayout from "@/components/layouts/default";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <DefaultLayout content={children}></DefaultLayout>
  );
}
