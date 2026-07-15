'use client';
import Link from "next/link";
import {useState} from 'react';
import { nav, t, copy } from "@/lib/site-data";
import type { Lang } from "@/lib/i18n";
import Logo from './Logo';

export default function Header({lang}:{lang:Lang}){
  const [open,setOpen]=useState(false);
  return <header className="site-header"><div className="container header-inner">
    <Link className="brand" href={`/${lang}/`} onClick={()=>setOpen(false)}><Logo/><span className="brand-copy"><b>New Ankle Dubai</b><small>{lang==='ru'?'Передовая хирургия стопы и голеностопа':lang==='ar'?'رعاية متقدمة للقدم والكاحل':'Advanced Foot & Ankle Care'}</small></span></Link>
    <nav className="desktop-nav" aria-label="Primary navigation">{nav.map(n=><Link key={n.href} href={`/${lang}/${n.href}/`}>{t(n.label,lang)}</Link>)}</nav>
    <div className="header-actions"><div className="langs">{(['en','ru','ar'] as Lang[]).map(l=><Link className={l===lang?'active':''} key={l} href={`/${l}/`}>{l.toUpperCase()}</Link>)}</div><Link className="btn btn-small header-book" href={`/${lang}/book/`}>{copy[lang].book}</Link><button className="menu-toggle" type="button" aria-label="Menu" aria-expanded={open} onClick={()=>setOpen(!open)}><span/><span/><span/></button></div>
  </div>{open&&<div className="mobile-menu"><div className="container"><nav>{nav.map(n=><Link onClick={()=>setOpen(false)} key={n.href} href={`/${lang}/${n.href}/`}>{t(n.label,lang)}</Link>)}</nav><div className="mobile-menu-bottom"><div className="langs mobile-langs">{(['en','ru','ar'] as Lang[]).map(l=><Link className={l===lang?'active':''} key={l} href={`/${l}/`}>{l.toUpperCase()}</Link>)}</div><Link className="btn" href={`/${lang}/book/`}>{copy[lang].book}</Link></div></div></div>}</header>
}
