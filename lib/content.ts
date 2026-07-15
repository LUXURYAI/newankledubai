import type { Lang } from './i18n';

export type Localized = Record<Lang, string>;
export const L = (en:string, ru:string, ar:string):Localized => ({en,ru,ar});
export const tx = (v:Localized, lang:Lang) => v[lang];

export const ui = {
  siteTagline:L('Foot & Ankle Center of Excellence','Центр экспертной хирургии стопы и голеностопа','مركز التميز لجراحة القدم والكاحل'),
  book:L('Book Consultation','Записаться на консультацию','احجز استشارة'),
  learn:L('Learn more','Подробнее','اعرف المزيد'),
  request:L('Request a Case Review','Запросить разбор случая','اطلب مراجعة الحالة'),
  explore:L('Explore','Разделы','استكشف'),
  contact:L('Contact','Контакты','تواصل معنا'),
  international:L('International Patients','Международные пациенты','المرضى الدوليون'),
  location:L('Dubai, United Arab Emirates','Дубай, Объединённые Арабские Эмираты','دبي، الإمارات العربية المتحدة'),
  disclaimer:L(
    'New Ankle Dubai is under development. Website information is educational and does not replace an examination, diagnosis or treatment plan from a licensed clinician.',
    'New Ankle Dubai находится на этапе запуска. Информация на сайте носит образовательный характер и не заменяет осмотр, диагностику и план лечения лицензированного врача.',
    'مركز New Ankle Dubai قيد الإطلاق. المعلومات الواردة في الموقع تعليمية ولا تغني عن الفحص والتشخيص وخطة العلاج من طبيب مرخص.'
  ),
  rights:L('All rights reserved.','Все права защищены.','جميع الحقوق محفوظة.'),
};

