const barajar = () => {
    let repite = 2;
    let aux = 0;
    do {
        for (let i = 0; i < 10; i++) {
            mano[i+aux] = $baraja[i];
        }
    repite --;
    aux += 10;
    } while (repite != 0)
}

const colocarCartas = () => {
    let aleatorio;
    let seleccion;
    barajar();
    let tamano = mano.length;
    for (let i = 0; i < tamano; i++) {
        aleatorio = Math.floor(Math.random()*(mano.length));
        seleccion = mano[aleatorio];
        clone = document.importNode($template.content, true);
        clone.querySelector(".molde").classList.add(`carta${seleccion.valor}`)
        clone.querySelector(".numero").innerHTML = seleccion.valor;
        clone.querySelector(".nombre").innerHTML = seleccion.numero;
        $fragmento.appendChild(clone);
        mano.splice(aleatorio,1);
    }
    $tablero.appendChild($fragmento);
}

const voltearCarta = async (e) => {
    if (contador < 2 && e.target.classList.contains("active") == false && e.target.classList.contains("resuelta") == false) {
        e.target.classList.add("active");
        textoAvoz = e.target.children[1].innerHTML;
        voice.text = textoAvoz;
        voice.lang = "es-ES"
        jarvis.speak(voice);
        contador++;
    }
    if (contador == 2) {
        validar();
        setTimeout(remover,600);
    }
};

const remover = () => {
    $activas = document.querySelectorAll(".active")
    $activas.forEach(elemento => {
        elemento.classList.remove("active");
    })
    contador = 0;
}

const validar = () => {
    let posicion = 0;
    let posicion_uno;
    let posicion_dos;
    let carta_uno = "1";
    let carta_dos = "2";
    $activas = document.querySelectorAll(".active")
    intentos++;
    $estadisticas.children[1].children[0].innerHTML = intentos;
    $activas.forEach(elemento => {
        if (elemento.classList.contains("active")) {
            if (carta_dos == "none") {
                carta_dos = elemento.classList.item(1);
                posicion_dos = posicion;
            }
            if( carta_uno == "1") {
                carta_uno = elemento.classList.item(1);
                carta_dos = "none";
                posicion_uno = posicion;
            }
        }
        posicion++;
    })
    if (carta_uno == carta_dos) {
        $activas.item(posicion_uno).classList.add("resuelta");
        $activas.item(posicion_dos).classList.add("resuelta");
        pares ++;
        $estadisticas.children[0].children[0].innerHTML = pares;
    }
}

const restart = () => {
    contador = 0;
    pares = 0;
    intentos = 0;
    $estadisticas.children[0].children[0].innerHTML = pares;
    $estadisticas.children[1].children[0].innerHTML = intentos;
    $moldes = document.querySelectorAll(".molde");
    $moldes.forEach(element => {
        element.outerHTML = "";
    })
    colocarCartas();
}