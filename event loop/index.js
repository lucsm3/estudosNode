// event loop lê o codigo de cima para baixo, tomar cuidado com loop infinito

function a() {
console.log('Executando a()')
}

function b() {
    console.log('Executando b()')
}

function c() {
    console.log('Executando c()')
    a()
    b()
}

//b()
//c()
//a()

// ou

c()

