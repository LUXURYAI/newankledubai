'use client';
import Link from "next/link";
import {useState} from 'react';
import { nav, t, copy } from "@/lib/site-data";
import type { Lang } from "@/lib/i18n";
import Logo from './Logo';

export default function Header({lang}:{lang:Lang}){
  const [open,setOpen]=useState(false);
  const subtitle=lang==='ru'?'Передовая хирургия стопы и голеностопа':lang==='ar'?'جراحة متقدمة للقدم والكاحل':'Advanced Foot & Ankle Care';
  return <header className="site-header"><div className="container header-inner">
    <Link className="brand" href={`/${lang}/`} onClick={()=>setOpen(false)}><Logo/><span className="brand-copy"><b>New Ankle Dubai</b><small>{subtitle}</small></span></Link>
    <button className="menu-toggle" aria-label="Menu" aria-expanded={open} onClick={()=>setOpen(v=>!v)}><span/><span/><span/></button>
    <nav className={open?'desktop-nav open':'desktop-nav'}>{nav.map(n=><Link key={n.href} href={`/${lang}/${n.href}/`} onClick={()=>setOpen(false)}>{t(n.label,lang)}</Link>)}</nav>
    <div className="header-actions"><div className="langs">{(['en','ru','ar'] as Lang[]).map(l=><Link className={l===lang?'active':''} key={l} href={`/${l}/`}>{l.toUpperCase()}</Link>)}</div><Link className="btn btn-small" href={`/${lang}/book/`}>{copy[lang].book}</Link></div>
  </div></header>
}
