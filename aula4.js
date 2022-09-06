let novo_elemento = document.createElement("a")
let novo_elemento = document.createTextNode("link")
novo_elemento.appendChild(text)
novo_elemento = setAttribute("href","http://www.eaj.ufrn.br")
novo_elemento = setAttribute("target", "_blank")
let div_container = document.getElementById("root")
div_container.appendChild(novo_elemento)



function adicionar_paragrafo(){

let inputText = document.getElementById("inputText")

let novo_paragrafo = document.createElement("p")
let texto_do_paragrafo = document.createTextNode(inputText.value)

novo_paragrafo.appendChild(texto_do_paragrafo)

let div = document.getElementById("root")
div.appendChild(novo_paragrafo)
}