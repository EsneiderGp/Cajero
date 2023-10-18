
let usuarios = []
function Ingresar() {
    var usuario2 = document.getElementById("nombre").value
    var contrasena = document.getElementById("contrasena").value
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
