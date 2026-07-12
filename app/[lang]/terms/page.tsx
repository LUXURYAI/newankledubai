import { Reveal } from "@/components/Reveal";
import { getLang } from "@/lib/i18n";

const data = ["Legal", "Terms & Conditions", [["Website Use", "The website provides general information and does not replace diagnosis, examination, or emergency care."], ["No Guarantee", "Submitting a form does not guarantee an appointment, treatment, surgery, or outcome."], ["Final Review", "This draft must be reviewed under UAE law before launch."]]];

export default async function Page({params}:{params:Promise<{lang:string}>}){
 const {lang:raw}=await params; getLang(raw);
 return <>
  <section className="pageHero"><Reveal><p className="eyebrow">{data[0]}</p><h1>{data[1]}</h1></Reveal></section>
  <section className="section"><div className="cards">{data[2].map(([h,p]:[string,string])=><Reveal className="card" key={h}><h3>{h}</h3><p>{p}</p></Reveal>)}</div></section>
 </>;
}
