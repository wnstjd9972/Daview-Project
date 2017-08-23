function detailFestival(item) {

    var div = document.createElement('div');
    div.className += "detail-img";

    var img = document.createElement('img');
    img.src += item[0].firstImage;
    img.className += "detailimg";


    var detailView = document.getElementById("detail-container").appendChild(div);

    detailView.appendChild(img);

    }

//지도 만드는 함수
function setMap2(item) {
    console.log(item[0].mapY, item[0].mapX); //넘어옴.

    var map = new naver.maps.Map('map', {
        center: new naver.maps.LatLng(item[0].mapY, item[0].mapX),
        zoom: 12
    });

    var marker = new naver.maps.Marker({
        position: new naver.maps.LatLng(item[0].mapY, item[0].mapX),
        map: map
    });

    return map;
}

