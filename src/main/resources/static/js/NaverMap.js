/**
 * elementId를 받아서 Map을 형성합니다.
 * @param elementId
 */
//첫 화면에 보여줄 현재 진행중인 축제를 걸러내는 JS입니다.
function ingFestival(item){
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


function makeClusterMap(item) {
    //기존 데이터 삭제
    reinventionDate(item);
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
        map: setMap(),
        markers: getMarkLatLng(item),
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


//기존 데이터 삭제
function reinventionDate() {
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

//기본맵 설정
function setMap() {
    var map = new naver.maps.Map('map', {
        center: new naver.maps.LatLng(36, 127),
        zoom: 2,
        mapTypeId: naver.maps.MapTypeId.NORMAL,
        mapTypeControl: true
    });
    //옵션 없이 지도 객체를 생성하면 서울시청을 중심으로 하는 11레벨의 지도가 생성됩니다.
    return map;
}


function getMarkLatLng(item) {
    var markers = [];
    var latlng;
    for (var i = 0; i < item.length; i++) {
        latlng = new naver.maps.LatLng(item[i].mapY, item[i].mapX),
            marker = new naver.maps.Marker({
                position: latlng,
                draggable: true
            });
        markers.push(marker);
        naver.maps.Event.addListener(marker, "click", function (e) {
            console.log(marker.getPosition())
        });

    }

    return markers;
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
}








