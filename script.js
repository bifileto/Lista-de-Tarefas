let itemId = 0

function salvar(tipo) {
    let input = document.querySelector('#valor')
    let elementoLista = document.querySelector(`#${tipo}`)

    elementoLista.innerHTML += `<div class ='card' id='item-${itemId}'>
        <span>${input.value}</span>
        <button onclick='excluir("item-${itemId}")'> Excluir </button>
        </div>`
        input.value = ''
        itemId++
}

function excluir(valor) {
    let elementoLista = document.querySelector(`#${valor}`)
    elementoLista.remove()
}