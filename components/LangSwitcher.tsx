'use client';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import type {Lang} from '@/lib/i18n';
export default function LangSwitcher({lang}:{lang:Lang}){
  const path=usePathname();
  const switched=(next:Lang)=>{const parts=path.split('/'); if(parts.length>1) parts[1]=next; return parts.join('/')||`/${next}/`;};
  return <div className="langs">{(['en','ru','ar'] as Lang[]).map(l=><Link aria-label={`Switch language to ${l}`} className={l===lang?'active':''} key={l} href={switched(l)}>{l.toUpperCase()}</Link>)}</div>
}
