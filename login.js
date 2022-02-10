const url = "https://jsonserveryiqi.herokuapp.com/users"

window.addEventListener("load", function() {



    var formulario = document.getElementById("formulario");

    formulario.addEventListener("submit", handleSubmit)
})

async function handleSubmit(e) {
    e.preventDefault();

    const User = document.getElementById("Usuario").value;
    const Password = document.getElementById("Password").value;
    const Section = document.getElementById("section");
    const ErrorDisp = document.getElementById("errorDisplay");

    if ( (!User || !Password)) {
        if (ErrorDisp) return;
        let errorDisplay = document.createElement('div');
        errorDisplay.className = "alert alert-danger text-center";
        errorDisplay.id = "errorDisplay";
        errorDisplay.innerHTML = "¡Todos los campos se han de completar!"
        Section.insertBefore(errorDisplay, Section.firstChild);

    }
    else {
        if (ErrorDisp) Section.removeChild(ErrorDisp);

        try {
            var h = await axios.get(`${url}/${User}`)
            console.log(h.data)
            comprobarPassword(h.data)
        }
        catch ( err ) {
            alert("El usuario no existe, comprueba que las mayúsculas y minúsculas coincidan");
            console.log(err);
        }
    }
}

function comprobarPassword(data) {
    var pass = data.password;
    var nombre = data.id;
    if (Password.value === pass) {
        window.location.href = `Bienvenido.html?user=${nombre}`;
    }
    else {
        alert("Contraseña incorrecta");
    }
}