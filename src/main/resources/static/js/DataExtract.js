// function ingFilter(item) {
//     //진행중인 축제를 담을 배열 입니다.
//     var ingFestival = [];
//     //현재 진행중인 축제를 찾아내기 위한 함수입니다.
//     var date = new Date();
//     var today = date;
//     //item 의 날짜를 받아서 모든 년도를 2017년으로 셋팅합니다.(축제에 과거 데이터가 있기 때문입니다.)
//     for (var i = 0; i < item.length; i++) {
//         var sday = new Date(item[i].eventStartDate);
//         var eday = new Date(item[i].eventEndDate);
//         sday.setYear(today.getFullYear());
//         eday.setYear(today.getFullYear());
//         //모든 년도를 2017년으로 고정 하였기 때문에
//         //2015년 12월에 시작하고 2016년 1월에 끝난 축제가 모두 2017년으로 넘어가기 때문에
//         //축제의 끝과 시작이 반대일경우 끝나는 년도에 1을 더합니다.
//         if (eday < sday) {
//             eday.setYear((today.getFullYear()) + 1)
//         }
//         //오늘 날짜에서 축제 날짜를 비교하여 현재 진행중인 축제일 경우 마커를 표시할 XY좌표를 넘깁니다.
//         if (today < sday) {
//         }
//         else if (today >= sday) {
//             if (today <= eday) {
//                 ingFestival.push(item[i])
//             }
//             else {
//             }
//         }
//         else {
//             ingFestival.push(item[i])
//         }
//     }
//     return ingFestival;
//
// }

function ingFilter(item){
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