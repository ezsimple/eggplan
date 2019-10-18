$(document).ready(function () {



    //파일찾기 
    var uploadFile = $('.fileBox .uploadBtn');
    uploadFile.on('change', function () {
        if (window.FileReader) {
            var filename = $(this)[0].files[0].name;
        } else {
            var filename = $(this).val().split('/').pop().split('\\').pop();
        }
        $(this).siblings('.fileName').val(filename);
    });


    //달력
    $("#date1").datepicker({
        showOn: "button",
        buttonImage: "/design/images/icon_date2.png",
        buttonImageOnly: false,
        buttonText: "Select date"
    });

    $("#date2").datepicker({
        showOn: "button",
        buttonImage: "/design/images/icon_date2.png",
        buttonImageOnly: false,
        buttonText: "Select date"
    });



    $.datepicker.setDefaults({
        dateFormat: 'yy-mm-dd',
        prevText: '이전 달',
        nextText: '다음 달',
        monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        dayNames: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
        showMonthAfterYear: true,
        yearSuffix: '년'
    });

    $(function () {
        $("#datepicker1").datepicker();
        $("#datepicker2").datepicker();
        $("#datepicker3").datepicker();
        $("#datepicker4").datepicker();
    });



    //메뉴
    $(".nav-list").touchFlow({
        axis: "x",
        page: "li.on",
        scrollbar: true,
        scrollbarAutoHide: false
    });


    $('ul.tab li').click(function () {
        var activeTab = $(this).attr('data-tab');
        $('ul.tab li').removeClass('current');
        $('.tabcontent').removeClass('current');
        $(this).addClass('current');
        $('#' + activeTab).addClass('current');
    })




});
