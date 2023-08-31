const conteiner = document.querySelector('#conteiner')
const palitos = [...document.querySelectorAll('.palito')]

conteiner.addEventListener('click',()=>{
    conteiner.classList.toggle('ativo')
    if(conteiner.classList.contains('ativo')){
        palitos.forEach((animacao,index) =>{
            animacao.style.animationName = `animacao-palito${index+1}`
        })
    }
    else{
        palitos.forEach((animacao,index) =>{
            animacao.style.animationName = `animacao-palito${index+1}-rev`
        })
    }
})