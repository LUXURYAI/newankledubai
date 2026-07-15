import type { Lang } from "./i18n";

type LocalText = Record<Lang,string>;
export const t = (v: LocalText, lang: Lang) => v[lang];

export const nav = [
  {href:"about", label:{en:"About",ru:"О центре",ar:"عن المركز"}},
  {href:"medical-director", label:{en:"Medical Director",ru:"Главный врач",ar:"المدير الطبي"}},
  {href:"centers", label:{en:"Centers of Excellence",ru:"Центры экспертизы",ar:"مراكز التميز"}},
  {href:"conditions", label:{en:"Conditions",ru:"Заболевания",ar:"الحالات"}},
  {href:"procedures", label:{en:"Procedures",ru:"Операции",ar:"الإجراءات"}},
  {href:"international-patients", label:{en:"International Patients",ru:"Международные пациенты",ar:"المرضى الدوليون"}},
  {href:"contact", label:{en:"Contact",ru:"Контакты",ar:"اتصل بنا"}},
] as const;

export const centers = [
  {slug:"total-ankle-replacement", icon:"◎", title:{en:"Total Ankle Replacement Center",ru:"Центр эндопротезирования голеностопа",ar:"مركز استبدال مفصل الكاحل"}, text:{en:"Advanced evaluation, joint-preserving options and modern ankle replacement for severe arthritis.",ru:"Современная диагностика, суставосохраняющие методы и эндопротезирование при тяжёлом артрозе.",ar:"تقييم متقدم وخيارات الحفاظ على المفصل واستبدال الكاحل الحديث لحالات التهاب المفاصل الشديدة."}},
  {slug:"diabetic-limb-salvage", icon:"✦", title:{en:"Diabetic Foot & Limb Salvage Center",ru:"Центр диабетической стопы и сохранения конечности",ar:"مركز القدم السكري وإنقاذ الأطراف"}, text:{en:"Coordinated care for ulcers, infection, Charcot foot and complex limb-threatening disease.",ru:"Комплексное лечение язв, инфекций, стопы Шарко и состояний с риском ампутации.",ar:"رعاية متكاملة للقرح والالتهابات وقدم شاركو والحالات المعقدة المهددة للأطراف."}},
  {slug:"reconstruction", icon:"◇", title:{en:"Foot & Ankle Reconstruction Center",ru:"Центр реконструкции стопы и голеностопа",ar:"مركز إعادة بناء القدم والكاحل"}, text:{en:"Personalized reconstruction for deformity, failed surgery, instability and complex loss of function.",ru:"Индивидуальная реконструкция при деформациях, нестабильности и последствиях неудачных операций.",ar:"إعادة بناء مخصصة للتشوهات وعدم الثبات وفشل العمليات والحالات المعقدة لفقدان الوظيفة."}},
  {slug:"trauma", icon:"＋", title:{en:"Foot & Ankle Trauma Center",ru:"Центр травмы стопы и голеностопа",ar:"مركز إصابات القدم والكاحل"}, text:{en:"Specialist treatment for fractures, dislocations, tendon injuries and complex post-traumatic problems.",ru:"Специализированное лечение переломов, вывихов, повреждений сухожилий и последствий травм.",ar:"علاج متخصص للكسور والخلع وإصابات الأوتار والمشكلات المعقدة بعد الصدمات."}},
  {slug:"sports-medicine", icon:"➜", title:{en:"Sports Medicine Center",ru:"Центр спортивной медицины",ar:"مركز الطب الرياضي"}, text:{en:"Return-to-sport pathways for ligament, tendon, cartilage and overuse injuries.",ru:"Возвращение к спорту после повреждений связок, сухожилий, хряща и перегрузочных травм.",ar:"برامج العودة إلى الرياضة لإصابات الأربطة والأوتار والغضاريف والإجهاد المتكرر."}},
  {slug:"international", icon:"◉", title:{en:"International Patient Center",ru:"Центр международных пациентов",ar:"مركز المرضى الدوليين"}, text:{en:"Remote case review, coordinated travel, treatment planning and follow-up for patients worldwide.",ru:"Дистанционный разбор случая, организация поездки, планирование лечения и наблюдение.",ar:"مراجعة الحالة عن بُعد وتنسيق السفر وخطة العلاج والمتابعة للمرضى من جميع أنحاء العالم."}},
] as const;

