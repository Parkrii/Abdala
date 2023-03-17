function nNarcisista(n){

    let y=n;
    let count=0, semitotal = 0, total = 0;
    
    while(y>1){
      y = y/10;
      count++;
    }

    for(let i=1; i<=n; i*=10){
        semitotal = parseInt((n/i)%10);
        total += Math.pow(semitotal, count);
    }

return total == n;

  }