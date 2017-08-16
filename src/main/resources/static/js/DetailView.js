function detailFestival(item) {

    var div = document.createElement('div');
    var detailView = document.getElementById("detail").appendChild(div);

    var img = document.createElement('img');
    img.src += item[3];

    console.log(item[3]);

    detailView.appendChild(img);

}

