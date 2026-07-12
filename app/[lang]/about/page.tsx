import { Reveal } from "@/components/Reveal";
import { getLang } from "@/lib/i18n";

const data = ["About New Ankle Dubai", "A Center of Excellence for Complex Foot & Ankle Care", [["Our Mission", "Preserving mobility, protecting limbs, and restoring quality of life through advanced specialist care."], ["Our Model", "International surgical expertise, careful clinical judgment, multidisciplinary coordination, and premium private-care experience."], ["Who We Serve", "Patients with diabetic foot complications, non-healing wounds, infection, ischemia, deformity, trauma, failed surgery, or complex reconstruction needs."]]];

export default async function Page({params}:{params:Promise<{lang:string}>}){
 const {lang:raw}=await params; getLang(raw);
 return <>
  <section className="pageHero"><Reveal><p className="eyebrow">{data[0]}</p><h1>{data[1]}</h1></Reveal></section>
  <section className="section"><div className="cards">{data[2].map(([h,p]:[string,string])=><Reveal className="card" key={h}><h3>{h}</h3><p>{p}</p></Reveal>)}</div></section>
 </>;
}
