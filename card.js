// temas
// Botões
const botaoClaro = document.getElementById('claro')
const botaoEscuro = document.getElementById('escuro')
const botaoQatar = document.getElementById('qatar')
const card = document.getElementById('card')
const profileImage = document.getElementById('imagem_perfil')

// Textos
let paragrafo = document.querySelectorAll("p")
let par1 = paragrafo.item(0)
let par2 = paragrafo.item(1)
let par3 = paragrafo.item(2)
let par4 = paragrafo.item(3)
let par5 = paragrafo.item(4)
let par6 = paragrafo.item(5)
let par7 = paragrafo.item(6)

// tema claro
botaoClaro.addEventListener('click', () => {

    // corpo da pagina
    document.body.style.backgroundColor = '#F5F5F5'
    document.body.style.backgroundImage = 'none'
    document.body.style.transition = '300ms'

    profileImage.src = 'imagens/paylin.jpg'
    profileImage.style.transition = '300ms'

    par1.style.color = '#000'
    par2.style.color = '#000'
    par3.style.color = '#000'
    par4.style.color = '#000'

    card.style.backgroundColor = 'transparent'
    card.style.boxShadow = '0px 0px 31px -6px rgba(0,0,0,0.86)'
})

// tema escuro 
botaoEscuro.addEventListener('click', () => {
    // corpo da pagina
    document.body.style.backgroundColor = '#10111E'
    document.body.style.backgroundImage = 'none'
    document.body.style.transition = '300ms'

    profileImage.src = 'imagens/paylin.jpg'
    profileImage.style.transition = '300ms'

    par1.style.color = '#000'
    par2.style.color = '#000'
    par3.style.color = '#000'
    par4.style.color = '#000'

    card.style.backgroundColor = '#808080'
    card.style.boxShadow = '0px 0px 30px -3px rgba(236, 236, 236, 0.23)'
})

botaoQatar.addEventListener('click', () => {
    // corpo da pagina
    document.body.style.backgroundColor = '#56042C'
    document.body.style.backgroundImage = 'none'
    document.body.style.transition = '300ms'

    profileImage.src = 'imagens/paylin.jpg'
    profileImage.style.transition = '300ms'

    par1.style.color = '#000'
    par2.style.color = '#000'
    par3.style.color = '#000'
    par4.style.color = '#000'

    card.style.backgroundColor = '#7F1431'
    card.style.boxShadow = '0px 0px 31px -6px rgba(0,0,0,0.86)'
})

/* Tema Halloween
botaoHalloween.addEventListener('click', () => {

    // corpo da pagina
    document.body.style.backgroundColor = '#252525'
    document.body.style.backgroundImage = 'none'
    document.body.style.transition = '300ms'

    profileImage.src = 'imagens/jack.png'
    profileImage.style.transition = '300ms'

    par1.style.color = '#000'
    par2.style.color = '#000'
    par3.style.color = '#000'
    par4.style.color = '#000'

    card.style.backgroundColor = '#AF0404'
    card.style.boxShadow = '0px 0px 30px -3px rgb(175, 4, 4)'
}) */

/* Tema Taylor Swift 
botaoTS.addEventListener('click', () => {

    // corpo da pagina
    document.body.style.backgroundColor = '#010A26'
    document.body.style.backgroundImage = 'none'
    document.body.style.transition = '300ms'

    profileImage.src = 'imagens/midnight.png'
    profileImage.style.transition = '300ms'

    par1.style.color = '#A6243C'
    par2.style.color = '#A6243C'
    par3.style.color = '#A6243C'
    par4.style.color = '#A6243C'

    card.style.backgroundColor = '#D9806C'
    card.style.boxShadow = '0px 0px 30px -3px #732937'
}) */

/* tema jigglypuff * removido *
    botaoJiggly.addEventListener('click', function() {

    // corpo da pagina
    document.body.style.backgroundImage = 'url(imagens/Mwlk.gif)'
    document.body.style.backgroundSize = 'cover'
    document.body.style.backgroundRepeat = 'no-repeat'
    document.body.style.backgroundColor = '#FFB6C1'
    document.body.style.transition = '300ms'

    profileImage.src = 'imagens/profile.gif'
    profileImage.style.transition = '300ms'

    par1.style.color = '#000'
    par2.style.color = '#000'
    par3.style.color = '#000'
    par4.style.color = '#000'

    card.style.backgroundColor = 'transparent'
    card.style.boxShadow = 'none'

}) */