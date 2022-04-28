let nombre = "", puntaje = 0;

const principal = document.querySelector(".principal");
const bienvenida = document.querySelector('.bienvenida');
const boton = document.querySelector('.boton');
const saludo = document.querySelector('.titulo-bienvenida');
const trivia = document.querySelector('.trivia');

const enviar = document.querySelector('.enviar');
const calificacion = document.querySelector('.puntaje');
const nuevo = document.querySelector('.nuevo');


const registrarUsuario = () => {
    nombre = document.querySelector('.nombre').value;
    
    if (nombre === "") return alert('Ingresa tu nombre');
    
    bienvenida.style.display = 'none';
    trivia.style.display = 'block';
    saludo.style.display = 'block';

    saludo.innerHTML = `Bienvenido a la trivia ${nombre}`;
}

const nuevaPartida = () => {
    // Simula el F5 reincia la pagina
    location.reload();
}

boton.addEventListener('click', registrarUsuario);
nuevo.addEventListener('click', nuevaPartida);

enviar.addEventListener('click', () => {
    // Pregunta 1
    let pregunta1 = document.querySelector('input[name="pregunta1"]:checked');
    let pregunta2 = document.querySelector('input[name="pregunta2"]:checked');
    let pregunta3 = document.querySelector('input[name="pregunta3"]:checked');
    let pregunta4 = document.querySelector('input[name="pregunta4"]:checked');
    let pregunta5 = document.querySelector('input[name="pregunta5"]:checked');

    if (!pregunta1 || !pregunta2 || !pregunta3 || !pregunta4 || !pregunta5) {
        alert('Debes responder todas las preguntas');
        return;
    }
   
    if (pregunta1.value === 'Andrés Avelino Cáceres'){
        puntaje += 4;
    } else {
        const rsp1 = document.querySelector('.rsp1');
        rsp1.style.display = 'block';
        rsp1.innerHTML = `La respuesta correcta es: Andrés Avelino Cáceres`;
    }
    
    if (pregunta2.value === 'El océano Pacífico'){
        puntaje += 4;
    } else {
        const rsp2 = document.querySelector('.rsp2');
        rsp2.style.display = 'block';
        rsp2.innerHTML = `La respuesta correcta es: El océano Pacífico`;
    }

    if (pregunta3.value === '24'){
        puntaje += 4;
    } else {
        const rsp3 = document.querySelector('.rsp3');
        rsp3.style.display = 'block';
        rsp3.innerHTML = `La respuesta correcta es: 24`;
    }

    if (pregunta4.value === 'Cóndor'){
        puntaje += 4;
    }
    else {
        const rsp4 = document.querySelector('.rsp4');
        rsp4.style.display = 'block';
        rsp4.innerHTML = `La respuesta correcta es: Cóndor`;
    }

    if (pregunta5.value === 'Túpac Amaru II'){
        puntaje += 4;
    } else {
        const rsp5 = document.querySelector('.rsp5');
        rsp5.style.display = 'block';
        rsp5.innerHTML = `La respuesta correcta es: Túpac Amaru II`;
    }

    calificacion.style.display = 'block';
    calificacion.innerHTML = `Tu puntaje es: ${puntaje}`;
    puntaje = 0;

    enviar.style.display = 'none';
    nuevo.style.display = 'block';

});  