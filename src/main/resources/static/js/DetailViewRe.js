function makeTitle(item) {
    var makeTitle = document.getElementById("listTitle");
    makeTitle.append(item[0].title);
    detailFestival(item);
}

function detailFestival(item) {

    var div = document.createElement('div');
    div.className += "detail-img";

    var img = document.createElement('img');
    img.src += item[0].firstImage;
    img.className += "detailimg";


    var detailView = document.getElementById("detail-container").appendChild(div);

    detailView.appendChild(img);

    detailInformation(item);

}

function detailInformation(item) {
    var div = document.createElement('div');
    div.className += "detail-inform";

    var ul = document.createElement('ul');
    ul.className += "detail-informUl";


    var detailInformDiv = document.getElementById("detail-container").appendChild(div);
    var detailInformUl = detailInformDiv.appendChild(ul);


    var li = document.createElement('li');
    var li2 = document.createElement('li');
    var li3 = document.createElement('li');
    li3.className += "detail-informLiaddr1";
    var li4 = document.createElement('li');
    var li5 = document.createElement('li');
    li5.className += "detail-informLioverView";


    var detailInformLi= detailInformUl.appendChild(li);
    detailInformLi.append("축제 시작  " + item[0].eventStartDate +"\n");
    var detailInformLi2= detailInformUl.appendChild(li2);
    detailInformLi2.append("축제 종료  " + item[0].eventEndDate +"\n");
    var detailInformLi3= detailInformUl.appendChild(li3);
    detailInformLi3.append("축제 장소  " + item[0].addr1 +"\n");
    var detailInformLi4= detailInformUl.appendChild(li4);
    detailInformLi4.append("전화번호 " + item[0].tel +"\n");
    var detailInformLi5= detailInformUl.appendChild(li5);
    detailInformLi5.append("상세설명 " + item[0].overView +"\n");


    var div2 = document.createElement('div');
    div2.className += "detail-map";
    div2.id += "detail-map";

    detailInformDiv.appendChild(div2);


    var map = new naver.maps.Map('detail-map', {
        center: new naver.maps.LatLng(item[0].mapY, item[0].mapX),
        zoom: 12
    });

    var marker = new naver.maps.Marker({
        position: new naver.maps.LatLng(item[0].mapY, item[0].mapX),
        map: map
    });

    return map;

    // setMapdetail(item);
}

function setMapdetail(item) {

    var div = document.createElement('div');
    div.className += "detail-map";
    div.id += "detail-map";

    document.getElementById("detail-inform").appendChild(div);


    var map = new naver.maps.Map('detail-map', {
        center: new naver.maps.LatLng(item[0].mapY, item[0].mapX),
        zoom: 12
    });

    var marker = new naver.maps.Marker({
        position: new naver.maps.LatLng(item[0].mapY, item[0].mapX),
        map: map
    });

    return map;


}