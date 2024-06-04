/*
 * 금일 날짜
 * */
function getToday(){
    let date = new Date();
    let year  = date.getFullYear();
    let month = date.getMonth() + 1;
    let day   = date.getDate();

    if (("" + month).length === 1) { month = "0" + month; }
    if (("" + day).length   === 1) { day   = "0" + day;   }

    return year+"-"+month+"-"+day;
}
/*
 * 전일 날짜
 * */
function getYesterday(){
    let nowdate = new Date();
    let yesdate = nowdate.getTime() - (1 * 24 * 60 * 60 * 1000);
    nowdate.setTime(yesdate);

    let year  = nowdate.getFullYear();
    let month = nowdate.getMonth() + 1;
    let day   = nowdate.getDate();

    if (("" + month).length === 1) { month = "0" + month; }
    if (("" + day).length   === 1) { day   = "0" + day;   }

    return year+"-"+month+"-"+day;
}
/*
 * 금일 날짜 - 없음
 * */
function getSimpleToday(){
    let date = new Date();
    let year  = date.getFullYear();
    let month = date.getMonth() + 1;
    let day   = date.getDate();

    if (("" + month).length === 1) { month = "0" + month; }
    if (("" + day).length   === 1) { day   = "0" + day;   }

    return year+""+month+""+day;
}
/*
 * Seconds To HH:mm:ss
 * */
function SecToHHmmss(m) {
    let fm = [
        Math.floor(m / 3600),
        Math.floor(m / 60) % 60,
        Math.floor(m) % 60
    ];
    return $.map(fm, function(v, i) { return ((v < 10) ? '0' : '') + v; }).join(':');
}

function timestamp(){
    let today = new Date();
    today.setHours(today.getHours() + 9);
    let yyyymmddhh24miss = today.toISOString();
    yyyymmddhh24miss = yyyymmddhh24miss.replace(/T/gi,'');
    yyyymmddhh24miss = yyyymmddhh24miss.replace(/-/gi,'');
    yyyymmddhh24miss = yyyymmddhh24miss.replace(/:/gi,'');
    yyyymmddhh24miss = yyyymmddhh24miss.substring(0, 14);

    return yyyymmddhh24miss;
}

function ajax(url, data) {
    let returnData = {};
    returnData.success =  false;

    $.ajax({
        method: "POST",
        url: url,
        data: data,
        async: false
        // error: function(XHR) { AjaxError(XHR)}
    }).done(function(rows) {
        returnData.data =  rows;
        returnData.success =  true;

        console.log("[Ajax]", url, returnData);

    })

    return returnData;
}
function ajax_async(url, data, async) {
    let returnData = {};
    returnData.success =  false;

    $.ajax({
        method: "POST",
        url: url,
        data: data,
        async: async
        // error: function(XHR) { AjaxError(XHR)}
    }).done(function(rows) {
        returnData.data =  rows;
        returnData.success =  true;

        console.log("[Ajax Async]", url, returnData);

    })

    return returnData;
}
function AjaxError(XHR) {
    if (XHR.status === 901) {
        location.replace("/ims/login");
    }else if (XHR.status === 902) {
        console.log(XHR.responseText);
        alert("처리시 오류가 발생하였습니다.");
        return false;
    }
    else if (XHR.status === 404)
    {
        alert("페이지가 존재하지 않습니다.");
        return false;
    }
    else if (XHR.status === 500)
    {
        console.log(XHR.responseText);
        alert("시스템에 문제가 발생하였습니다. 관리자에게 문의하세요.");
        return false;
    }
}

// 유효성 검사
function validCheck(form){
    $.each($(""+form+"").find("input,select,radio"), function (i, item) {

        let dom_id = $(this).attr("id");
        let for_text = $("label[for = '"+ dom_id +"']").text();
        let validCheck = true;

        if ($(this).data('valid') === false) validCheck = false;

        if(validCheck) {
            if($(this).val() === "" || $(this).val() == null) {
                alert(for_text + " 를(을) 입력(선택)하세요.");
                $(this).focus();
                return false;
            }
        }
        //console.log(dom_id, for_text, validCheck);
    });
}
