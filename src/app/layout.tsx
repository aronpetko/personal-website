import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeToggle from "@/components/ThemeToggle";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aron Petkovski",
  description: "Personal website showcasing my work, blog posts, and professional experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
      >
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var stored = localStorage.getItem('theme');
                  var prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
                  var theme = stored === 'light' || stored === 'dark' ? stored : (prefersLight ? 'light' : 'dark');
                  if (theme === 'light') document.documentElement.classList.add('light');
                } catch (e) {}
              })();
            `,
          }}
        />
        <main className="pt-0">
          {children}
        </main>
        <ThemeToggle />
      </body>
    </html>
  );
}
