
let usuarios = []
let contId = 0
var consultar = document.getElementById('consultar')
var retirar = document.getElementById('retirar')
var transferir = document.getElementById('transferir')
var consignar = document.getElementById('consignar')
var lblNombre = document.getElementById('lblNombre')
var lblCorreo = document.getElementById('lblCorreo')
var lblMonto = document.getElementById('lblMonto')
var lblNombre_Retirar = document.getElementById('lblNombre_Retirar')
var lblCorreo_Retirar = document.getElementById('lblCorreo_Retirar')
var lblMonto_Retirar = document.getElementById('lblMonto_Retirar')
var lblNombre_Consignar = document.getElementById('lblNombre_Consignar')
var lblCorreo_Consignar = document.getElementById('lblCorreo_Consignar')
var lblMonto_Consignar = document.getElementById('lblMonto_Consignar')
var lblNombre_Transferir = document.getElementById('lblNombre_Transferir')
var lblCorreo_Transferir = document.getElementById('lblCorreo_Transferir')
var lblMonto_Transferir = document.getElementById('lblMonto_Transferir')



let botones = document.getElementById('iconos')
iconos.style.display = 'flex'
iconos.style.display = 'none'



llenarCuentas()

function mostrarformulario() {
    let formularios = document.getElementById('columna_dos')
    let formulario = document.getElementById('columna_uno')
    let form1 = document.getElementById('form1')
    let logo = document.getElementById('logo')
    let form_uno = document.getElementById('form_uno')
    let iconos = document.getElementById('iconos')
    let menu_opciones = document.getElementById('menu_opciones')
    let informacion = document.getElementById('informacion')

    let nombre = document.getElementById('nombre').value
    let ingresando = usuarios.filter((usuario) => usuario.nombre == nombre)


    lblNombre.innerText = ingresando[0].nombre
    lblCorreo.innerText = ingresando[0].correo
    lblMonto.innerText = ingresando[0].saldo
    lblNombre_Retirar.innerText = ingresando[0].nombre
    lblCorreo_Retirar.innerText = ingresando[0].correo
    lblMonto_Retirar.innerText = ingresando[0].saldo
    lblNombre_Consignar.innerText = ingresando[0].nombre
    lblCorreo_Consignar.innerText = ingresando[0].correo
    lblMonto_Consignar.innerText = ingresando[0].saldo
    lblNombre_Transferir.innerText = ingresando[0].nombre
    lblCorreo_Transferir.innerText = ingresando[0].correo
    lblMonto_Transferir.innerText = ingresando[0].saldo

    formularios.style.display = 'none'
    formulario.style.display = 'none'
    logo.style.display = 'flex'
    form1.style.display = 'none'
    setTimeout(function () {
        logo.style.display = 'none'
        iconos.style.display = 'flex'
        form_uno.style.display = 'flex'
        informacion.style.display = 'flex'
        menu_opciones.style.display = 'flex'
        form1.style.display = 'none'
    }, 3000)
    llenarCuentas()
}

