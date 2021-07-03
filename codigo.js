
let ocultar = document.querySelector('#ocultar')
let ocultarcon = document.querySelector('#ocultarcon')

let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')
let ValidNome = false

let usuario = document.querySelector('#usuario')
let labelUsuario = document.querySelector('#labelUsuario')
let ValidUsuario = false

let senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')
let ValidSenha = false

let confirmpassword = document.querySelector('#confirmpassword')
let labelConSenha = document.querySelector('#labelConSenha')
let ValidConSenha = false

let msgError = document.querySelector('#msgError')
let msgSucess = document.querySelector('#msgSucess')

nome.addEventListener('keyup', ()=> {
    if(nome.value.length <= 2){
        labelNome.setAttribute('style', 'color:red')
        labelNome.innerHTML = 'Nome *Insira no mínimo 3 caracteres'
        nome.setAttribute('style', 'border-color: red')
        ValidNome = false
    } else {
        labelNome.setAttribute('style', 'color:green')
        labelNome.innerHTML = 'Nome'
        nome.setAttribute('style', 'border-color: green')
        ValidNome = true
    }
})

usuario.addEventListener('keyup', ()=> {
    if(usuario.value.length <= 5){
        labelUsuario.setAttribute('style', 'color:red')
        labelUsuario.innerHTML = 'Usuário *Insira no mínimo 5 caracteres'
        usuario.setAttribute('style', 'border-color: red')
        ValidUsuario = false
    } else {
        labelUsuario.setAttribute('style', 'color:green')
        labelUsuario.innerHTML = 'Usuário'
        usuario.setAttribute('style', 'border-color: green')
        ValidUsuario = true
    }
})

senha.addEventListener('keyup', ()=> {
    if(senha.value.length <= 8){
        labelSenha.setAttribute('style', 'color:red')
        labelSenha.innerHTML = 'Senha *Insira no mínimo 8 caracteres'
        senha.setAttribute('style', 'border-color: red')
        ValidSenha = false
    } else {
        labelSenha.setAttribute('style', 'color:green')
        labelSenha.innerHTML = 'Senha'
        senha.setAttribute('style', 'border-color: green')
        ValidSenha = true
    }
})

confirmpassword.addEventListener('keyup', ()=> {
    if(senha.value != confirmpassword.value){
        labelConSenha.setAttribute('style', 'color:red')
        labelConSenha.innerHTML = 'Confirmar Senha *As senhas não conferem'
        confirmpassword.setAttribute('style', 'border-color: red')
        ValidConSenha = false
    } else {
        labelConSenha.setAttribute('style', 'color:green')
        labelConSenha.innerHTML = ' Confirmar Senha'
        confirmpassword.setAttribute('style', 'border-color: green')
        ValidConSenha = true
    }
})

function cadastrar() {
    if(ValidNome && ValidUsuario && ValidSenha && ValidConSenha){
        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]' )

        listaUser.push(
            {
                nomeCad: nome.value,
                usuarioCad: usuario.value,
                senhaCad: senha.value,
        
            }
        )

        localStorage.setItem('listaUser', JSON.stringify(listaUser))

        msgSucess.setAttribute('style', 'display: block')
        msgSucess.innerHTML = '<strong>Cadastrando usuário...</strong>'
        msgError.setAttribute('style', 'display: none')
        msgError.innerHTML = ''

        setTimeout(()=>{
            window.location.href = 'index.html'
        }, 2000)
       
    } else {
        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = '<strong>Preencha os campos corretamente</strong>'
        msgSucess.setAttribute('style', 'display: none')
        msgSucess.innerHTML = ''
    }
}

/*btn.addEventListener('click',()=>{
    let inputSenha = document.querySelector('#senha')
    
    if(inputSenha.getAttribute('type') == 'password'){
        inputSenha.setAttribute('type','text')
        
    } else{
        inputSenha.setAttribute('type', 'password')
    }
})*/

ocultar.addEventListener('click',()=>{
    let inputSenha = document.querySelector('#senha')
    
    if(inputSenha.getAttribute('type') == 'password'){
        inputSenha.setAttribute('type','text')
       
    } else{
        inputSenha.setAttribute('type', 'password')
        
    }
})



/*btnConfirm.addEventListener('click',()=>{
    let inputConfirm = document.querySelector('#confirmpassword')

    if(inputConfirm.getAttribute('type') == 'password'){
        inputConfirm.setAttribute('type','text')
    } else{
        inputConfirm.setAttribute('type', 'password')
    }
})*/

ocultarcon.addEventListener('click',()=>{
    let inputConfirm = document.querySelector('#confirmpassword')

    if(inputConfirm.getAttribute('type') == 'password'){
        inputConfirm.setAttribute('type','text')
       
    } else{
        inputConfirm.setAttribute('type', 'password')
        
    }
})