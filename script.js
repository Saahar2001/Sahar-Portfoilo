(() => {
  'use strict';

  const translations = {
    ar: {
      skip: 'تخطي إلى المحتوى',
      navProjects: 'المشاريع',
      navCapabilities: 'المهارات',
      navExperience: 'الخبرات',
      navProof: 'الإنجازات',
      navContact: 'تواصل',
      heroIndex: 'PORTFOLIO / 2026',
      heroOverline: 'نظم المعلومات · الذكاء الاصطناعي · البحث · المنتجات الرقمية',
      heroLead: 'أبني وأبحث في الأنظمة الرقمية الذكية، عند تقاطع الذكاء الاصطناعي والبرمجيات والبحث والبيانات والتفكير المتمحور حول الإنسان.',
      exploreWork: 'استعرض الأعمال المختارة',
      downloadCv: 'تحميل السيرة الذاتية',
      heroLocation: 'المدينة المنورة، المملكة العربية السعودية',
      heroFocus: 'هندسة الذكاء الاصطناعي · نظم المعلومات · البحث',
      nowTitle: 'أعمل حاليًا على',
      nowBasiratk: 'تطوير نموذج لتحويل الكلام العربي القانوني إلى نص.',
      nowMirage: 'بحث حول تضخم التخيل لدى وكلاء الذكاء الاصطناعي ذوي الذاكرة.',
      nowWafd: 'توأم اصطناعي للزائر لاختبار الخدمات قبل إطلاقها.',
      aboutLabel: 'عني',
      aboutTitle: 'تفكير منظومي يتحول إلى حلول يستطيع الناس استخدامها فعلًا.',
      aboutText: 'أنا خريجة نظم معلومات، وأستمتع ببناء الأنظمة الرقمية الذكية والبحث فيها. أعمل براحة بين صياغة المشكلة، والذكاء الاصطناعي والبيانات، وتطوير الواجهات، وتحليل الأنظمة، والاختبار، والتقنيات المترابطة.',
      aboutNote: 'القاسم المشترك ليس أداة واحدة، بل فهم النظام كاملًا: الناس، والمعلومات، والبرمجيات، والأجهزة، والقيود، وطريقة التنفيذ.',
      projectsLabel: 'أعمال مختارة',
      projectsTitle: 'ستة مشاريع. ست مساحات مختلفة للمشكلة.',
      projectsIntro: 'دراسات حالة مختارة في سهولة الوصول، وأبحاث وكلاء الذكاء الاصطناعي، وتجربة الزائر، ودعم الأسر، والمراقبة الذكية، والتواصل الآمن.',
      raqAward: 'أفضل مشروع تخرج',
      raqTitle: 'السلامة والاستقلالية والمساندة الذكية لكبار السن.',
      raqText: 'رقيب نظام ذكي لدعم سهولة الوصول وسلامة كبار السن، يجمع نماذج الذكاء الاصطناعي وإشارات EEG وأجهزة إنترنت الأشياء وتطبيقات الهاتف ومتابعة مقدم الرعاية واكتشاف السقوط والتعرف على المشاعر ودعم الطوارئ والمساعدة في العثور على الأغراض.',
      watchDemo: 'مشاهدة العرض',
      mirageMeta: 'بحث ذكاء اصطناعي · جامعة الملك خالد',
      mirageTitle: 'هل يمكن لوكيل ذكاء اصطناعي أن يتذكر حدثًا لم يحدث إلا في خياله؟',
      mirageText: 'مشروع بحثي يدرس تضخم التخيل الاصطناعي لدى وكلاء الذكاء الاصطناعي ذوي الذاكرة من خلال تكرار محاكاة أحداث بديلة وحلقات تجريبية مضبوطة.',
      baseScenarios: 'سيناريو أساسي',
      episodes: 'حلقة تجريبية',
      repetitionLevels: 'مستويات تكرار',
      wafdMeta: 'توأم اصطناعي للزائر',
      wafdTitle: 'اختبر تجربة الزائر قبل أن يضطر الزائر الحقيقي إلى اختبارها.',
      wafdText: 'يحاكي وَفْد زوارًا افتراضيين متنوعين عبر رحلات الخدمات الرقمية والميدانية، ليكشف أين يمكن أن تتعطل التجربة بسبب اللغة أو إمكانية الوصول أو جودة الاتصال أو المهارة الرقمية أو تصميم الخدمة.',
      secondPlace: 'المركز الثاني',
      tibyanTitle: 'بيئة دعم عربية للأسر التي تتعامل مع اضطراب فرط الحركة وتشتت الانتباه.',
      tibyanText: 'تدعم تبيان أسر الأطفال ذوي اضطراب فرط الحركة وتشتت الانتباه عبر الإرشاد المدعوم بالذكاء الاصطناعي، ومتابعة الطفل، وتنظيم المهام، والمحتوى التعليمي، ودعم المجتمع، وأدوات أسرية منظمة.',
      zemamAward: 'المركز الثاني · مسار المراقبة الذكية',
      zemamTitle: 'مراقبة ذكية للمرافق مدعومة بالذكاء الاصطناعي.',
      zemamText: 'مفهوم للمراقبة الذكية لعمليات المرافق يعتمد على مهام مرتبطة بالموقع، والتحقق البصري، ولوحات المتابعة، وتحديث حالات المهام تلقائيًا.',
      mersalMeta: 'مراسلات آمنة',
      mersalTitle: 'مراسلات رقمية سرية بثقة قابلة للتحقق.',
      mersalText: 'مفهوم لمراسلات آمنة يجمع الذكاء الاصطناعي والبلوك تشين والتشفير والتوقيعات الرقمية والخصوصية وقابلية التتبع للتواصل الرقمي الحساس.',
      capabilitiesLabel: 'منظومة المهارات',
      capabilitiesTitle: 'ليست قائمة أدوات، بل طريقة عمل مترابطة.',
      capabilitiesIntro: 'اختاري مجالًا لرؤية التقنيات والممارسات التي أستخدمها ضمن سياقها الحقيقي.',
      capAi: 'الذكاء الاصطناعي والبيانات',
      capFrontend: 'الواجهات والمنتج',
      capSystems: 'الأنظمة وضمان الجودة',
      capBackend: 'الخلفية وواجهات API',
      capIot: 'إنترنت الأشياء والأنظمة الذكية',
      capResearch: 'البحث ونظم المعلومات',
      experienceLabel: 'الخبرات',
      experienceTitle: 'بحث، وتطوير برمجيات، وتدريب، وقيادة.',
      current: 'حاليًا',
      basiratkRole: 'تطوير نموذج ذكاء اصطناعي · بصيرتك',
      basiratkExperience: 'أعمل على تطوير نموذج لتحويل الكلام العربي القانوني إلى نص، من تجهيز البيانات وتنظيفها وتغطية المصطلحات القانونية إلى تقييم المخرجات والاختبار ودعم التكامل مع النظام.',
      fellowshipRole: 'زميلة بحثية صيفية في الذكاء الاصطناعي · جامعة الملك خالد',
      fellowshipExperience: 'أعمل على MIRAGE-MEM، وهي دراسة مضبوطة لتضخم التخيل ونسبة مصدر الذاكرة وموثوقيتها لدى وكلاء الذكاء الاصطناعي ذوي الذاكرة.',
      trainerRole: 'مدربة ذكاء اصطناعي وويب بدوام جزئي · برنامج صيف طيبة',
      trainerExperience: 'درّبت نحو 38 طالبًا وطالبة من فئات عمرية مختلفة على أدوات الذكاء الاصطناعي وأساسيات الويب وتطوير الأفكار والنماذج الأولية والإرشاد والعرض التقني.',
      thinksyncRole: 'متدربة تطوير برمجيات · ThinkSync',
      thinksyncExperience: 'عملت في تطوير الواجهات وتطبيقات الهاتف وUI/UX وتحليل الأنظمة وضمان الجودة وتكامل واجهات API، ضمن سير عمل جماعي يعتمد على Git/GitHub وممارسات تطوير موجهة للإنتاج.',
      hashRole: 'قائدة لجنة العلاقات العامة · نادي هاش بلس',
      hashExperience: 'قدت التواصل والتنسيق ومتابعة المهام والتوثيق وتفاعل الأعضاء وأنشطة التقدير داخل اللجنة.',
      proofLabel: 'إنجازات ومحطات',
      proofTitle: 'التقدير يصبح أهم عندما يكون دليلًا على عمل حقيقي.',
      awardRaqeeb: 'أفضل مشروع تخرج',
      awardZemam: 'المركز الثاني · مسار المراقبة الذكية',
      awardTibyan: 'المركز الثاني',
      proofRecognition: 'تكريم بالمركز الثاني · 2026',
      proofTraining: 'تدريب في الذكاء الاصطناعي والويب · نحو 38 طالبًا وطالبة',
      proofLeadership: 'قائدة لجنة العلاقات العامة · نادي هاش بلس',
      contactLabel: 'تواصل',
      contactPre: 'للفرص الوظيفية والبحث والتعاون والعمل التقني الجاد.',
      contactLine1: 'لنتواصل',
      contactLine2: 'حيث تلتقي الأنظمة بالناس.',
      backTop: 'العودة للأعلى ↑'
    }
  };

  const ariaTranslations = {
    en: {
      brandHome: 'Sahar Sultan home',
      mainNav: 'Primary navigation',
      mobileNav: 'Mobile navigation',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      capabilityTabs: 'Capability areas',
      awardsLabel: 'Selected achievements'
    },
    ar: {
      brandHome: 'العودة إلى بداية موقع سحر سلطان',
      mainNav: 'التنقل الرئيسي',
      mobileNav: 'تنقل الجوال',
      openMenu: 'فتح القائمة',
      closeMenu: 'إغلاق القائمة',
      capabilityTabs: 'مجالات المهارات',
      awardsLabel: 'إنجازات مختارة'
    }
  };

  const altTranslations = {
    en: {
      wafdAlt: 'WAFD project visual',
      tibyanAlt: 'Tibyan Arabic platform presentation',
      awardImageAlt: 'Second-place recognition',
      trainerImageAlt: 'AI training program evidence'
    },
    ar: {
      wafdAlt: 'تصور مشروع وَفْد',
      tibyanAlt: 'عرض منصة تبيان العربية',
      awardImageAlt: 'صورة تكريم بالمركز الثاني',
      trainerImageAlt: 'صورة توثق تجربة التدريب في الذكاء الاصطناعي'
    }
  };

  const capabilityData = {
    en: {
      ai: {
        kicker: 'AI + DATA',
        name: 'AI & Data',
        icon: 'AI',
        description: 'Building, evaluating, and integrating intelligent features with attention to data quality and real system constraints.',
        tags: ['Python', 'Machine Learning', 'AI Models', 'Data Analysis', 'Power BI', 'Jupyter', 'Google Colab'],
        context: 'Used across AI model development, MIRAGE-MEM research, Raqeeb, and analytical work.'
      },
      frontend: {
        kicker: 'FRONTEND + PRODUCT',
        name: 'Frontend & Product',
        icon: 'UI',
        description: 'Turning requirements and product intent into responsive, accessible, testable digital interfaces.',
        tags: ['Next.js', 'React', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS', 'Flutter', 'Dart', 'Figma'],
        context: 'Applied in portfolio work, ThinkSync product delivery, WAFD, mobile applications, and prototypes.'
      },
      systems: {
        kicker: 'SYSTEMS + QUALITY',
        name: 'Systems & QA',
        icon: 'QA',
        description: 'Thinking through flows, requirements, failure cases, integration behavior, and evidence before calling a system complete.',
        tags: ['Requirements Analysis', 'System Analysis', 'SDLC', 'QA', 'API Testing', 'Postman', 'Documentation', 'Git/GitHub'],
        context: 'Used in software delivery, testing plans, integration work, research workflows, and Information Systems projects.'
      },
      backend: {
        kicker: 'BACKEND + APIS',
        name: 'Backend & APIs',
        icon: 'API',
        description: 'Working with application services, data layers, APIs, and integration boundaries needed to connect product components.',
        tags: ['FastAPI', 'REST APIs', 'ASP.NET Core', 'NestJS', 'PostgreSQL', 'SQL', 'Firebase', 'Prisma', 'Swagger', 'Docker'],
        context: 'Used across prototypes, integration work, Raqeeb, ThinkSync, and service-oriented projects.'
      },
      iot: {
        kicker: 'SMART SYSTEMS',
        name: 'IoT & Smart Systems',
        icon: 'IoT',
        description: 'Connecting sensing, devices, edge logic, intelligent models, and user-facing software into coherent smart-system experiences.',
        tags: ['Arduino', 'Raspberry Pi', 'IoT', 'EEG / OpenBCI', 'Sensors', 'Edge AI'],
        context: 'Central to Raqeeb and smart-system experimentation involving EEG, IoT devices, and connected assistance.'
      },
      research: {
        kicker: 'RESEARCH + IS',
        name: 'Research & Information Systems',
        icon: 'IS',
        description: 'Structuring questions, experiments, evidence, processes, and information flows so technical work remains rigorous and useful.',
        tags: ['Research Design', 'Evaluation', 'Information Systems', 'Requirements', 'Documentation', 'Experiment Design', 'Human-centered Technology'],
        context: 'Used in MIRAGE-MEM, academic work, graduation research, product analysis, and system design.'
      }
    },
    ar: {
      ai: {
        kicker: 'AI + DATA',
        name: 'الذكاء الاصطناعي والبيانات',
        icon: 'AI',
        description: 'بناء الميزات الذكية وتقييمها ودمجها، مع الاهتمام بجودة البيانات وقيود النظام الفعلية.',
        tags: ['Python', 'Machine Learning', 'AI Models', 'Data Analysis', 'Power BI', 'Jupyter', 'Google Colab'],
        context: 'أستخدمها في تطوير نماذج الذكاء الاصطناعي، وبحث MIRAGE-MEM، ومشروع رقيب، والعمل التحليلي.'
      },
      frontend: {
        kicker: 'FRONTEND + PRODUCT',
        name: 'الواجهات والمنتج',
        icon: 'UI',
        description: 'تحويل المتطلبات وفكرة المنتج إلى واجهات رقمية متجاوبة وقابلة للوصول والاختبار.',
        tags: ['Next.js', 'React', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS', 'Flutter', 'Dart', 'Figma'],
        context: 'أستخدمها في تطوير المنتجات والواجهات، ومشروع وَفْد، وتطبيقات الهاتف، والنماذج الأولية.'
      },
      systems: {
        kicker: 'SYSTEMS + QUALITY',
        name: 'الأنظمة وضمان الجودة',
        icon: 'QA',
        description: 'تحليل التدفقات والمتطلبات وحالات الفشل وسلوك التكامل والأدلة قبل اعتبار النظام مكتملًا.',
        tags: ['Requirements Analysis', 'System Analysis', 'SDLC', 'QA', 'API Testing', 'Postman', 'Documentation', 'Git/GitHub'],
        context: 'أستخدمها في تطوير البرمجيات وخطط الاختبار والتكامل وسير العمل البحثي ومشاريع نظم المعلومات.'
      },
      backend: {
        kicker: 'BACKEND + APIS',
        name: 'الخلفية وواجهات API',
        icon: 'API',
        description: 'العمل مع خدمات التطبيقات وطبقات البيانات وواجهات API وحدود التكامل التي تربط مكونات المنتج.',
        tags: ['FastAPI', 'REST APIs', 'ASP.NET Core', 'NestJS', 'PostgreSQL', 'SQL', 'Firebase', 'Prisma', 'Swagger', 'Docker'],
        context: 'أستخدمها في النماذج الأولية والتكامل ومشروع رقيب والعمل البرمجي القائم على الخدمات.'
      },
      iot: {
        kicker: 'SMART SYSTEMS',
        name: 'إنترنت الأشياء والأنظمة الذكية',
        icon: 'IoT',
        description: 'ربط الاستشعار والأجهزة والمنطق الطرفي والنماذج الذكية والبرمجيات الموجهة للمستخدم ضمن تجربة نظام ذكي متكاملة.',
        tags: ['Arduino', 'Raspberry Pi', 'IoT', 'EEG / OpenBCI', 'Sensors', 'Edge AI'],
        context: 'يمثل هذا المجال جزءًا أساسيًا من رقيب وتجارب الأنظمة الذكية المرتبطة بـ EEG وأجهزة إنترنت الأشياء.'
      },
      research: {
        kicker: 'RESEARCH + IS',
        name: 'البحث ونظم المعلومات',
        icon: 'IS',
        description: 'تنظيم الأسئلة والتجارب والأدلة والعمليات وتدفقات المعلومات بحيث يبقى العمل التقني دقيقًا ومفيدًا.',
        tags: ['Research Design', 'Evaluation', 'Information Systems', 'Requirements', 'Documentation', 'Experiment Design', 'Human-centered Technology'],
        context: 'أستخدمها في MIRAGE-MEM والعمل الأكاديمي ومشروع التخرج وتحليل المنتجات وتصميم الأنظمة.'
      }
    }
  };

  const englishText = {};
  document.querySelectorAll('[data-i18n]').forEach((node) => {
    englishText[node.dataset.i18n] = node.textContent.trim();
  });

  const languageButton = document.getElementById('languageButton');
  const menuButton = document.getElementById('menuButton');
  const mobileNav = document.getElementById('mobileNav');
  const topbar = document.getElementById('topbar');
  const scrollMeter = document.querySelector('#scrollMeter span');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let currentLanguage = localStorage.getItem('sahar_portfolio_language') === 'ar' ? 'ar' : 'en';
  let activeCapability = 'ai';

  function setAria(language) {
    document.querySelectorAll('[data-aria-key]').forEach((node) => {
      const key = node.dataset.ariaKey;
      const dictionary = ariaTranslations[language];
      if (dictionary[key]) node.setAttribute('aria-label', dictionary[key]);
    });
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-label', ariaTranslations[language][isOpen ? 'closeMenu' : 'openMenu']);
  }

  function setImageAlts(language) {
    document.querySelectorAll('[data-alt-key]').forEach((image) => {
      const text = altTranslations[language][image.dataset.altKey];
      if (text) image.alt = text;
    });
  }

  function setLanguage(language) {
    currentLanguage = language;
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.querySelectorAll('[data-i18n]').forEach((node) => {
      const key = node.dataset.i18n;
      node.textContent = language === 'ar' ? (translations.ar[key] || englishText[key]) : englishText[key];
    });
    languageButton.textContent = language === 'ar' ? 'English' : 'العربية';
    languageButton.setAttribute('aria-label', language === 'ar' ? 'Switch to English' : 'التبديل إلى العربية');
    setAria(language);
    setImageAlts(language);
    renderCapability(activeCapability);
    localStorage.setItem('sahar_portfolio_language', language);
  }

  languageButton.addEventListener('click', () => {
    setLanguage(currentLanguage === 'en' ? 'ar' : 'en');
  });

  function toggleMenu(force) {
    const willOpen = typeof force === 'boolean' ? force : menuButton.getAttribute('aria-expanded') !== 'true';
    menuButton.setAttribute('aria-expanded', String(willOpen));
    mobileNav.hidden = !willOpen;
    menuButton.setAttribute('aria-label', ariaTranslations[currentLanguage][willOpen ? 'closeMenu' : 'openMenu']);
  }

  menuButton.addEventListener('click', () => toggleMenu());
  mobileNav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => toggleMenu(false)));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') toggleMenu(false);
  });

  function renderCapability(key) {
    activeCapability = key;
    const data = capabilityData[currentLanguage][key];
    document.getElementById('capabilityKicker').textContent = data.kicker;
    document.getElementById('capabilityName').textContent = data.name;
    document.getElementById('capabilityDescription').textContent = data.description;
    document.getElementById('capabilityContext').textContent = data.context;
    document.querySelector('.panel-orbit span').textContent = data.icon;
    const tags = document.getElementById('capabilityTags');
    tags.replaceChildren(...data.tags.map((tag) => {
      const span = document.createElement('span');
      span.textContent = tag;
      span.dir = 'ltr';
      return span;
    }));
    document.querySelectorAll('[data-capability]').forEach((button) => {
      button.setAttribute('aria-selected', String(button.dataset.capability === key));
    });
  }

  document.querySelectorAll('[data-capability]').forEach((button) => {
    button.addEventListener('click', () => renderCapability(button.dataset.capability));
    button.addEventListener('keydown', (event) => {
      if (!['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(event.key)) return;
      event.preventDefault();
      const buttons = [...document.querySelectorAll('[data-capability]')];
      const current = buttons.indexOf(button);
      const delta = ['ArrowRight', 'ArrowDown'].includes(event.key) ? 1 : -1;
      const next = buttons[(current + delta + buttons.length) % buttons.length];
      next.focus();
      renderCapability(next.dataset.capability);
    });
  });

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -4% 0px' });
  document.querySelectorAll('.reveal').forEach((node) => revealObserver.observe(node));

  const navLinks = [...document.querySelectorAll('.desktop-nav a')];
  const trackedSections = navLinks
    .map((link) => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);
  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => {
        link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
      });
    });
  }, { rootMargin: '-32% 0px -58% 0px', threshold: 0 });
  trackedSections.forEach((section) => navObserver.observe(section));

  function updateScrollUI() {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollable > 0 ? Math.min(1, window.scrollY / scrollable) : 0;
    scrollMeter.style.height = `${progress * 100}%`;
    topbar.classList.toggle('scrolled', window.scrollY > 24);
  }
  updateScrollUI();
  window.addEventListener('scroll', updateScrollUI, { passive: true });

  const heroVisual = document.getElementById('heroVisual');
  if (heroVisual && window.matchMedia('(pointer:fine)').matches && !reducedMotion.matches) {
    heroVisual.addEventListener('pointermove', (event) => {
      const rect = heroVisual.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      heroVisual.style.setProperty('--rx', `${y * -5}deg`);
      heroVisual.style.setProperty('--ry', `${x * 7}deg`);
      heroVisual.style.setProperty('--tx', `${x * 7}px`);
      heroVisual.style.setProperty('--ty', `${y * 5}px`);
    });
    heroVisual.addEventListener('pointerleave', () => {
      heroVisual.style.setProperty('--rx', '0deg');
      heroVisual.style.setProperty('--ry', '0deg');
      heroVisual.style.setProperty('--tx', '0px');
      heroVisual.style.setProperty('--ty', '0px');
    });
  }

  const canvas = document.getElementById('signalField');
  const context = canvas.getContext('2d', { alpha: true });
  let points = [];
  let animationFrame = 0;

  function resizeCanvas() {
    if (reducedMotion.matches) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 1.7);
    canvas.width = Math.floor(window.innerWidth * dpr);
    canvas.height = Math.floor(window.innerHeight * dpr);
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    context.setTransform(dpr, 0, 0, dpr, 0, 0);
    const density = window.innerWidth < 700 ? 26 : 54;
    points = Array.from({ length: density }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: Math.random() * 1.15 + 0.3,
      vy: Math.random() * 0.045 + 0.012,
      alpha: Math.random() * 0.34 + 0.08
    }));
  }

  function drawField() {
    context.clearRect(0, 0, window.innerWidth, window.innerHeight);
    for (const point of points) {
      point.y += point.vy;
      if (point.y > window.innerHeight + 5) {
        point.y = -5;
        point.x = Math.random() * window.innerWidth;
      }
      context.beginPath();
      context.fillStyle = `rgba(191, 225, 255, ${point.alpha})`;
      context.arc(point.x, point.y, point.r, 0, Math.PI * 2);
      context.fill();
    }
    const horizon = window.innerHeight * 0.88;
    context.save();
    context.globalAlpha = 0.08;
    context.strokeStyle = '#77e7ff';
    context.lineWidth = 1;
    const time = performance.now() * 0.00018;
    for (let row = 0; row < 3; row += 1) {
      context.beginPath();
      for (let x = -20; x <= window.innerWidth + 20; x += 24) {
        const y = horizon + row * 19 + Math.sin(x * 0.012 + time * 10 + row) * 5;
        if (x === -20) context.moveTo(x, y);
        else context.lineTo(x, y);
      }
      context.stroke();
    }
    context.restore();
    animationFrame = requestAnimationFrame(drawField);
  }

  function startField() {
    cancelAnimationFrame(animationFrame);
    if (reducedMotion.matches) return;
    resizeCanvas();
    drawField();
  }

  reducedMotion.addEventListener?.('change', startField);
  window.addEventListener('resize', resizeCanvas, { passive: true });
  startField();

  document.getElementById('year').textContent = String(new Date().getFullYear());
  setLanguage(currentLanguage);
})();
