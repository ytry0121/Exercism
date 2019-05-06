export const toRna = (dna) => {
  return rnaArray = dna.split('').map((val) => {
    switch (val) {
      case 'G':
        return 'C';
      case 'C':
        return 'G';
      case 'T':
        return 'A';
      case 'A':
        return 'U';
      default:
        throw new Error('Invalid input DNA.');
    }
  }).join('');
};
