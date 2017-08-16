function fallFestival(item) {

    var fallFest = [];

    var date = new Date();
    var today = date;

    for (var i = 0; i < item.length; i++) {
        var sday = new Date(item[i].eventStartDate);
        var eday = new Date(item[i].eventEndDate);

        // console.log(sday +" " + eday);
        sday.setYear(today.getFullYear());
        eday.setYear(today.getFullYear());
        // console.log(sday +" " + eday);
        // console.log(sday.getMonth());

          if (eday < sday) {
              eday.setYear((today.getFullYear()) + 1);
              fallFest.push(item[i]);
          }
          else{
            if((sday.getMonth() === 9) || (eday.getMonth() === 9)) {
                fallFest.push(item[i]);
                // console.log(fallFest)
            }
        }
    }
    return fallFest;
}

function fallFestivalView(item) {
    var fall = fallFestival(item);

    //태그속성주기
    var div = document.createElement('div');
    div.className += "tg-container";

    var ul = document.createElement('ul');
    ul.className += "tg-gallery";




    var fallGalDiv = document.getElementById("gallery").appendChild(div);
    var fallGalUl = fallGalDiv.appendChild(ul);


    for (var i = 0; i < fall.length; i++) {


        var li = document.createElement('li');
        li.className += "tg-template";

        var divLi = document.createElement('div');
        divLi.className += "tg-thumbnail";


        var a = document.createElement('a');
        a.className += "a-detail";
        a.href += '/daview/detail/' + fall[i].contentId;

        var img = document.createElement('img');
        img.src += fall[i].firstImage;
        img.className += "img-size";



        var fallGalLi = fallGalUl.appendChild(li);
        var fallGalLiA = fallGalLi.appendChild(a);
        fallGalLiA.append(fall[i].title);

        fallGalLiA.append(img);





    }
}