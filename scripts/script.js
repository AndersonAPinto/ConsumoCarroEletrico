//Calculo da média de energia gasta para uma autonomia de determinado carro elértrico.
//Se o seu elétrico mede a eficiência em quilômetros por kWh, basta calcular quanto custa cada km, dividindo o preço da eletricidade em kWh da sua região pelo número de quilômetros percorridos.
let inputPot_bat=document.getElementById("pot_bat");
let inputAutonomia=document.getElementById("autonomia");
let inputKWh=document.getElementById("KWh");
let inputRecarga=document.getElementById("recarga");
let resultado=document.getElementById("resultado");


function calcular(){
    console.log("calculando...")

    let Potenciabat= inputPot_bat.value;
    let Autonomia= inputAutonomia.value;
    let KWh= inputKWh.value;
    
    let Recarga=Autonomia/ Potenciabat;
    let Custo= Recarga*KWh;
    let qdtKmporkWh= Custo.toFixed(2);
    let qdtKmporKWh1= Custo * Potenciabat;
    let KmporKWh= qdtKmporKWh1.toFixed(2);
  
   
    console.log(qdtKmporkWh);
    
resultado.innerHTML=`<p>O resultado é de R$ ${qdtKmporkWh} por Km.</p>`
resultado.innerHTML +=`<p>E o custo para recarga desta Bateria de ${Potenciabat} KWh, é de R$ ${KmporKWh}.</p>`


//resultado.innerHTML +=`<p>OBS: A autonomia máxima informada é alcançada em condições específicas de condução do veículo, utilizando-se diferentes métodos de testes, em dinamômetro e na rua. Diversos fatores podem influenciar nos valores alcançados, tais como (modo de condução, quantidade de passageiros, relevo, peso embarcado, umidade, condições atmosféricas e das vias, pressão dos pneus, etc).</p>`
}

  
   
