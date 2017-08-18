//축제리스트를 걸러내는 JS
function getFestivalKeyword2() {
    //검색창에서 검색어를 받아옵니다.
    var content = document.getElementsByName("search_fest").item("0").value;
    var workedList = [];
    //검색어가 없을경우 아무것도 하지 않습니다.
    if (content == '') {
        return;
    }
    //match = 포함되어있는 / 포함되어 있다면 workedList배열에 담습니다.
    for (var i = 0; i < item.length; i++) {
        if (item[i].addr1.match(content) || item[i].title.match(content)) {
            workedList.push(item[i])
        }
    }

    return console.log(workedList)
}

$(document).ready(function () {
    $("input[name=search_fest]").keydown(function (key) {
        if (key.keyCode == 13) {//키가 13이면 실행 (엔터는 13)

            getFestivalKeyword2();
        }
    });
});





