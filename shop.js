const url = `https://jsonserveryiqi.herokuapp.com/products`;

window.addEventListener("load", async () => {
    try {
        var contenido = await axios.get(`${url}`)
        showcards(contenido.data);
    }
    catch( err ) {
        console.log(err)
    }
});

function showcards(products) {

    for (var i = 0; i < products.length; ++i) {
        $(`#section`).append(`<div class="card" id="add-padding" style="width: 18rem">
        <img src=${products[i].img} class="card-img-top" alt=${products[i].name}/>
        <div class="card-body">
        <h5 class="card-title">${products[i].name}</h5>
        <p class="card-text">${products[i].desc}</p>
        </div>
        </div>`)
    }

}