//첫 화면에 보여줄 현재 진행중인 축제를 걸러내는 JS입니다.
function ingFestival(item) {
    //진행중인 축제를 담을 배열 입니다.
    var ingFestival = [];
    //현재 진행중인 축제를 찾아내기 위한 함수입니다.
    var today = new Date();
    for (var i = 0; i < item.length; i++) {
        var sday = new Date(item[i].eventStartDate);
        var eday = new Date(item[i].eventEndDate);
        //오늘 날짜에서 축제 날짜를 비교하여 현재 진행중인 축제일 경우 마커를 표시할 XY좌표를 넘깁니다.
        if (today < sday || today > eday) {
        }
        else {
            ingFestival.push(item[i])
        }
    }
    return ingFestival;
}

function getMainMap(item) {
    reinventionData();
    var map = new naver.maps.Map('map', {
        center: new naver.maps.LatLng(36, 127),
        zoom: 2,
        mapTypeControl: true,
        mapTypeControlOptions: {
            style: naver.maps.MapTypeControlStyle.DROPDOWN
        }
    });

    var trafficLayer = new naver.maps.TrafficLayer({
        interval: 2000 // 2초마다 새로고침
    });

    var btn = $('#traffic');

    naver.maps.Event.addListener(map, 'trafficLayer_changed', function (trafficLayer) {
        if (trafficLayer) {
            btn.addClass('control-on');
            $("#autorefresh").parent().show();
            $("#autorefresh")[0].checked = true;
        } else {
            btn.removeClass('control-on');
            $("#autorefresh").parent().hide();
        }
    });

    trafficLayer.setMap(map);


    btn.on("click", function (e) {
        e.preventDefault();

        if (trafficLayer.getMap()) {
            trafficLayer.setMap(null);
        } else {
            trafficLayer.setMap(map);
        }
    });

    $("#autorefresh").on("click", function (e) {
        var btn = $(this),
            checked = btn.is(":checked");

        if (checked) {
            trafficLayer.startAutoRefresh();
        } else {
            trafficLayer.endAutoRefresh();
        }
    });


    var markers = [],
        infoWindows = [];
    for (var i = 0; i < item.length; i++) {
        var marker = new naver.maps.Marker({
            position: new naver.maps.LatLng(item[i].mapY, item[i].mapX),
            draggable: true,
            icon: {
                url: '/image/cluster/ico_pin.jpg', //50, 68 크기의 원본 이미지
                size: new naver.maps.Size(25, 34),
                scaledSize: new naver.maps.Size(25, 34),
                origin: new naver.maps.Point(0, 0),
                anchor: new naver.maps.Point(12, 34)
            }
        });

        var contentString = [
            '<div class="iw_inner">',
            '   <h3>' + item[i].title + '</h3>',
            '   <p>' + item[i].addr1 + '<br />',
            item[i].homepage +'<br/>',
            '<a class="rightText" href=/daview/detail/'+ item[i].contentId+' >\t+ 자세히보기</a>',
            '   </p>',
            '</div>'
        ].join('');

        var infoWindow = new naver.maps.InfoWindow({
            content: contentString,
            maxWidth: 140,
            backgroundColor: "#eee",
            borderColor: "#2db400",
            borderWidth: 5,
            anchorSize: new naver.maps.Size(30, 30),
            anchorSkew: true,
            anchorColor: "#eee",
            pixelOffset: new naver.maps.Point(20, -20)
        });

        markers.push(marker);
        infoWindows.push(infoWindow);

    }
    naver.maps.Event.addListener(map, 'idle', function () {
        updateMarkers(map, markers);
    });

    function updateMarkers(map, markers) {

        var mapBounds = map.getBounds();
        var marker, position;

        for (var i = 0; i < markers.length; i++) {

            marker = markers[i];
            position = marker.getPosition();

            if (mapBounds.hasLatLng(position)) {
                showMarker(map, marker);
            } else {
                hideMarker(map, marker);
            }
        }
    }

    function showMarker(map, marker) {

        if (marker.setMap()) return;
        marker.setMap(map);
    }

    function hideMarker(map, marker) {

        if (!marker.setMap()) return;
        marker.setMap(null);
    }

// 해당 마커의 인덱스를 seq라는 클로저 변수로 저장하는 이벤트 핸들러를 반환합니다.
    function getClickHandler(seq) {
        return function (e) {
            var marker = markers[seq],
                infoWindow = infoWindows[seq];

            if (infoWindow.getMap()) {
                infoWindow.close();
            } else {
                infoWindow.open(map, marker);
            }
        }
    }

    for (var i = 0, ii = markers.length; i < ii; i++) {
        naver.maps.Event.addListener(markers[i], 'click', getClickHandler(i));
    }
    makeClusterMap();

    function makeClusterMap() {
        //클러스터 이미지 파일입니다.
        var htmlMarker1 = {
                // language=HTML
                content: '<div style="cursor:pointer;width:40px;height:40px;line-height:42px;font-size:10px;color:white;text-align:center;font-weight:bold;background:url(/image/cluster/cluster-marker-1.png);background-size:contain;"></div>',
                size: N.Size(40, 40),
                anchor: N.Point(20, 20)
            },
            htmlMarker2 = {
                content: '<div style="cursor:pointer;width:40px;height:40px;line-height:42px;font-size:10px;color:white;text-align:center;font-weight:bold;background:url(/image/cluster/cluster-marker-2.png);background-size:contain;"></div>',
                size: N.Size(40, 40),
                anchor: N.Point(20, 20)
            },
            htmlMarker3 = {
                content: '<div style="cursor:pointer;width:40px;height:40px;line-height:42px;font-size:10px;color:white;text-align:center;font-weight:bold;background:url(/image/cluster/cluster-marker-3.png);background-size:contain;"></div>',
                size: N.Size(40, 40),
                anchor: N.Point(20, 20)
            },
            htmlMarker4 = {
                content: '<div style="cursor:pointer;width:40px;height:40px;line-height:42px;font-size:10px;color:white;text-align:center;font-weight:bold;background:url(/image/cluster/cluster-marker-4.png);background-size:contain;"></div>',
                size: N.Size(40, 40),
                anchor: N.Point(20, 20)
            },
            htmlMarker5 = {
                content: '<div style="cursor:pointer;width:40px;height:40px;line-height:42px;font-size:10px;color:white;text-align:center;font-weight:bold;background:url(/image/cluster/cluster-marker-5.png);background-size:contain;"></div>',
                size: N.Size(40, 40),
                anchor: N.Point(20, 20)
            };
        //마커클러스터화 시킵니다.
        var markerClustering = new MarkerClustering({
            minClusterSize: 2,
            maxZoom: 8,
            map: map,
            markers: markers,
            disableClickZoom: false,
            gridSize: 120,
            icons: [htmlMarker1, htmlMarker2, htmlMarker3, htmlMarker4, htmlMarker5],
            indexGenerator: [1, 10, 30, 40, 100],
            stylingFunction: function (clusterMarker, count) {
                $(clusterMarker.getElement()).find('div:first-child').text(count);
            }
        });

        return showFestListInHtml(item);
    }


    function reinventionData() {
        //함수가 실행되면 기존의 클러스터는 삭제되고 가공된 item을 clusterMap에 넣음으로써 item기반의 새로운 클러스터 지도 형성
        var pastMap = document.getElementById("map");

        //새로운 검색시 기존 데이터를 삭제
        while (pastMap.hasChildNodes()) {
            pastMap.removeChild(pastMap.lastChild)
        }

        var pastList = document.getElementById("itemList");

        //새로운 검색시 기존 데이터를 삭제
        while (pastList.hasChildNodes()) {
            pastList.removeChild(pastList.lastChild)
        }
    }
}


