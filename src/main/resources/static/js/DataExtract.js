
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
        if (today < sday) {
        }
        else if (today >= sday) {
            if (today <= eday) {
                ingFestival.push(item[i])
            }
            else {
            }
        }
        else {
            ingFestival.push(item[i])
        }
    }
    return ingFestival;
}