export const pageCopy = {
  about:{
    eyebrow:L('ABOUT NEW ANKLE DUBAI','О NEW ANKLE DUBAI','عن NEW ANKLE DUBAI'),
    title:L('A Specialized Destination for Foot, Ankle & Limb Preservation Care','Специализированный центр лечения стопы, голеностопа и сохранения конечности','وجهة متخصصة لعلاج القدم والكاحل والحفاظ على الأطراف'),
    lead:L('A focused model of care combining advanced assessment, surgery, recovery planning and international patient coordination in Dubai.','Целевая модель помощи, объединяющая современную диагностику, хирургию, восстановление и сопровождение международных пациентов в Дубае.','نموذج رعاية متخصص يجمع بين التقييم المتقدم والجراحة والتعافي وتنسيق علاج المرضى الدوليين في دبي.'),
    focusTitle:L('One center. One clinical focus.','Один центр. Один клинический фокус.','مركز واحد. تركيز سريري واحد.'),
    p1:L('New Ankle Dubai is being developed as a specialist center for advanced foot and ankle care, including complex reconstruction, total ankle replacement, diabetic foot disease, trauma, sports injuries and limb salvage.','New Ankle Dubai создаётся как специализированный центр современной хирургии стопы и голеностопа: сложной реконструкции, эндопротезирования, лечения диабетической стопы, травм, спортивных повреждений и сохранения конечности.','يتم تطوير New Ankle Dubai كمركز متخصص للعناية المتقدمة بالقدم والكاحل، بما في ذلك إعادة البناء المعقدة واستبدال مفصل الكاحل والقدم السكري والإصابات الرياضية وإنقاذ الأطراف.'),
    p2:L('The model connects assessment, treatment planning, surgery, rehabilitation and long-term follow-up around the patient’s complete journey.','Модель объединяет обследование, планирование лечения, операцию, реабилитацию и долгосрочное наблюдение в едином маршруте пациента.','يربط النموذج بين التقييم وخطة العلاج والجراحة والتأهيل والمتابعة طويلة الأمد ضمن رحلة متكاملة للمريض.'),
    cards:[
      [L('Focused Expertise','Узкая специализация','خبرة متخصصة'),L('A center designed specifically around the foot, ankle and lower extremity.','Центр, созданный специально для заболеваний стопы, голеностопа и нижней конечности.','مركز مصمم خصيصاً لحالات القدم والكاحل والطرف السفلي.')],
      [L('Multidisciplinary Thinking','Междисциплинарный подход','تفكير متعدد التخصصات'),L('Coordination across surgery, wound care, vascular assessment, diagnostics and rehabilitation.','Координация хирургии, лечения ран, сосудистой диагностики, визуализации и реабилитации.','تنسيق بين الجراحة وعلاج الجروح والتقييم الوعائي والتشخيص والتأهيل.')],
      [L('International Access','Доступ для международных пациентов','وصول دولي'),L('Remote case review and coordinated care for patients travelling to Dubai.','Дистанционный разбор случая и организация лечения для пациентов, приезжающих в Дубай.','مراجعة الحالة عن بُعد وتنسيق العلاج للمرضى القادمين إلى دبي.')],
      [L('Patient-Centered Planning','Планирование вокруг пациента','تخطيط يركز على المريض'),L('Treatment aligned with function, lifestyle, medical risk and long-term goals.','Лечение с учётом функции, образа жизни, медицинских рисков и долгосрочных целей.','علاج يتوافق مع الوظيفة ونمط الحياة والمخاطر الطبية والأهداف طويلة الأمد.')],
    ]
  },
  international:{
    eyebrow:L('INTERNATIONAL PATIENTS','МЕЖДУНАРОДНЫЕ ПАЦИЕНТЫ','المرضى الدوليون'),
    title:L('Specialist Foot & Ankle Care in Dubai','Экспертное лечение стопы и голеностопа в Дубае','رعاية متخصصة للقدم والكاحل في دبي'),
    lead:L('A coordinated pathway for patients seeking a second opinion, complex reconstruction or surgery away from home.','Организованный маршрут для пациентов, которым требуется второе мнение, сложная реконструкция или операция за пределами своей страны.','مسار منسق للمرضى الباحثين عن رأي ثانٍ أو إعادة بناء معقدة أو جراحة خارج بلدهم.'),
    supportTitle:L('Support before, during and after your visit','Сопровождение до, во время и после поездки','دعم قبل الزيارة وأثناءها وبعدها'),
    cards:[
      [L('Remote Case Review','Дистанционный разбор случая','مراجعة الحالة عن بُعد'),L('Secure review of reports, X-rays, MRI or CT before travel.','Предварительный разбор заключений, рентгена, МРТ или КТ до поездки.','مراجعة آمنة للتقارير والأشعة والرنين أو التصوير المقطعي قبل السفر.')],
      [L('Treatment Plan & Estimate','План лечения и расчёт','خطة العلاج والتكلفة التقديرية'),L('A clear proposed pathway, expected timeline and preliminary cost guidance.','Предварительный маршрут лечения, сроки и ориентировочный расчёт расходов.','مسار علاجي واضح وجدول زمني وإرشادات أولية للتكلفة.')],
      [L('Travel Coordination','Организация поездки','تنسيق السفر'),L('Support with appointment scheduling, airport transfer, hotel options and local logistics.','Помощь с записью, трансфером из аэропорта, вариантами проживания и местной логистикой.','دعم في المواعيد والنقل من المطار وخيارات الفندق والخدمات اللوجستية المحلية.')],
      [L('Interpreter Support','Языковая поддержка','دعم الترجمة'),L('Coordination of language assistance when required.','Организация переводчика при необходимости.','تنسيق المساعدة اللغوية عند الحاجة.')],
      [L('Recovery Planning','План восстановления','خطة التعافي'),L('Discharge instructions, rehabilitation milestones and safe return-travel planning.','Рекомендации после выписки, этапы реабилитации и безопасное планирование обратной поездки.','تعليمات الخروج ومراحل التأهيل وتخطيط العودة الآمنة.')],
      [L('Remote Follow-up','Дистанционное наблюдение','متابعة عن بُعد'),L('Post-treatment review coordinated with your local medical team whenever possible.','Послеоперационное наблюдение с возможной координацией с лечащими врачами по месту жительства.','متابعة بعد العلاج بالتنسيق مع الفريق الطبي المحلي كلما أمكن.')],
    ],
    journey:[
      L('Submit your case','Отправьте документы','أرسل حالتك'),L('Medical records review','Разбор медицинских документов','مراجعة السجلات الطبية'),L('Video consultation','Онлайн-консультация','استشارة عبر الفيديو'),L('Personalized treatment plan','Индивидуальный план лечения','خطة علاج شخصية'),L('Travel to Dubai','Поездка в Дубай','السفر إلى دبي'),L('Treatment and recovery','Лечение и восстановление','العلاج والتعافي'),L('Remote follow-up','Дистанционное наблюдение','متابعة عن بُعد')
    ]
  },
  contact:{
    eyebrow:L('CONTACT','КОНТАКТЫ','اتصل بنا'), title:L('Contact New Ankle Dubai','Связаться с New Ankle Dubai','تواصل مع New Ankle Dubai'), lead:L('Request information, submit a case for review or plan an international consultation.','Запросите информацию, отправьте случай на разбор или запланируйте международную консультацию.','اطلب المعلومات أو أرسل حالتك للمراجعة أو خطط لاستشارة دولية.'),
    addressNote:L('The clinic address and opening date will be announced before public launch.','Адрес клиники и дата открытия будут опубликованы до официального запуска.','سيتم الإعلان عن عنوان العيادة وتاريخ الافتتاح قبل الإطلاق الرسمي.'),
    internationalNote:L('Please use the consultation form for international patient enquiries.','Для обращений международных пациентов используйте форму консультации.','يرجى استخدام نموذج الاستشارة لطلبات المرضى الدوليين.'),
  },
  book:{
    eyebrow:L('CONSULTATION REQUEST','ЗАПРОС НА КОНСУЛЬТАЦИЮ','طلب استشارة'), title:L('Request a Specialist Case Review','Запросить экспертный разбор случая','اطلب مراجعة متخصصة لحالتك'), lead:L('Share your contact details and a short clinical summary. Secure medical-file upload will be enabled before public launch.','Укажите контактные данные и кратко опишите медицинскую ситуацию. Безопасная загрузка медицинских файлов будет подключена до официального запуска.','أرسل بيانات الاتصال وملخصاً طبياً قصيراً. سيتم تفعيل رفع الملفات الطبية بشكل آمن قبل الإطلاق الرسمي.'),
    before:L('Before you submit','Перед отправкой','قبل الإرسال'),
    tips:[L('Briefly describe your symptoms and diagnosis','Кратко опишите симптомы и диагноз','صف الأعراض والتشخيص بإيجاز'),L('List previous surgery or treatment','Укажите предыдущие операции и лечение','اذكر العمليات أو العلاجات السابقة'),L('Prepare recent X-ray, MRI, CT and medical reports','Подготовьте свежие рентгеновские снимки, МРТ, КТ и заключения','جهز أحدث الأشعة والرنين والتصوير المقطعي والتقارير الطبية'),L('For diabetic foot concerns, mention wounds, infection and circulation problems','При диабетической стопе укажите наличие ран, инфекции и нарушений кровообращения','في حالات القدم السكري اذكر الجروح والعدوى ومشكلات الدورة الدموية')]
  }
};

