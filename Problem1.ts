function playWithAsterik(n: number): string {
    let bintang = '';
  
    for(let i=1; i<=n; i++){
      let spasi = '';
      let asterisk = '';
  
      for(let j=1; j<=(n-i); j++){
        spasi = spasi.concat(' ');
      }
      for(let k=1; k<=i; k++){
        asterisk = asterisk.concat('* ');
      }
  
      if (i === n) {
        bintang = bintang.concat(spasi, asterisk);
      } else {
        bintang = bintang.concat(spasi, asterisk, ' \n');
      }
    }
  
    return bintang;
  }
  
  console.log(playWithAsterik(5));
  