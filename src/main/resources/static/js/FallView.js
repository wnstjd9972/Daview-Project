function fallFestival(item) {

    var fallFest = [];

    var date = new Date();
    var today = date;

    for (var i = 0; i < item.length; i++) {
        var sday = new Date(item[i].eventStartDate);
        var eday = new Date(item[i].eventEndDate);

        console.log(sday +" " + eday);
        sday.setYear(today.getFullYear());
        eday.setYear(today.getFullYear());
        console.log(sday +" " + eday);
        console.log(sday.getMonth());

          if (eday < sday) {
              eday.setYear((today.getFullYear()) + 1);
              fallFest.push(item[i]);
          }
          else{
            if((sday.getMonth() === 9) || (eday.getMonth() === 9)) {
                fallFest.push(item[i]);
                console.log(fallFest)
            }
        }
    }
    return fallFest;
}

function fallFestivalView(item) {
    var fall = fallFestival(item);

    for (var i = 0; i < fall.length; i++) {
        //태그속성주기
        var div = document.createElement('div');
        div.className += "img-w";

        var img = document.createElement('img');
        img.src += fall[i].firstImage;


        var a = document.createElement('a');
        a.href += '/daview/detail/' + fall[i].contentId;

        //실질적인 표현?
        var fallGalDiv = document.getElementById("gallery").appendChild(div);
        var fallGalA = fallGalDiv.appendChild(a);
        fallGalA.append(img);







    }
}