import Link from 'next/link';
import {nav,t,copy} from '@/lib/site-data';
import {ui,tx} from '@/lib/content';
import type {Lang} from '@/lib/i18n';
import LangSwitcher from './LangSwitcher';
export default function Header({lang}:{lang:Lang}){return <header className="site-header"><div className="container header-inner">
<Link className="brand" href={`/${lang}/`}><span className="brand-box">NAD</span><span><b>New Ankle Dubai</b><small>{tx(ui.siteTagline,lang)}</small></span></Link>
<nav className="desktop-nav">{nav.map(n=><Link key={n.href} href={`/${lang}/${n.href}/`}>{t(n.label,lang)}</Link>)}</nav>
<div className="header-actions"><LangSwitcher lang={lang}/><Link className="btn btn-small" href={`/${lang}/book/`}>{copy[lang].book}</Link></div>
<details className="mobile-menu"><summary aria-label="Menu"><span></span><span></span><span></span></summary><div className="mobile-panel">{nav.map(n=><Link key={n.href} href={`/${lang}/${n.href}/`}>{t(n.label,lang)}</Link>)}<LangSwitcher lang={lang}/><Link className="btn" href={`/${lang}/book/`}>{copy[lang].book}</Link></div></details>
</div></header>}
