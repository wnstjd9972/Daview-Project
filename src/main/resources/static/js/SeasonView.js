//봄 3~5월
function springFestival(item) {
    var springFest = [];
    for (var i = 0; i < item.length; i++) {
        var sday = new Date(item[i].eventStartDate);
        var eday = new Date(item[i].eventEndDate);

        if ((sday.getMonth() >= 2 && sday.getMonth() <= 4 ) || ( eday.getMonth() >= 2 && eday.getMonth() <= 4)) {
            // console.log(sday.getMonth());
            // console.log(eday.getMonth());
            springFest.push(item[i]);
        }
    }
    return FestivalView(springFest);
}

//여름은 6~8월
function summerFestival(item) {
    var summerFest = [];
    for (var i = 0; i < item.length; i++) {
        var sday = new Date(item[i].eventStartDate);
        var eday = new Date(item[i].eventEndDate);

        if ((sday.getMonth() >= 5 && sday.getMonth() <= 7 ) || ( eday.getMonth() >= 5 && eday.getMonth() <= 7)) {
            // console.log(sday.getMonth());
            // console.log(eday.getMonth());
            summerFest.push(item[i]);
        }
    }
    return FestivalView(summerFest);
}

//가을은 9~10월
function fallFestival(item) {
    var fallFest = [];
    for (var i = 0; i < item.length; i++) {
        var sday = new Date(item[i].eventStartDate);
        var eday = new Date(item[i].eventEndDate);

        if ((sday.getMonth() >= 8 && sday.getMonth() <= 9 ) || ( eday.getMonth() >= 8 && eday.getMonth() <= 9)) {
            fallFest.push(item[i]);
            // console.log(sday.getMonth());
            // console.log(eday.getMonth());
        }
    }
    return FestivalView(fallFest);
}

//겨울은 11~2월
function winterFestival(item) {
    var winterFest = [];
    for (var i = 0; i < item.length; i++) {
        var sday = new Date(item[i].eventStartDate);
        var eday = new Date(item[i].eventEndDate);

        if (((sday.getMonth() >= 10 && sday.getMonth() <= 11 ) || (sday.getMonth() >= 0 && sday.getMonth() <= 1 ))
            || ((eday.getMonth() >= 10 && eday.getMonth() <= 11) || (eday.getMonth() >= 0 && eday.getMonth() <= 1 ))) {
            winterFest.push(item[i]);
            // console.log(sday.getMonth());
            // console.log(eday.getMonth());
        }
    }
    return FestivalView(winterFest);
}


function FestivalView(item) {

    //태그속성주기
    var div = document.createElement('div');
    div.className += "tg-container";

    var ul = document.createElement('ul');
    ul.className += "tg-gallery";


    var fallGalDiv = document.getElementById("gallery").appendChild(div);
    var fallGalUl = fallGalDiv.appendChild(ul);


    for (var i = 0; i < item.length; i++) {

        var li = document.createElement('li');
        li.className += "tg-template";


        var a = document.createElement('a');
        a.className += "a-detail";
        a.href += '/daview/detail/' + item[i].contentId;
        var a2 = document.createElement('a');
        a2.className += "a2-detail";
        a2.href += '/daview/detail/' + item[i].contentId;

        var img = document.createElement('img');
        img.src += item[i].firstImage;
        img.className += "img-size";

        var recomImg = document.createElement('img');
        recomImg.src += "/image/season/custom_233.gif";

        // var likeCount = document.

        var fallGalLiA1 = fallGalUl.appendChild(li);
        var fallGalLiA2 = fallGalLiA1.appendChild(a);
        var fallGalLiA3 = fallGalLiA1.appendChild(a2);

        fallGalLiA2.append(img);

        if((item[i].readCount / 1000) < 1) {
            item[i].readCount = 1000;
        }

        fallGalLiA3.append(parseInt(item[i].readCount / 1000));

        //best태그
        if (item[i].readCount > 100000) {

            fallGalLiA3.append(recomImg);
            fallGalLiA3.append(item[i].title);

        }
        else {

            fallGalLiA3.append(item[i].title);
        }



    }




}


