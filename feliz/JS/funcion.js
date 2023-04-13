function nFeliz(n){
    let semitotal=0, total=0;
    if(n==7){
      n=1;
    }else{
      while(n>=10){
        for(let i=1; i<= n; i*=10){
          semitotal = parseInt((n/i)%10);
          total += Math.pow(semitotal, 2);
      } 
      n=total;
      total = 0;
      }
    }
      
        return n==1;
    }