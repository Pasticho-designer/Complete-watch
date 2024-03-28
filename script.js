const hora = document.querySelector('.hora');
const fecha = document.querySelector('.fecha');

const meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','noviembre','diciembre']


setInterval(() => {

    const date = new Date();

    let mes = date.getMonth();
    let fechadia = date.getDay();
    let año = date.getFullYear();

    hora.innerHTML = date.toLocaleTimeString();

    const fecha_actual = fechadia + ' ' +  meses[mes] + ' ' + año;
    
    fecha.innerHTML = fecha_actual;
    
    
    
}, 500);