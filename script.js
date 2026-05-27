const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      siteNav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const contactForm = document.querySelector(".contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const submitButton = contactForm.querySelector("button[type='submit']");

    if (submitButton) {
      submitButton.textContent = "Request Sent";
      submitButton.disabled = true;
    }
  });
}

const modalTriggers = document.querySelectorAll(".modal-trigger");
const modalBackdrop = document.querySelector(".modal-backdrop");
const scheduleModal = document.querySelector(".schedule-modal");
const modalClose = document.querySelector(".modal-close");
const scheduleForm = document.querySelector(".schedule-form");

function setModalOpen(isOpen) {
  if (!modalBackdrop || !scheduleModal) {
    return;
  }

  modalBackdrop.hidden = !isOpen;
  scheduleModal.hidden = !isOpen;
  document.body.style.overflow = isOpen ? "hidden" : "";
}

modalTriggers.forEach((trigger) => {
  trigger.addEventListener("click", () => setModalOpen(true));
});

if (modalBackdrop) {
  modalBackdrop.addEventListener("click", () => setModalOpen(false));
}

if (modalClose) {
  modalClose.addEventListener("click", () => setModalOpen(false));
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setModalOpen(false);
  }
});

if (scheduleForm) {
  scheduleForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const subject = encodeURIComponent("M5X Mechanix Service Request");
    window.location.href = `mailto:quest.mullins@gmail.com?subject=${subject}`;
    setModalOpen(false);
  });
}
