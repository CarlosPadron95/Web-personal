// Configuración del endpoint de formulario (ej. Formspree o Web3Forms)
// Reemplaza esto con tu URL de endpoint cuando registres tu formulario
const FORM_ENDPOINT = "https://api.web3forms.com/submit"; 

// traducciones del portfolio en español e inglés
const translations = {
  es: {
    nav_about: "Sobre Mí",
    nav_services: "Servicios",
    nav_projects: "Proyectos",
    nav_contact: "Contacto",
    hero_status: "Disponible para proyectos",
    hero_welcome: "Hola, soy",
    hero_desc: "Desarrollador Full-Stack enfocado en crear aplicaciones web basadas en datos. Construyo soluciones robustas y elegantes desde el diseño de la API hasta la interfaz final.",
    btn_projects: "Ver Proyectos",
    btn_contact: "Hablemos",
    about_title: "Sobre Mí",
    about_subtitle: "Mi trayectoria, habilidades y formación especializada.",
    about_bio_title: "Quién soy",
    about_bio_p1: "Soy un desarrollador de Las Palmas de Gran Canaria apasionado por construir aplicaciones modernas y completas. Mi enfoque de desarrollo se basa en crear código limpio, mantenible y optimizado para dar la mejor experiencia de usuario.",
    about_bio_p2: "He completado el Máster en Desarrollo Full-Stack en Conquer Blocks, donde he profundizado tanto en la creación de APIs REST robustas como en la implementación de layouts avanzados y lógica frontend interactiva.",
    cert_title: "Certificaciones Destacadas:",
    cert_1: "Máster Full-Stack (Conquer Blocks)",
    cert_2: "Principios SOLID",
    cert_3: "CSS Experto",
    cert_4: "TypeScript y JavaScript Avanzado",
    cert_5: "Desarrollo con Python, SQL y Streamlit",
    cert_6: "Certificación WordPress",
    cert_7: "Linux, Terminal de Comandos y Git",
    skills_title: "Tecnologías y Herramientas",
    skill_solid: "Principios SOLID",
    skill_antigravity: "Google Antigravity",
    skill_stitch: "Google Stitch",
    skill_streamlit: "Streamlit",
    skill_wordpress: "WordPress",
    services_title: "Servicios",
    services_subtitle: "Lo que puedo aportar a tu equipo o proyecto.",
    service_front_title: "Desarrollo Frontend",
    service_front_desc: "Creación de interfaces web atractivas, responsivas y de alto rendimiento utilizando React y JavaScript moderno.",
    service_back_title: "APIs y Backend",
    service_back_desc: "Diseño de APIs REST estructuradas y seguras con Django REST Framework y bases de datos relacionales como PostgreSQL.",
    service_full_title: "Integración Full-Stack",
    service_full_desc: "Desarrollo completo que conecta el frontend con bases de datos y lógica de servidor siguiendo las mejores prácticas.",
    service_opt_title: "Buenas Prácticas",
    service_opt_desc: "Código limpio bajo principios SOLID y control de versiones robusto con Git para asegurar la escalabilidad del software.",
    projects_title: "Proyectos Destacados",
    projects_subtitle: "Una selección de aplicaciones web que he desarrollado.",
    proj_taskflow_desc: "Aplicación Full-Stack para gestión de tareas con dashboard de estadísticas en tiempo real, API REST y base de datos en la nube.",
    proj_titanic_desc: "Aplicación Web interactiva que predice la supervivencia de pasajeros usando Machine Learning y análisis exploratorio de datos.",
    proj_minesweeper_desc: "Juego clásico del Buscaminas desarrollado en React 19. Incorpora el algoritmo recursivo Flood Fill para desvelar celdas vacías.",
    proj_gallery_desc: "Landing Page responsiva para una Galería de Arte Moderno. Maquetación avanzada utilizando CSS Grid y preprocesador SCSS.",
    contact_title: "Contacto",
    contact_subtitle: "Hablemos sobre tu próximo proyecto o vacante disponible.",
    contact_info_title: "Información de contacto",
    contact_info_desc: "Siéntete libre de escribirme para cualquier duda, propuesta de colaboración o simplemente para conectar.",
    email_label: "Email",
    location_label: "Ubicación",
    location_val: "Las Palmas de Gran Canaria, España",
    socials_title: "Mis Redes Sociales",
    form_name_label: "Nombre",
    form_email_label: "Email",
    form_msg_label: "Mensaje",
    form_submit_btn: "Enviar Mensaje",
    footer_rights: "Todos los derechos reservados.",
    footer_credits: "Diseñado y desarrollado con dedicación.",
    
    // textos del formulario
    form_placeholder_name: "Tu nombre...",
    form_placeholder_email: "tuemail@correo.com",
    form_placeholder_msg: "Escribe tu mensaje aquí...",
    form_sending: "Enviando...",
    form_success: "¡Mensaje enviado correctamente! Me pondré en contacto contigo pronto.",
    form_error: "Hubo un problema al enviar tu mensaje. Por favor, inténtalo de nuevo o escríbeme directamente a carlospadrondelgado@gmail.com."
  },
  en: {
    nav_about: "About Me",
    nav_services: "Services",
    nav_projects: "Projects",
    nav_contact: "Contact",
    hero_status: "Available for projects",
    hero_welcome: "Hi, I am",
    hero_desc: "Full-Stack Developer focused on building data-driven web applications. I build robust and elegant solutions from REST API design to the final user interface.",
    btn_projects: "View Projects",
    btn_contact: "Let's Talk",
    about_title: "About Me",
    about_subtitle: "My background, skills and specialized training.",
    about_bio_title: "Who I am",
    about_bio_p1: "I am a developer from Las Palmas de Gran Canaria passionate about building modern, complete web applications. My development focus is on creating clean, maintainable, and optimized code for the best user experience.",
    about_bio_p2: "I completed the Full-Stack Development Master's at Conquer Blocks, where I deepened my knowledge in both building robust REST APIs and implementing advanced layouts and interactive frontend logic.",
    cert_title: "Key Certifications:",
    cert_1: "Full-Stack Master (Conquer Blocks)",
    cert_2: "SOLID Principles",
    cert_3: "CSS Expert",
    cert_4: "TypeScript & Advanced JavaScript",
    cert_5: "Python, SQL & Streamlit Development",
    cert_6: "WordPress Certification",
    cert_7: "Linux, Command Line & Git",
    skills_title: "Technologies & Tools",
    skill_solid: "SOLID Principles",
    skill_antigravity: "Google Antigravity",
    skill_stitch: "Google Stitch",
    skill_streamlit: "Streamlit",
    skill_wordpress: "WordPress",
    services_title: "Services",
    services_subtitle: "What I can bring to your team or project.",
    service_front_title: "Frontend Development",
    service_front_desc: "Creating attractive, responsive, and high-performance web interfaces using React and modern JavaScript.",
    service_back_title: "APIs & Backend",
    service_back_desc: "Designing secure and structured REST APIs with Django REST Framework and relational databases like PostgreSQL.",
    service_full_title: "Full-Stack Integration",
    service_full_desc: "End-to-end development connecting the frontend with databases and server logic following industry best practices.",
    service_opt_title: "Best Practices",
    service_opt_desc: "Clean code under SOLID principles and robust version control with Git to ensure software scalability.",
    projects_title: "Featured Projects",
    projects_subtitle: "A selection of web applications I have built.",
    proj_taskflow_desc: "Full-Stack task management app with real-time statistics dashboard, REST API and cloud database.",
    proj_titanic_desc: "Interactive Web App that predicts passenger survival using Machine Learning and exploratory data analysis.",
    proj_minesweeper_desc: "Classic Minesweeper game built in React 19. Features recursive Flood Fill algorithm to reveal empty cells.",
    proj_gallery_desc: "Responsive landing page for a Modern Art Gallery. Advanced layout utilizing CSS Grid and SCSS preprocessor.",
    contact_title: "Contact",
    contact_subtitle: "Let's talk about your next project or job opening.",
    contact_info_title: "Contact Info",
    contact_info_desc: "Feel free to write to me for any questions, collaboration proposals, or just to connect.",
    email_label: "Email",
    location_label: "Location",
    location_val: "Las Palmas de Gran Canaria, Spain",
    socials_title: "My Social Media",
    form_name_label: "Name",
    form_email_label: "Email",
    form_msg_label: "Message",
    form_submit_btn: "Send Message",
    footer_rights: "All rights reserved.",
    footer_credits: "Designed and developed with dedication.",
    
    // textos del formulario
    form_placeholder_name: "Your name...",
    form_placeholder_email: "youremail@mail.com",
    form_placeholder_msg: "Write your message here...",
    form_sending: "Sending...",
    form_success: "Message sent successfully! I will get back to you soon.",
    form_error: "There was a problem sending your message. Please try again or write to me directly at carlospadrondelgado@gmail.com."
  }
};

