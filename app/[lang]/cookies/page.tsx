import { Reveal } from "@/components/Reveal";
import { getLang } from "@/lib/i18n";

const data = ["Legal", "Cookies Policy", [["Cookie Use", "Cookies may be used for essential functionality, preferences, analytics, and marketing if enabled."], ["Consent", "A compliant consent banner should be configured before analytics or marketing cookies are activated."]]];

export default async function Page({params}:{params:Promise<{lang:string}>}){
 const {lang:raw}=await params; getLang(raw);
 return <>
  <section className="pageHero"><Reveal><p className="eyebrow">{data[0]}</p><h1>{data[1]}</h1></Reveal></section>
  <section className="section"><div className="cards">{data[2].map(([h,p]:[string,string])=><Reveal className="card" key={h}><h3>{h}</h3><p>{p}</p></Reveal>)}</div></section>
 </>;
}
