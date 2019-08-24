function es_primo_de_sheldon(numero){
   	var numero_alveres = numeroAlveres(numero);
	    if(es_primo(numero) && es_primo(numero_alveres)) {
		
		for(var j = 1 ; j< numero ; j++){
			if(es_primo(j)== true){
				posicionNumero ++;
			}
		}
		for(var j = 1 ; j< numero_alveres; j++){
			if(es_primo(j)== true){
				posicionNumeroAlveres ++;
			}
		}
		    if(posicionNumeroAlveres.toString()  == numeroAlveres(posicionNumero)){
                return true;
            }else{
                return false;
            }	
        }else{
            return false;
        }
  }
  var posicionNumeroAlveres = 0;
  var posicionNumero = 0;
  function numeroAlveres(str){
        var suma = '';
        var gmgm = str.toString().length;
        while (gmgm --) {
                suma = suma + str.toString().charAt(gmgm);
            }
        return suma;
    }
  function es_primo(numero) {
    for (var i = 2; i < numero; i++) {
      if (numero % i === 0) {
        return false;
      }
    }
    return true;
  }
  module.exports = es_primo_de_sheldon;