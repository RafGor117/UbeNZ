(function () {

    // ============================
    //  TRANSLATIONS
    // ============================
    const T = {
        pl: {
            brand: 'PolisyNaZycie.pl',
            nav_cta: 'Wypełnij ankietę',
            hero_badge: 'Bezpłatne porównanie ofert',
            hero_h1: 'Zabezpiecz przyszłość swojej rodziny — <span class="text-accent">znajdź idealną polisę</span>',
            hero_sub: 'Sprawdź, jak niewielka kwota miesięcznie może dać Twojej rodzinie spokój i bezpieczeństwo finansowe. Porównaj oferty najlepszych ubezpieczycieli w 40 sekund.',
            hero_btn: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" style="margin-right:8px"><path d="M10 2l-7 5v8c0 3 7 5 7 5s7-2 7-5V7l-7-5z" fill="#fff" fill-opacity="0.2" stroke="#fff" stroke-width="1.5"/></svg>Sprawdź swoją wycenę <span class="arr">→</span>',
            social_count: '2,847+ osób',
            social_text: 'już porównało oferty w tym miesiącu',
            trust1: '100% za darmo', trust2: 'Bez zobowiązań', trust3: 'Zajmie ok. 40 sekund',
            how_title: 'Jak to działa?',
            step1_h: 'Odpowiadasz na pytania', step1_p: 'Kilka prostych pytań o Twoje potrzeby. Żadnych formalności ani ukrytych haczyków.',
            step2_h: 'Porównujemy oferty', step2_p: 'Analizujemy propozycje od najlepszych towarzystw na rynku i wybieramy te, które pasują do Ciebie.',
            step3_h: 'Dostajesz ofertę', step3_p: 'Doradca dzwoni z konkretnymi propozycjami. Ty decydujesz — bez presji, w swoim tempie.',
            survey_title: 'Uzyskaj bezpłatną wycenę', survey_sub: 'Krótka ankieta — odpowiedzi zajmą chwilę',
            q1: 'W jakim jesteś wieku?',
            q2: 'Jaką kwotę ubezpieczenia rozważasz?',
            q3: 'Jaki jest Twój kod pocztowy?', q3_hint: 'Dzięki temu dopasujemy agenta w Twojej okolicy.',
            q4: 'Na jaki e-mail wysłać wycenę?',
            q5: 'Jak się nazywasz?',
            partners_label: 'W partnerstwie z:',
            q6: 'Twój numer telefonu', q6_hint: 'Doradca zadzwoni pod ten numer z ofertą.',
            consent: 'Wyrażam zgodę na kontakt telefoniczny i przetwarzanie danych osobowych w celu przedstawienia oferty ubezpieczenia na życie.*',
            btn_next: 'Dalej', btn_back: '← Wstecz', btn_submit: 'Wyślij i porównaj oferty',
            how_subtitle: 'Trzy proste kroki do ochrony Twojej rodziny',
            sv_step: 'Krok <span class="sv-cur">$N</span> z 6',
            sv_step_almost: 'Krok <span class="sv-cur">4</span> z 6 — prawie gotowe!',
            sv_step_last: 'Ostatni krok!',
            sf1: 'Dane szyfrowane i chronione', sf2: 'Zajmie ok. 40 sekund',
            done_h: 'Dziękujemy!', done_p1: 'Twoje zgłoszenie zostało przyjęte.', done_p2: 'Doradca odezwie się w ciągu', done_p3: 'z dopasowaną ofertą.',
            partners_title: 'Porównujemy oferty najlepszych towarzystw',
            why_title: 'Dlaczego warto?',
            w1_h: 'Szybko i wygodnie', w1_p: 'Cały proces zajmuje mniej niż minutę. Bez wychodzenia z domu.',
            w2_h: 'Ochrona na przyszłość', w2_p: 'Świadczenie z polisy ułatwi Twoim bliskim pokrycie kosztów i innych wydatków.',
            w3_h: 'Spokój ducha', w3_p: 'Inwestując w swoje bezpieczeństwo, chronisz siebie i bliskich przed zbędnym stresem.',
            w4_h: 'Ludzki kontakt', w4_p: 'Żaden automat — dzwoni prawdziwy doradca, który odpowie na każde pytanie.',
            faq_title: 'Często zadawane pytania',
            faq1_q: 'Ile kosztuje ubezpieczenie na życie?', faq1_a: 'To zależy od wielu czynników — wieku, sumy ubezpieczenia, stanu zdrowia. Orientacyjnie składki zaczynają się od ok. 35–50 zł/mies. i mogą sięgać 200 zł+ przy szerokim zakresie ochrony.',
            faq2_q: 'Czy ubezpieczenie na życie jest obowiązkowe?', faq2_a: 'Nie — jest dobrowolne. Natomiast wiele banków wymaga go przy kredycie hipotecznym. Polecane osobom z rodziną na utrzymaniu.',
            faq3_q: 'Jak szybko ktoś się ze mną skontaktuje?', faq3_a: 'Zwykle w ciągu jednego dnia roboczego. Doradca zadzwoni pod numer, który zostawisz w ankiecie.',
            faq4_q: 'Czy moje dane są bezpieczne?', faq4_a: 'Tak. Przetwarzamy je zgodnie z RODO wyłącznie w celu przygotowania oferty. Nie udostępniamy ich osobom trzecim.',
            faq5_q: 'Czy muszę się na coś zdecydować od razu?', faq5_a: 'Nie. Dostajesz propozycje i decydujesz w swoim tempie — bez presji, bez zobowiązań.',
            cta_h: 'Twoja rodzina zasługuje na bezpieczeństwo', cta_p: 'Nie odkładaj na później. Sprawdź, jak mało kosztuje spokój ducha. Ankieta trwa 40 sekund.', cta_btn: 'Sprawdź swoją wycenę teraz →', cta_note: 'Bez zobowiązań, bez kosztów',
            err_age: 'Wybierz swój przedział wiekowy.',
            err_zip: 'Wpisz poprawny kod pocztowy.',
            err_email: 'Wpisz poprawny adres e-mail.',
            err_name: 'Wpisz swoje imię i nazwisko.',
            err_phone: 'Wpisz poprawny numer telefonu (9 cyfr).',
            err_consent: 'Zaznacz zgodę, żebyśmy mogli się z Tobą skontaktować.',
            ph_zip: 'np. 00-001', ph_email: 'jan@example.pl', ph_name: 'Imię', ph_surname: 'Nazwisko', ph_phone: '500 000 000',
        },
        en: {
            brand: 'PolisyNaZycie.pl',
            nav_cta: 'Take the survey',
            hero_badge: 'Free comparison of offers',
            hero_h1: 'Protect your family\'s future — <span class="text-accent">find the perfect policy</span>',
            hero_sub: 'See how a small monthly amount can give your family peace of mind and financial security. Compare offers from top insurers in 40 seconds.',
            hero_btn: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" style="margin-right:8px"><path d="M10 2l-7 5v8c0 3 7 5 7 5s7-2 7-5V7l-7-5z" fill="#fff" fill-opacity="0.2" stroke="#fff" stroke-width="1.5"/></svg>Get your quote <span class="arr">→</span>',
            social_count: '2,847+ people',
            social_text: 'have compared offers this month',
            trust1: '100% free', trust2: 'No obligations', trust3: 'Takes about 40 seconds',
            how_title: 'How does it work?',
            step1_h: 'Answer questions', step1_p: 'A few simple questions about your needs. No formalities, no hidden catches.',
            step2_h: 'We compare offers', step2_p: 'We analyze proposals from the best insurers on the market and select those that suit you.',
            step3_h: 'You get an offer', step3_p: 'An advisor calls with specific proposals. You decide — no pressure, at your own pace.',
            survey_title: 'Get a free quote', survey_sub: 'Short survey — answers will only take a moment',
            q1: 'How old are you?',
            q2: 'What insurance amount are you considering?',
            q3: 'What is your postal code?', q3_hint: 'This helps us match you with a local agent.',
            q4: 'What e-mail should we send the quote to?',
            q5: 'What is your name?',
            partners_label: 'In partnership with:',
            q6: 'Your phone number', q6_hint: 'An advisor will call this number with the offer.',
            consent: 'I consent to being contacted by phone and to the processing of my personal data in order to receive a life insurance offer.*',
            btn_next: 'Next', btn_back: '← Back', btn_submit: 'Submit & compare offers',
            how_subtitle: 'Three simple steps to protect your family',
            sv_step: 'Step <span class="sv-cur">$N</span> of 6',
            sv_step_almost: 'Step <span class="sv-cur">4</span> of 6 — almost done!',
            sv_step_last: 'Last step!',
            sf1: 'Data encrypted & protected', sf2: 'Takes about 40 seconds',
            done_h: 'Thank you!', done_p1: 'Your request has been submitted.', done_p2: 'An advisor will reach out within', done_p3: 'with a tailored offer.',
            partners_title: 'We compare offers from top insurers',
            why_title: 'Why is it worth it?',
            w1_h: 'Fast & convenient', w1_p: 'The whole process takes less than a minute. From the comfort of your home.',
            w2_h: 'Protection for the future', w2_p: 'Insurance benefits will help your loved ones cover costs and unexpected expenses.',
            w3_h: 'Peace of mind', w3_p: 'By investing in your security, you protect yourself and your family from unnecessary stress.',
            w4_h: 'Human contact', w4_p: 'No bots — a real advisor calls and answers all your questions.',
            faq_title: 'Frequently asked questions',
            faq1_q: 'How much does life insurance cost?', faq1_a: 'It depends on many factors — age, coverage amount, health. Premiums typically start from about 35–50 PLN/month.',
            faq2_q: 'Is life insurance mandatory?', faq2_a: 'No — it\'s voluntary. However, many banks require it for a mortgage. Recommended for those with dependents.',
            faq3_q: 'How quickly will someone contact me?', faq3_a: 'Usually within one business day. The advisor will call the number you provide.',
            faq4_q: 'Is my data safe?', faq4_a: 'Yes. We process it in compliance with GDPR solely for preparing the offer. We do not share it with third parties.',
            faq5_q: 'Do I have to decide right away?', faq5_a: 'No. You receive proposals and decide at your own pace — no pressure, no obligations.',
            cta_h: 'Your family deserves security', cta_p: 'Don\'t put it off. See how little peace of mind costs. The survey takes 40 seconds.', cta_btn: 'Get your quote now →', cta_note: 'No obligations, no cost',
            err_age: 'Please select your age range.',
            err_zip: 'Please enter a valid postal code.',
            err_email: 'Please enter a valid e-mail address.',
            err_name: 'Please enter your first and last name.',
            err_phone: 'Please enter a valid phone number (9 digits).',
            err_consent: 'Please accept the consent to proceed.',
            ph_zip: 'e.g. 00-001', ph_email: 'john@example.com', ph_name: 'First name', ph_surname: 'Last name', ph_phone: '500 000 000',
        },
        ua: {
            brand: 'PolisyNaZycie.pl',
            nav_cta: 'Заповніть анкету',
            hero_badge: 'Безкоштовне порівняння пропозицій',
            hero_h1: 'Захистіть майбутнє своєї родини — <span class="text-accent">знайдіть ідеальний поліс</span>',
            hero_sub: 'Дізнайтеся, як невелика сума щомісяця може дати вашій родині спокій та фінансову безпеку. Порівняйте пропозиції найкращих страховиків за 40 секунд.',
            hero_btn: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" style="margin-right:8px"><path d="M10 2l-7 5v8c0 3 7 5 7 5s7-2 7-5V7l-7-5z" fill="#fff" fill-opacity="0.2" stroke="#fff" stroke-width="1.5"/></svg>Отримати оцінку <span class="arr">→</span>',
            social_count: '2,847+ людей',
            social_text: 'вже порівняли пропозиції цього місяця',
            trust1: '100% безкоштовно', trust2: 'Без зобов\'язань', trust3: 'Займе близько 40 секунд',
            how_title: 'Як це працює?',
            step1_h: 'Відповідаєте на запитання', step1_p: 'Кілька простих запитань про ваші потреби. Жодних формальностей.',
            step2_h: 'Ми порівнюємо пропозиції', step2_p: 'Аналізуємо пропозиції від найкращих страхових компаній і обираємо ті, що підходять вам.',
            step3_h: 'Отримуєте пропозицію', step3_p: 'Консультант телефонує з конкретними пропозиціями. Ви вирішуєте — без тиску.',
            survey_title: 'Отримайте безкоштовну оцінку', survey_sub: 'Коротка анкета — відповіді займуть хвилину',
            q1: 'Скільки вам років?',
            q2: 'Яку суму страхування ви розглядаєте?',
            q3: 'Який ваш поштовий індекс?', q3_hint: 'Це допоможе підібрати агента у вашому регіоні.',
            q4: 'На яку e-mail адресу надіслати пропозицію?',
            q5: 'Як вас звати?',
            partners_label: 'У партнерстві з:',
            q6: 'Ваш номер телефону', q6_hint: 'Консультант зателефонує на цей номер.',
            consent: 'Я даю згоду на телефонний контакт та обробку персональних даних з метою представлення пропозиції страхування життя.*',
            btn_next: 'Далі', btn_back: '← Назад', btn_submit: 'Надіслати та порівняти',
            how_subtitle: 'Три простих кроки для захисту вашої родини',
            sv_step: 'Крок <span class="sv-cur">$N</span> з 6',
            sv_step_almost: 'Крок <span class="sv-cur">4</span> з 6 — майже готово!',
            sv_step_last: 'Останній крок!',
            sf1: 'Дані зашифровані та захищені', sf2: 'Займе близько 40 секунд',
            done_h: 'Дякуємо!', done_p1: 'Ваш запит прийнято.', done_p2: 'Консультант зв\'яжеться протягом', done_p3: 'з індивідуальною пропозицією.',
            partners_title: 'Порівнюємо пропозиції найкращих страховиків',
            why_title: 'Чому це варто?',
            w1_h: 'Швидко та зручно', w1_p: 'Весь процес займає менше хвилини. Не виходячи з дому.',
            w2_h: 'Захист на майбутнє', w2_p: 'Виплата з полісу допоможе вашим близьким покрити витрати та інші видатки.',
            w3_h: 'Спокій душі', w3_p: 'Інвестуючи у свою безпеку, ви захищаєте себе та близьких від зайвого стресу.',
            w4_h: 'Живий контакт', w4_p: 'Жодних ботів — дзвонить справжній консультант, який відповість на всі запитання.',
            faq_title: 'Часті запитання',
            faq1_q: 'Скільки коштує страхування життя?', faq1_a: 'Залежить від багатьох факторів — віку, суми покриття, стану здоров\'я. Орієнтовно внески починаються від 35–50 злотих/міс.',
            faq2_q: 'Чи обов\'язкове страхування життя?', faq2_a: 'Ні — воно добровільне. Але багато банків вимагають його при іпотеці.',
            faq3_q: 'Як швидко зі мною зв\'яжуться?', faq3_a: 'Зазвичай протягом одного робочого дня.',
            faq4_q: 'Чи мої дані в безпеці?', faq4_a: 'Так. Обробляємо їх відповідно до GDPR виключно для підготовки пропозиції.',
            faq5_q: 'Чи потрібно вирішувати одразу?', faq5_a: 'Ні. Ви отримуєте пропозиції та вирішуєте у своєму темпі.',
            cta_h: 'Ваша родина заслуговує на безпеку', cta_p: 'Не відкладайте. Дізнайтеся, як мало коштує спокій. Анкета займає 40 секунд.', cta_btn: 'Отримати оцінку зараз →', cta_note: 'Без зобов\'язань, без витрат',
            err_age: 'Виберіть свій віковий діапазон.',
            err_zip: 'Введіть правильний поштовий індекс.',
            err_email: 'Введіть правильну адресу e-mail.',
            err_name: 'Введіть своє ім\'я та прізвище.',
            err_phone: 'Введіть правильний номер телефону (9 цифр).',
            err_consent: 'Позначте згоду, щоб продовжити.',
            ph_zip: 'напр. 00-001', ph_email: 'ivan@example.com', ph_name: "Ім'я", ph_surname: 'Прізвище', ph_phone: '500 000 000',
        }
    };

    let lang = 'pl';

    function setLang(l) {
        lang = l;
        document.documentElement.lang = l === 'ua' ? 'uk' : l;

        // buttons
        document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === l));

        // texts
        const t = T[l];
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (t[key] !== undefined) el.innerHTML = t[key];
        });

        // placeholders
        const phMap = { fKod: 'ph_zip', fEmail: 'ph_email', fImie: 'ph_name', fNazwisko: 'ph_surname', fTel: 'ph_phone' };
        for (const [id, key] of Object.entries(phMap)) {
            const inp = document.getElementById(id);
            if (inp && t[key]) inp.placeholder = t[key];
        }

        // step labels
        updateStepLabels();
    }

    function updateStepLabels() {
        const t = T[lang];
        document.querySelectorAll('.sv').forEach(el => {
            const n = el.dataset.step;
            const lbl = el.querySelector('.sv-label');
            if (!lbl) return;
            if (n === '4') lbl.innerHTML = t.sv_step_almost;
            else if (n === '6') lbl.innerHTML = t.sv_step_last;
            else lbl.innerHTML = t.sv_step.replace('$N', n);
        });
    }

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => setLang(btn.dataset.lang));
    });

    // ============================
    //  SURVEY LOGIC
    // ============================
    const TOTAL = 6;
    let cur = 1;
    const data = {};

    const form = document.getElementById('surveyForm');
    const fill = document.getElementById('progressFill');
    const done = document.getElementById('svDone');
    const foot = document.getElementById('surveyFoot');

    function go(step) {
        cur = step;
        document.querySelectorAll('.sv').forEach(el => el.classList.remove('active'));
        const target = document.querySelector(`.sv[data-step="${step}"]`);
        if (target) target.classList.add('active');
        fill.style.width = ((step / TOTAL) * 100) + '%';
        clearErr(step);
        const inp = target && target.querySelector('input:not([type=checkbox]):not([type=range])');
        if (inp) setTimeout(() => inp.focus(), 320);
    }

    function showErr(step, msg) { const el = document.getElementById('err' + step); if (el) el.textContent = msg; }
    function clearErr(step) { const el = document.getElementById('err' + step); if (el) el.textContent = ''; }

    function ok(step) {
        clearErr(step);
        const t = T[lang];
        switch (step) {
            case 1:
                if (!data.wiek) { showErr(1, t.err_age); return false; }
                return true;
            case 2: return true;
            case 3: {
                const v = document.getElementById('fKod').value.trim();
                if (!v || !/^\d{2}-?\d{3}$/.test(v)) { showErr(3, t.err_zip); document.getElementById('fKod').classList.add('err'); return false; }
                document.getElementById('fKod').classList.remove('err'); data.kod = v; return true;
            }
            case 4: {
                const v = document.getElementById('fEmail').value.trim();
                if (!v || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) { showErr(4, t.err_email); document.getElementById('fEmail').classList.add('err'); return false; }
                document.getElementById('fEmail').classList.remove('err'); data.email = v; return true;
            }
            case 5: {
                const imie = document.getElementById('fImie').value.trim();
                const nazwisko = document.getElementById('fNazwisko').value.trim();
                if (!imie || !nazwisko) { 
                    showErr(5, t.err_name); 
                    if (!imie) document.getElementById('fImie').classList.add('err');
                    if (!nazwisko) document.getElementById('fNazwisko').classList.add('err');
                    return false; 
                }
                document.getElementById('fImie').classList.remove('err');
                document.getElementById('fNazwisko').classList.remove('err');
                data.imie = imie;
                data.nazwisko = nazwisko;
                return true;
            }
            case 6: {
                const v = document.getElementById('fTel').value.trim().replace(/[\s\-\(\)\+]/g, '');
                if (!/^\d{9,12}$/.test(v)) { showErr(6, t.err_phone); document.getElementById('fTel').classList.add('err'); return false; }
                if (!document.getElementById('fConsent').checked) { showErr(6, t.err_consent); return false; }
                document.getElementById('fTel').classList.remove('err'); data.telefon = document.getElementById('fTel').value.trim(); return true;
            }
        }
        return true;
    }

    // pills
    document.querySelectorAll('.pill').forEach(btn => {
        btn.addEventListener('click', function () {
            document.querySelectorAll(`.pill[data-name="${this.dataset.name}"]`).forEach(b => b.classList.remove('on'));
            this.classList.add('on');
            data[this.dataset.name] = this.dataset.value;
            setTimeout(() => { if (ok(cur)) go(cur + 1); }, 280);
        });
    });

    // range
    const range = document.getElementById('rangeInput');
    const rVal = document.getElementById('rangeVal');
    function syncRange() {
        const v = parseInt(range.value);
        const pct = ((v - 50000) / (700000 - 50000)) * 100;
        range.style.setProperty('--pct', pct + '%');
        rVal.textContent = v.toLocaleString('pl-PL') + ' zł';
        data.kwota = v;
    }
    if (range) { range.addEventListener('input', syncRange); syncRange(); }

    // next
    document.querySelectorAll('.sv-next').forEach(btn => {
        btn.addEventListener('click', function () {
            const target = parseInt(this.dataset.go);
            if (ok(target - 1)) go(target);
        });
    });

    // back
    document.querySelectorAll('.sv-back').forEach(btn => {
        btn.addEventListener('click', function () {
            const target = parseInt(this.dataset.go);
            go(target);
        });
    });

    // enter key
    document.querySelectorAll('.sv-field input').forEach(inp => {
        inp.addEventListener('keydown', function (e) {
            if (e.key === 'Enter') { e.preventDefault(); const btn = this.closest('.sv').querySelector('.sv-next, .btn'); if (btn) btn.click(); }
        });
    });

    // submit
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        if (!ok(6)) return;
        data.timestamp = new Date().toISOString();
        data.lang = lang;
        const list = JSON.parse(localStorage.getItem('pnz_leads') || '[]');
        list.push(data);
        localStorage.setItem('pnz_leads', JSON.stringify(list));
        sendData(data);
        form.style.display = 'none';
        foot.style.display = 'none';
        done.classList.add('show');
        fill.style.width = '100%';
    });

    async function sendData(d) {
        /* Uncomment your backend:
        try { await fetch('https://your-api.com/leads', { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(d) }); } catch(e) {}
        */
        console.log('Lead submitted:', d);
    }

    // navbar shadow
    window.addEventListener('scroll', function () {
        document.getElementById('navbar').style.boxShadow = window.scrollY > 40 ? '0 2px 12px rgba(0,0,0,.06)' : 'none';
    });

    // smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', function (e) {
            e.preventDefault();
            const t = document.querySelector(this.getAttribute('href'));
            if (t) window.scrollTo({ top: t.getBoundingClientRect().top + window.scrollY - 70, behavior: 'smooth' });
        });
    });

    // init
    go(1);
    setLang('pl');

})();