function ConsultarSaldo() {
    consultar.classList.remove('hiden')
    consultar.classList.add('active')

    retirar.classList.remove('active')
    retirar.classList.add('hiden')

    consignar.classList.add('hiden')
    consignar.classList.remove('active')

    transferir.classList.remove('active')
    transferir.classList.add('hiden')


}
function RetirarDinero() {
    retirar.classList.remove('hiden')
    retirar.classList.add('active')

    consultar.classList.remove('active')
    consultar.classList.add('hiden')

    consignar.classList.add('hiden')
    consignar.classList.remove('active')

    transferir.classList.remove('active')
    transferir.classList.add('hiden')
}
function TransferirDinero() {
    transferir.classList.remove('hiden')
    transferir.classList.add('active')

    retirar.classList.remove('active')
    retirar.classList.add('hiden')

    consultar.classList.remove('active')
    consultar.classList.add('hiden')

    consignar.classList.add('hiden')
    consignar.classList.remove('active')

}
function ConsignarDinero() {
    consignar.classList.remove('hiden')
    consignar.classList.add('active')

    transferir.classList.remove('active')
    transferir.classList.add('hiden')

    retirar.classList.remove('active')
    retirar.classList.add('hiden')

    consultar.classList.remove('active')
    consultar.classList.add('hiden')

}
function Ingresar() {
    let contrasena = document.getElementById('contrasena').value
    let nombre = document.getElementById('nombre').value
    var ingresando = usuarios.filter((usuario) => usuario.nombre == nombre)

    if (ingresando.length == 1) {
        if (ingresando[0].intentos < 3) {
            if (contrasena == ingresando[0].contrasena) {
                alert("Bienvenido")
                console.log(ingresando[0].id);
                usuarios[ingresando[0].id].status = true
                mostrarformulario()
            } else {
                alert("Credencias incorrectas")
                ingresando[0].intentos++
            }
        } else {
            alert('Maximo de intentos alcanzados')
        }
    } else {
        alert('Usuario no registrado')
    }
}
function register() {
    var usuario2 = document.getElementById("nombre_registro").value
    var contrasena = document.getElementById("contrasena_registro").value
    var correo = document.getElementById("correo").value
    var saldo = parseInt(document.getElementById("saldo").value)

    var ingresando1 = usuarios.filter((usuario) => usuario.nombre == usuario2)


    if (usuario2 == '' || contrasena == '' || correo == '' || saldo == '') {
        alert('Falta info')
    } else {
        if (ingresando1.length > 0) {
            alert('Este Usuario ya existe')
        } else {
            if (saldo >= 100000) {
                let usuario = {
                    id: 0,
                    nombre: '',
                    contrasena: '',
                    correo: '',
                    saldo: 0,
                    intentos: 0,
                    status: false
                }
                usuario.id = contId
                usuario.saldo = saldo
                usuario.contrasena = contrasena
                usuario.correo = correo
                usuario.nombre = usuario2
                usuarios.push(usuario)
                contId++
                console.log(usuarios);
                alert('Usuario creado con exito');
            } else { alert('no se puede crear cuenta por saldo insuficiente ') }
        }
    }
}
function Retirar() {
    var ValorRetiro = document.getElementById('input_Retirar').value;

    let nombre = document.getElementById('nombre').value
    let ingresando = usuarios.filter((usuario) => usuario.nombre == nombre)

    var SaldoDisponible = ingresando[0].saldo;
    var resta = SaldoDisponible - ValorRetiro;
    console.log(SaldoDisponible);
    if (resta < 10000) {
        alert('no se puede realizar el retiro, se debe de quedar con minimo $10000')
    } else {
        ingresando[0].saldo = resta;
        alert('retiro exitoso')
        ValorRetiro.value = ""
    }
    actualizarSaldo()
}
function Consignar() {

    let nombre = document.getElementById('nombre').value
    let ingresando = usuarios.filter((usuario) => usuario.nombre == nombre)

    var ValorConsignar = parseInt(document.getElementById('input_Consignar').value);
    if (ValorConsignar >= 10000) {
        if (confirm('seguro que deseas consignar' + ValorConsignar)) {
            ingresando[0].saldo += ValorConsignar;
            alert('Consignacion exitosa')
            ValorConsignar.value = ''
        } else {
            alert('consigancion cancelada')
        }
    } else {
        alert("No es posible consignar menos de $10000")
    }
    actualizarSaldo()
    console.log(usuarios);
}
function actualizarSaldo() {
    let saldoActual = usuarios[0].saldo;
    lblMonto.innerText = saldoActual;
    lblMonto_Retirar.innerText = saldoActual;
    lblMonto_Consignar.innerText = saldoActual;
    lblMonto_Transferir.innerText = saldoActual;
}
function Transferir() {

    let nombre = document.getElementById('nombre').value
    let ingresando = usuarios.filter((usuario) => usuario.nombre == nombre)

    var ValorTransferir = document.getElementById('input_Transferir').value;
    var select = document.getElementById('cuenta').value;

    let aTransferir = usuarios.filter((usuario) => usuario.nombre == select)

    let saldoActual = ingresando[0].saldo;
    var resta = saldoActual - ValorTransferir;
    if (resta < 10000) {
        alert('no se puede realizar la tranferencia')
    } else {
        if (confirm('seguro que deseas transferir' + ValorTransferir)) {
            ingresando[0].saldo = parseInt(resta);
            aTransferir[0].saldo += parseInt(ValorTransferir);
            alert('Transferencia realizada')
            console.log(usuarios);
        } else {
            alert('transferencia cancelada')
        }
    }
    actualizarSaldo();
    console.log(usuarios);
}
function llenarCuentas() {
    var lista = document.getElementById("cuenta")
    for (let i = 0; i < usuarios.length; i++) {
        var option = document.createElement("option");
        option.value = usuarios[i].nombre;
        option.text = usuarios[i].nombre;
        lista.appendChild(option)
    }

}

function cerrarSesion() {
    let nombre = document.getElementById('nombre').value
    let ingresando = usuarios.filter((usuario) => usuario.nombre == nombre)
    if (confirm('Seguro desea cerrar sesión')) {
        usuarios[ingresando[0].id] = false
        mostrarformulario()        
        alert('Vuelva pronto')
    }
}

function HistorialMovimientos(){
}