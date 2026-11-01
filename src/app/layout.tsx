import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { portfolioData } from "@/data/portfolio";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${portfolioData.personal.name} | ${portfolioData.personal.title}`,
  description: portfolioData.personal.shortBio,
  keywords: [
    "Full-Stack Developer",
    "Software Engineer",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "Java",
    "PHP",
    "MySQL",
    "Cybersecurity",
    portfolioData.personal.name,
  ],
  authors: [{ name: portfolioData.personal.name }],
  creator: portfolioData.personal.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://github.com/rashidali0711",
    title: `${portfolioData.personal.name} | ${portfolioData.personal.title}`,
    description: portfolioData.personal.shortBio,
    siteName: `${portfolioData.personal.name} Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${portfolioData.personal.name} | ${portfolioData.personal.title}`,
    description: portfolioData.personal.shortBio,
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#09090b",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('portfolio-theme');
                  var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
                  var isDark = saved ? saved === 'dark' : prefersDark;
                  if (isDark) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-white dark:bg-[#09090b] text-slate-900 dark:text-neutral-100 min-h-screen flex flex-col transition-colors duration-300 selection:bg-indigo-500/30 selection:text-indigo-600 dark:selection:text-indigo-200`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
