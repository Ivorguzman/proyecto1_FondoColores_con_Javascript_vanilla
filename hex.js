{
    /*👉    const hexadecimal = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    
        const btn = document.getElementById("btn");
        const color = document.querySelector(".color");
        btn.addEventListener('click', function () {
            let colorExadecimal = "#";
            for (let i = 0; i < 6; i++) {
                let saberColor = obtenerNumeroAleatorio();
                colorExadecimal += hexadecimal[saberColor];
                //colorExadecimal = colorExadecimal + hexadecimal[saberColor]
            };
            color.textContent = colorExadecimal;
            document.body.style.backgroundColor = colorExadecimal
        });
        function obtenerNumeroAleatorio() {
            return parseInt(Math.random() * hexadecimal.length);
        }👈*/
}

{
    const matrixExadecimal = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    const boton = document.getElementById('btn');
    const color = document.querySelector('.color');
    //#4567AB

    boton.addEventListener('click', () => {
        let colorExadecimal = "#";
        for (let i = 0; i < 6; i++) {
            colorExadecimal = colorExadecimal + matrixExadecimal[numeroAleatorio()];
            let colorDeFondo = document.body.style.backgroundColor = colorExadecimal;
            color.textContent = `${colorExadecimal} (Version 2)`
        }
    });

    const numeroAleatorio = () => {
        let indiceDematrixExadecimal = Math.floor(Math.random() * matrixExadecimal.length);
        return indiceDematrixExadecimal;
    }
    let indice = numeroAleatorio()
    console.log(indice);




}





