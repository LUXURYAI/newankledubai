import { Reveal } from "@/components/Reveal";
import { getLang } from "@/lib/i18n";

const data = ["Centers of Excellence", "Focused Expertise. Coordinated Care.", [["Diabetic Foot Center", "Ulcer, infection, tissue loss, debridement, wound planning, and urgent diabetic foot assessment."], ["Limb Salvage Center", "Ischemia, vascular pathways, multidisciplinary review, and preservation-focused decision-making."], ["Reconstruction Center", "Reconstruction after trauma, infection, deformity, partial amputation, or failed surgery."], ["Second Opinion", "Specialist review before major reconstruction, revision, or proposed amputation."], ["International Patients", "Remote record review, travel coordination, treatment planning, and follow-up."]]];

export default async function Page({params}:{params:Promise<{lang:string}>}){
 const {lang:raw}=await params; getLang(raw);
 return <>
  <section className="pageHero"><Reveal><p className="eyebrow">{data[0]}</p><h1>{data[1]}</h1></Reveal></section>
  <section className="section"><div className="cards">{data[2].map(([h,p]:[string,string])=><Reveal className="card" key={h}><h3>{h}</h3><p>{p}</p></Reveal>)}</div></section>
 </>;
}
