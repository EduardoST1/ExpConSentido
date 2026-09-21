(() => {
  const toggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".mobile-menu");
  const progress = document.querySelector(".progress");
  const form = document.querySelector("#contacto-form");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const setMenu = (open) => {
    if (!toggle || !menu) return;
    menu.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
  };

  toggle?.addEventListener("click", () => {
    setMenu(!menu.classList.contains("is-open"));
  });

  menu?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenu(false));
  });

  const updateProgress = () => {
    if (!progress) return;
    const doc = document.documentElement;
    const max = doc.scrollHeight - window.innerHeight;
    const value = max > 0 ? window.scrollY / max : 0;
    progress.style.width = `${Math.min(100, Math.max(0, value * 100))}%`;
  };

  window.addEventListener("scroll", updateProgress, { passive: true });
  updateProgress();

  if (!reduceMotion && "IntersectionObserver" in window) {
    const items = document.querySelectorAll(".reveal");
    items.forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(16px)";
    });
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.style.transition = "opacity 400ms ease, transform 400ms ease";
          entry.target.style.opacity = "1";
          entry.target.style.transform = "none";
          io.unobserve(entry.target);
        });
      },
      { threshold: 0.12 }
    );
    items.forEach((el) => io.observe(el));
  }

  const fields = {
    nombre: { required: true, message: "Escribe tu nombre." },
    correo: {
      required: true,
      test: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),
      message: "Usa un correo válido.",
    },
    interes: { required: true, message: "Elige una experiencia." },
    mensaje: { required: true, message: "Cuéntanos qué te gustaría vivir." },
  };

  const showError = (name, text) => {
    const node = form?.querySelector(`[data-error-for="${name}"]`);
    const input = form?.elements[name];
    if (node) node.textContent = text || "";
    input?.setAttribute("aria-invalid", text ? "true" : "false");
  };

  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    const status = form.querySelector(".form-status");
    let firstInvalid = null;
    let ok = true;

    Object.entries(fields).forEach(([name, rule]) => {
      const value = String(form.elements[name]?.value || "").trim();
      const valid = value && (!rule.test || rule.test(value));
      if (!valid) {
        ok = false;
        showError(name, rule.message);
        if (!firstInvalid) firstInvalid = form.elements[name];
      } else {
        showError(name, "");
      }
    });

    if (!ok) {
      status.dataset.state = "err";
      status.textContent = "Revisa los campos marcados para continuar.";
      firstInvalid?.focus();
      return;
    }

    const data = new FormData(form);
    const subject = encodeURIComponent("Consulta Experiencias conSentido");
    const body = encodeURIComponent(
      `Nombre: ${data.get("nombre")}\nCorreo: ${data.get("correo")}\nInterés: ${data.get("interes")}\n\n${data.get("mensaje")}`
    );
    status.dataset.state = "ok";
    status.textContent = "Listo. Se abrirá tu correo para enviar la consulta. También puedes escribirnos por Instagram o Facebook.";
    window.location.href = `mailto:hola@experienciasconsentido.com?subject=${subject}&body=${body}`;
  });
})();
