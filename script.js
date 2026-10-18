const menu = document.querySelector('.menu');
const nav = document.querySelector('#primary-nav');
const header = document.querySelector('.site-header');

if (menu && nav) {
  const closeMenu = () => {
    nav.classList.remove('open');
    menu.setAttribute('aria-expanded', 'false');
    menu.setAttribute('aria-label', 'Open menu');
    menu.textContent = '☰';
  };
  menu.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menu.setAttribute('aria-expanded', String(open));
    menu.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    menu.textContent = open ? '×' : '☰';
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      closeMenu();
      menu.focus();
    }
  });
}

const updateHeader = () => {
  if (header) header.classList.toggle('scrolled', window.scrollY > 8);
};
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

const clean = value => String(value || '').trim().replace(/[<>\u0000-\u001f]/g, '');
const phoneIsValid = value => {
  const digits = String(value || '').replace(/\D/g, '');
  return digits.length >= 8 && digits.length <= 15;
};
const openWhatsApp = (form, number, statusId, intro) => {
  if (!form) return;
  form.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.reportValidity()) return;

    const formData = new FormData(form);
    const phoneField = form.querySelector('input[name="phone"]');
    const nameField = form.querySelector('input[name="name"], input[name="contact"]');
    if (phoneField && !phoneIsValid(phoneField.value)) {
      phoneField.setCustomValidity('Please enter a valid phone number.');
      phoneField.reportValidity();
      return;
    }
    if (phoneField) phoneField.setCustomValidity('');
    if (nameField && clean(nameField.value).length < 2) {
      nameField.setCustomValidity('Please enter your name.');
      nameField.reportValidity();
      return;
    }
    if (nameField) nameField.setCustomValidity('');

    const lines = [intro, ''];
    for (const [label, value] of formData.entries()) {
      if (label === 'consent') continue;
      const readable = label.replace(/-/g, ' ').replace(/\b\w/g, character => character.toUpperCase());
      const trimmed = clean(value);
      if (trimmed) lines.push(readable + ': ' + trimmed);
    }
    lines.push('', 'I confirm the details above are ready to share.');
    const url = 'https://wa.me/' + number + '?text=' + encodeURIComponent(lines.join('\n'));
    const status = document.getElementById(statusId);
    if (status) status.textContent = 'Opening WhatsApp. Please review your details and press Send to submit them to NewHelpline.';
    window.location.href = url;
  });
};

openWhatsApp(
  document.querySelector('#candidate-form-element'),
  '917715889123',
  'candidate-status',
  'Hello NewHelpline, I would like to register as a candidate.'
);
openWhatsApp(
  document.querySelector('#employer-form-element'),
  '917715889123',
  'employer-status',
  'Hello NewHelpline, I would like to share a hiring requirement.'
);

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', () => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target && target.matches('section, main, aside')) target.setAttribute('tabindex', '-1');
  });
});

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();
