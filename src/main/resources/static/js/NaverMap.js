/**
 * elementId를 받아서 Map을 형성합니다.
 * @param elementId
 */

function setMap(elementId) {
    var mapDiv = document.getElementById(elementId);
    var naverMapOptions = {
        center: new naver.maps.LatLng(36, 127),
        zoom: 2,
        mapTypeId: naver.maps.MapTypeId.NORMAL,
        mapTypeControl: true
    };
    //옵션 없이 지도 객체를 생성하면 서울시청을 중심으로 하는 11레벨의 지도가 생성됩니다.
    var map = new naver.maps.Map(mapDiv, naverMapOptions);
    return map;
}

function clusterMap(map, item) {
    //현재 진행중인 축제를 찾아내기 위한 함수입니다.
    var date = new Date();
    var today = date;
    var latlng;
    //클러스터 마커를 표시할 배열입니다.
    var markers = [];
    //클러스터 이미지 파일입니다.
    var htmlMarker1 = {
            // language=HTML
            content: '<div style="cursor:pointer;width:40px;height:40px;line-height:42px;font-size:10px;color:white;text-align:center;font-weight:bold;background:url(/image/cluster-marker-1.png);background-size:contain;"></div>',
            size: N.Size(40, 40),
            anchor: N.Point(20, 20)
        },
        htmlMarker2 = {
            content: '<div style="cursor:pointer;width:40px;height:40px;line-height:42px;font-size:10px;color:white;text-align:center;font-weight:bold;background:url(/image/cluster-marker-2.png);background-size:contain;"></div>',
            size: N.Size(40, 40),
            anchor: N.Point(20, 20)
        },
        htmlMarker3 = {
            content: '<div style="cursor:pointer;width:40px;height:40px;line-height:42px;font-size:10px;color:white;text-align:center;font-weight:bold;background:url(/image/cluster-marker-3.png);background-size:contain;"></div>',
            size: N.Size(40, 40),
            anchor: N.Point(20, 20)
        },
        htmlMarker4 = {
            content: '<div style="cursor:pointer;width:40px;height:40px;line-height:42px;font-size:10px;color:white;text-align:center;font-weight:bold;background:url(/image/cluster-marker-4.png);background-size:contain;"></div>',
            size: N.Size(40, 40),
            anchor: N.Point(20, 20)
        },
        htmlMarker5 = {
            content: '<div style="cursor:pointer;width:40px;height:40px;line-height:42px;font-size:10px;color:white;text-align:center;font-weight:bold;background:url(/image/cluster-marker-5.png);background-size:contain;"></div>',
            size: N.Size(40, 40),
            anchor: N.Point(20, 20)
        };
    //item 의 날짜를 받아서 모든 년도를 2017년으로 셋팅합니다.(축제에 과거 데이터가 있기 때문입니다.)
    for (var i = 0; i < item.length; i++) {
        var sday = new Date(item[i].eventStartDate);
        var eday = new Date(item[i].eventEndDate);
        sday.setYear(today.getFullYear());
        eday.setYear(today.getFullYear());
        //모든 년도를 2017년으로 고정 하였기 때문에
        //2015년 12월에 시작하고 2016년 1월에 끝난 축제가 모두 2017년으로 넘어가기 때문에
        //축제의 끝과 시작이 반대일경우 끝나는 년도에 1을 더합니다.
        if (eday < sday) {
            eday.setYear((today.getFullYear()) + 1)
        }
        //오늘 날짜에서 축제 날짜를 비교하여 현재 진행중인 축제일 경우 마커를 표시할 XY좌표를 넘깁니다.
        if (today < sday) {
        }
        else if (today >= sday) {
            if (today <= eday) {
                latlng = new naver.maps.LatLng(item[i].mapY, item[i].mapX),
                    marker = new naver.maps.Marker({
                        position: latlng,
                        draggable: true
                    });
                markers.push(marker);
            }
            else {
            }
        }
        else {
            latlng = new naver.maps.LatLng(item[i].mapY, item[i].mapX),
                marker = new naver.maps.Marker({
                    position: latlng,
                    draggable: true
                });
            markers.push(marker);
        }
    }
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