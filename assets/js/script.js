
let usuarios = []
let contId = 0
let HistorialMovimientos = []
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
    let formularios = document.getElementById('columna_dos');
    let formulario = document.getElementById('columna_uno');
    let form1 = document.getElementById('form1');
    let logo = document.getElementById('logo');
    let form_uno = document.getElementById('form_uno');
    let iconos = document.getElementById('iconos');
    let menu_opciones = document.getElementById('menu_opciones');
    let informacion = document.getElementById('informacion');

    let nombre = document.getElementById('nombre').value;
    let ingresando = usuarios.find((usuario) => usuario.nombre === nombre);

    if (ingresando) {
        lblNombre.innerText = ingresando.nombre;
        lblCorreo.innerText = ingresando.correo;
        lblMonto.innerText = ingresando.saldo;
        lblNombre_Retirar.innerText = ingresando.nombre;
        lblCorreo_Retirar.innerText = ingresando.correo;
        lblMonto_Retirar.innerText = ingresando.saldo;
        lblNombre_Consignar.innerText = ingresando.nombre;
        lblCorreo_Consignar.innerText = ingresando.correo;
        lblMonto_Consignar.innerText = ingresando.saldo;
        lblNombre_Transferir.innerText = ingresando.nombre;
        lblCorreo_Transferir.innerText = ingresando.correo;
        lblMonto_Transferir.innerText = ingresando.saldo;

        formularios.style.display = 'none';
        formulario.style.display = 'none';
        logo.style.display = 'flex';
        form1.style.display = 'none';
        setTimeout(function () {
            logo.style.display = 'none';
            iconos.style.display = 'flex';
            form_uno.style.display = 'flex';
            informacion.style.display = 'flex';
            menu_opciones.style.display = 'flex';
            form1.style.display = 'none';
        }, 1000);

        llenarCuentas();
    } else {
        // esto es para limpiar los label si el usuario no existe
        lblNombre.innerText = "";
        lblCorreo.innerText = "";
        lblMonto.innerText = "";
        lblNombre_Retirar.innerText = "";
        lblCorreo_Retirar.innerText = "";
        lblMonto_Retirar.innerText = "";
        lblNombre_Consignar.innerText = "";
        lblCorreo_Consignar.innerText = "";
        lblMonto_Consignar.innerText = "";
        lblNombre_Transferir.innerText = "";
        lblCorreo_Transferir.innerText = "";
        lblMonto_Transferir.innerText = "";

        // esto es para mostrar el formulario inicial
        formularios.style.display = 'flex';
        formulario.style.display = 'flex';
        form1.style.display = 'flex';
        iconos.style.display = 'none';
        menu_opciones.style.display = 'none';
        informacion.style.display = 'none';


    }
}



