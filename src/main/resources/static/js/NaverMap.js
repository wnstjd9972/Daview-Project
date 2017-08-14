/**
 * elementId를 받아서 Map을 형성합니다.
 * @param elementId
 */

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


function insertClusterImformation(item, searchOX) {
    var cluster = ingFilter(item);
    //클러스터화 하기 위한 좌표값을 넣을 배열
    if (searchOX == true){
        cluster = item;
    }
    var markers = [];
    var latlng;
    for (var i = 0; i < cluster.length; i++) {
        latlng = new naver.maps.LatLng(cluster[i].mapY, cluster[i].mapX),
            marker = new naver.maps.Marker({
                position: latlng,
                draggable: true
            });

        markers.push(marker);
    }
    return markers;
}


function keywordClusterImforamtin(item) {
    var ri = document.getElementById("map");

    //새로운 검색시 기존 데이터를 삭제
    while (ri.hasChildNodes()){
        ri.removeChild(ri.lastChild)
    }

    clusterMap(item, true)
}


function clusterMap(item, searchOX) {
    var map = setMap();


    var markers = insertClusterImformation(item, searchOX);

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
        indexGenerator: [1, 5, 10, 20, 30],
        stylingFunction: function (clusterMarker, count) {
            $(clusterMarker.getElement()).find('div:first-child').text(count);
        }
    });

}