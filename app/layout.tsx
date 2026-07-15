import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://newankledubai.com"),
  title: { default: "New Ankle Dubai | Advanced Foot & Ankle Center", template: "%s | New Ankle Dubai" },
  description: "Advanced foot and ankle surgery, total ankle replacement, diabetic foot care, limb salvage, trauma and reconstruction in Dubai.",
  openGraph: { title: "New Ankle Dubai", description: "World-class foot and ankle care in Dubai.", type: "website", url: "https://newankledubai.com" },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
