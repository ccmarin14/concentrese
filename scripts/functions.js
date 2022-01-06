const barajar = () => {
    let repite = 2;
    let aux = 0;
    do {
        for (let i = 0; i < 10; i++) {
            mano[i+aux] = baraja[i];
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
        div.innerHTML = `
            <div class="molde carta${seleccion.valor}">
                <p class="numero">${seleccion.valor}</p>
                <p class="nombre">${seleccion.numero}</p>
            </div>`
        fragmento.appendChild(div.content);
        mano.splice(aleatorio,1);
    }
    $tablero.appendChild(fragmento);
}

const voltearCarta = (molde) => {
    if (contador < 2) {
        molde.classList.add("active");
        if (copiaMolde != molde && (molde.classList.contains("resuelta") == false || molde.classList.contains("active") == false)) {
            contador++;
        }
    }
    if (contador == 2) {
        validar();
        setTimeout(remover,350);
    }
};

const remover = () => {
    $moldes.forEach(elemento => {
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
    intentos++;
    $estadisticas.children[1].children[0].innerHTML = intentos;
    $moldes.forEach(elemento => {
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
        pares ++;
        $moldes.item(posicion_uno).classList.add("resuelta");
        $moldes.item(posicion_dos).classList.add("resuelta");
        $estadisticas.children[0].children[0].innerHTML = pares;
    }
}