import Link from "next/link";

export default function RootPage() {
  return (
    <main style={{
      minHeight: "100vh",
      display: "grid",
      placeItems: "center",
      background: "#071a22",
      color: "#ffffff",
      fontFamily: "Arial, sans-serif",
      textAlign: "center",
      padding: "32px"
    }}>
      <div>
        <h1 style={{fontFamily: "Georgia, serif", fontSize: "48px", marginBottom: "12px"}}>
          New Ankle Dubai
        </h1>
        <p style={{opacity: 0.72, marginBottom: "28px"}}>
          Select your language
        </p>
        <div style={{display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap"}}>
          <Link href="/en/" style={{padding: "14px 22px", background: "#c9a765", color: "#071a22", textDecoration: "none"}}>English</Link>
          <Link href="/ru/" style={{padding: "14px 22px", border: "1px solid #c9a765", color: "#ffffff", textDecoration: "none"}}>Русский</Link>
          <Link href="/ar/" style={{padding: "14px 22px", border: "1px solid #c9a765", color: "#ffffff", textDecoration: "none"}}>العربية</Link>
        </div>
      </div>
    </main>
  );
}
