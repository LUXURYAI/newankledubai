import { Reveal } from "@/components/Reveal";
import { getLang } from "@/lib/i18n";

const data: [string, string, [string, string][]] = ["Frequently Asked Questions", "Clear Answers for Patients and Families", [["What does New Ankle Dubai specialize in?", "Diabetic foot, limb salvage, infection surgery, reconstruction, trauma, revision surgery, and advanced foot-ankle care."], ["When will consultations and surgery begin?", "Official dates will be announced after licensing, facility, scheduling, and regulatory approvals are complete."], ["Can I request a second opinion before amputation?", "Yes. A specialist review may help clarify diagnosis, circulation, infection status, and available options. Emergency treatment must not be delayed."], ["Do you accept insurance?", "Insurance participation will depend on the final facility, insurer network, policy terms, diagnosis, and treatment plan."], ["Can international patients submit records before travel?", "Yes. Medical reports, imaging, laboratory results, operative notes, and photographs may be requested."]]];

export default async function Page({params}:{params:Promise<{lang:string}>}){
 const {lang:raw}=await params; getLang(raw);
 return <>
  <section className="pageHero"><Reveal><p className="eyebrow">{data[0]}</p><h1>{data[1]}</h1></Reveal></section>
  <section className="section"><div className="cards">{data[2].map(([h,p]:[string,string])=><Reveal className="card" key={h}><h3>{h}</h3><p>{p}</p></Reveal>)}</div></section>
 </>;
}
