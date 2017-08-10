function getFestList() {

    var content = document.getElementsByName("search_fest").item("0").value;
    var workedList = [];
    //match = 포함되어있는
    for (var i = 0; i < item.length; i++){
        if(item[i].addr1.match(content) || item[i].title.match(content)) workedList.push(item[i])

    }
    console.log("h")
};

$(document).ready(function() {
    $("input[name=search_fest]").keydown(function (key) {

        if (key.keyCode == 13) {//키가 13이면 실행 (엔터는 13)
            getFestList();
        }

    });
});