let input = document.getElementById('exampleInputEmail1')
let button = document.getElementById('loginButton')

let input2 = document.getElementById('exampleInputEmail2')
let button2 = document.getElementById('loginButton2')

button.addEventListener('click', ()=>{
    console.log('clicou')
    const username = input.value
    console.log(username)
    if(username === 'paciente'){
          window.location.href = 'inicioPaciente.html';
    } else if(username === ''){ 
        window.location.href = 'inicio.html';
    }
})

button2.addEventListener('click', ()=>{
    console.log('clicou')
    const username = input2.value
    console.log(username)
    if(username === 'paciente'){
          window.location.href = 'inicioPaciente.html';
    } else if(username === ''){ 
        window.location.href = 'inicio.html';
    }
})