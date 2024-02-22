export const toGurmukhiNumber = (num) => {
  const digitMapping = {
    0: '੦',
    1: '੧',
    2: '੨',
    3: '੩',
    4: '੪',
    5: '੫',
    6: '੬',
    7: '੭',
    8: '੮',
    9: '੯',
  };

  return String(num)
    .split('')
    .map((digit) => digitMapping[digit])
    .join('');
};
