import { Reveal } from "@/components/Reveal";
import { getLang } from "@/lib/i18n";

const data: [string, string, [string, string][]] = ["Legal", "Privacy Policy", [["Information We Collect", "Contact details, appointment requests, submitted medical information, website usage data, and communications."], ["How Information May Be Used", "To respond to inquiries, coordinate appointments, support patient communication, and meet legal obligations."], ["Final Review", "This draft must be reviewed by UAE legal and healthcare compliance professionals before launch."]]];

export default async function Page({params}:{params:Promise<{lang:string}>}){
 const {lang:raw}=await params; getLang(raw);
 return <>
  <section className="pageHero"><Reveal><p className="eyebrow">{data[0]}</p><h1>{data[1]}</h1></Reveal></section>
  <section className="section"><div className="cards">{data[2].map(([h,p]:[string,string])=><Reveal className="card" key={h}><h3>{h}</h3><p>{p}</p></Reveal>)}</div></section>
 </>;
}
