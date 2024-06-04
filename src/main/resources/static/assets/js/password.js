function stck(str, limit) {
    let o, d, p, n = 0, l = limit == null ? 4 : limit;
    for (let i = 0; i < str.length; i++) {
        let c = str.charCodeAt(i);
        if (i > 0 && (p = o - c) > -2 && p < 2 && (n = p == d ? n + 1 : 0) > l - 3)
            return false;
        d = p, o = c;
    }
    return true;
}

/*
①	8자 이상 20자 이하
②	문자/숫자 혼합
③	연속된 숫자 불가 ex) 123, 321
④	동일 숫자, 문자 3번 반복 불가 ex) 111, aaa
*/
function pawsswordChk(pwd){
    let newpwd = pwd
    let num = newpwd.search(/[0-9]/g);
    let eng = newpwd.search(/[a-z]/ig);

    if (newpwd.length < 8 || newpwd.length > 20 ) {
        alert("8자 이상 20자 이하로 입력하세요. ");
        return false;
    } else if ((num < 0 && eng < 0)) {
        alert("문자/숫자 혼합 하세요.");
        return false;
    } else if(/(\w)\1\1/.test(newpwd)) {
        alert('같은 문자를 3번 이상 사용하실 수 없습니다.');
        return false;
    } else if (!stck(newpwd, 3)) {
        alert("연속된 3자리 문자는 사용할 수 없습니다.");
        return false;
    } else {
        return true;
    }
}