export const conditions = [
  ["ankle-arthritis","Ankle Arthritis","Артроз голеностопного сустава","التهاب مفصل الكاحل"],
  ["ankle-sprains","Ankle Sprains","Растяжения голеностопа","التواء الكاحل"],
  ["ankle-instability","Ankle Instability","Нестабильность голеностопа","عدم ثبات الكاحل"],
  ["ankle-fractures","Ankle Fractures","Переломы голеностопа","كسور الكاحل"],
  ["achilles-disorders","Achilles Tendon Disorders","Заболевания ахиллова сухожилия","اضطرابات وتر أخيل"],
  ["osteochondral-lesions","Osteochondral Lesions","Остеохондральные повреждения","آفات العظم والغضروف"],
  ["bunions","Bunions (Hallux Valgus)","Вальгусная деформация большого пальца","انحراف إبهام القدم"],
  ["hammertoes","Hammertoes","Молоткообразные пальцы","أصابع القدم المطرقية"],
  ["flat-feet","Flat Feet","Плоскостопие","تسطح القدم"],
  ["high-arches","High Arches","Высокий свод стопы","تقوس القدم العالي"],
  ["plantar-fasciitis","Plantar Fasciitis","Плантарный фасциит","التهاب اللفافة الأخمصية"],
  ["heel-spurs","Heel Spurs","Пяточная шпора","مسمار الكعب"],
  ["mortons-neuroma","Morton's Neuroma","Неврома Мортона","ورم مورتون العصبي"],
  ["metatarsalgia","Metatarsalgia","Метатарзалгия","ألم مشط القدم"],
  ["sports-injuries","Sports Injuries","Спортивные травмы","الإصابات الرياضية"],
  ["stress-fractures","Stress Fractures","Стрессовые переломы","كسور الإجهاد"],
  ["diabetic-foot","Diabetic Foot","Диабетическая стопа","القدم السكري"],
  ["foot-ulcers","Foot Ulcers","Язвы стопы","قرح القدم"],
  ["charcot-foot","Charcot Foot","Стопа Шарко","قدم شاركو"],
  ["foot-infection","Foot Infection","Инфекции стопы","التهابات القدم"],
  ["limb-salvage","Limb Salvage","Сохранение конечности","إنقاذ الأطراف"],
  ["ingrown-toenails","Ingrown Toenails","Вросший ноготь","الأظافر الناشبة"],
  ["toenail-fungus","Toenail Fungus","Грибок ногтей","فطريات الأظافر"],
  ["plantar-warts","Plantar Warts","Подошвенные бородавки","الثآليل الأخمصية"],
  ["corns-calluses","Corns & Calluses","Мозоли и натоптыши","مسامير القدم والكالو"],
  ["brachymetatarsia","Brachymetatarsia","Брахиметатарзия","قصر عظام مشط القدم"],
  ["polydactyly","Polydactyly","Полидактилия","تعدد الأصابع"],
] as const;

export const procedures = [
  ["total-ankle-replacement","Total Ankle Replacement","Эндопротезирование голеностопа","استبدال مفصل الكاحل"],
  ["foot-reconstruction","Foot Reconstruction","Реконструкция стопы","إعادة بناء القدم"],
  ["ankle-reconstruction","Ankle Reconstruction","Реконструкция голеностопа","إعادة بناء الكاحل"],
  ["arthroscopy","Foot & Ankle Arthroscopy","Артроскопия стопы и голеностопа","تنظير القدم والكاحل"],
  ["trauma-surgery","Trauma Surgery","Хирургия травмы","جراحة الإصابات"],
  ["tendon-reconstruction","Tendon Reconstruction","Реконструкция сухожилий","إعادة بناء الأوتار"],
  ["ligament-reconstruction","Ligament Reconstruction","Реконструкция связок","إعادة بناء الأربطة"],
  ["bunion-surgery","Bunion Surgery","Операция при вальгусной деформации","جراحة انحراف إبهام القدم"],
  ["minimally-invasive-surgery","Minimally Invasive Foot Surgery","Минимально инвазивная хирургия стопы","جراحة القدم طفيفة التوغل"],
  ["revision-surgery","Revision Foot & Ankle Surgery","Ревизионная хирургия","جراحة المراجعة للقدم والكاحل"],
  ["limb-salvage-surgery","Limb Salvage Surgery","Хирургия сохранения конечности","جراحة إنقاذ الأطراف"],
  ["diabetic-foot-surgery","Diabetic Foot Surgery","Хирургия диабетической стопы","جراحة القدم السكري"],
] as const;

export const copy = {
  en:{book:"Book Consultation", learn:"Learn more", heroEyebrow:"COMING TO DUBAI", heroTitle:"World-Class Foot & Ankle Surgery. One Specialized Destination.", heroText:"Advanced reconstruction, total ankle replacement, diabetic foot care and limb salvage led by internationally experienced surgical expertise.", urgent:"Severe injury, infection or diabetic foot concern?", urgentText:"Request an expedited specialist review.", director:"Medical Director", why:"Why New Ankle Dubai", path:"Your International Patient Journey", contact:"Request a Consultation", disclaimer:"New Ankle Dubai is under development. Information is educational and does not replace medical advice."},
  ru:{book:"Записаться на консультацию", learn:"Подробнее", heroEyebrow:"СКОРО В ДУБАЕ", heroTitle:"Хирургия стопы и голеностопа мирового уровня. В одном специализированном центре.", heroText:"Современная реконструкция, эндопротезирование голеностопа, лечение диабетической стопы и сохранение конечности под руководством международного эксперта.", urgent:"Тяжёлая травма, инфекция или проблема диабетической стопы?", urgentText:"Запросите ускоренный разбор специалистом.", director:"Главный врач", why:"Почему New Ankle Dubai", path:"Путь международного пациента", contact:"Запросить консультацию", disclaimer:"New Ankle Dubai находится на этапе развития. Информация носит образовательный характер и не заменяет медицинскую консультацию."},
  ar:{book:"احجز استشارة", learn:"اعرف المزيد", heroEyebrow:"قريباً في دبي", heroTitle:"جراحة عالمية للقدم والكاحل. في وجهة متخصصة واحدة.", heroText:"إعادة بناء متقدمة واستبدال مفصل الكاحل ورعاية القدم السكري وإنقاذ الأطراف بقيادة خبرة جراحية دولية.", urgent:"إصابة شديدة أو التهاب أو مشكلة في القدم السكري؟", urgentText:"اطلب مراجعة عاجلة من اختصاصي.", director:"المدير الطبي", why:"لماذا New Ankle Dubai", path:"رحلة المريض الدولي", contact:"اطلب استشارة", disclaimer:"New Ankle Dubai قيد التطوير. المعلومات تعليمية ولا تغني عن الاستشارة الطبية."}
} as const;
