const root = document.documentElement;
const body = document.body;
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = themeToggle.querySelector("i");
const themeMeta = document.querySelector('meta[name="theme-color"]');
const langToggle = document.getElementById("lang-toggle");
const menuToggle = document.getElementById("menu-toggle");
const menuIcon = menuToggle.querySelector("i");
const navLinks = document.getElementById("nav-links");

const savedTheme = localStorage.getItem("theme");
const preferredDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
setTheme(savedTheme || (preferredDark ? "dark" : "light"));

function setTheme(theme) {
    root.setAttribute("data-theme", theme);
    themeIcon.classList.toggle("ph-moon", theme !== "dark");
    themeIcon.classList.toggle("ph-sun", theme === "dark");
    themeToggle.setAttribute("aria-label", theme === "dark" ? "Açık temaya geç" : "Koyu temaya geç");
    themeMeta.setAttribute("content", theme === "dark" ? "#07111f" : "#f8fafc");
}

themeToggle.addEventListener("click", () => {
    const nextTheme = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
});

menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuIcon.classList.toggle("ph-list", !isOpen);
    menuIcon.classList.toggle("ph-x", isOpen);
});

navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuIcon.classList.add("ph-list");
        menuIcon.classList.remove("ph-x");
    });
});

const translations = {
    tr: {
        nav_about: "Hakkımda", nav_projects: "Projeler", nav_services: "Hizmetler", nav_ai: "AI ile Çalışma", nav_education: "Eğitim", nav_contact: "İletişim",
        services_eyebrow: "İşletmeler için",
        services_title: "İşletmeniz için web sitesi veya yönetim yazılımı mı arıyorsunuz?",
        services_desc: "Sabit fiyatlı web sitesi paketleri, sektöre özel çözümler ve firmaya özel yönetim yazılımı. Net kapsam, net teslim süresi, sürpriz maliyet yok.",
        services_btn: "Hizmetleri ve Fiyatları Gör",
        hero_eyebrow: "Yazılım Mühendisliği Öğrencisi · Kurucu",
        hero_title: "Merhaba, ben Onur.",
        hero_subtitle: "Geleceğin teknolojilerini kodluyorum.",
        hero_desc: "Geleneksel yöntemleri modern kodlama disiplinleriyle harmanlıyor, dijital dünyada kendi imparatorluğumu inşa ediyorum. Edu.X gibi vizyoner projelerin kurucusu olarak, sadece kod yazmıyor, devrim niteliğinde kullanıcı deneyimleri kurguluyorum.",
        hero_btn_projects: "Projelerimi Gör", hero_btn_ai: "Nasıl Çalışıyorum?",
        projects_eyebrow: "Seçilmiş çalışmalar", title_projects: "Projeler", projects_intro: "Her proje; ihtiyaç analizi, geliştirme süreci ve ortaya çıkan çözüm üzerinden sunulmuştur.",
        featured_badge: "Öne Çıkan Proje", project_salon_title: "Güzellik Merkezi Yönetim Paneli", project_salon_summary: "Randevu, müşteri, personel, satış ve işletme raporlarını tek noktada yöneten kapsamlı web uygulaması.",
        tag_appointment: "Randevu", tag_cash: "Kasa", tag_reports: "Raporlar", tag_staff: "Personel",
        project_1_title: "Tekstil Firması Kurumsal Web Sitesi", project_1_summary: "Bir tekstil firmasının ürünlerini ve kurumsal kimliğini dijital ortamda sunan responsive tanıtım sitesi.",
        project_2_title: "Oto Çekici Demo Web Sitesi", project_2_summary: "Yerel hizmet işletmeleri için hızlı iletişim ve mobil kullanımı öne çıkaran konsept çalışma.",
        project_3_title: "Öğrenci Not Paylaşım Platformu", project_3_summary: "Öğrencilerin ders kaynaklarını yükleyip filtreleyerek paylaşabildiği işlevsel platform denemesi.", project_btn_text: "Projeyi İncele",
        ai_eyebrow: "Şeffaf çalışma yaklaşımı", ai_title: "Yapay zekâyı nasıl kullanıyorum?",
        ai_desc_1: "Yapay zekâyı yalnızca kod üretmek için değil; iş problemini anlamak, gereksinimleri çıkarmak, geliştirme aşamalarını planlamak, hata nedenlerini araştırmak, test senaryoları hazırlamak ve dokümantasyon oluşturmak için kullanıyorum.",
        ai_desc_2: "Projeleri tek komutla oluşturmaya çalışmak yerine küçük ve doğrulanabilir aşamalara ayırıyorum. Ürün kararları, testlerin yürütülmesi ve ortaya çıkan sonucun sorumluluğu bana ait.",
        step_1_title: "İhtiyacı anlama", step_1_desc: "Problemi, kullanıcıyı ve başarı ölçütünü netleştirme.", step_2_title: "Kapsam ve plan", step_2_desc: "Özellikleri, sınırları ve geliştirme sırasını belirleme.", step_3_title: "Aşamalı geliştirme", step_3_desc: "Her özelliği küçük, takip edilebilir adımlarla uygulama.", step_4_title: "Kontrol ve test", step_4_desc: "Normal kullanımın yanında hatalı ve uç durumları deneme.", step_5_title: "İyileştirme", step_5_desc: "Geri bildirimlere göre hataları ve kullanıcı deneyimini düzeltme.", step_6_title: "Yayına hazırlık", step_6_desc: "Son kontroller, dokümantasyon ve güvenli teslim.",
        ai_note: "AI geliştirme hızımı artıran bir araçtır; ortaya çıkan işi anlamak, kontrol etmek ve sorumluluğunu almak çalışma biçimimin temelidir.",
        education_eyebrow: "Öğrenme sürecim", title_education: "Eğitim",
        edu_1_title: "Doğuş Üniversitesi · Yazılım Mühendisliği", edu_1_status: "Lisans eğitimi · Devam ediyor", edu_2_title: "Udemy · HTML, CSS ve JavaScript", edu_2_status: "İleri düzey eğitim", edu_3_title: "Udemy · C ve C++ Programlama", edu_3_status: "İleri düzey eğitim", edu_4_title: "42 İstanbul · Havuz Eğitimi", edu_4_status: "Yoğunlaştırılmış program · 2026",
        contact_eyebrow: "İletişim", contact_title: "Bir proje veya fikir üzerine konuşalım.", contact_desc: "Projelerim, çalışma yöntemim veya freelance işler hakkında benimle aşağıdaki kanallardan iletişime geçebilirsiniz.",
        modal_eyebrow: "Proje özeti", footer_text: "Öğreniyor, geliştiriyor ve üretiyorum."
    },
    en: {
        nav_about: "About", nav_projects: "Projects", nav_services: "Services", nav_ai: "Working with AI", nav_education: "Education", nav_contact: "Contact",
        services_eyebrow: "For businesses",
        services_title: "Looking for a website or management software for your business?",
        services_desc: "Fixed-price website packages, industry-specific solutions, and custom management software. Clear scope, clear delivery time, no surprise costs.",
        services_btn: "See Services and Pricing",
        hero_eyebrow: "Software Engineering Student · Founder",
        hero_title: "Hello, I'm Onur.",
        hero_subtitle: "I code the technologies of the future.",
        hero_desc: "Blending traditional methods with modern coding disciplines, I build my own empire in the digital world. As the founder of visionary projects like Edu.X, I dont just write code, I design revolutionary user experiences.",
        hero_btn_projects: "View My Projects", hero_btn_ai: "How Do I Work?",
        projects_eyebrow: "Selected work", title_projects: "Projects", projects_intro: "Each project is presented through its need, development process, and resulting solution.",
        featured_badge: "Featured Project", project_salon_title: "Beauty Center Management Dashboard", project_salon_summary: "A comprehensive web application that manages appointments, customers, staff, sales, and business reports in one place.",
        tag_appointment: "Appointments", tag_cash: "Cash Flow", tag_reports: "Reports", tag_staff: "Staff",
        project_1_title: "Corporate Textile Website", project_1_summary: "A responsive website presenting a textile company's products and corporate identity online.",
        project_2_title: "Towing Service Demo Website", project_2_summary: "A concept project focused on quick contact and mobile use for local service businesses.",
        project_3_title: "Student Note-Sharing Platform", project_3_summary: "A functional platform prototype where students can upload, filter, and share course resources.", project_btn_text: "View Project",
        ai_eyebrow: "A transparent approach", ai_title: "How do I use artificial intelligence?",
        ai_desc_1: "I use AI not only to generate code, but also to understand business problems, extract requirements, plan development stages, investigate errors, prepare test scenarios, and create documentation.",
        ai_desc_2: "Instead of trying to create a project with a single prompt, I divide it into small, verifiable stages. Product decisions, testing, and responsibility for the final result remain mine.",
        step_1_title: "Understand the need", step_1_desc: "Clarify the problem, user, and success criteria.", step_2_title: "Scope and plan", step_2_desc: "Define features, boundaries, and development order.", step_3_title: "Iterative development", step_3_desc: "Implement each feature in small, traceable steps.", step_4_title: "Review and test", step_4_desc: "Test regular use along with invalid and edge cases.", step_5_title: "Improve", step_5_desc: "Refine errors and user experience based on feedback.", step_6_title: "Prepare for release", step_6_desc: "Run final checks, document, and hand over safely.",
        ai_note: "AI helps me develop faster; understanding the output, reviewing it, and taking responsibility for it are central to how I work.",
        education_eyebrow: "My learning path", title_education: "Education",
        edu_1_title: "Doğuş University · Software Engineering", edu_1_status: "Bachelor's degree · In progress", edu_2_title: "Udemy · HTML, CSS and JavaScript", edu_2_status: "Advanced training", edu_3_title: "Udemy · C and C++ Programming", edu_3_status: "Advanced training", edu_4_title: "42 Istanbul · Piscine", edu_4_status: "Intensive program · 2026",
        contact_eyebrow: "Contact", contact_title: "Let's talk about a project or an idea.", contact_desc: "You can reach me through the channels below about my projects, working process, or freelance work.",
        modal_eyebrow: "Project summary", footer_text: "Learning, building, and creating."
    }
};

