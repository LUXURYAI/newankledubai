import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { getContent, getLang } from "@/lib/i18n";

export default async function Home({params}:{params:Promise<{lang:string}>}){
 const {lang:raw}=await params; const lang=getLang(raw); const t=getContent(lang);
 return <>
  <section className="hero">
    <div className="heroGlow one"/><div className="heroGlow two"/>
    <Reveal className="heroContent">
      <p className="eyebrow">{t.coming}</p>
      <h1>{t.heroTitle}</h1>
      <p className="lead">{t.heroSubtitle}</p>
      <p className="prestige">{t.prestige}</p>
      <div className="heroBtns"><Link className="btn gold" href={`/${lang}/contact/`}>{t.nav.book}</Link><Link className="btn outline" href={`/${lang}/medical-director/`}>{t.nav.director}</Link></div>
      <div className="trust"><span>Diabetic Foot</span><span>Limb Salvage</span><span>Reconstruction</span><span>EN / AR / RU</span></div>
    </Reveal>
    <div className="portraitHero"><div><span>AH</span><small>Official portrait</small></div></div>
  </section>

  <section className="section split">
   <Reveal><p className="eyebrow">New Ankle Dubai</p><h2>{t.aboutTitle}</h2></Reveal>
   <Reveal><p className="bodyText">{t.aboutText}</p><Link className="textLink" href={`/${lang}/about/`}>Explore the Center →</Link></Reveal>
  </section>

  <section className="section dark">
    <Reveal><p className="eyebrow">Medical Leadership</p><h2>Dr. Armen Hagopjanian</h2><h3 className="goldText">{t.directorTitle}</h3><p className="bodyText light">{t.directorText}</p><Link className="btn gold" href={`/${lang}/medical-director/`}>View Full Profile</Link></Reveal>
  </section>

  <section className="section">
   <Reveal><p className="eyebrow">Centers of Excellence</p><h2>Focused Expertise. Coordinated Care.</h2></Reveal>
   <div className="cards">
    {[
      ["01","Diabetic Foot Center","Specialist pathways for ulcers, infection, tissue loss, and non-healing wounds."],
      ["02","Limb Salvage Center","Coordinated assessment for ischemia, infection, and threatened limb viability."],
      ["03","Reconstruction Center","Complex reconstruction after trauma, infection, deformity, or previous surgery."],
      ["04","Advanced Foot & Ankle Surgery","Specialist surgical care for complex foot and ankle conditions."],
      ["05","Second Opinion","Expert review before major decisions such as complex reconstruction or amputation."],
      ["06","International Patients","Structured support before travel, during treatment, and after returning home."]
    ].map(([n,h,p])=><Reveal className="card" key={n}><span>{n}</span><h3>{h}</h3><p>{p}</p></Reveal>)}
   </div>
  </section>

  <section className="quote"><Reveal><blockquote>“Successful treatment begins with careful diagnosis, thoughtful planning, and specialist expertise.”</blockquote><p>— Dr. Armen Hagopjanian</p></Reveal></section>

  <section className="cta"><Reveal><h2>{t.prestige}</h2><Link className="btn darkBtn" href={`/${lang}/contact/`}>{t.nav.book}</Link></Reveal></section>
 </>;
}
