export const dynamicParams = false;
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getLang, isRtl, supportedLangs } from "@/lib/i18n";

export function generateStaticParams(){ return supportedLangs.map(lang=>({lang})); }

export default async function LangLayout({children,params}:{children:React.ReactNode,params:Promise<{lang:string}>}){
  const {lang:raw}=await params; const lang=getLang(raw);
  return <div dir={isRtl(lang)?"rtl":"ltr"} lang={lang}>
    <Header lang={lang}/>
    <main>{children}</main>
    <Footer lang={lang}/>
  </div>
}
