let img_copo_verde_grande = document.querySelector(".copo-grande-verde") /* let é uma variavel local*/

let circulo = document.querySelector(".circulo") /* Utilizamos o ponto quando nos referimos a uma classe */

let img_copo_verde_pequeno = document.querySelector(".copo-pequeno-verde")
let img_copo_rosa_claro_pequeno = document.querySelector(".copo-pequeno-rosa-claro")
let img_copo_rosa_escuro_pequeno = document.querySelector(".copo-pequeno-rosa-escuro")

img_copo_verde_pequeno.addEventListener("click", () => /* Variavel + adicionamos um evento que será "Escutado" e caso seja (verdadeiro) => fará a função que está dentro dos bigodes */
{
    img_copo_verde_grande.src = "./img/img1.png"
    circulo.style.background = "#017143" 
}
)

img_copo_rosa_claro_pequeno.addEventListener("click", () => 
{
    img_copo_verde_grande.src = "./img/img2.png";
    circulo.style.background = "#eb7495" 
}
)

img_copo_rosa_escuro_pequeno.addEventListener("click", () => 
{
    img_copo_verde_grande.src = "./img/img3.png"
    circulo.style.background = "#d752b1" 
}
)
