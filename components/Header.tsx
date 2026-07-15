import Link from "next/link";
import { nav, t, copy } from "@/lib/site-data";
import type { Lang } from "@/lib/i18n";

export default function Header({lang}:{lang:Lang}){
  return <header className="site-header"><div className="container header-inner">
    <Link className="brand" href={`/${lang}/`}><span className="brand-box">NAD</span><span><b>New Ankle Dubai</b><small>{lang==='ru'?'Центр экспертного уровня':lang==='ar'?'مركز خبرة متخصصة':'Center of Excellence'}</small></span></Link>
    <nav className="desktop-nav">{nav.map(n=><Link key={n.href} href={`/${lang}/${n.href}/`}>{t(n.label,lang)}</Link>)}</nav>
    <div className="header-actions"><div className="langs">{(['en','ru','ar'] as Lang[]).map(l=><Link className={l===lang?'active':''} key={l} href={`/${l}/`}>{l.toUpperCase()}</Link>)}</div><Link className="btn btn-small" href={`/${lang}/book/`}>{copy[lang].book}</Link></div>
  </div></header>
}