let currentLang = localStorage.getItem("lang") === "en" ? "en" : "tr";

function changeLanguage(lang) {
    document.querySelectorAll("[data-lang-key]").forEach((element) => {
        const value = translations[lang][element.dataset.langKey];
        if (value) element.textContent = value;
    });
    root.lang = lang;
    langToggle.textContent = lang === "tr" ? "EN" : "TR";
    currentLang = lang;
    localStorage.setItem("lang", lang);
}

langToggle.addEventListener("click", () => changeLanguage(currentLang === "tr" ? "en" : "tr"));
changeLanguage(currentLang);
document.getElementById("current-year").textContent = new Date().getFullYear();

const modal = document.getElementById("modal");
const modalContent = modal.querySelector(".modal-content");
const modalTitle = document.getElementById("modal-title");
const modalDesc = document.getElementById("modal-desc");
const modalSlider = document.getElementById("modal-slider");
const closeModalButton = modal.querySelector(".close-modal");
const previousButton = modal.querySelector(".slider-nav.prev");
const nextButton = modal.querySelector(".slider-nav.next");
let currentSlide = 0;
let totalSlides = 0;
let lastFocusedElement = null;

function updateSlider() {
    modalSlider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function stopModalVideos() {
    modalSlider.querySelectorAll("video").forEach((video) => video.pause());
}

function closeModal() {
    stopModalVideos();
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
    body.classList.remove("modal-open");
    lastFocusedElement?.focus();
}

document.querySelectorAll(".open-modal-btn").forEach((button) => {
    button.addEventListener("click", () => {
        lastFocusedElement = button;
        modalTitle.textContent = button.dataset[`title${currentLang === "tr" ? "Tr" : "En"}`];
        modalDesc.innerHTML = button.dataset[`desc${currentLang === "tr" ? "Tr" : "En"}`];
        modalSlider.replaceChildren();
        currentSlide = 0;
        const mediaItems = button.dataset.media.split(",").map((item) => item.trim()).filter(Boolean);

        mediaItems.forEach((item) => {
            const slide = document.createElement("div");
            slide.className = "slider-item";
            if (item.toLowerCase().endsWith(".mp4")) {
                const video = document.createElement("video");
                video.src = item;
                video.controls = true;
                video.muted = true;
                video.playsInline = true;
                video.preload = "metadata";
                slide.appendChild(video);
            } else {
                const image = document.createElement("img");
                image.src = item;
                image.alt = `${modalTitle.textContent} görseli`;
                image.loading = "lazy";
                slide.appendChild(image);
            }
            modalSlider.appendChild(slide);
        });

        totalSlides = mediaItems.length;
        previousButton.hidden = totalSlides < 2;
        modalSlider.parentElement.style.display = totalSlides === 0 ? "none" : "block";
        nextButton.hidden = totalSlides < 2;
        updateSlider();
        modal.classList.add("active");
        modal.setAttribute("aria-hidden", "false");
        body.classList.add("modal-open");
        modalContent.focus();
    });
});

nextButton.addEventListener("click", () => { currentSlide = (currentSlide + 1) % totalSlides; updateSlider(); });
previousButton.addEventListener("click", () => { currentSlide = (currentSlide - 1 + totalSlides) % totalSlides; updateSlider(); });
closeModalButton.addEventListener("click", closeModal);
modal.addEventListener("click", (event) => { if (event.target === modal) closeModal(); });
document.addEventListener("keydown", (event) => {
    if (!modal.classList.contains("active")) return;
    if (event.key === "Escape") closeModal();
    if (event.key === "ArrowRight" && totalSlides > 1) { currentSlide = (currentSlide + 1) % totalSlides; updateSlider(); }
    if (event.key === "ArrowLeft" && totalSlides > 1) { currentSlide = (currentSlide - 1 + totalSlides) % totalSlides; updateSlider(); }
});


