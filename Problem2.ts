function ubahHuruf(sentence: string): string {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXY";
    const geserAlphabet = alphabet.slice(10) + alphabet.slice(0, 10);
    
    const enkripsiChar = Array.from(sentence, (char) => {
      if (char === " ") {
        return " ";
      }
      const index = alphabet.indexOf(char.toUpperCase());
      return index !== -1 ? geserAlphabet[index] : char;
    });
    
    return enkripsiChar.join("");
  }
  

  console.log(ubahHuruf("SEPULSA OKE"));   
  console.log(ubahHuruf("ALTERRA ACADEMY")); 
  console.log(ubahHuruf("INDONESIA"));      
  console.log(ubahHuruf("GOLANG"));         
  console.log(ubahHuruf("PROGRAMMER"));      
  