// inicializa lucide icons y estado de la web
document.addEventListener("DOMContentLoaded", () => {
  lucide.createIcons();
  
  // establece año actual en footer
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // inicializa idioma desde localStorage o defecto español
  let currentLang = localStorage.getItem("portfolio-lang") || "es";
  applyLanguage(currentLang);

  // controlador del boton de cambio de idioma
  const langToggle = document.getElementById("lang-toggle");
  if (langToggle) {
    langToggle.addEventListener("click", () => {
      currentLang = currentLang === "es" ? "en" : "es";
      localStorage.setItem("portfolio-lang", currentLang);
      applyLanguage(currentLang);
    });
  }

  // menu movil toggle
  const menuToggle = document.getElementById("menu-toggle");
  const mobileNav = document.getElementById("mobile-nav");
  const menuIcon = document.getElementById("menu-icon");

  if (menuToggle && mobileNav) {
    // Inicializar estado aria
    menuToggle.setAttribute("aria-expanded", "false");

    menuToggle.addEventListener("click", () => {
      const isVisible = mobileNav.style.display === "flex";
      mobileNav.style.display = isVisible ? "none" : "flex";
      menuToggle.setAttribute("aria-expanded", isVisible ? "false" : "true");
      
      // cambia el icono de lucide al abrir/cerrar
      if (isVisible) {
        menuToggle.innerHTML = '<i data-lucide="menu"></i>';
      } else {
        menuToggle.innerHTML = '<i data-lucide="x"></i>';
      }
      lucide.createIcons();
    });

    // cierra menu movil al pinchar en un enlace
    const mobileLinks = document.querySelectorAll(".mobile-link");
    mobileLinks.forEach(link => {
      link.addEventListener("click", () => {
        mobileNav.style.display = "none";
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.innerHTML = '<i data-lucide="menu"></i>';
        lucide.createIcons();
      });
    });
  }

  // activa estilos en la cabecera al hacer scroll
  window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // control interactivo del formulario de contacto
  const contactForm = document.getElementById("portfolio-form");
  const formFeedback = document.getElementById("form-feedback");
  const feedbackText = document.getElementById("feedback-text");
  const submitBtn = document.getElementById("submit-btn");

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const lang = localStorage.getItem("portfolio-lang") || "es";
      
      // muestra estado enviando y deshabilita boton
      submitBtn.disabled = true;
      submitBtn.textContent = translations[lang].form_sending;

      // Si hay un endpoint configurado, realizamos un envío real
      if (typeof FORM_ENDPOINT !== "undefined" && FORM_ENDPOINT && FORM_ENDPOINT.trim() !== "") {
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData.entries());

        fetch(FORM_ENDPOINT, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify(data)
        })
        .then(response => {
          if (response.ok) {
            handleFormSuccess(lang);
          } else {
            throw new Error("Form submission failed");
          }
        })
        .catch(error => {
          console.error("Error al enviar el formulario:", error);
          handleFormError(lang);
        });
      } else {
        // Simulación local para desarrollo/testeo
        console.warn("FORM_ENDPOINT no configurado. Simulando envío...");
        setTimeout(() => {
          handleFormSuccess(lang);
        }, 1200);
      }
    });

    function handleFormSuccess(lang) {
      contactForm.reset();
      submitBtn.disabled = false;
      submitBtn.textContent = translations[lang].form_submit_btn;

      feedbackText.textContent = translations[lang].form_success;
      formFeedback.classList.remove("hide");
      formFeedback.style.color = "var(--accent-green)"; // Verde éxito

      setTimeout(() => {
        formFeedback.classList.add("hide");
      }, 5000);
    }

    function handleFormError(lang) {
      submitBtn.disabled = false;
      submitBtn.textContent = translations[lang].form_submit_btn;

      feedbackText.textContent = translations[lang].form_error;
      formFeedback.classList.remove("hide");
      formFeedback.style.color = "#d9534f"; // Rojo error

      setTimeout(() => {
        formFeedback.classList.add("hide");
      }, 7000);
    }
  }
});

