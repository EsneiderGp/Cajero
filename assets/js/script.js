
let usuarios = []
function Ingresar() {
    let formularios = document.getElementById('columna_dos')
    let formulario = document.getElementById('columna_uno')
    let form1 = document.getElementById('form1')
    let logo = document.getElementById('logo')
    let form_uno = document.getElementById('form_uno')
    let iconos = document.getElementById('iconos')
    let menu_opciones = document.getElementById('menu_opciones')
    let informacion = document.getElementById('informacion')
    var usuario2 = document.getElementById("nombre").value
    var contrasena = document.getElementById("contrasena").value 
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
    },2000)
    var filteredUsers = usuarios.filter(function (user) {
        return user.nombre == usuario2;
    });
    if (filteredUsers[0].contrasena == contrasena) {
        alert('Bienvenido !!')
    }else{
        alert('Contraseña incorrecta!!')
    }
}
function ConsulatarSaldo() {
    var usuario2 = document.getElementById("nombre").value
    var filteredUsers = usuarios.filter(function (user) {

    });
    alert(filteredUsers[0].valorRegistro)
}
function register() {
    var usuario2 = document.getElementById("nombre_registro").value
    var contrasena = document.getElementById("contrasena_registro").value
    var correo = document.getElementById("correo").value
    var valorRegistro = document.getElementById("valorRegistro").value
    if (usuario2 == '' || contrasena == '' || correo == '') {
        alert('Falta info')
    } else if (valorRegistro >= 100000) {
        let usuario = {
            nombre: '',
            contrasena: '',
            correo: '',
            valorRegistro: ''
        }
        usuario.valorRegistro = valorRegistro
        usuario.contrasena = contrasena
        usuario.correo = correo
        usuario.nombre = usuario2
        usuarios.push(usuario)
        console.log(usuarios);
    }
}

let botones = document.getElementById('iconos')
    iconos.style.display='flex'
    iconos.style.display= 'none'
    
