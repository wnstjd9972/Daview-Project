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
        iDiv.className += "list-item";
        //Img 태그 만들기
        var iImg = document.createElement('img');
        iImg.src += item[i].firstImage;
        //Text 태그 만들기
        var iText = document.createElement('center');
        iText.textContent += item[i].title;

        var tagDiv = document.getElementById("itemList").appendChild(iDiv);
        tagDiv.appendChild(iImg);
        tagDiv.appendChild(iText);

    }
}
