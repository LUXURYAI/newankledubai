import Header from './Header'; import Footer from './Footer'; import type {Lang} from '@/lib/i18n';
export default function PageShell({lang,children}:{lang:Lang,children:React.ReactNode}){return <div dir={lang==='ar'?'rtl':'ltr'}><Header lang={lang}/>{children}<Footer lang={lang}/></div>}
