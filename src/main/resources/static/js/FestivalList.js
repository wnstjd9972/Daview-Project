function getFestList() {

    var content = document.getElementsByName("search_fest").item("0").value;
    var workedList = [];
    //match = 포함되어있는
    for (var i = 0; i < item.length; i++) {
        if (item[i].addr1.match(content) || item[i].title.match(content)) workedList.push(item[i])

    }
    return makeFestList(workedList);
}


$(document).ready(function () {
    $("input[name=search_fest]").keydown(function (key) {

        if (key.keyCode == 13) {//키가 13이면 실행 (엔터는 13)
            getFestList();
        }

    });
});


function makeFestList(item) {
    var ri = document.getElementById("itemList");

    //새로운 검색시 기존 데이터를 삭제
    while (ri.hasChildNodes()){
        ri.removeChild(ri.lastChild)
    }

    for (var i = 0; i < item.length; i++) {
        //Div 태그 만들기
        var iDiv = document.createElement('div');
        var iImg = document.createElement('img');
        iImg.src += item[i].firstImage;
        //추가한 Div태그 itemList 자손으로 넣기
        var list = document.getElementById("itemList").appendChild(iDiv);
        //클래스를 list-item으로 설정
        list.className += "list-item";
        //list 의 자손을 iImg로 가져옴
        list.appendChild(iImg);
    }
}