export const legalCopy = {
 faq:{title:L('Frequently Asked Questions','Часто задаваемые вопросы','الأسئلة الشائعة'),lead:L('Practical answers about consultations, treatment planning and international care.','Практические ответы о консультациях, планировании лечения и международном сопровождении.','إجابات عملية حول الاستشارات وخطة العلاج ورعاية المرضى الدوليين.')},
 insights:{title:L('Patient Resources & Insights','Материалы для пациентов','موارد ومعلومات للمرضى'),lead:L('Clear, evidence-informed information to help patients understand foot and ankle conditions and treatment options.','Понятная информация, основанная на современных медицинских данных, о заболеваниях и вариантах лечения.','معلومات واضحة مستندة إلى الأدلة لفهم حالات القدم والكاحل وخيارات العلاج.')},
 privacy:{title:L('Privacy Policy','Политика конфиденциальности','سياسة الخصوصية'),lead:L('How website enquiries and personal information are handled.','Как обрабатываются обращения через сайт и персональные данные.','كيفية التعامل مع استفسارات الموقع والمعلومات الشخصية.')},
 terms:{title:L('Terms of Use','Условия использования','شروط الاستخدام'),lead:L('Important terms governing use of this website.','Важные условия использования этого сайта.','شروط مهمة لاستخدام هذا الموقع.')},
 cookies:{title:L('Cookie Policy','Политика файлов cookie','سياسة ملفات تعريف الارتباط'),lead:L('Information about cookies and similar technologies used by this website.','Информация о cookie и аналогичных технологиях, используемых сайтом.','معلومات حول ملفات تعريف الارتباط والتقنيات المشابهة المستخدمة في الموقع.')},
 medical:{title:L('Medical Disclaimer','Медицинское предупреждение','إخلاء المسؤولية الطبية'),lead:L('Website content is educational and is not a substitute for individual medical advice.','Материалы сайта носят информационный характер и не заменяют индивидуальную медицинскую консультацию.','محتوى الموقع تعليمي ولا يُعد بديلاً عن الاستشارة الطبية الفردية.')},
};
