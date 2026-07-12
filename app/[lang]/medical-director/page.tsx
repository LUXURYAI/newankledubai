import { Reveal } from "@/components/Reveal";
import { getLang } from "@/lib/i18n";

const data: [string, string, [string, string][]] = ["Medical Leadership", "Dr. Armen Hagopjanian", [["Clinical Director", "Clinical Director of Diabetic Foot, Limb Salvage & Foot-Ankle Surgery."], ["Education & Training", "Medical education in Armenia, undergraduate study at UCLA, Doctor of Podiatric Medicine training in California, and surgical residency in Orange County."], ["Credentials", "Board-certified in Foot and Ankle Surgery and Reconstructive Rearfoot and Ankle Surgery. Fellow of the American College of Foot and Ankle Surgeons."], ["Leadership", "Former leadership roles in Los Angeles professional and hospital settings. All UAE titles and privileges must be verified before publication."]]];

export default async function Page({params}:{params:Promise<{lang:string}>}){
 const {lang:raw}=await params; getLang(raw);
 return <>
  <section className="pageHero"><Reveal><p className="eyebrow">{data[0]}</p><h1>{data[1]}</h1></Reveal></section>
  <section className="section"><div className="cards">{data[2].map(([h,p]:[string,string])=><Reveal className="card" key={h}><h3>{h}</h3><p>{p}</p></Reveal>)}</div></section>
 </>;
}
