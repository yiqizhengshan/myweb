window.addEventListener("load", function() {
    var h = window.location.search;
    var j = h.split("user=")[1];

    $(`#bienvenida`).html(`<h6 class="fs-1">Bienvenid@ ${j}</h6>`)
})