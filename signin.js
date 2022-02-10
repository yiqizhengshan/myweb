const url = "https://jsonserveryiqi.herokuapp.com/users"

window.addEventListener("load", function() {
    var formulario = document.getElementById("formulario");
    
    formulario.addEventListener("submit", handleSubmit)
})

async function handleSubmit(e) {
    e.preventDefault();

    const User = document.getElementById("Usuario").value;
    const Password = document.getElementById("Password").value;
    const Repe = document.getElementById("RepetirPassword").value;
    const Mail = document.getElementById("Mail").value;
    const Section = document.getElementById("section");
    const ErrorDisp = document.getElementById("errorDisplay");

    if ( (!User || !Password || !Repe || !Mail)) {
        if (ErrorDisp) return;
        let errorDisplay = document.createElement('div');
        errorDisplay.className = "alert alert-danger text-center";
        errorDisplay.id = "errorDisplay";
        errorDisplay.innerHTML = "¡Todos los campos se han de completar!"
        Section.insertBefore(errorDisplay, Section.firstChild);

    }
    else {
        if (ErrorDisp) Section.removeChild(ErrorDisp);

        if (Password !== Repe) {
            alert("Las contraseñas no coinciden!")
        }

        else {
            try {
                var h = await axios.get(`${url}?mail=${Mail}`)
                var j = await axios.get(`${url}?id=${User}`)

                if (h.data.length || j.data.length) {
                    return alert("E-mail o usuario ya existente!")
                }

                var objeto = {
                    id:User,
                    password:Password,
                    mail:Mail
                };
                await axios.post(url, objeto)
                alert("Se ha enviado correctamente un correo, revisa la bandeja de entrada.")
            }
            catch (err) {
                console.log(err);
            }
        }
    }
}