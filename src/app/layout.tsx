import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import WelcomeModal from "./components/WelcomeModal";
import { CartProvider } from "./context/CartContext";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "GadgetWorld | Premium Watches & Sunglasses",
  description: "Minimalist, trendy, fashion-forward.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen antialiased`} style={{ backgroundColor: 'var(--color-bg)', color: 'var(--color-text)' }}>
        <CartProvider>
          <Navbar />
          <WelcomeModal />
          <main className="pt-20">
            {children}
          </main>
        </CartProvider>
      </body>
    </html>
  );
}
