function ContarMultiplosDe2(array, n){
  let cant=0;
  for(let i=0; i<n; i++){
    if(array[i]%2 == 0){
    cant++;
    }
  }
  return cant;
}

function ContarMultiplosDe3(array, n){
  let cant=0;
  for(let i=0; i<n; i++){
    if(array[i]%3 == 0){
    cant++;
    }
  }
  return cant;
}

function ContarMultiplosDe4(array, n){
  let cant=0;
  for(let i=0; i<n; i++){
    if(array[i]%4 == 0){
    cant++;
    }
  }    
  return cant;
}

function ContarMultiplosDe5(array, n){
  let cant=0;
  for(let i=0; i<n; i++){
    if(array[i]%5 == 0){
    cant++;
    }
  }    
  return cant;
}