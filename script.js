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
  const number = convertTelToNumber(target.dataset.tel);
  return number;
}

document.addEventListener('click', (event) => {
  const link = event.target.closest('a');
  const number = exposeNumber(link);
  link.href = 'tel:' + number;
});
