$(function () {
    $("#datepicker1,#datepicker2").datepicker({
        dateFormat: 'yy-mm-dd',
        prevText: '이전 달',
        nextText: '다음 달',
        monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        dayNames: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
        showMonthAfterYear: true,
        changeMonth: true,
        changeYear: true,
        yearSuffix: '년',

        onSelect: function () {

            FSD = $("#datepicker1").datepicker('getDate');
            FED = $("#datepicker2").datepicker('getDate');
            var content = document.getElementsByName("search_fest").item("0").value;
            var workedList = [];
            //축제 시작과 끝의 날짜를 유저에게 받는걸 확인 1.if
            //컨텐츠 내용이 있는지 확인 2.if
            //있다면 for문을 돌면서 검색어를 가지고 있는 list 들만 추출 3,4 for,if
            if (FSD != null && FED != null) {
                if (FSD > FED){
                    $("#datepicker1").datepicker('setDate', '');
                    $("#datepicker2").datepicker('setDate', '');
                    alert("날짜 입력 형식이 잘못되었습니다..")
                }
                if (content != '') {
                    for (var i = 0; i < item.length; i++) {
                        if (item[i].addr1.match(content) || item[i].title.match(content)) workedList.push(item[i])
                        console.log(content)
                    }
                }
                else {
                    return userCheckDate(ingFestival(item))

                }
                return userCheckDate(workedList)
            }

        }

    });
});

//가져온 데이트를 날짜에 맞게 파싱
function userCheckDate(item) {
    var userCheckList = [];

    for (var i = 0; i < item.length; i++) {
        var festSD = new Date(item[i].eventStartDate);
        var festED = new Date(item[i].eventEndDate);
        if (festSD <= FSD && FED <= festED) {
            userCheckList.push(item[i])
        }
        else if (festSD >= FSD && FED >= festED) {
            userCheckList.push(item[i])
        }
    }
    return makeClusterMap(userCheckList);

}