function showFestListInHtml(item) {
    for (var i = 0; i < item.length; i++) {
        //클릭시 detail로 이동
        var DivA = document.createElement('a');
        DivA.setAttribute('href', '/daview/detail/' + item[i].contentId);
        //Div 태그 만들기
        var iDiv = document.createElement('div');
        iDiv.className += "list-item";
        iDiv.id = item[i].contentId;
        //Img 담을 div 태그
        var ImgDiv = document.createElement('div');
        ImgDiv.className += "size40";
        //Img 만들기
        var iImg = document.createElement('img');
        iImg.src += item[i].firstImage;
        //Text 담을 div 태그
        var TextDiv = document.createElement('div');
        TextDiv.className += "size60";
        TextDiv.id += item[i].mapY;
        TextDiv.id += ", ";
        TextDiv.id += item[i].mapX;
        //제목 만들기
        var iTitle = document.createElement('div');
        iTitle.className += "title";
        iTitle.textContent += item[i].title;

        //축제 시작일 만들기
        var iStD = document.createElement('div');
        iStD.className += "SEday";
        iStD.textContent += item[i].eventStartDate + "\n~ " + item[i].eventEndDate;


        var tagDiv = document.getElementById("itemList").appendChild(DivA).appendChild(iDiv);
        tagDiv.appendChild(ImgDiv).appendChild(iImg);
        tagDiv.appendChild(TextDiv).appendChild(iTitle);
        tagDiv.appendChild(TextDiv).appendChild(iStD);
    }


//검색버튼을 누르거나 엔터키를 입력하면 실행합니다.
//축제리스트를 걸러내는 JS
}

