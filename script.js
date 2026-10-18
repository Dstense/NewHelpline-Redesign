const menu = document.querySelector('.menu');
const nav = document.querySelector('#primary-nav');
const header = document.querySelector('header');

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

const interest = document.querySelector('#interest');
const title = document.querySelector('#form-title');
const select = document.querySelector('#type');
const subjectInput = document.querySelector('#subject');
const status = document.querySelector('#status');
const headings = {
  'Student / Parent': 'Get your tutor now',
  'Teacher': 'Find your next teaching opportunity',
  'Hiring / Employer': 'Find the right talent'
};

const chooseType = target => {
  if (!interest || !title || !select) return;
  interest.value = target;
  title.textContent = headings[target] || 'Make an enquiry';
  document.querySelectorAll('[data-type]').forEach(button => {
    button.classList.toggle('active', button.dataset.type === target);
    button.setAttribute('aria-selected', String(button.dataset.type === target));
  });
  if (target === 'Teacher') select.value = 'Teaching opportunity';
  else if (target === 'Hiring / Employer') select.value = 'Hiring a candidate';
  else select.value = 'Home tutor';
};

document.querySelectorAll('[data-type]').forEach(button => {
  button.setAttribute('role', 'tab');
  button.setAttribute('aria-selected', String(button.classList.contains('active')));
  button.addEventListener('click', () => chooseType(button.dataset.type));
});

document.querySelectorAll('[data-pick]').forEach(link => {
  link.addEventListener('click', () => chooseType(link.dataset.pick));
});

document.querySelectorAll('[data-subject]').forEach(link => {
  link.addEventListener('click', () => {
    if (subjectInput) subjectInput.value = link.dataset.subject;
  });
});

const clean = value => String(value || '').trim().replace(/[<>\u0000-\u001f]/g, '');
const form = document.querySelector('#enquiry-form');
if (form) {
  form.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.reportValidity()) return;

    const data = new FormData(form);
    const name = clean(data.get('name'));
    const phone = clean(data.get('phone'));
    const phoneDigits = phone.replace(/\D/g, '');
    if (name.length < 2) {
      document.querySelector('#name')?.setCustomValidity('Please enter your name.');
      document.querySelector('#name')?.reportValidity();
      return;
    }
    document.querySelector('#name')?.setCustomValidity('');
    if (phoneDigits.length < 8 || phoneDigits.length > 15) {
      document.querySelector('#phone')?.setCustomValidity('Please enter a valid phone number.');
      document.querySelector('#phone')?.reportValidity();
      return;
    }
    document.querySelector('#phone')?.setCustomValidity('');

    const lines = [
      'Hello NewHelpline, I would like to make an enquiry.',
      '',
      'Enquiry type: ' + clean(data.get('interest')),
      'Name: ' + name,
      'Phone: ' + phone,
      'Requirement: ' + clean(data.get('type')),
      'Class / subject: ' + (clean(data.get('subject')) || 'Not specified'),
      'Area: ' + (clean(data.get('location')) || 'Not specified'),
      'Details: ' + (clean(data.get('message')) || 'Not specified')
    ];
    const url = 'https://wa.me/917715889123?text=' + encodeURIComponent(lines.join('\n'));
    if (status) {
      status.textContent = 'Opening WhatsApp. Review your details there and tap Send to contact NewHelpline.';
    }
    window.location.assign(url);
  });
}

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', event => {
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    if (target.matches('section, aside, main')) {
      target.setAttribute('tabindex', '-1');
      target.addEventListener('blur', () => target.removeAttribute('tabindex'), { once: true });
    }
  });
});

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

const yearFooter = document.querySelector('.footer-bottom');
if (yearFooter) yearFooter.setAttribute('aria-label', 'Footer information');
