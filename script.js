{

    /* === version 1 === */

    const colores = ["green", "red", "cadetblue ", " coral", "blue", "yellow", "chartreuse", "black", "darkcyan"];
    const color = document.querySelector('.color');
    const btn = document.getElementById('btn');

    btn.addEventListener('click', function () {
        const NumeroAleatorio = obtenerNumeroAleatorio();
        document.body.style.backgroundColor = colores[NumeroAleatorio];
        color.textContent = colores[NumeroAleatorio];
        /* La propiedad [textContent] establece o devuelve el contenido de texto del nodo especificado y todos sus descendientes . */
        // console.log(' /* === version 1 ===*/');
        //console.log(NumeroAleatorio);
    });
    function obtenerNumeroAleatorio() {
        return Math.floor(Math.random() * colores.length)
    }
    //console.log(obtenerNumeroAleatorio())
}

{
    /* === version 2 ===*/

    const colores = ["green", "red", "cadetblue ", " coral", "blue", "yellow", "chartreuse", "black", "darkcyan"];

    const color = document.querySelector(".color");
    const boton = document.getElementById('btn');

    boton.addEventListener('click', () => {
        const indiceDeLaMatrix = obtenerNumeroAleatorio()
        document.body.style.backgroundColor = colores[indiceDeLaMatrix];
        let colorElejido = colores[indiceDeLaMatrix];
        color.textContent = `${colorElejido} (Version 2)`

        //console.log(' /* === version 2 ===*/')
    });

    const obtenerNumeroAleatorio = () => {
        const numeroAleatorio = Math.random();
       /*  console.log(`Numero alearorio (V.2 ) ==> ${numeroAleatorio}`)
        console.log(`Dimension del array (V.2 ) ==> ${colores.length}`)
        console.log(`numero aleatorio multiplicado por dimencion del array colores (V.2 )  ==> ${numeroAleatorio * colores.length}`)
        console.log(`Indice del  array (V.2 ) ==> ${parseInt(numeroAleatorio * colores.length)}`)
        console.log("===________________===") */
        return parseInt(numeroAleatorio * colores.length);
    }
}



