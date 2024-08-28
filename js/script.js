const ingresoTexto = document.getElementById("ingresoTexto");
const botonEncriptar = document.getElementById("botonEncriptar");
const botonDesencriptar = document.getElementById("botonDesencriptar");
const botonCopiar = document.getElementById("botonCopiar");
const mensajeFinal = document.getElementById("mensajeFinal");
const muneco = document.getElementById("muneco");
const otherMessage = document.getElementById("otherMessage");
const mainSectionRigth = document.getElementById("mainSectionRigth");

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

let mapaLetras = [
    ["e", "enter"],
    ["o", "ober"],
    ["i", "imes"],
    ["a", "ai"],
    ["u", "ufat"],
];

const remplace = (nuevoValor) => {
    mensajeFinal.innerHTML = nuevoValor;
    
    ingresoTexto.value = "";
    otherMessage.style.display = "none";
    muneco.classList.add("oculto");
    botonCopiar.style.display = "block";
    mensajeFinal.classList.add("ajustar")
    mainSectionRigth.classList.add("ajustar");
}

botonEncriptar.addEventListener("click", () => {
    const texto = ingresoTexto.value.toLowerCase();
    if(texto != ""){

        function encriptarTexto(nuevoTexto) {
            for(let i = 0; i < mapaLetras.length; i++){
                if(nuevoTexto.includes(mapaLetras[i][0])){
                    nuevoTexto = nuevoTexto.replaceAll(mapaLetras[i][0], mapaLetras[i][1]);
                };
            };
            return nuevoTexto;
        }
    }
    remplace(encriptarTexto(texto));
});

botonDesencriptar.addEventListener("click", () => {
    const texto = ingresoTexto.value.toLowerCase();
    if(texto != ""){

        function desencriptar(nuevoTexto) {
            for(let i = 0; i < mapaLetras.length; i++){
                if(nuevoTexto.includes(mapaLetras[i][1])){
                    nuevoTexto = nuevoTexto.replaceAll(mapaLetras[i][1], mapaLetras[i][0]);
                };
            };
            return nuevoTexto;
        }
    }
    remplace(desencriptar(texto))
});

botonCopiar.addEventListener("click", () => {
    let texto = mensajeFinal;
    texto.select();
    document.execCommand('copy');
    alert("Texto copiado");

    mensajeFinal.innerHTML = "";
    muneco.classList.remove("oculto")
    otherMessage.style.display = "block";
    botonCopiar.style.display = "none";
    mensajeFinal.classList.remove("ajustar")
    mainSectionRigth.classList.remove("ajustar");
    ingresoTexto.focus();
})




