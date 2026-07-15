import Reveal from './Reveal';
import type {Lang} from '@/lib/i18n';
const items={
 en:[['operation-team.jpg','Specialist surgical team'],['ankle-reconstruction.jpg','Ankle reconstruction'],['minimally-invasive.jpg','Minimally invasive surgery'],['forefoot-surgery.jpg','Forefoot surgery']],
 ru:[['operation-team.jpg','Специализированная хирургическая команда'],['ankle-reconstruction.jpg','Реконструкция голеностопа'],['minimally-invasive.jpg','Минимально инвазивная хирургия'],['forefoot-surgery.jpg','Хирургия переднего отдела стопы']],
 ar:[['operation-team.jpg','فريق جراحي متخصص'],['ankle-reconstruction.jpg','إعادة بناء الكاحل'],['minimally-invasive.jpg','جراحة طفيفة التوغل'],['forefoot-surgery.jpg','جراحة مقدمة القدم']]
} as const;
export default function OperationGallery({lang}:{lang:Lang}){
 const heading=lang==='ru'?'Хирургическая экспертиза':lang==='ar'?'الخبرة الجراحية':'Surgical Expertise';
 const text=lang==='ru'?'Иллюстративная галерея направлений хирургии. Клинические изображения пациентов публикуются только с письменного согласия.':lang==='ar'?'معرض توضيحي لمجالات الجراحة. لا تُنشر صور المرضى السريرية إلا بموافقة خطية.':'An illustrative gallery of surgical pathways. Patient clinical imagery is published only with written consent.';
 return <section className="section operation-section"><div className="container"><Reveal><div className="section-heading"><span className="eyebrow">{heading}</span><h2>{lang==='ru'?'Современная операционная среда и точная техника':lang==='ar'?'بيئة جراحية حديثة وتقنيات دقيقة':'Modern Theatre Environment. Precise Technique.'}</h2><p>{text}</p></div></Reveal><div className="operation-grid">{items[lang].map(([img,title],i)=><Reveal key={img} delay={i*.08}><figure className="operation-card"><img src={`/images/${img}`} alt={title}/><figcaption>{title}</figcaption></figure></Reveal>)}</div></div></section>
}
