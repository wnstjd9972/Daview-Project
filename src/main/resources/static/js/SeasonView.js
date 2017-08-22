// //봄 3~5월
// function springFestival(item) {
//     var springFest = [];
//     for (var i = 0; i < item.length; i++) {
//         var sday = new Date(item[i].eventStartDate);
//         var eday = new Date(item[i].eventEndDate);
//
//         if ((sday.getMonth() >= 2 && sday.getMonth() <= 4 ) || ( eday.getMonth() >= 2 && eday.getMonth() <= 4)) {
//             // console.log(sday.getMonth());
//             // console.log(eday.getMonth());
//             springFest.push(item[i]);
//         }
//     }
//     return FestivalView(springFest);
// }
//
// //여름은 6~8월
// function summerFestival(item) {
//     var summerFest = [];
//     for (var i = 0; i < item.length; i++) {
//         var sday = new Date(item[i].eventStartDate);
//         var eday = new Date(item[i].eventEndDate);
//
//         if ((sday.getMonth() >= 5 && sday.getMonth() <= 7 ) || ( eday.getMonth() >= 5 && eday.getMonth() <= 7)) {
//             // console.log(sday.getMonth());
//             // console.log(eday.getMonth());
//             summerFest.push(item[i]);
//         }
//     }
//     return FestivalView(summerFest);
// }
//
// //가을은 9~10월
// function fallFestival(item) {
//     var fallFest = [];
//     for (var i = 0; i < item.length; i++) {
//         var sday = new Date(item[i].eventStartDate);
//         var eday = new Date(item[i].eventEndDate);
//
//         if ((sday.getMonth() >= 8 && sday.getMonth() <= 9 ) || ( eday.getMonth() >= 8 && eday.getMonth() <= 9)) {
//             fallFest.push(item[i]);
//             // console.log(sday.getMonth());
//             // console.log(eday.getMonth());
//         }
//     }
//     return FestivalView(fallFest);
// }
//
// //겨울은 11~2월
// function winterFestival(item) {
//     var winterFest = [];
//     for (var i = 0; i < item.length; i++) {
//         var sday = new Date(item[i].eventStartDate);
//         var eday = new Date(item[i].eventEndDate);
//
//         if (((sday.getMonth() >= 10 && sday.getMonth() <= 11 ) || (sday.getMonth() >= 0 && sday.getMonth() <= 1 ))
//             || ((eday.getMonth() >= 10 && eday.getMonth() <= 11) || (eday.getMonth() >= 0 && eday.getMonth() <= 1 ))) {
//             winterFest.push(item[i]);
//             // console.log(sday.getMonth());
//             // console.log(eday.getMonth());
//         }
//     }
//     return FestivalView(winterFest);
// }


function FestivalView(item) {
    //태그속성주기
    var div = document.createElement('div');
    div.className += "tg-container";

    var ul = document.createElement('ul');
    ul.className += "tg-gallery";


    var galDiv = document.getElementById("gallery").appendChild(div);
    var galUl = galDiv.appendChild(ul);


    for (var i = 0; i < item.length; i++) {
        var li = document.createElement('li');
        li.className += "tg-template";

        var a = document.createElement('a');
        a.className += "a-detail";
        a.href += '/daview/detail/' + item[i].contentId;

        var a3 = document.createElement('a');
        a3.className += "a3-detail";
        a3.href += '/daview/detail/' + item[i].contentId;

        var img = document.createElement('img');
        img.src += item[i].firstImage;
        img.className += "img-size";

        var recomImg = document.createElement('img');
        recomImg.src += "/image/season/custom_233.gif";

        var galLiA1 = galUl.appendChild(li);

        var galLiA2 = galLiA1.appendChild(a);
        galLiA2.append(img);

        // var a2 = document.createElement('a');
        // a2.className += 'like-button';
        // a2.href += '#';
        // event 발생시켜야 되는데!!
        if ((item[i].readCount / 1000) < 1) {
            item[i].readCount += 1000;
        }


        var button = document.createElement('button');
        button.className += 'like-button';
        button.id += 'like-button';
        button.name += item[i].readCount;
        button.content +=
            button.onclick = function () {
                var x = this.innerHTML
                var y = parseInt(x.replace(/[^0-9]/g, "")) + 1;
                this.innerHTML = "♡ 좋아요 " + y + "개";
            };

        var like = galLiA1.appendChild(button);


        like.append("♡ 좋아요 " + parseInt(item[i].readCount / 1000) + "개");


        var galLiA3 = galLiA1.appendChild(a3);

        //best태그
        if (item[i].readCount > 100000) {
            galLiA3.append(recomImg);
            galLiA3.append(item[i].title);
        }
        else {
            galLiA3.append(item[i].title);
        }

    }
}


