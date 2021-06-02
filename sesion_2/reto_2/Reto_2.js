
for (var contador = 2; contador <= 100; contador++) {
    var primo = true;
  
    for (var i = 2; i <= contador; i++) {
      if (contador % i === 0 && i !== contador) {
        primo = false;
      }
    }
  
    if(primo) {
      console.log(contador);
    }
  }