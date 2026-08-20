(() => {
  'use strict';

  const translations = {
    ar: {
      navProjects:'المشاريع',navSkills:'المهارات',navExperience:'الخبرات',navContact:'تواصل',
      heroEyebrow:'نظم المعلومات · ذكاء اصطناعي · تطوير منتجات',
      heroLead:'خريجة نظم معلومات، ومهتمة بالذكاء الاصطناعي وتطوير المنتجات التقنية. أحب تحويل المشكلات من أفكار إلى حلول عملية، سواء كانت تجربة بحثية، أو ميزة ذكية، أو واجهة متجاوبة، أو نظامًا مترابطًا.',
      viewWork:'استعرض مشاريعي',downloadCv:'تحميل السيرة الذاتية',meta1:'المدينة المنورة، المملكة العربية السعودية',meta2:'أبحث عن فرص في هندسة الذكاء الاصطناعي ونظم المعلومات وتطوير المنتجات',
      noteA1:'حاليًا',noteA2:'ذكاء اصطناعي + بحث',noteB1:'أطوّر',noteB2:'أنظمة ومنتجات ذكية',
      aboutTag:'عني',aboutTitle:'أحب أن أبدأ من المشكلة، وأستمر حتى يتحول الحل إلى شيء عملي ومفيد.',
      aboutText:'علّمتني نظم المعلومات أن أنظر إلى الصورة كاملة: المستخدم، والعمليات، والبيانات، والتقنية، وطريقة تنفيذ الحل. لذلك أحب العمل عند تقاطع الذكاء الاصطناعي والواجهات والاختبار وتحليل الأنظمة، بدل التعامل مع كل جزء بمعزل عن الآخر.',
      gpa:'المعدل من 5.00',students:'طالبًا تم تدريبهم',secondPlace:'مرتان بالمركز الثاني',
      projectsTag:'أعمال مختارة',projectsTitle:'مشاريع شكّلت طريقتي في البناء والتجربة.',projectsIntro:'أبحاث ذكاء اصطناعي، وتقنيات مساندة، وتجربة زائر، ودعم أسري، ومراقبة ذكية، ومراسلات رقمية آمنة.',
      raqKicker:'مشروع التخرج',bestProject:'أفضل مشروع · 2026',raqTitle:'رقيب — منصة ذكية لسلامة واستقلالية كبار السن',raqText:'منصة مساندة لكبار السن تجمع تطبيقات الهاتف مع نماذج الذكاء الاصطناعي وإشارات EEG وأجهزة إنترنت الأشياء ومتابعة مقدم الرعاية، وتشمل اكتشاف السقوط والمشاعر والتذكيرات وتنبيهات الطوارئ والمساعدة في العثور على الأغراض.',watchDemo:'مشاهدة العرض ↗',
      researchKicker:'بحث ذكاء اصطناعي · جامعة الملك خالد',ongoing:'قيد العمل',mirageText:'معيار تجريبي مضبوط يدرس ما إذا كان تكرار محاكاة أحداث بديلة يمكن أن يجعل وكلاء الذكاء الاصطناعي ذوي الذاكرة يسترجعون حدثًا لم يقع، أو ينسبونه إلى تجربة حقيقية، أو يستخدمونه لاحقًا في القرار.',baseScenarios:'سيناريو أساسي',episodes:'حلقة تجريبية',levels:'مستويات تكرار',
      hackathonKicker:'مشروع هاكثون',prototype:'قيد التطوير',wafdTitle:'وَفْد — توأم اصطناعي لتجربة الزائر',wafdText:'توأم اصطناعي لاختبار رحلة الزائر قبل إطلاق الخدمة. تمر شخصيات افتراضية متنوعة عبر الرحلة مع اختلافات في اللغة وإمكانية الوصول والمهارة الرقمية وجودة الاتصال، لكشف نقاط التعطل قبل أن يواجهها الزوار الحقيقيون.',
      productKicker:'منتج مدعوم بالذكاء الاصطناعي',secondPlaceLabel:'المركز الثاني',tibyanTitle:'تبيان — منصة عربية لدعم أسر الأطفال ذوي اضطراب فرط الحركة وتشتت الانتباه',tibyanText:'منصة عربية تجمع التقييم الأولي ومتابعة تقدم الطفل وتنظيم المهام والتذكيرات والمحتوى الموثوق والاستشارات المتخصصة ومساعدًا ذكيًا لدعم الأسرة في المتابعة اليومية.',
      moreWorkKicker:'أنظمة أخرى',duoTitle:'زمام + مرسال',duoText:'مشروعان يركزان على ذكاء العمليات وأمان التواصل الرقمي.',zemamTitle:'زمام — مراقبة ذكية',zemamText:'منصة لإدارة المرافق تعتمد على نطاقات المهام بالموقع الجغرافي والتحقق بالصور ولوحات المتابعة وتحديث حالة المهام تلقائيًا.',zemamAward:'المركز الثاني · مسار المراقبة الذكية',mersalTitle:'مرسال — مراسلات آمنة',mersalText:'مفهوم لمراسلات رقمية سرية يوظف الذكاء الاصطناعي والبلوك تشين والتشفير والتوقيعات الرقمية لتعزيز الخصوصية والأصالة والتصنيف وقابلية التتبع.',mersalType:'أمن معلومات + ذكاء اصطناعي',
      skillsTag:'المهارات',skillsTitle:'المهارات التي أعتمد عليها من الفكرة إلى التنفيذ.',skillsIntro:'أقوى شغلي يكون عند تقاطع الذكاء الاصطناعي وتطوير المنتجات وتحليل الأنظمة والجودة والتقنيات المترابطة.',nodeCore:'نظم المعلومات',nodeAi:'الذكاء الاصطناعي والبيانات',nodeProduct:'المنتج والواجهات',nodeSystems:'الأنظمة والجودة',nodeIot:'الخلفية وإنترنت الأشياء',
      experienceTag:'الخبرات',experienceTitle:'من البحث إلى التدريب وفرق تطوير المنتجات.',basiratkTitle:'تطوير نموذج ذكاء اصطناعي · بصيرتك',basiratkText:'أعمل على نموذج لتحويل الكلام العربي القانوني إلى نص، ويشمل ذلك تجهيز البيانات وتنظيفها، وتغطية المصطلحات القانونية، وتقييم المخرجات، والاختبار، ودعم التكامل مع النظام.',fellowshipTitle:'زميلة بحثية صيفية في الذكاء الاصطناعي · جامعة الملك خالد',fellowshipText:'أعمل على MIRAGE-MEM، وهو معيار تجريبي لدراسة تضخم التخيل ومصدر الذاكرة وموثوقيتها لدى وكلاء الذكاء الاصطناعي ذوي الذاكرة.',trainerTitle:'مدربة تقنية بدوام جزئي · صيف طيبة',trainerText:'درّبت نحو 38 طالبًا وطالبة من عمر 9 إلى 18 سنة على أساسيات الويب وأدوات الذكاء الاصطناعي وتطوير الأفكار والنماذج الأولية وعرض المشاريع بأسلوب يناسب تحديات الهاكثون.',thinksyncTitle:'متدربة تطوير برمجيات · ThinkSync',thinksyncText:'أكملت 180 ساعة في UI/UX وتحليل الأنظمة وتطوير الواجهات وتطبيقات الهاتف وضمان الجودة والتكامل. استخدمت Next.js وFlutter/Dart وGit/GitHub وDocker وPostgreSQL وPrisma وNestJS وSwagger ضمن عمل جماعي قائم على المهام والمراجعات.',hashTitle:'قائدة لجنة العلاقات العامة · نادي هاش بلس',hashText:'قدت التواصل والتنسيق ومتابعة المهام والتوثيق وتفاعل الأعضاء وأنشطة التقدير داخل اللجنة خلال يوليو وأغسطس 2026.',
      proofTag:'محطات وإنجازات',proofTitle:'محطات أعتز بها.',proofIntro:'الجوائز والتدريب والقيادة كانت جزءًا مهمًا من تجربتي وطريقة تطوري ومشاركتي مع الآخرين.',awardCaption:'المركز الثاني · الابتكار الرقمي والذكاء الاصطناعي',awardSub:'البرنامج المهني الصيفي · 2026',trainerCaption:'مدربة برنامج جيل الذكاء الاصطناعي',trainerSub:'نحو 38 طالبًا وطالبة · من 9 إلى 18 سنة',leaderCaption:'قيادة لجنة العلاقات العامة',leaderSub:'نادي هاش بلس · يوليو–أغسطس 2026',
      contactTag:'تواصل',contactKicker:'هل لديك فرصة أو مشروع في الذكاء الاصطناعي أو البيانات أو المنتجات الرقمية أو نظم المعلومات؟',contactLine1:'لنبنِ',contactLine2:'شيئًا له أثر.',contactLocation:'المدينة المنورة، المملكة العربية السعودية',footerText:'فضول في التعلّم، وتفكير منظومي، ودقة في التنفيذ.'
    }
  };

  const english = {};
  document.querySelectorAll('[data-i18n]').forEach(el => {
    english[el.dataset.i18n] = el.textContent.trim();
  });

  const langToggle = document.getElementById('langToggle');
  const brandLink = document.querySelector('.brand');
  const nav = document.querySelector('.nav');
  let currentLang = localStorage.getItem('sahar_portfolio_lang') === 'ar' ? 'ar' : 'en';

  function setLanguage(lang){
    currentLang = lang;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      el.textContent = lang === 'ar' ? (translations.ar[key] || english[key]) : english[key];
    });
    langToggle.textContent = lang === 'ar' ? 'English' : 'العربية';
    langToggle.setAttribute('aria-label', lang === 'ar' ? 'Switch to English' : 'التبديل إلى العربية');
    brandLink.setAttribute('aria-label', lang === 'ar' ? 'العودة إلى بداية موقع سحر سلطان' : 'Sahar Sultan home');
    nav.setAttribute('aria-label', lang === 'ar' ? 'التنقل الرئيسي' : 'Primary navigation');
    localStorage.setItem('sahar_portfolio_lang', lang);
    renderSkill(activeSkill);
  }

  langToggle.addEventListener('click', () => setLanguage(currentLang === 'en' ? 'ar' : 'en'));

  const skillData = {
    en: {
      core:{label:'FOUNDATION',title:'Information Systems',text:'Connecting requirements, users, processes, data, technology, and delivery as one system.',tags:['Requirements Analysis','SDLC','Documentation','Business Thinking','Process Design','Problem Solving'],used:'Applied across Raqeeb, Draia, WAFD, and product work.'},
      ai:{label:'AI + DATA',title:'AI, ML & Analytics',text:'Preparing data, evaluating models, building AI-assisted behavior, and designing controlled research experiments.',tags:['Python','Machine Learning','AI Models','Data Analysis','Power BI','Jupyter','Model Evaluation','AI Agents'],used:'Applied in MIRAGE-MEM, Basiratk, Raqeeb, Tibyan, and smart-city projects.'},
      product:{label:'PRODUCT + FRONTEND',title:'Interfaces people can use',text:'Turning product requirements and designs into responsive, usable interfaces and complete user flows.',tags:['Next.js','TypeScript','Flutter','Dart','React.js','HTML/CSS','Tailwind CSS','Figma','RTL UX'],used:'Applied in Draia, Raqeeb, Tibyan, Boka, and web projects.'},
      systems:{label:'SYSTEMS + QUALITY',title:'Analysis, QA & integration',text:'Breaking systems into testable parts, validating flows, finding integration issues, and documenting decisions clearly.',tags:['QA','API Testing','Swagger','Git/GitHub','Troubleshooting','Responsive QA','User Flows','Documentation'],used:'Applied heavily in Draia, integration work, and full-stack projects.'},
      iot:{label:'BACKEND + IoT',title:'Connected systems',text:'Working with APIs, databases, cloud services, devices, sensors, and the infrastructure that connects them.',tags:['FastAPI','NestJS','PostgreSQL','Firebase','Docker','Redis','Prisma','Raspberry Pi','Arduino','OpenBCI EEG'],used:'Applied in Raqeeb, Draia, IoT training, and smart-system concepts.'}
    },
    ar: {
      core:{label:'الأساس',title:'نظم المعلومات',text:'ربط المتطلبات والمستخدمين والعمليات والبيانات والتقنية والتنفيذ ضمن صورة متكاملة واحدة.',tags:['تحليل المتطلبات','دورة حياة تطوير الأنظمة','التوثيق','فهم الأعمال','تصميم العمليات','حل المشكلات'],used:'طبقتها في رقيب ودرايا ووفد وعدة أعمال مرتبطة بتطوير المنتجات.'},
      ai:{label:'الذكاء الاصطناعي والبيانات',title:'الذكاء الاصطناعي والتعلّم الآلي والتحليل',text:'تجهيز البيانات وتقييم النماذج وبناء سلوك مدعوم بالذكاء الاصطناعي وتصميم تجارب بحثية مضبوطة.',tags:['Python','Machine Learning','AI Models','Data Analysis','Power BI','Jupyter','Model Evaluation','AI Agents'],used:'طبقتها في MIRAGE-MEM وبصيرتك ورقيب وتبيان ومشاريع مرتبطة بالمدن الذكية.'},
      product:{label:'المنتج والواجهات',title:'واجهات واضحة وقابلة للاستخدام',text:'تحويل متطلبات المنتج والتصاميم إلى واجهات متجاوبة وتدفقات استخدام تعمل بشكل متكامل.',tags:['Next.js','TypeScript','Flutter','Dart','React.js','HTML/CSS','Tailwind CSS','Figma','RTL UX'],used:'طبقتها في درايا ورقيب وتبيان وبوكا وعدة مشاريع ويب.'},
      systems:{label:'الأنظمة والجودة',title:'التحليل وضمان الجودة والتكامل',text:'تقسيم الأنظمة إلى أجزاء قابلة للاختبار، والتحقق من تدفقات الاستخدام، واكتشاف مشكلات التكامل، وتوثيق القرارات بوضوح.',tags:['QA','API Testing','Swagger','Git/GitHub','Troubleshooting','Responsive QA','User Flows','Documentation'],used:'طبقتها بشكل مكثف في درايا وأعمال التكامل ومشاريع التطوير المتكامل.'},
      iot:{label:'الخلفية وإنترنت الأشياء',title:'أنظمة وتقنيات مترابطة',text:'العمل مع الواجهات البرمجية (API) وقواعد البيانات والخدمات السحابية والأجهزة والمستشعرات والبنية التي تربط بينها.',tags:['FastAPI','NestJS','PostgreSQL','Firebase','Docker','Redis','Prisma','Raspberry Pi','Arduino','OpenBCI EEG'],used:'طبقتها في رقيب ودرايا وتدريب إنترنت الأشياء ومفاهيم الأنظمة الذكية.'}
    }
  };

  const skillPanel = {
    label:document.getElementById('skillLabel'),
    title:document.getElementById('skillTitle'),
    text:document.getElementById('skillText'),
    tags:document.getElementById('skillTags'),
    used:document.getElementById('skillUsed')
  };

  let activeSkill = 'core';

  function renderSkill(key){
    activeSkill = key;
    const data = skillData[currentLang][key];
    if(!data) return;
    skillPanel.label.textContent = data.label;
    skillPanel.title.textContent = data.title;
    skillPanel.text.textContent = data.text;
    skillPanel.tags.innerHTML = data.tags.map(tag => `<span>${tag}</span>`).join('');
    skillPanel.used.textContent = data.used;
    document.querySelectorAll('.skill-node').forEach(btn => {
      const active = btn.dataset.skill === key;
      btn.classList.toggle('active', active);
      btn.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
  }

  document.querySelectorAll('.skill-node').forEach(btn => {
    btn.setAttribute('aria-pressed', btn.classList.contains('active') ? 'true' : 'false');
    btn.addEventListener('click', () => renderSkill(btn.dataset.skill));
  });

  setLanguage(currentLang);
  renderSkill(activeSkill);

  const progress = document.getElementById('scrollProgress');
  window.addEventListener('scroll', () => {
    const max = document.documentElement.scrollHeight - innerHeight;
    progress.style.width = (max > 0 ? (scrollY / max) * 100 : 0) + '%';
  }, {passive:true});

  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {threshold:.09});
  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

  const cursorDot = document.getElementById('cursorDot');
  const cursorAura = document.getElementById('cursorAura');
  let mx = innerWidth / 2;
  let my = innerHeight / 2;
  let ax = mx;
  let ay = my;

  function setCursorVisible(visible){
    cursorDot.classList.toggle('cursor-hidden', !visible);
    cursorAura.classList.toggle('cursor-hidden', !visible);
  }

  window.addEventListener('pointermove', e => {
    mx = e.clientX;
    my = e.clientY;
    const edge = 7;
    const inside = mx > edge && my > edge && mx < innerWidth - edge && my < innerHeight - edge;
    setCursorVisible(inside);
    cursorDot.style.left = mx + 'px';
    cursorDot.style.top = my + 'px';
  }, {passive:true});

  document.documentElement.addEventListener('mouseleave', () => setCursorVisible(false));
  document.documentElement.addEventListener('mouseenter', () => setCursorVisible(true));
  window.addEventListener('blur', () => setCursorVisible(false));
  window.addEventListener('focus', () => setCursorVisible(true));

  function cursorLoop(){
    ax += (mx - ax) * .16;
    ay += (my - ay) * .16;
    cursorAura.style.left = ax + 'px';
    cursorAura.style.top = ay + 'px';
    requestAnimationFrame(cursorLoop);
  }
  cursorLoop();

  document.querySelectorAll('a,button,.project,.photo-card').forEach(el => {
    el.addEventListener('mouseenter', () => cursorAura.classList.add('active'));
    el.addEventListener('mouseleave', () => cursorAura.classList.remove('active'));
  });

  const planet = document.getElementById('heroPlanet');
  const scene = document.querySelector('.hero-scene');
  if(scene && planet){
    scene.addEventListener('pointermove', e => {
      const r = scene.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - .5;
      const y = (e.clientY - r.top) / r.height - .5;
      planet.style.transform = `translate(-50%,-50%) rotateX(${y * -8}deg) rotateY(${x * 10}deg) translate3d(${x * 10}px,${y * 8}px,0)`;
    });
    scene.addEventListener('pointerleave', () => {
      planet.style.transform = 'translate(-50%,-50%)';
    });
  }

  document.querySelectorAll('.magnetic').forEach(el => {
    el.addEventListener('pointermove', e => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - (r.left + r.width / 2);
      const y = e.clientY - (r.top + r.height / 2);
      el.style.transform = `translate(${x * .08}px,${y * .08}px)`;
    });
    el.addEventListener('pointerleave', () => {
      el.style.transform = '';
    });
  });

  const canvas = document.getElementById('cosmos');
  const ctx = canvas.getContext('2d');
  let stars = [];

  function resizeCanvas(){
    const dpr = Math.min(devicePixelRatio || 1, 2);
    canvas.width = Math.floor(innerWidth * dpr);
    canvas.height = Math.floor(innerHeight * dpr);
    canvas.style.width = innerWidth + 'px';
    canvas.style.height = innerHeight + 'px';
    ctx.setTransform(dpr,0,0,dpr,0,0);
    const count = Math.min(170, Math.floor((innerWidth * innerHeight) / 8500));
    stars = Array.from({length:count}, () => ({
      x:Math.random() * innerWidth,
      y:Math.random() * innerHeight,
      r:Math.random() * 1.25 + .18,
      a:Math.random() * .65 + .15,
      s:Math.random() * .045 + .01
    }));
  }

  function drawCosmos(){
    ctx.clearRect(0,0,innerWidth,innerHeight);
    stars.forEach(star => {
      star.y += star.s;
      if(star.y > innerHeight + 4){
        star.y = -4;
        star.x = Math.random() * innerWidth;
      }
      ctx.beginPath();
      ctx.fillStyle = `rgba(220,235,255,${star.a})`;
      ctx.arc(star.x,star.y,star.r,0,Math.PI * 2);
      ctx.fill();
    });

    const gy = innerHeight * .86;
    ctx.save();
    ctx.globalAlpha = .15;
    ctx.strokeStyle = '#66dfff';
    ctx.lineWidth = 1;
    for(let i = 0; i < 4; i++){
      ctx.beginPath();
      for(let x = -20; x <= innerWidth + 20; x += 16){
        const y = gy + i * 22 + Math.sin((x + performance.now() * .014 + i * 80) / 100) * 7;
        if(x === -20) ctx.moveTo(x,y);
        else ctx.lineTo(x,y);
      }
      ctx.stroke();
    }
    ctx.restore();
    requestAnimationFrame(drawCosmos);
  }

  resizeCanvas();
  drawCosmos();
  window.addEventListener('resize', resizeCanvas, {passive:true});

  document.getElementById('year').textContent = new Date().getFullYear();
})();