function getFestivalKeyword() {
    //검색창에서 검색어를 받아옵니다.
    var content = document.getElementsByName("search_fest").item("0").value;
    var workedList = [];
    console.log(content);

    for (var i = 0; i < item.length; i++) {
        if (item[i].addr1.match(content) || item[i].title.match(content)) workedList.push(item[i])
    }
    if (workedList.length == 0) return alert("검색하신 축제가 존재하지 않습니다.");

    $(function () {

        $("#slider-range").slider({
            range: true,
            min: new Date('2015.01.01').getTime() / 1000,
            max: new Date('2018.12.31').getTime() / 1000,
            step: 86400,
            values: [new Date('2015.01.01').getTime() / 10000, new Date('2018.12.31').getTime() / 100],
            slide: function (event, ui) {
                $("#amount").val(addMonth((new Date(ui.values[0] * 1000))) +
                    " - " + addMonth((new Date(ui.values[1] * 1000))));
                USD = new Date(ui.values[0] * 1000);
                UED = new Date(ui.values[1] * 1000);

                getUserDate();

            }
        });


        $("#amount").val(addMonth((new Date($("#slider-range").slider("values", 0) * 1000))) +
            " - " + addMonth((new Date($("#slider-range").slider("values", 1) * 1000))));
    });

    $('select').find('option:first').attr('selected', 'selected');
    city = '';
    return getMainMap(workedList)
}

//검색창에 엔터가 눌러지면 getFestivalKeyword 함수가 실행됩니다.
$(document).ready(function () {
    $("input[name=search_fest]").keydown(function (key) {

        if (key.keyCode == 13) {//키가 13이면 실행 (엔터는 13)
            getFestivalKeyword();
        }

    });
});

//슬라이더 생성
$(function () {
    $("#slider-range").slider({
        range: true,
        min: new Date('2015.01.01').getTime() / 1000,
        max: new Date('2018.12.31').getTime() / 1000,
        step: 1,
        values: [new Date().getTime() / 1000, new Date().getTime() / 1000],
        slide: function (event, ui) {
            $("#amount").val(addMonth((new Date(ui.values[0] * 1000))) +
                " - " + addMonth((new Date(ui.values[1] * 1000))));
            USD = new Date(ui.values[0] * 1000);
            UED = new Date(ui.values[1] * 1000);
            getUserDate()
        }
    });
    $("#amount").val(addMonth((new Date($("#slider-range").slider("values", 0) * 1000))) +
        " - " + addMonth((new Date($("#slider-range").slider("values", 1) * 1000))));


});

function addMonth(date) {
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var fullDate = year + "." + month + "." + day;
    return fullDate;
}


//유저 검색어에 맞게 리스트를 수정합니다.
function getUserDate() {
    var content = document.getElementsByName("search_fest").item("0").value;
    var workedList = [];
    //축제 시작과 끝의 날짜를 유저에게 받는걸 확인 1.if
    //컨텐츠 내용이 있는지 확인 2.if
    //있다면 for문을 돌면서 검색어를 가지고 있는 list 들만 추출 3,4 for,if

    if (content != '' && city != 0) {
        for (var i = 0; i < item.length; i++) {
            if (item[i].areaCode == city && item[i].title.match(content)) {
                workedList.push(item[i]);
            }
        }
        return userCheckDate(workedList)
    }
    else if (content != '') {
        for (var i = 0; i < item.length; i++) {
            if (item[i].title.match(content)) {
                workedList.push(item[i]);
            }
        }
        return userCheckDate(workedList)
    }
    else if (city != 0) {
        for (var i = 0; i < item.length; i++) {
            if (item[i].areaCode == city) {
                workedList.push(item[i])

            }
        }
        return userCheckDate(workedList)
    }

    else return userCheckDate(item);
}

//검색어가 있다면 리스트를 수정 후
//가져온 데이트를 날짜에 맞게 파싱
function userCheckDate(item) {
    var userCheckList = [];

    for (var i = 0; i < item.length; i++) {
        var festSD = new Date(item[i].eventStartDate);
        var festED = new Date(item[i].eventEndDate);
        //유저끝날이 축제시작일보다 크거나 유저시작일이 축제끝날보다 크면 데이터를 안넣는다.
        if (USD > festED || UED < festSD) {
        }
        else {
            userCheckList.push(item[i])
        }
    }
    return getMainMap(userCheckList);
}

//select box 지역 선택
function selectCity(selectObj) {
    city = selectObj.value;
    return getUserDate();
}