function ConsultarSaldo() {
    let nombre = document.getElementById('nombre').value;
    let ingresando = usuarios.find((usuario) => usuario.nombre === nombre);
    if (ingresando) {

        consultar.classList.remove('hiden')
        consultar.classList.add('active')

        retirar.classList.remove('active')
        retirar.classList.add('hiden')

        consignar.classList.remove('active')
        consignar.classList.add('hiden')

        transferir.classList.remove('active')
        transferir.classList.add('hiden')

        lblNombre.innerText = ingresando.nombre
        lblCorreo.innerText = ingresando.correo
        lblMonto.innerText = ingresando.saldo
    } else {
        alert('el usuario no registrado')
    }


}
function RetirarDinero() {
    let nombre = document.getElementById('nombre').value;
    let ingresando = usuarios.find((usuario) => usuario.nombre === nombre);
    if (ingresando) {


        consultar.classList.remove('active')
        consultar.classList.add('hiden')

        retirar.classList.remove('hiden')
        retirar.classList.add('active')

        consignar.classList.remove('active')
        consignar.classList.add('hiden')

        transferir.classList.remove('active')
        transferir.classList.add('hiden')

        lblNombre_Retirar.innerText = ingresando.nombre
        lblCorreo_Retirar.innerText = ingresando.correo
        lblMonto_Retirar.innerText = ingresando.saldo
    } else {
        alert('el usuario no registrado')
    }
}
function TransferirDinero() {
    let nombre = document.getElementById('nombre').value;
    let ingresando = usuarios.find((usuario) => usuario.nombre === nombre);
    if (ingresando) {

        consultar.classList.remove('active')
        consultar.classList.add('hiden')

        retirar.classList.remove('active')
        retirar.classList.add('hiden')

        consignar.classList.remove('active')
        consignar.classList.add('hiden')

        transferir.classList.remove('hiden')
        transferir.classList.add('active')

        lblNombre_Transferir.innerText = ingresando.nombre
        lblCorreo_Transferir.innerText = ingresando.correo
        lblMonto_Transferir.innerText = ingresando.saldo
    } else {
        alert('el usuario no registrado')
    }

}
function ConsignarDinero() {
    let nombre = document.getElementById('nombre').value;
    let ingresando = usuarios.find((usuario) => usuario.nombre === nombre);
    if (ingresando) {

        consultar.classList.remove('active')
        consultar.classList.add('hiden')

        retirar.classList.remove('active')
        retirar.classList.add('hiden')

        consignar.classList.remove('hiden')
        consignar.classList.add('active')

        transferir.classList.remove('active')
        transferir.classList.add('hiden')

        lblNombre_Consignar.innerText = ingresando.nombre
        lblCorreo_Consignar.innerText = ingresando.correo
        lblMonto_Consignar.innerText = ingresando.saldo
    } else {
        alert('el usuario no registrado')
    }

}
function Ingresar() {
    let contrasena = document.getElementById('contrasena').value;
    let nombre = document.getElementById('nombre').value;

    let nombreRegex = /^[a-zA-Z]{3,20}$/;
    let contrasenaRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;

    if (!nombreRegex.test(nombre)) {
        alert('Nombre no válido solo se permiten letras mayúsculas o minúsculas y tiene que ser de una longitud entre 3 y 20 caracteres.');
        return;
    }
    if (!contrasenaRegex.test(contrasena)) {
        alert('Contraseña no válida tiene que tener al menos un dígito,una letra minuscula,una letra mayuscula y tiene que tener una longitud de entre 8 y 20 caracteres');
        return;
    }

    var ingresando = usuarios.find((usuario) => usuario.nombre === nombre);

    if (ingresando) {
        if (ingresando.intentos < 3) {
            if (contrasena === ingresando.contrasena) {
                alert("Bienvenido");
                console.log(ingresando.id);
                ingresando.status = true;
                mostrarformulario();
            } else {
                alert("Credenciales incorrectas");
                ingresando.intentos++;
            }
        } else {
            alert('Máximo de intentos alcanzados');
        }
    } else {
        alert('Usuario no registrado');
    }
}


