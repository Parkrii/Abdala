function nPerfecto(n){
    let conf=0;
    for(let i=1; i<n; i++){
      if(n%i==0){
          conf += i;
      }
    }
        return conf==n;
}