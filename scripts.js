//..................................................................................................//
	// As "chaves" de criptografia que utilizaremos são:
	// A letra "e" é convertida para "enter"
	// A letra "i" é convertida para "imes"
	// A letra "a" é convertida para "ai"
	// A letra "o" é convertida para "ober"
	// A letra "u" é convertida para "ufat"

	// Requisitos:
	// - Deve funcionar apenas com letras minúsculas
	// - Não devem ser utilizados letras com acentos nem caracteres especiais
	// - Deve ser possível converter uma palavra para a versão criptografada e também retornar uma palavra
	//   criptografada para a versão original.

	// Por exemplo:
	// "gato" => "gaitober"
	// gaitober" => "gato"
//...................................................................................................//


	// Função para criptografar e deixar letras minúsculas do texto digitado no textarea1 e exibir no textarea2 //

	function criptografar() {
  		var texto = document.getElementById("textoDigitado").value;
  		var textoNovo = texto.replace(/e/g, 'enter');

	  		if (textoNovo) {
	  			var textoNovo1 = textoNovo.replace(/i/g, 'imes');
	  		}

	  		if (textoNovo1) {
	  			var textoNovo2 = textoNovo1.replace(/a/g, 'ai');
	  		}
	  		if (textoNovo2) {
	  			var textoNovo3 = textoNovo2.replace(/o/g, 'ober');
	  		}
	  		if (textoNovo3) {
	  			var textoNovo4 = textoNovo3.replace(/u/g, 'ufat');
	  		}

	  	var textoNovo5 = textoNovo4.toLowerCase();
	  	document.getElementById("textoCriptografado").style.display = "";
  		document.getElementById("textoCriptografado").innerHTML = textoNovo5;
	}


	// Função para descriptografar e deixar letras minúsculas do texto digitado no textarea1 e exibir no textarea2 //

	function descriptografar() {
  		var texto = document.getElementById("textoDigitado").value;
  		var textoNovo = texto.replace(/enter/g, 'e');
  		
	  		if (textoNovo) {
	  			var textoNovo1 = textoNovo.replace(/imes/g, 'i');
	  		}

	  		if (textoNovo1) {
	  			var textoNovo2 = textoNovo1.replace(/ai/g, 'a');
	  		}
	  		if (textoNovo2) {
	  			var textoNovo3 = textoNovo2.replace(/ober/g, 'o');
	  		}
	  		if (textoNovo3) {
	  			var textoNovo4 = textoNovo3.replace(/ufat/g, 'u');
	  		}

	  	var textoNovo5 = textoNovo4.toLowerCase();
  		document.getElementById("textoCriptografado").style.display = "";
  		document.getElementById("textoCriptografado").innerHTML = textoNovo4;
	}


	// Botão seleciona e Copia Texto do textarea2 //
	function selecionaCopia (){
		const textInput = document.getElementById("textoCriptografado");
		const copyButton = document.getElementById("copy");

	    	copyButton.addEventListener("click", ()=> {
		textInput.select();
		document.execCommand("copy");
	    });
	}
