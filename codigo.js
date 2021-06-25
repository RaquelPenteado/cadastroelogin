let btn = document.querySelector('#verSenha')

btn.addEventListener('click',()=>{
    let inputSenha = document.querySelector('#senha')

    if(inputSenha.getAttribute('type') == 'password'){
        inputSenha.setAttribute('type','text')
    } else{
        inputSenha.setAttribute('type', 'password')
    }
})

let btnConfirm = document.querySelector('#verConfirm')

btnConfirm.addEventListener('click',()=>{
    let inputConfirm = document.querySelector('#confirmpassword')

    if(inputConfirm.getAttribute('type') == 'password'){
        inputConfirm.setAttribute('type','text')
    } else{
        inputConfirm.setAttribute('type', 'password')
    }
})