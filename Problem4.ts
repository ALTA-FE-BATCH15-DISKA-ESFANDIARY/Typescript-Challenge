function caesarCipher(offset: number, input: string): string {
    const alphabet: string = 'abcdefghijklmnopqrstuvwxyz';
    let result: string = '';
  
    for (let i = 0; i < input.length; i++) {
      const char: string = input[i];
  
      if (char === ' ') {
        result += ' '; 
      } else {
        const index: number = alphabet.indexOf(char);
  
        if (index !== -1) {
          let shiftedIndex: number = (index + offset) % alphabet.length;
          result += alphabet[shiftedIndex];
        } else {
          result += char; 
        }
      }
    }
  
    return result;
  }
  
  console.log(caesarCipher(3, 'abc')); 
  console.log(caesarCipher(2, 'alta')); 
  console.log(caesarCipher(10, 'alterraacademy')); 
  console.log(caesarCipher(1, 'abcdefghijklmnopqrstuvwxyz'));
  console.log(caesarCipher(1000, 'abcdefghijklmnopqrstuvwxyz'));

  