// funcion para aplicar las traducciones a todo el dom
function applyLanguage(lang) {
  const elements = document.querySelectorAll("[data-key]");
  elements.forEach(element => {
    const key = element.getAttribute("data-key");
    if (translations[lang] && translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });

  // traduce placeholders de los campos del formulario
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");

  if (nameInput) nameInput.placeholder = translations[lang].form_placeholder_name;
  if (emailInput) emailInput.placeholder = translations[lang].form_placeholder_email;
  if (messageInput) messageInput.placeholder = translations[lang].form_placeholder_msg;

  // actualiza el texto del boton indicador de idioma (muestra el opuesto al actual)
  const langText = document.getElementById("lang-text");
  if (langText) {
    langText.textContent = lang === "es" ? "EN" : "ES";
  }

  // actualiza lang en el tag html
  document.documentElement.setAttribute("lang", lang);

  // actualiza labels de accesibilidad (a11y)
  const langToggleBtn = document.getElementById("lang-toggle");
  if (langToggleBtn) {
    langToggleBtn.setAttribute("aria-label", lang === "es" ? "Cambiar idioma" : "Change language");
  }
  const menuToggleBtn = document.getElementById("menu-toggle");
  if (menuToggleBtn) {
    menuToggleBtn.setAttribute("aria-label", lang === "es" ? "Abrir menú" : "Open menu");
  }
}
