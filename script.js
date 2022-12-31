window.onload = () => {
    option()
}
const opt_container = document.querySelector('#menu')
const tab = ["listing commands"]
function option() {
    for (let i = 1; i <= 6; i++) {
        const opt = document.createElement('div')
        opt.classList.add('option')
        opt.setAttribute('id', i)
        opt_container.appendChild(opt)
    }
}