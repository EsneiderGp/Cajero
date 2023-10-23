
let usuarios = []
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
var lblNombre_Transferir= document.getElementById('lblNombre_Transferir')
var lblCorreo_Transferir = document.getElementById('lblCorreo_Transferir')
var lblMonto_Transferir = document.getElementById('lblMonto_Transferir')

llenarCuentas()
function Ingresar() {
    let nombre =  document.getElementById('nombre').value
    console.log(usuarios);
    let contrasena = document.getElementById('contrasena').value
        var intentosFallidos = 0
        var contadorFallidos = 0
        while(intentosFallidos == 1 || contadorFallidos ==3)
        {
            if( 
                nombre == usuarios[0].nombre
                && contrasena == usuarios[0].contrasena){
                    alert("Bienvenido")
                    mostrarformulario()
                    intentosFallidos = 1
                }else{
                    alert("Usuario o Contraseña incorrecta")
                    contadorFallidos++ 
                }
        }
        if(contadorFallidos=3){
            alert('usted llego al maximo intentos fallidos')
        }
        
    // }
}
function mostrarformulario(){
    let formularios = document.getElementById('columna_dos')
    let formulario = document.getElementById('columna_uno')
    let form1 = document.getElementById('form1')
    let logo = document.getElementById('logo')
    let form_uno = document.getElementById('form_uno')
    let iconos = document.getElementById('iconos')
    let menu_opciones = document.getElementById('menu_opciones')
    let informacion = document.getElementById('informacion')
    lblNombre.innerText= usuarios[0].nombre
    lblCorreo.innerText= usuarios[0].correo
    lblMonto.innerText= usuarios[0].saldo
    lblNombre_Retirar.innerText = usuarios[0].nombre
    lblCorreo_Retirar.innerText = usuarios[0].correo
    lblMonto_Retirar.innerText = usuarios[0].saldo
    lblNombre_Consignar.innerText = usuarios[0].nombre
    lblCorreo_Consignar.innerText = usuarios[0].correo
    lblMonto_Consignar.innerText = usuarios[0].saldo
    lblNombre_Transferir.innerText = usuarios[0].nombre
    lblCorreo_Transferir.innerText = usuarios[0].correo
    lblMonto_Transferir.innerText = usuarios[0].saldo

    formularios.style.display='none'
    formulario.style.display='none'
    logo.style.display='flex'
    form1.style.display='none'
    setTimeout(function(){
        logo.style.display='none'
        iconos.style.display='flex'
        form_uno.style.display='flex' 
        informacion.style.display='flex'
        menu_opciones.style.display='flex'
        form1.style.display='none'
    },3000)
    llenarCuentas()
}

function ConsultarSaldo(){
  consultar.classList.remove('hiden')
  consultar.classList.add('active')

  retirar.classList.remove('active')
  retirar.classList.add('hiden')

  consignar.classList.add('hiden')
  consignar.classList.remove('active')

  transferir.classList.remove('active')
  transferir.classList.add('hiden')


}
function RetirarDinero(){
  retirar.classList.remove('hiden')
  retirar.classList.add('active')

  consultar.classList.remove('active')
  consultar.classList.add('hiden')

  consignar.classList.add('hiden')
  consignar.classList.remove('active')

  transferir.classList.remove('active')
  transferir.classList.add('hiden')
}
function TransferirDinero(){
  transferir.classList.remove('hiden')
  transferir.classList.add('active')

  retirar.classList.remove('active')
  retirar.classList.add('hiden')

  consultar.classList.remove('active')
  consultar.classList.add('hiden')

  consignar.classList.add('hiden')
  consignar.classList.remove('active')

}
function ConsignarDinero(){
  consignar.classList.remove('hiden')
  consignar.classList.add('active')
  
  transferir.classList.remove('active')
  transferir.classList.add('hiden')

  retirar.classList.remove('active')
  retirar.classList.add('hiden')

  consultar.classList.remove('active')
  consultar.classList.add('hiden')

}
function register() {
    var usuario2 = document.getElementById("nombre_registro").value
    var contrasena = document.getElementById("contrasena_registro").value
    var correo = document.getElementById("correo").value
    var saldo = parseInt(document.getElementById("saldo").value)
    if (usuario2 == '' || contrasena == '' || correo == ''||saldo=='') {
        alert('Falta info')
    }else {
        if (saldo >= 100000){
            let usuario = {
                nombre: '',
                contrasena: '',
                correo: '',
                saldo: 0
            }
            usuario.saldo = saldo
            usuario.contrasena = contrasena
            usuario.correo = correo
            usuario.nombre = usuario2
            usuarios.push(usuario)
            console.log(usuarios);
            alert('Usuario creado con exito');
            mostrarformulario()
        }else {alert ('no se puede crear cuenta por saldo insuficiente ')}
    }
}

let botones = document.getElementById('iconos')
    iconos.style.display='flex'
    iconos.style.display= 'none'

function Retirar (){
    var ValorRetiro = document.getElementById('input_Retirar').value;
    var SaldoDisponible = usuarios[0].saldo;
    var resta = SaldoDisponible - ValorRetiro;
    console.log(SaldoDisponible);
    if (resta < 10000){
        alert('no se puede realizar la transaccion')
    }else{
        usuarios[0].saldo = resta;
        alert('transaccion exitosa')
        ValorRetiro.value=""
    }
    actualizarSaldo()
}
function Consignar(){
    var ValorConsignar = parseInt(document.getElementById('input_Consignar').value);
    if (confirm('seguro que deseas consignar'+ ValorConsignar)){
        usuarios[0].saldo += ValorConsignar;
        alert('Consignacion exitosa')
        ValorConsignar.value =''
    }else{
        alert('consigancion cancelada')

    }
    actualizarSaldo()
    console.log(usuarios);
}
function actualizarSaldo(){
    let saldoActual = usuarios[0].saldo;
    lblMonto.innerText= saldoActual;
    lblMonto_Retirar.innerText = saldoActual   ; 
    lblMonto_Consignar.innerText = saldoActual  ;
    lblMonto_Transferir.innerText = saldoActual ;
}
function Transferir(){
    var ValorTransferir = document.getElementById('input_Transferir').value;
    var select = document.getElementById('cuenta').value;
    let saldoActual = usuarios[0].saldo;
    parseInt()
    var resta = saldoActual - ValorTransferir ;
    if (resta < 10000){
        alert('no se puede realizar la transaccion')
    }else{
        console.log(resta);
        if(confirm('seguro que deseas transferir' + ValorTransferir)){
            usuarios[0].saldo = parseInt(resta);
            for(var i=0;i<usuarios.length;i++){
                if(usuarios[i].nombre==select){
                    usuarios[i].saldo+=parseInt(ValorTransferir);
                    break
                    }
        }
        }else{
            alert('transferencia cancelada')
        }   
    }
    actualizarSaldo();
    console.log(usuarios);
}
function llenarCuentas(){
    var lista = document.getElementById("cuenta")
    for (let i = 0; i < usuarios.length; i++){
        var option = document.createElement("option");
        option.value = usuarios[i].nombre;
        option.text = usuarios[i].nombre;
        lista.appendChild(option)
    }

}