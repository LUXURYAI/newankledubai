"use client";
import Link from "next/link";
import { useState } from "react";
import type { Lang } from "@/lib/content";
import { getContent } from "@/lib/i18n";

export default function Header({lang}:{lang:Lang}){
  const [open,setOpen]=useState(false);
  const t=getContent(lang);
  const n=t.nav;
  const items=[
    ["about",n.about],["medical-director",n.director],["centers",n.centers],
    ["conditions",n.conditions],["international-patients",n.international],
    ["insights",n.insights],["contact",n.contact]
  ];
  return <header className="header">
    <Link href={`/${lang}/`} className="brand"><span className="brandMark">NAD</span><span><strong>New Ankle Dubai</strong><small>{t.brandTag}</small></span></Link>
    <nav className="nav">{items.map(([href,label])=><Link key={href} href={`/${lang}/${href}/`}>{label}</Link>)}</nav>
    <div className="actions">
      <div className="langs">{(["en","ru","ar"] as Lang[]).map(l=><Link className={l===lang?"active":""} key={l} href={`/${l}/`}>{l.toUpperCase()}</Link>)}</div>
      <Link className="btn gold desktopBtn" href={`/${lang}/contact/`}>{n.book}</Link>
      <button className="menu" onClick={()=>setOpen(!open)} aria-label="menu">☰</button>
    </div>
    {open && <div className="mobileNav">{items.map(([href,label])=><Link onClick={()=>setOpen(false)} key={href} href={`/${lang}/${href}/`}>{label}</Link>)}</div>}
  </header>
}
