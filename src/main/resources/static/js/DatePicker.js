// $(function () {
//     $("#datepicker1,#datepicker2").datepicker({
//         dateFormat: 'yy-mm-dd',
//         prevText: '이전 달',
//         nextText: '다음 달',
//         monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
//         monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
//         dayNames: ['일', '월', '화', '수', '목', '금', '토'],
//         dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
//         dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
//         showMonthAfterYear: true,
//         changeMonth: true,
//         changeYear: true,
//         yearSuffix: '년',
//
//         onSelect: function () {
//
//             FSD = $("#datepicker1").datepicker('getDate');
//             FED = $("#datepicker2").datepicker('getDate');
//
//
//         }
//
//     });
// });


$(function () {

    $("#slider-range").slider({
        range: true,
        min: new Date('2015.01.01').getTime() / 1000,
        max: new Date('2018.12.31').getTime() / 1000,
        step: 86400,
        values: [new Date().getTime() / 1000, new Date().getTime() / 1000],
        slide: function (event, ui) {
            $("#amount").val(addMonth((new Date(ui.values[0] * 1000))) +
                " - " + addMonth((new Date(ui.values[1] * 1000))));
            USD = new Date(ui.values[0] * 1000);
            UED = new Date(ui.values[1] * 1000);
            getUserDate()
        }
    });
    $("#amount").val(addMonthSubDate((new Date($("#slider-range").slider("values", 0) * 1000))) +
        " - " + addMonthSubDate((new Date($("#slider-range").slider("values", 1) * 1000))));

});

function addMonth(date) {
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var fullDate = year + "." + month + "." + day;

    return fullDate;
}
function addMonthSubDate(date) {
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate() - 1;
    var fullDate = year + "." + month + "." + day;

    return fullDate;
}



function getUserDate() {
    var content = document.getElementsByName("search_fest").item("0").value;
    var workedList = [];
    //축제 시작과 끝의 날짜를 유저에게 받는걸 확인 1.if
    //컨텐츠 내용이 있는지 확인 2.if
    //있다면 for문을 돌면서 검색어를 가지고 있는 list 들만 추출 3,4 for,if

    if (content != '') {
        for (var i = 0; i < item.length; i++) {
            if (item[i].addr1.match(content) || item[i].title.match(content)) workedList.push(item[i]);
            console.log(content)
        }
    }
    else {
        return userCheckDate(item)

    }
    return userCheckDate(workedList)

}

//가져온 데이트를 날짜에 맞게 파싱
function userCheckDate(item) {
    var userCheckList = [];

    for (var i = 0; i < item.length; i++) {
        var festSD = new Date(item[i].eventStartDate);
        var festED = new Date(item[i].eventEndDate);
        //유저끝날이 축제시작일보다 크거나 유저시작일이 축제끝날보다 크면 데이터를 안넣는다.
        if (USD > festED || UED <festSD) {
        }
        else {
            userCheckList.push(item[i])
        }
    }
    return makeClusterMap(userCheckList);

}

