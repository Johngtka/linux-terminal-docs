const opt_container = document.querySelector('#menu')
function render() {
    for (let i = 1; i <= 6; i++) {
        const opt = document.createElement('div')
        opt.classList.add('option')
        opt.setAttribute('id', 'option' + i)
        opt_container.appendChild(opt)
    }
}
render()
const opt1 = [document.querySelector('#option1'), document.querySelector('#option2'), document.querySelector('#option3'), document.querySelector('#option4'), document.querySelector('#option5'), document.querySelector('#option6')]
option()
function option() {
    const tab = ["listing commands", "directory commands", "system commands", "hadrware commands", "files commands", "software commands"]
    for (let i = 0; i <= 6; i++) {
        opt1[i].setAttribute('onClick', eventclicker())
        opt1[i].innerHTML = '<p>' + tab[i].toUpperCase() + '</p>'
    }
}
function eventclicker() {
    const sub = ["ls.html"]
    opt1[0].addEventListener("click", () => { window.open(sub[0], "_self") })
    opt1[1].addEventListener("click", () => { console.log("dfsf") })
    opt1[2].addEventListener("click", () => { console.log("dfsf") })
    opt1[3].addEventListener("click", () => { console.log("dfsf") })
    opt1[4].addEventListener("click", () => { console.log("dfsf") })
    opt1[5].addEventListener("click", () => { console.log("dfsf") })
}
