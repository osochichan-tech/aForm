var nventana;
var nombre;
var paterno;
var materno;
var dia;
var mes;
var age;
var direction;
var telefono;
var email;

function ventana() {
    var datos = document.forms["registro"];

    nombre = datos.elements["txtnombre"].value;
    paterno = datos.elements["txtpaterno"].value;
    materno = datos.elements["txtmaterno"].value;
    dia = datos.elements["DIA"].value;
    mes = datos.elements["MES"].value;
    age = datos.elements["txtage"].value;
    direction = datos.elements["txtdir"].value;
    telefono = datos.elements["txttel"].value;
    email = datos.elements["txtemail"].value;

    nventana = window.open("", "_blank");

    if (!nventana) {
        alert("Permite las ventanas emergentes para ver tus datos.");
        return;
    }

    nventana.document.open();
    nventana.document.write(
        "<html><head><title>VENTANA2</title></head>" +
        "<body background='tm.jpg'>" +
        "<h1><center>VERIFICA TUS DATOS</center></h1>"
    );
    nventana.document.write(
        "<font face='Chalkduster' size='4'><strong>"
    );
    nventana.document.write(
        "Nombre: <u>" + nombre + "&nbsp;&nbsp;" +
        paterno + "&nbsp;&nbsp;" + materno + "</u><br><br>"
    );
    nventana.document.write(
        "Fecha de nacimiento: <u>" + dia + "/" + mes + "/" +
        age + "</u><br><br>"
    );
    nventana.document.write(
        "Dirección: <u>" + direction + "</u><br><br>"
    );
    nventana.document.write(
        "Teléfono: <u>" + telefono + "</u><br><br>"
    );
    nventana.document.write(
        "Email: <u>" + email + "</u><br><br>"
    );
    nventana.document.write("</strong></font>");
    nventana.document.write(
        "<input type='button' onclick='window.close()' value='Cerrar'>"
    );
    nventana.document.write("</body></html>");
    nventana.document.close();
}

function enviar() {
    alert("Información enviada!!!");
    borrarDatos();
    return false;
}

function borrarDatos() {
    var datos = document.forms["registro"].elements;

    datos["txtnombre"].value = "";
    datos["txtpaterno"].value = "";
    datos["txtmaterno"].value = "";
    datos["DIA"].value = "";
    datos["MES"].value = "";
    datos["txtage"].value = "";
    datos["txtdir"].value = "";
    datos["txttel"].value = "";
    datos["txtemail"].value = "";
}
