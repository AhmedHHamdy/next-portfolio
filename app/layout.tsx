import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster"
import Footer from "@/components/sections/footer";
import { NavHeader } from "@/components/sections/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: 'Ahmed Hamdy',
    default: 'Ahmed Hamdy - Software Engineer & Web Developer.',
  },
  description:"I’m Ahmed, a software engineer and web developer. I'm passionate about beautiful, interactive experiences.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <body className={inter.className}>
        <ThemeProvider 
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative min-h-screen bg-black text-white z-0">
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
              <div id="stars" className="absolute top-0 left-0 w-full h-full"></div>
              <div id="stars2" className="absolute top-0 left-0 w-full h-full"></div>
              <div id="stars3" className="absolute top-0 left-0 w-full h-full"></div>
            </div>
            <NavHeader />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
