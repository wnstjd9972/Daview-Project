//축제리스트를 걸러내는 JS
function getFestivalKeyword() {
    //검색창에서 검색어를 받아옵니다.
    var content = document.getElementsByName("search_fest").item("0").value;
    var workedList = [];

    for (var i = 0; i < item.length; i++) {
        if (item[i].addr1.match(content) || item[i].title.match(content)) workedList.push(item[i])
    }
    if (workedList.length == 0) return alert("검색하신 축제가 존재하지 않습니다.");

    $("#datepicker1").datepicker('setDate', '');
    $("#datepicker2").datepicker('setDate', '');

    return makeClusterMap(workedList)
}

//검색창에 엔터가 눌러지면 getFestivalKeyword 함수가 실행됩니다.
$(document).ready(function () {
    $("input[name=search_fest]").keydown(function (key) {

        if (key.keyCode == 13) {//키가 13이면 실행 (엔터는 13)
            getFestivalKeyword();
        }

    });
});



