const res = document.querySelector('#res');
const temporizador = document.querySelector('#res > h1'); 
const btn = document.querySelector('#btn');

const pegarHoras = (hora = '') => {
    document.querySelectorAll('.horas > input').forEach((element) => {
        hora += element.value
    });
        return hora;
}

const pegarMinutos = (min = '') => {
    document.querySelectorAll('.minutos > input').forEach(element => {
        min += element.value;
    });
        return min;
}

const pegarSegundos = (sec = '') => {
    document.querySelectorAll('.segundos > input').forEach(element => {
        sec += element.value;
    });
        return sec;
}

function iniciar(){

    let hr = Number(pegarHoras());
    let minutos = Number(pegarMinutos());
    let segundos = Number(pegarSegundos());

    if(hr === 0 && minutos === 0 && segundos === 0){
        alert('[ALERTA] Por favor, indique uma contagem válida.');
        return;
    }

    res.style.display = 'block';
    cronometrar(hr,minutos,segundos);

}

function cronometrar(hr,minutos,segundos){
        
    let hour = 0;
    let min =  0;
    let sec =  0;
    
    const int = setInterval(()=>{
        
        temporizador.innerHTML = `${hour.toLocaleString('pt-br',{minimumIntegerDigits:2})}:${min.toLocaleString('pt-br',{minimumIntegerDigits:2})}:${sec.toLocaleString('pt-br',{minimumIntegerDigits:2})}`;
        document.getElementById('finish').innerHTML = '';

    if(hour === hr && min === minutos && sec === segundos){

        temporizador.innerHTML = `${hour.toLocaleString('pt-br',{minimumIntegerDigits:2})}:${min.toLocaleString('pt-br',{minimumIntegerDigits:2})}:${sec.toLocaleString('pt-br',{minimumIntegerDigits:2})}`;

        
        document.getElementById('finish').innerHTML = 'Finished';

        clearInterval(int);
 
    } else {

            hour = min > 59 ? hour+1:hour;
            min = sec+1 === 60 ? min+1:min;   
            sec = sec >= 0 && sec < 59 ? sec+1:0;

    }

    },1000);

}