import "./globals.css";

export const metadata = {
  title: "Одил Бегзода — Digital Systems & Automation",
  description: "Портфолио Одил Бегзода: проекты по IT-автоматизации, системным интеграциям и ИИ, разработке, инфраструктуре и Digital.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: "#080e1b",
  colorScheme: "dark light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru" data-theme="dark" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