function register() {
    var usuario2 = document.getElementById("nombre_registro").value;
    var contrasena = document.getElementById("contrasena_registro").value;
    var correo = document.getElementById("correo").value;
    var saldo = parseInt(document.getElementById("saldo").value);

    let nombreRegex = /^[a-zA-Z]{3,20}$/;
    let contrasenaRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
    let correoRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

    if (!nombreRegex.test(usuario2)) {
        alert('Nombre no válido solo se permiten letras mayúsculas o minúsculas y tiene que ser de una longitud entre 3 y 20 caracteres.');
        return;
    }

    if (!contrasenaRegex.test(contrasena)) {
        alert('Contraseña no válida tiene que tener al menos un dígito,una letra minuscula,una letra mayuscula y tiene que tener una longitud de entre 8 y 20 caracteres');
        return;
    }

    if (!correoRegex.test(correo)) {
        alert('Correo no valido Deben contener uno o más caracteres de palabra (letras, dígitos o guiones bajos) antes del símbolo "@".Pueden tener grupos adicionales de texto que comiencen con un punto, seguidos por uno o más caracteres de palabra y guiones bajos. Estos grupos son opcionales.Después del símbolo "@", debe haber uno o más grupos de texto que consistan en caracteres de palabra y guiones bajos, seguidos por un punto.Al final, debe haber un TLD de dos a siete letras mayúsculas o minúsculas.');
        return;
    }

    var index = usuarios.findIndex((usuario) => usuario.nombre === usuario2);
    if (usuario2 == '' || contrasena == '' || correo == '' || saldo == '') {
        alert('Falta info');
    } else {
        if (index !== -1) {
            alert('Este Usuario ya existe');
        } else {
            if (saldo >= 100000) {
                let usuario = {
                    id: contId,
                    nombre: usuario2,
                    contrasena: contrasena,
                    correo: correo,
                    saldo: saldo,
                    intentos: 0,
                    status: false
                };
                usuarios.push(usuario);
                contId++;
                console.log(usuarios);
                alert('Usuario creado con éxito');
                let FechaActual = new Date();
                let MensajeIngreso = (' el usuario ' + usuario2 + ' se registró con éxito ' + FechaActual);
                HistorialMovimientos.push(MensajeIngreso);
            } else {
                alert('No se puede crear cuenta por saldo insuficiente');
            }
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
        alert('no se puede realizar el retiro, se debe de quedar en la cuenta con minimo $10000')
    } else if (ValorRetiro < 10000) {
        alert('No es posible retirar menos de $10000')
    }
    else {
        ingresando[0].saldo = resta;
        alert('retiro exitoso')
        let FechaActual = new Date()
        let MensajeRetiro = (' el usuario ' + ingresando[0].nombre + ' retiro ' + ValorRetiro + FechaActual)
        HistorialMovimientos.push(MensajeRetiro)
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
            let FechaActual = new Date()
            let MensajConsignacion = (' el usuario ' + ingresando[0].nombre + ' Consigno ' + ValorConsignar + FechaActual)
            HistorialMovimientos.push(MensajConsignacion)
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
    } else if (ingresando[0].saldo === aTransferir[0].saldo) {
        alert('Usted no se puede Transferir Dinero, vaya al apartado Consignar')
    } else if (ValorTransferir < 10000) {
        alert('La transferencia debe ser mayor o igual a $10000')
    }
    else if (confirm('seguro que deseas transferir' + ValorTransferir)) {
        ingresando[0].saldo = parseInt(resta);
        aTransferir[0].saldo += parseInt(ValorTransferir);
        alert('Transferencia realizada')
        let FechaActual = new Date()
        let Mensajetransferencia = (' el usuario ' + ingresando[0].nombre + ' transfirio ' + ValorTransferir + ' a ' + aTransferir[0].nombre + FechaActual)
        HistorialMovimientos.push(Mensajetransferencia)
        console.log(usuarios);
    } else {
        alert('transferencia cancelada')
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

function cerrarSesion(event) {
    event.preventDefault();
    let nombre = document.getElementById('nombre').value;
    let ingresando = usuarios.find((usuario) => usuario.nombre === nombre);

    if (confirm('¿Seguro desea cerrar sesión?')) {
        if (ingresando) {
            // esto es para encontrar el índice del usuario en el array
            let ingresandoIndex = usuarios.findIndex((usuario) => usuario.nombre === nombre);
            if (ingresandoIndex !== -1) {
                // esto es para elimina el usuario del array
                usuarios.splice(ingresandoIndex, 1);
                // Esto es para mostrar el formulario inicial después de cerrar sesión
                mostrarformulario();
                alert('Vuelva pronto');
            }
        } else {
            // En este caso, el usuario no se encontró, pero aún así, muestra el formulario inicial
            mostrarformulario();
            // alert('Usuario no encontrado al intentar cerrar sesión');
        }
    }
}
function Movimientos(event) {
    event.preventDefault();
    let nombre = document.getElementById('nombre').value
    let ingresando = usuarios.filter((usuario) => usuario.nombre == nombre)
    if (confirm('Seguro desea ver el historial de movimientos')) {
        usuarios[ingresando[0].id] = false
        alert(HistorialMovimientos)
    }
}


