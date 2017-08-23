function pagingFall(item) {

    var totalCount = item.length;
    var perPageNum = 10; //한페이지에 표현할 데이터 양.
    var endPage;
    var startPage;
    var displayPageNum = 10; //페이징 갯수.

    //임의의값. 현재 3페이지라는 뜻.
    var presentPage = 13;

    endPage = Math.ceil(presentPage / displayPageNum ) * displayPageNum;
    console.log(endPage);

    startPage = (endPage - displayPageNum) + 1;
    console.log(startPage);

    //모든 페이지의 마지막 페이징부분에 실행되는 if문.
    var tempEndPage = Math.ceil(totalCount / displayPageNum);
    if(endPage > tempEndPage) {
        endPage = tempEndPage;
        console.log(endPage);
    }
    console.log(endPage);

    var prev = startPage == 1 ? false : true;
    var next = endPage * presentPage >= totalCount ? false : true;

    pagingList(totalCount, perPageNum, endPage, startPage, displayPageNum);

}

function pagingList(totalCount, perPageNum, endPage, startPage, displayPageNum) {

    document.getElementsByName("page").append(perPageNum);
    document.getElementsByName("perPageNum").append(perPageNum);




}

$(".pagination li a").on("click", function (event) {
    event.preventDefault();

    var targetPage = $(this).attr("href");

    var jobForm = $("#jobForm");
    jobForm.find("[name='page']").val(targetPage);
    jobForm.attr("action", "/daview/fall").attr("method", "get");
    jobForm.submit();
});