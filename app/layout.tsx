import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "New Ankle Dubai", template: "%s | New Ankle Dubai" },
  description: "Advanced diabetic foot, limb salvage, reconstruction, and foot-ankle surgery in Dubai.",
  metadataBase: new URL("https://newankledubai.com"),
  openGraph: { title: "New Ankle Dubai", description: "World-class foot and ankle surgical expertise is coming soon to Dubai.", url: "https://newankledubai.com", siteName: "New Ankle Dubai", type: "website" },
};

export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html><body>{children}</body></html>;
}
