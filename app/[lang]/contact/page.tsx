import { Reveal } from "@/components/Reveal";
import { getLang } from "@/lib/i18n";

const data = ["Contact & Priority Access", "Join the Dubai Appointment Priority List", [["Phone", "To be confirmed"], ["WhatsApp", "To be confirmed"], ["Email", "To be confirmed"], ["Dubai Location", "Facility and operating hospital details will be announced after formal confirmation."]]];

export default async function Page({params}:{params:Promise<{lang:string}>}){
 const {lang:raw}=await params; getLang(raw);
 return <>
  <section className="pageHero"><Reveal><p className="eyebrow">{data[0]}</p><h1>{data[1]}</h1></Reveal></section>
  <section className="section"><div className="cards">{data[2].map(([h,p]:[string,string])=><Reveal className="card" key={h}><h3>{h}</h3><p>{p}</p></Reveal>)}</div></section>
 </>;
}
