import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Kathy Whitehead | Children's Author",
    template: "%s | Kathy Whitehead, Children's Author",
  },
  description:
    "Kathy Whitehead is an award-winning children's author and former teacher from Texas. Her books celebrate folk art, culture, and family — perfect for classrooms and young readers.",
  keywords: [
    "Kathy Whitehead",
    "children's author",
    "children's books",
    "Art From Her Heart",
    "Clementine Hunter",
    "Looking for Uncle Louie",
    "school visits",
    "Texas author",
    "picture books",
    "folk art books for kids",
  ],
  authors: [{ name: "Kathy Whitehead" }],
  creator: "Kathy Whitehead",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kathywhitehead.com",
    siteName: "Kathy Whitehead Children's Author",
    title: "Kathy Whitehead | Children's Author",
    description:
      "Award-winning children's books celebrating folk art, culture, and family by former teacher and author Kathy Whitehead.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kathy Whitehead | Children's Author",
    description:
      "Award-winning children's books celebrating folk art, culture, and family.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
