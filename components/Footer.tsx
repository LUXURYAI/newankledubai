import Link from "next/link";
import type { Lang } from "@/lib/content";
import { getContent } from "@/lib/i18n";

export default function Footer({lang}:{lang:Lang}){
  const t=getContent(lang);
  return <footer className="footer">
    <div><div className="brandMark">NAD</div><p>{t.footer}</p></div>
    <div><strong>Quick Links</strong><Link href={`/${lang}/about/`}>{t.nav.about}</Link><Link href={`/${lang}/medical-director/`}>{t.nav.director}</Link><Link href={`/${lang}/contact/`}>{t.nav.contact}</Link></div>
    <div><strong>Legal</strong><Link href={`/${lang}/privacy/`}>Privacy</Link><Link href={`/${lang}/terms/`}>Terms</Link><Link href={`/${lang}/cookies/`}>Cookies</Link><Link href={`/${lang}/medical-disclaimer/`}>Medical Disclaimer</Link></div>
    <div className="footerBottom">© 2026 New Ankle Dubai · newankledubai.com</div>
  </footer>
}
