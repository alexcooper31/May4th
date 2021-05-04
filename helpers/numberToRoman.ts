const numberToRoman = (value: number): string => {
  switch (value) {
    case 2: return 'II';
    case 3: return 'III';
    case 4: return 'IV';
    case 5: return 'V';
    case 6: return 'VI';
    default: return 'I';
  }
};

export default numberToRoman;
