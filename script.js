const code = {
  '!': 1,
  '@': 2,
  '#': 3,
  '%': 5,
  '^': 6,
  '&': 7,
  '*': 8,
  '(': 9,
  ')': 0,
};

code['$'] = 4;
code['_'] = '-';

function convertTelToNumber(tel) {
  const decoded = tel.split('').reduce((number, char) => {
    return (number += code[char]);
  }, '');
  return decoded;
}

function exposeNumber(target) {
  if (!target || !target.dataset || !target.dataset.tel) return '';
  const number = convertTelToNumber(target.dataset.tel);
  return number;
}

// Update phone link href and add aria-label with decoded number
function updatePhoneLink(link) {
  if (!link) return;
  const number = exposeNumber(link);
  if (!number) return;

  // Set the href attribute
  link.href = 'tel:' + number;

  // Set an accessible label that includes the decoded number
  const businessName = link
    .querySelector('img')
    .alt.replace('Phone number for ', '');
  link.setAttribute('aria-label', `Call ${businessName} at ${number}`);
}

// Handle click events (to ensure the link works properly)
document.addEventListener('click', (event) => {
  const link = event.target.closest('.phone-number-link');
  if (link) {
    updatePhoneLink(link);
  }
});

// Handle focus events for keyboard navigation
document.addEventListener('focusin', (event) => {
  const link = event.target.closest('.phone-number-link');
  if (link) {
    updatePhoneLink(link);
  }
});
