import { languages, isLang } from '@/lib/i18n';
export function generateStaticParams(){return languages.map(lang=>({lang}))}
export default async function LangLayout({children,params}:{children:React.ReactNode,params:Promise<{lang:string}>}){const {lang}=await params;if(!isLang(lang)) return null;return children}
