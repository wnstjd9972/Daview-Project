//축제리스트를 걸러내는 JS
function getFestivalKeyword() {
    //검색창에서 검색어를 받아옵니다.
    var content = document.getElementsByName("search_fest").item("0").value;
    var workedList = [];

    for (var i = 0; i < item.length; i++) {
        if (item[i].addr1.match(content) || item[i].title.match(content)) workedList.push(item[i])
    }
    if (workedList.length == 0) return alert("검색하신 축제가 존재하지 않습니다.");

    $(function () {


        $("#slider-range").slider({
            range: true,
            min: new Date('2015.01.01').getTime() / 1000,
            max: new Date('2018.12.31').getTime() / 1000,
            step: 86400,
            values: [new Date('2015.01.01').getTime() / 10000, new Date('2018.12.31').getTime() / 100],
            slide: function (event, ui) {
                $("#amount").val(addMonth((new Date(ui.values[0] * 1000))) +
                    " - " + addMonth((new Date(ui.values[1] * 1000))));
                USD = new Date(ui.values[0] * 1000);
                UED = new Date(ui.values[1] * 1000);
                getUserDate()
            }
        });
        $("#amount").val(addMonth((new Date($("#slider-range").slider("values", 0) * 1000))) +
            " - " + addMonth((new Date($("#slider-range").slider("values", 1) * 1000))));
    });
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



