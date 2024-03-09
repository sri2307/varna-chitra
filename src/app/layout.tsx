import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { cn } from "@/lib/utils";

const quickSand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable:'--font-quick-sand'
});

export const metadata: Metadata = {
  title: "Varna Chitra - The Colorful Image Transformer",
  description:
    "Varna Chitra is an AI-powered image modification tool that specializes in transforming and enhancing images with vibrant colors. Whether you're looking to alter backgrounds, adjust color palettes, or add artistic flair to your images, Varna Chitra offers a range of features to bring your vision to life. With its intuitive interface and powerful algorithms, Varna Chitra empowers users to create visually stunning images with ease. Unlock your creativity and explore the endless possibilities of image transformation with Varna Chitra today!",
  keywords:
    "Varna Chitra, image modification, AI, color transformation, background removal, color enhancement, artistic effects, vibrant colors, creative editing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={cn('font-quickSand antialiased',quickSand.variable)}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
