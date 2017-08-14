function getFestList() {

    var content = document.getElementsByName("search_fest").item("0").value;
    var workedList = [];
    if (content == ''){
        return ;
    }
    //match = 포함되어있는
    for (var i = 0; i < item.length; i++) {
        if (item[i].addr1.match(content) || item[i].title.match(content)) workedList.push(item[i])

    }
    keywordClusterImforamtin(workedList);
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
    while (ri.hasChildNodes()) {
        ri.removeChild(ri.lastChild)
    }

    for (var i = 0; i < item.length; i++) {
        //Div 태그 만들기
        var iDiv = document.createElement('div');
        iDiv.className += "list-item";
        //Img 담을 div 태그
        var ImgDiv = document.createElement('div');
        ImgDiv.className += "size40";
        //Img 클릭시 detail로 이동
        var ImgA = document.createElement('a');
        ImgA.setAttribute('href', '/daview/detail/' + item[i].contentId);
        //Img 만들기
        var iImg = document.createElement('img');
        iImg.src += item[i].firstImage;
        //Text 담을 div 태그
        var TextDiv = document.createElement('div');
        TextDiv.className += "size60";
        TextDiv.id += item[i].mapY;
        TextDiv.id += ",";
        TextDiv.id += item[i].mapX;
        //제목 만들기
        var iTitle = document.createElement('div');
        iTitle.className += "title";
        iTitle.textContent += item[i].title;

        //축제 시작일 만들기
        var iStD = document.createElement('div');
        iStD.className += "SEday";
        iStD.textContent += item[i].eventStartDate + "\n~ " + item[i].eventEndDate;


        var tagDiv = document.getElementById("itemList").appendChild(iDiv);
        tagDiv.appendChild(ImgA).appendChild(ImgDiv).appendChild(iImg);
        tagDiv.appendChild(TextDiv).appendChild(iTitle);
        tagDiv.appendChild(TextDiv).appendChild(iStD);


    }
    $('.size60').click(function() {
        var XY = $(this).attr('id');
        var input = new naver.maps.LatLng(XY);
    });

}




