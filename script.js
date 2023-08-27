function cal(){
    const velocidade = document.getElementById('km').value;
    const resposta = document.querySelector('.res');
    
    // para multas acimade 80Km/h o valor vai ser de 8 reais

    if(velocidade > 80){
        multa = parseFloat((velocidade - 80) * 8).toFixed(2);
        resposta.style.color = 'red'
        resposta.innerHTML = `Você deve pagar uma multa de R$${multa}`
    }else{
        resposta.innerHTML = 'Tenha um bom dia! Dirija com cuidado!'
    }
}