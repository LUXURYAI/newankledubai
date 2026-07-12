import { Reveal } from "@/components/Reveal";
import { getLang } from "@/lib/i18n";

const data = ["Conditions We Treat", "Complex Lower-Extremity Conditions", [["Diabetic Foot Ulcers", "Open wounds associated with neuropathy, pressure, infection, or reduced circulation."], ["Infected Diabetic Foot", "Urgent assessment for redness, swelling, discharge, odor, fever, or tissue deterioration."], ["Peripheral Arterial Disease", "Reduced blood flow that may impair wound healing and increase limb risk."], ["Chronic Limb-Threatening Ischemia", "Advanced ischemia with rest pain, tissue loss, ulceration, or gangrene."], ["Charcot Foot", "Structural instability and deformity often associated with diabetic neuropathy."], ["Failed Previous Surgery", "Persistent pain, deformity, instability, wound problems, or functional limitation after surgery."]]];

export default async function Page({params}:{params:Promise<{lang:string}>}){
 const {lang:raw}=await params; getLang(raw);
 return <>
  <section className="pageHero"><Reveal><p className="eyebrow">{data[0]}</p><h1>{data[1]}</h1></Reveal></section>
  <section className="section"><div className="cards">{data[2].map(([h,p]:[string,string])=><Reveal className="card" key={h}><h3>{h}</h3><p>{p}</p></Reveal>)}</div></section>
 </>;
}
