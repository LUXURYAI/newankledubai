import Link from "next/link";
import Logo from '@/components/Logo';
export default function LanguageGate(){return <main className="language-gate"><div className="gate-card"><Logo/><p className="eyebrow">NEW ANKLE DUBAI</p><h1>Advanced Foot &amp; Ankle Care</h1><p>Select your language</p><div className="language-buttons"><Link href="/en/">English</Link><Link href="/ru/">Русский</Link><Link href="/ar/">العربية</Link></div></div></main>}
