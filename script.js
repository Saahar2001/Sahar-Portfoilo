(() => {
  'use strict';

  const translations = {
    ar: {
      navProjects:'المشاريع',navSkills:'المهارات',navExperience:'الخبرات',navContact:'تواصل',
      heroEyebrow:'نظم معلومات · ذكاء اصطناعي · منتجات رقمية',
      heroLead:'أبني أنظمة رقمية مدروسة تجمع بين الذكاء الاصطناعي والبيانات والبرمجيات واحتياج المستخدم الحقيقي — من الأبحاث والتجارب إلى المنصات الذكية وتجارب الواجهات ومفاهيم إنترنت الأشياء.',
      viewWork:'استعرض أعمالي',downloadCv:'تحميل السيرة الذاتية',meta1:'المدينة المنورة، السعودية',meta2:'مهتمة بفرص الذكاء الاصطناعي ونظم المعلومات والمنتجات',
      noteA1:'حاليًا',noteA2:'ذكاء اصطناعي + بحث',noteB1:'أبني',noteB2:'أنظمة ذكية',
      aboutTag:'عني',aboutTitle:'أحب اللحظة التي تتحول فيها الفكرة التقنية إلى شيء يستخدمه الناس فعليًا.',
      aboutText:'خلفيتي في نظم المعلومات تساعدني أتنقل بين المتطلبات والبيانات والواجهات والـ APIs والاختبار وتفكير المنتج. وأكثر مجال يجذبني هو الذكاء الاصطناعي لأنه يربط هذه الطبقات في أنظمة تتكيف وتستنتج وتنتج قيمة حقيقية.',
      gpa:'المعدل من 5.00',students:'طالبًا تم تدريبهم',secondPlace:'فوز بالمركز الثاني',
      projectsTag:'أعمال مختارة',projectsTitle:'المشاريع كقصص، مو بطاقات متشابهة.',projectsIntro:'كل مشروع له لغته البصرية وحجمه وإيقاعه الخاص، أقرب لعرض Case Study من قالب جاهز.',
      raqKicker:'مشروع التخرج',bestProject:'أفضل مشروع · 2026',raqTitle:'رقيب — سلامة ذكية ووصول أفضل لكبار السن',raqText:'منصة مترابطة تجمع Flutter وFirebase ونماذج ذكاء اصطناعي وإشارات EEG وأجهزة IoT ومتابعة مقدم الرعاية والتذكيرات واكتشاف السقوط والمشاعر وتنبيهات الطوارئ والمساعدة في العثور على الأغراض.',watchDemo:'مشاهدة العرض ↗',
      researchKicker:'بحث ذكاء اصطناعي',ongoing:'مستمر',mirageText:'معيار تجريبي مضبوط يدرس هل تكرار محاكاة حدث بديل معقول ممكن يخلي وكيل ذكاء اصطناعي بذاكرة يسترجع حدثًا لم يحصل أو يستخدمه لاحقًا كأنه تجربة حقيقية.',baseScenarios:'سيناريو أساسي',episodes:'حلقة تجريبية',levels:'مستويات تكرار',
      hackathonKicker:'فكرة هاكثون',prototype:'MVP قيد التطوير',wafdTitle:'وَفْد — توأم اصطناعي لتجربة الزائر',wafdText:'توأم اصطناعي يرسل زوارًا افتراضيين متنوعين خلال رحلة الخدمة قبل الإطلاق، ويحاكي قيود الواقع ويكشف نقاط التعطل ويقترح التحسينات قبل ما يواجهها الزوار الحقيقيون.',
      productKicker:'منتج ذكاء اصطناعي',secondPlaceLabel:'المركز الثاني',tibyanTitle:'تبيان — منصة عربية لدعم أسر أطفال ADHD',tibyanText:'منصة عربية تجمع التقييم الأولي ومتابعة تقدم الطفل وتنظيم المهام والتذكيرات والمحتوى الموثوق والاستشارات المتخصصة والمساعد الذكي لدعم الأسرة في الرحلة اليومية.',
      moreWorkKicker:'أنظمة أخرى',duoTitle:'زمام + مرسال',duoText:'مشكلتان مختلفتان: تشغيل مرافق أذكى ومراسلات رقمية أكثر أمانًا.',zemamTitle:'زمام — مراقبة ذكية',zemamText:'إدارة مرافق مدعومة بالذكاء الاصطناعي باستخدام نطاقات مهام GPS والتحقق بالصور ولوحات المتابعة وتحديث الحالة تلقائيًا.',zemamAward:'المركز الثاني · مسار المراقبة الذكية',mersalTitle:'مرسال — مراسلات آمنة',mersalText:'مفهوم لمراسلات سرية يستخدم الذكاء الاصطناعي والبلوك تشين والتشفير والتوقيعات الرقمية لتعزيز الخصوصية والأصالة والتصنيف والتتبع.',mersalType:'أمن + ذكاء اصطناعي',
      skillsTag:'كوكبة المهارات',skillsTitle:'مو جدار شارات. خريطة لطريقة شغلي.',skillsIntro:'اختاري أي مجموعة عشان تشوفي الأدوات والقدرات اللي تحتها.',nodeCore:'نظم المعلومات',nodeAi:'AI والبيانات',nodeProduct:'المنتج والواجهات',nodeSystems:'الأنظمة والجودة',nodeIot:'الخلفية وIoT',
      experienceTag:'سجل الخبرات',experienceTitle:'الشغل اللي وراء البورتفوليو.',basiratkTitle:'تطوير نموذج ذكاء اصطناعي · بصيرتك',basiratkText:'العمل على بيانات تحويل الكلام العربي القانوني إلى نص، وتجهيزها وتنظيفها والمصطلحات وتقييم المخرجات والاختبار ودعم التكامل.',fellowshipTitle:'زمالة بحثية صيفية في الذكاء الاصطناعي · جامعة الملك خالد',fellowshipText:'العمل على MIRAGE-MEM ودراسة سلوك الذاكرة الزائفة بشكل مضبوط لدى وكلاء ذكاء اصطناعي ذوي ذاكرة.',trainerTitle:'مدربة ذكاء اصطناعي وتطوير ويب · برنامج صيف طيبة',trainerText:'قدمت تدريبًا عمليًا لنحو 38 طالبًا من أعمار مختلفة، ووجهتهم في تطوير الأفكار والنماذج الأولية والعروض والمشاريع المناسبة للهاكثونات.',thinksyncTitle:'متدربة تطوير برمجيات · ThinkSync',thinksyncText:'180 ساعة شملت UI/UX وتحليل الأنظمة وتطوير الواجهات بـ Next.js وتطبيقات Flutter/Dart وضمان الجودة وGitHub وDocker وPostgreSQL وRedis وPrisma وNestJS وSwagger والتوثيق والتصميم المتجاوب وواجهات RTL.',hashTitle:'قائدة لجنة العلاقات العامة · نادي هاش بلس',hashText:'قدت التنسيق والتواصل ومتابعة المهام والتوثيق وتفاعل الأعضاء وآليات التقدير والتحفيز داخل اللجنة.',
      proofTag:'أدلة ولحظات',proofTitle:'لحظات تستاهل تنحفظ.',proofIntro:'جوائز وقيادة وتدريب — بأدلة فعلية بدل قائمة إضافية.',awardCaption:'المركز الثاني',awardSub:'البرنامج الصيفي للابتكار الرقمي والذكاء الاصطناعي',trainerCaption:'مدربة ذكاء اصطناعي',trainerSub:'حوالي 38 طالبًا · أعمار مختلفة',leaderCaption:'قيادة العلاقات العامة',leaderSub:'نادي هاش بلس · 2026',
      contactTag:'تواصل',contactKicker:'عندك فرصة في الذكاء الاصطناعي أو البيانات أو المنتجات أو نظم المعلومات؟',contactLine1:'خلينا نبني',contactLine2:'شيء مفيد.',footerText:'عمق البحر، ضوء الفضاء، وتفكير الأنظمة.'
    }
  };

  const english = {};
  document.querySelectorAll('[data-i18n]').forEach(el => { english[el.dataset.i18n] = el.textContent.trim(); });

  const langToggle = document.getElementById('langToggle');
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
    localStorage.setItem('sahar_portfolio_lang', lang);
    renderSkill(activeSkill);
  }
  langToggle.addEventListener('click', () => setLanguage(currentLang === 'en' ? 'ar' : 'en'));

  const skillData = {
    en: {
      core:{label:'FOUNDATION',title:'Information Systems',text:'Requirements, processes, data, technology, users, and delivery connected as one system.',tags:['Requirements Analysis','SDLC','Documentation','Business Thinking','Process Design','Problem Solving'],used:'Used across Raqeeb, Draia, WAFD, and product work.'},
      ai:{label:'AI + DATA',title:'AI, ML & Analytics',text:'From preparing data and evaluating models to designing AI-assisted product behavior and research experiments.',tags:['Python','Machine Learning','AI Models','Data Analysis','Power BI','Jupyter','Model Evaluation','AI Agents'],used:'Used in MIRAGE-MEM, Basiratk, Raqeeb, Tibyan, and smart-city work.'},
      product:{label:'PRODUCT + FRONTEND',title:'Interfaces people can use',text:'Building responsive, clear interfaces and translating designs into working product flows.',tags:['Next.js','TypeScript','Flutter','Dart','React.js','HTML/CSS','Tailwind CSS','Figma','RTL UX'],used:'Used in Draia, Raqeeb, Tibyan, Boka, and web projects.'},
      systems:{label:'SYSTEMS + QUALITY',title:'Analysis, QA & integration',text:'Breaking systems into testable parts, validating flows, finding integration issues, and documenting work clearly.',tags:['QA','API Testing','Swagger','Git/GitHub','Troubleshooting','Responsive QA','User Flows','Documentation'],used:'Used heavily in Draia, frontend integration work, and full-stack projects.'},
      iot:{label:'BACKEND + IoT',title:'Connected systems',text:'APIs, databases, cloud services, devices, sensors, and the infrastructure that connects them.',tags:['FastAPI','NestJS','PostgreSQL','Firebase','Docker','Redis','Prisma','Raspberry Pi','Arduino','OpenBCI EEG'],used:'Used in Raqeeb, Draia, IoT training, and smart-system concepts.'}
    },
    ar: {
      core:{label:'الأساس',title:'نظم المعلومات',text:'ربط المتطلبات والعمليات والبيانات والتقنية والمستخدم والتسليم كنظام واحد.',tags:['تحليل المتطلبات','SDLC','التوثيق','تفكير الأعمال','تصميم العمليات','حل المشكلات'],used:'استخدمتها في رقيب ودرايا ووفد وأعمال المنتجات.'},
      ai:{label:'الذكاء الاصطناعي والبيانات',title:'AI وML والتحليل',text:'من تجهيز البيانات وتقييم النماذج إلى تصميم سلوك المنتجات المدعومة بالذكاء الاصطناعي والتجارب البحثية.',tags:['Python','Machine Learning','AI Models','Data Analysis','Power BI','Jupyter','Model Evaluation','AI Agents'],used:'استخدمتها في MIRAGE-MEM وبصيرتك ورقيب وتبيان ومشاريع المدن الذكية.'},
      product:{label:'المنتج والواجهات',title:'واجهات قابلة للاستخدام',text:'بناء واجهات متجاوبة وواضحة وتحويل التصميم إلى تدفقات منتج تعمل فعليًا.',tags:['Next.js','TypeScript','Flutter','Dart','React.js','HTML/CSS','Tailwind CSS','Figma','RTL UX'],used:'استخدمتها في درايا ورقيب وتبيان وبوكا ومشاريع الويب.'},
      systems:{label:'الأنظمة والجودة',title:'التحليل والاختبار والتكامل',text:'تقسيم الأنظمة إلى أجزاء قابلة للاختبار والتحقق من التدفقات واكتشاف مشاكل التكامل وتوثيق العمل بوضوح.',tags:['QA','API Testing','Swagger','Git/GitHub','Troubleshooting','Responsive QA','User Flows','Documentation'],used:'استخدمتها بشكل مكثف في درايا وأعمال تكامل الواجهات ومشاريع Full-Stack.'},
      iot:{label:'الخلفية وإنترنت الأشياء',title:'أنظمة مترابطة',text:'واجهات API وقواعد بيانات وخدمات سحابية وأجهزة ومستشعرات والبنية التي تربطها مع بعض.',tags:['FastAPI','NestJS','PostgreSQL','Firebase','Docker','Redis','Prisma','Raspberry Pi','Arduino','OpenBCI EEG'],used:'استخدمتها في رقيب ودرايا وتدريب IoT ومفاهيم الأنظمة الذكية.'}
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
    document.querySelectorAll('.skill-node').forEach(btn => btn.classList.toggle('active', btn.dataset.skill === key));
  }
  document.querySelectorAll('.skill-node').forEach(btn => btn.addEventListener('click', () => renderSkill(btn.dataset.skill)));

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
  let mx = innerWidth / 2, my = innerHeight / 2, ax = mx, ay = my;
  window.addEventListener('pointermove', e => {
    mx = e.clientX; my = e.clientY;
    cursorDot.style.left = mx + 'px'; cursorDot.style.top = my + 'px';
  }, {passive:true});
  function cursorLoop(){
    ax += (mx - ax) * .16; ay += (my - ay) * .16;
    cursorAura.style.left = ax + 'px'; cursorAura.style.top = ay + 'px';
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
    scene.addEventListener('pointerleave', () => { planet.style.transform = 'translate(-50%,-50%)'; });
  }

  document.querySelectorAll('.magnetic').forEach(el => {
    el.addEventListener('pointermove', e => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - (r.left + r.width/2);
      const y = e.clientY - (r.top + r.height/2);
      el.style.transform = `translate(${x*.08}px,${y*.08}px)`;
    });
    el.addEventListener('pointerleave', () => { el.style.transform = ''; });
  });

  const canvas = document.getElementById('cosmos');
  const ctx = canvas.getContext('2d');
  let stars = [];
  function resizeCanvas(){
    const dpr = Math.min(devicePixelRatio || 1, 2);
    canvas.width = Math.floor(innerWidth * dpr); canvas.height = Math.floor(innerHeight * dpr);
    canvas.style.width = innerWidth + 'px'; canvas.style.height = innerHeight + 'px';
    ctx.setTransform(dpr,0,0,dpr,0,0);
    const count = Math.min(170, Math.floor((innerWidth * innerHeight) / 8500));
    stars = Array.from({length:count}, () => ({x:Math.random()*innerWidth,y:Math.random()*innerHeight,r:Math.random()*1.25+.18,a:Math.random()*.65+.15,s:Math.random()*.045+.01}));
  }
  function drawCosmos(){
    ctx.clearRect(0,0,innerWidth,innerHeight);
    stars.forEach(star => {
      star.y += star.s;
      if(star.y > innerHeight + 4){star.y = -4;star.x = Math.random()*innerWidth;}
      ctx.beginPath();ctx.fillStyle=`rgba(220,235,255,${star.a})`;ctx.arc(star.x,star.y,star.r,0,Math.PI*2);ctx.fill();
    });
    const gy = innerHeight * .86;
    ctx.save();ctx.globalAlpha=.15;ctx.strokeStyle='#66dfff';ctx.lineWidth=1;
    for(let i=0;i<4;i++){
      ctx.beginPath();
      for(let x=-20;x<=innerWidth+20;x+=16){
        const y = gy + i*22 + Math.sin((x + performance.now()*.014 + i*80)/100)*7;
        if(x===-20)ctx.moveTo(x,y);else ctx.lineTo(x,y);
      }
      ctx.stroke();
    }
    ctx.restore();
    requestAnimationFrame(drawCosmos);
  }
  resizeCanvas(); drawCosmos();
  window.addEventListener('resize', resizeCanvas, {passive:true});

  document.getElementById('year').textContent = new Date().getFullYear();
})();
