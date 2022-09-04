// temas

const botaoClaro = document.getElementById('claro')
const botaoEscuro = document.getElementById('escuro')
const botaoJiggly = document.getElementById('jiggly')
const card = document.getElementById('card')
const profileImage = document.getElementById('imagem_perfil')
let paragrafo = document.querySelectorAll("p")
let par1 = paragrafo.item(0)
let par2 = paragrafo.item(1)
let par3 = paragrafo.item(2)
let par4 = paragrafo.item(3)
let par5 = paragrafo.item(4)
let par6 = paragrafo.item(5)
let par7 = paragrafo.item(6)

// tema claro

botaoClaro.addEventListener('click', function() {

    // corpo da pagina
    document.body.style.backgroundColor = '#F5F5F5'
    document.body.style.backgroundImage = 'none'
    document.body.style.transition = '300ms'

    profileImage.src = 'imagens/gwen1.png'
    profileImage.style.transition = '300ms'

    par1.style.color = '#000'
    par2.style.color = '#000'
    par3.style.color = '#000'
    par4.style.color = '#000'

    card.style.backgroundColor = 'transparent'
    card.style.boxShadow = '0px 0px 31px -6px rgba(0,0,0,0.86)'
})

// tema escuro 

botaoEscuro.addEventListener('click', function() {

    // corpo da pagina
    document.body.style.backgroundColor = '#10111E'
    document.body.style.backgroundImage = 'none'
    document.body.style.transition = '300ms'

    profileImage.src = 'imagens/gwen1.png'
    profileImage.style.transition = '300ms'

    par1.style.color = '#000'
    par2.style.color = '#000'
    par3.style.color = '#000'
    par4.style.color = '#000'

    card.style.backgroundColor = '#808080'
    card.style.boxShadow = '0px 0px 30px -3px rgba(236, 236, 236, 0.23)'
})

// tema jigglypuff

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

})