import { Reveal } from "@/components/Reveal";
import { getLang } from "@/lib/i18n";

const data: [string, string, [string, string][]] = ["Important Information", "Medical Disclaimer", [["Not Emergency Care", "Severe infection, black tissue, fever, spreading redness, severe pain, or a rapidly worsening wound requires urgent medical care."], ["General Information Only", "Website content is educational and does not constitute individual diagnosis or treatment advice."], ["Verification", "Medical titles, licenses, hospital privileges, services, and availability must be verified before public launch."], ["Outcomes", "No medical or surgical outcome can be guaranteed."]]];

export default async function Page({params}:{params:Promise<{lang:string}>}){
 const {lang:raw}=await params; getLang(raw);
 return <>
  <section className="pageHero"><Reveal><p className="eyebrow">{data[0]}</p><h1>{data[1]}</h1></Reveal></section>
  <section className="section"><div className="cards">{data[2].map(([h,p]:[string,string])=><Reveal className="card" key={h}><h3>{h}</h3><p>{p}</p></Reveal>)}</div></section>
 </>;
}
