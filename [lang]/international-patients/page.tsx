import { Reveal } from "@/components/Reveal";
import { getLang } from "@/lib/i18n";

const data: [string, string, [string, string][]] = ["International Patients", "Advanced Specialist Care in Dubai", [["Remote Case Preparation", "Submit medical reports, imaging, laboratory results, medication lists, operative notes, and relevant photographs."], ["Treatment Coordination", "Planning of consultations, investigations, admission, surgery, and expected length of stay where applicable."], ["Follow-Up Planning", "Clear discharge instructions and coordination after the patient returns home."], ["Second Opinion", "Specialist review for proposed amputation, complex reconstruction, non-healing wounds, or failed prior surgery."]]];

export default async function Page({params}:{params:Promise<{lang:string}>}){
 const {lang:raw}=await params; getLang(raw);
 return <>
  <section className="pageHero"><Reveal><p className="eyebrow">{data[0]}</p><h1>{data[1]}</h1></Reveal></section>
  <section className="section"><div className="cards">{data[2].map(([h,p]:[string,string])=><Reveal className="card" key={h}><h3>{h}</h3><p>{p}</p></Reveal>)}</div></section>
 </>;
}
