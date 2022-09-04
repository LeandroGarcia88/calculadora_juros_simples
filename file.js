
let valor_divida = document.getElementById("valor");
let taxa_juros = document.getElementById("taxa");
let tempo_atraso = document.getElementById("tempo");

let output = document.querySelector("#output");
let button = document.querySelector("#button");

button.addEventListener("click", calcularPrestacao, false);


function calcularPrestacao(){


	let valor = parseInt(valor_divida.value);
	let taxa = parseInt(taxa_juros.value);
	let tempo = parseInt(tempo_atraso.value);


	let prestacao = valor + (valor * (taxa / 100) * tempo);
	prestacao = prestacao.toFixed(2);
	prestacao = prestacao.replace(".", ",");
	
	output.innerHTML = `Valor total final: <br><br> <em> ${prestacao } </em>`;
}
