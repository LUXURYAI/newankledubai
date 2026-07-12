import { Reveal } from "@/components/Reveal";
import { getLang } from "@/lib/i18n";

const data: [string, string, [string, string][]] = ["Insights", "Knowledge for Better Decisions", [["When a Diabetic Foot Wound Becomes Urgent", "Warning signs that require prompt specialist assessment."], ["Can a Limb Be Saved After Severe Infection?", "Factors that influence the treatment plan and why timing matters."], ["When to Seek Another Surgical Opinion", "Important questions before complex reconstruction or amputation."], ["Why Blood Flow Matters in Wound Healing", "How reduced circulation changes wound and surgical strategy."], ["Early Signs of Charcot Foot", "Why warmth, swelling, and shape change should not be ignored."]]];

export default async function Page({params}:{params:Promise<{lang:string}>}){
 const {lang:raw}=await params; getLang(raw);
 return <>
  <section className="pageHero"><Reveal><p className="eyebrow">{data[0]}</p><h1>{data[1]}</h1></Reveal></section>
  <section className="section"><div className="cards">{data[2].map(([h,p]:[string,string])=><Reveal className="card" key={h}><h3>{h}</h3><p>{p}</p></Reveal>)}</div></section>
 </>;
}
