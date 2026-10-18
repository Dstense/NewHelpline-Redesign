const menu = document.querySelector('.menu');
const nav = document.querySelector('nav');
if (menu && nav) {
  menu.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menu.setAttribute('aria-expanded', String(open));
    menu.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    menu.textContent = open ? '×' : '☰';
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    menu.setAttribute('aria-expanded', 'false');
    menu.setAttribute('aria-label', 'Open menu');
    menu.textContent = '☰';
  }));
}
const interest = document.querySelector('#interest');
const title = document.querySelector('#form-title');
const select = document.querySelector('#type');
const headings = {'Student / Parent':'Get your tutor now','Teacher':'Find your next teaching opportunity','Hiring / Employer':'Find the right talent'};
document.querySelectorAll('[data-type]').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('[data-type]').forEach(item => item.classList.remove('active'));
  button.classList.add('active');
  interest.value = button.dataset.type;
  title.textContent = headings[button.dataset.type] || 'Make an enquiry';
  if (button.dataset.type === 'Teacher') select.value = 'Teaching opportunity';
  else if (button.dataset.type === 'Hiring / Employer') select.value = 'Hiring a candidate';
  else select.value = 'Home tutor';
}));
document.querySelectorAll('[data-pick]').forEach(link => link.addEventListener('click', () => {
  const target = link.dataset.pick;
  interest.value = target;
  title.textContent = headings[target] || 'Make an enquiry';
  document.querySelectorAll('[data-type]').forEach(button => {
    const active = button.dataset.type === target;
    button.classList.toggle('active', active);
  });
  if (target === 'Teacher') select.value = 'Teaching opportunity';
  if (target === 'Hiring / Employer') select.value = 'Hiring a candidate';
}));
document.querySelectorAll('[data-subject]').forEach(link => link.addEventListener('click', () => {
  document.querySelector('input[name="subject"]').value = link.dataset.subject;
}));
const form = document.querySelector('#enquiry-form');
if (form) form.addEventListener('submit', event => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  const data = new FormData(form);
  const lines = [
    'Hello NewHelpline, I would like to make an enquiry.', '',
    'Enquiry type: ' + (data.get('interest') || ''),
    'Name: ' + (data.get('name') || ''),
    'Phone: ' + (data.get('phone') || ''),
    'Requirement: ' + (data.get('type') || ''),
    'Class / subject: ' + (data.get('subject') || 'Not specified'),
    'Area: ' + (data.get('location') || 'Not specified'),
    'Details: ' + (data.get('message') || 'Not specified')
  ];
  const url = 'https://wa.me/917715889123?text=' + encodeURIComponent(lines.join('\n'));
  const win = window.open(url, '_blank', 'noopener,noreferrer');
  const status = document.querySelector('#status');
  if (status) status.textContent = win ? 'WhatsApp opened with your enquiry. Review the message and tap Send.' : 'If WhatsApp did not open, use this link: ' + url;
});
const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();
