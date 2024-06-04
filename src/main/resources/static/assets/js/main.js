$(document).ready(function() {
    // 유효성 검사

    // 가입자 내선
    $("#cha_sdat_stno").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || /^\d+$/.test(value);
        displayError($(this), isValid, "숫자만 입력 가능합니다.");
    });
    $("#cha_sdat_nno").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || /^[\d-]+$/.test(value);
        displayError($(this), isValid, "숫자 또는 하이픈(-)만 입력 가능합니다.");
    });
    $("#cha_sdat_pubnum").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || /^\d+$/.test(value);
        displayError($(this), isValid, "숫자만 입력 가능합니다.");
    });
    $("#cha_sdat_hotidx").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 1 && value <= 20000);
        let errorMessage = value === "" ? "" : (value < 1 || value > 20000 ? "1에서 20000 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });
    $("#cha_sdat_stnoos").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || /^\d+$/.test(value);
        displayError($(this), isValid, "숫자만 입력 가능합니다.");
    });

    // 당겨받기
    $("#add_aun_job1_grno").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || /^\d+$/.test(value);
        displayError($(this), isValid, "숫자만 입력 가능합니다.");
    });
    $("#add_aun_job1_stno").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || /^[0-9&]+$/.test(value);
        displayError($(this), isValid, "숫자 또는 '&'만 입력 가능합니다.");
    });
    $("#add_aun_job2_grno").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || /^\d+$/.test(value);
        displayError($(this), isValid, "숫자만 입력 가능합니다.");
    });
    $("#add_aun_job2_stno").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || /^[0-9&]+$/.test(value);
        displayError($(this), isValid, "숫자 또는 '&'만 입력 가능합니다.");
    });
    $("#del_aun_job3_gr").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || /^\d+$/.test(value);
        displayError($(this), isValid, "숫자만 입력 가능합니다.");
    });
    $("#del_aun_job3_stno").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || /^[0-9&]+$/.test(value);
        displayError($(this), isValid, "숫자 또는 '&'만 입력 가능합니다.");
    });
    $("#del_aun_job4_grno").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || /^\d+$/.test(value);
        displayError($(this), isValid, "숫자만 입력 가능합니다.");
    });
    $("#reg_aun_job5_grno").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || /^\d+$/.test(value);
        displayError($(this), isValid, "숫자만 입력 가능합니다.");
    });
    $("#reg_aun_job6_stno").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || /^[0-9&]+$/.test(value);
        displayError($(this), isValid, "숫자 또는 '&'만 입력 가능합니다.");
    });

    // 대표전화
    $("#add_sa_job1_cd").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || /^\d+$/.test(value);
        displayError($(this), isValid, "숫자만 입력 가능합니다.");
    });
    $("#add_sa_job1_stno").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || /^[0-9&]+$/.test(value);
        displayError($(this), isValid, "숫자 또는 '&'만 입력 가능합니다.");
    });
    $("#add_sa_job1_cqmax").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 1 && value <= 3);
        let errorMessage = value === "" ? "" : (value < 1 || value > 3 ? "1에서 3 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });
    $("#add_sa_job1_name").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || value.length <= 16;
        displayError($(this), isValid, "최대 16자 입력 가능합니다.");
    });
    $("#add_sa_job1_number").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || /^\d+$/.test(value);
        displayError($(this), isValid, "숫자만 입력 가능합니다.");
    });
    $("#add_sa_job2_cd").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || /^\d+$/.test(value);
        displayError($(this), isValid, "숫자만 입력 가능합니다.");
    });
    $("#add_sa_job2_stno").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || /^[0-9&]+$/.test(value);
        displayError($(this), isValid, "숫자 또는 '&'만 입력 가능합니다.");
    });
    $("#del_sa_job3_cd").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || /^\d+$/.test(value);
        displayError($(this), isValid, "숫자만 입력 가능합니다.");
    });
    $("#del_sa_job3_stno").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || /^[0-9&]+$/.test(value);
        displayError($(this), isValid, "숫자 또는 '&'만 입력 가능합니다.");
    });
    $("#del_sa_job4_cd").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || /^\d+$/.test(value);
        displayError($(this), isValid, "숫자만 입력 가능합니다.");
    });
    $("#dis_sa_job5_cd").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || /^\d+$/.test(value);
        displayError($(this), isValid, "숫자만 입력 가능합니다.");
    });
    $("#dis_sa_job6_stno").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || /^\d+$/.test(value);
        displayError($(this), isValid, "숫자만 입력 가능합니다.");
    });

    // 디지털,IP, SIP 내선 생성
    $("#add_sbcsu_job1_stno").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || /^\d+$/.test(value);
        displayError($(this), isValid, "숫자만 입력 가능합니다.");
    });
    $("#add_sbcsu_job1_pen").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || /^[0-9\-]+$/.test(value);
        displayError($(this), isValid, "숫자 또는 하이픈(-)만 입력 가능합니다.");
    });
    $("#add_sbcsu_job1_cos1").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 1 && value <= 1000);
        let errorMessage = value === "" ? "" : (value < 1 || value > 1000 ? "1에서 1000 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });
    $("#add_sbcsu_job1_cos2").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 1 && value <= 1000);
        let errorMessage = value === "" ? "" : (value < 1 || value > 1000 ? "1에서 1000 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });
    $("#add_sbcsu_job1_lcosv1").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 1 && value <= 1000);
        let errorMessage = value === "" ? "" : (value < 1 || value > 1000 ? "1에서 1000 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });
    $("#add_sbcsu_job1_lcosv2").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 1 && value <= 1000);
        let errorMessage = value === "" ? "" : (value < 1 || value > 1000 ? "1에서 1000 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });
    $("#add_sbcsu_job1_lcosd1").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 1 && value <= 1000);
        let errorMessage = value === "" ? "" : (value < 1 || value > 1000 ? "1에서 1000 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });
    $("#add_sbcsu_job1_lcosd2").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 1 && value <= 1000);
        let errorMessage = value === "" ? "" : (value < 1 || value > 1000 ? "1에서 1000 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });
    $("#add_sbcsu_job1_dpln").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 1 && value <= 15);
        let errorMessage = value === "" ? "" : (value < 1 || value > 15 ? "1에서 15 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });
    $("#add_sbcsu_job1_itr").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 1 && value <= 15);
        let errorMessage = value === "" ? "" : (value < 1 || value > 15 ? "1에서 15 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });
    // 개별 단축 다이얼 입력칸 비활성화(사용하지 않는 기능)
    $("#add_sbcsu_job1_spdi").prop("disabled", true);
    // 시스템 단축 다이얼 1 입력칸 비활성화(사용하지 않는 기능)
    $("#add_sbcsu_job1_spdc1").prop("disabled", true);
    // 시스템 단축 다이얼 2 입력칸 비활성화(사용하지 않는 기능)
    $("#add_sbcsu_job1_spdc2").prop("disabled", true);
    $("#add_sbcsu_job1_rep").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 1 && value <= 4);
        let errorMessage = value === "" ? "" : (value < 1 || value > 4 ? "1에서 4 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });
    $("#add_sbcsu_job1_std").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 1 && value <= 255);
        let errorMessage = value === "" ? "" : (value < 1 || value > 255 ? "1에서 255 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });
    $("#dis_sbcsu_job2_stno").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || /^\d+$/.test(value);
        displayError($(this), isValid, "숫자만 입력 가능합니다.");
    });
    $("#cha_sbcsu_job3_stno").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || /^\d+$/.test(value);
        displayError($(this), isValid, "숫자만 입력 가능합니다.");
    });
    $("#cha_sbcsu_job3_cos1").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 1 && value <= 1000);
        let errorMessage = value === "" ? "" : (value < 1 || value > 1000 ? "1에서 1000 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });
    $("#cha_sbcsu_job3_cos2").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 1 && value <= 1000);
        let errorMessage = value === "" ? "" : (value < 1 || value > 1000 ? "1에서 1000 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });
    $("#cha_sbcsu_job3_lcosv1").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 1 && value <= 1000);
        let errorMessage = value === "" ? "" : (value < 1 || value > 1000 ? "1에서 1000 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });
    $("#cha_sbcsu_job3_lcosv2").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 1 && value <= 1000);
        let errorMessage = value === "" ? "" : (value < 1 || value > 1000 ? "1에서 1000 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });
    $("#cha_sbcsu_job3_rep").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 1 && value <= 4);
        let errorMessage = value === "" ? "" : (value < 1 || value > 4 ? "1에서 4 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });

    // 아날로그 내선
    $("#add_scsu_job1_stno").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || /^\d+$/.test(value);
        displayError($(this), isValid, "숫자만 입력 가능합니다.");
    });
    $("#add_scsu_job1_pen").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || /^[0-9\-]+$/.test(value);
        displayError($(this), isValid, "숫자 또는 하이픈(-)만 입력 가능합니다.");
    });
    $("#add_scsu_job1_dpln").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 1 && value <= 15);
        let errorMessage = value === "" ? "" : (value < 1 || value > 15 ? "1에서 15 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });
    $("#add_scsu_job1_itr").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 1 && value <= 15);
        let errorMessage = value === "" ? "" : (value < 1 || value > 15 ? "1에서 15 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });
    $("#add_scsu_job1_cos1").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 1 && value <= 1000);
        let errorMessage = value === "" ? "" : (value < 1 || value > 1000 ? "1에서 1000 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });
    $("#add_scsu_job1_cos2").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 1 && value <= 1000);
        let errorMessage = value === "" ? "" : (value < 1 || value > 1000 ? "1에서 1000 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });
    $("#add_scsu_job1_lcosv1").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 1 && value <= 1000);
        let errorMessage = value === "" ? "" : (value < 1 || value > 1000 ? "1에서 1000 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });
    $("#add_scsu_job1_lcosv2").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 1 && value <= 1000);
        let errorMessage = value === "" ? "" : (value < 1 || value > 1000 ? "1에서 1000 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });
    $("#add_scsu_job1_lcosd1").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 1 && value <= 1000);
        let errorMessage = value === "" ? "" : (value < 1 || value > 1000 ? "1에서 1000 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });
    $("#add_scsu_job1_lcosd2").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 1 && value <= 1000);
        let errorMessage = value === "" ? "" : (value < 1 || value > 1000 ? "1에서 1000 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });
    // 개별 단축 다이얼 입력칸 비활성화(사용하지 않는 기능)
    $("#add_scsu_job1_spdi").prop("disabled", true);
    // 시스템 단축 다이얼 1 입력칸 비활성화(사용하지 않는 기능)
    $("#add_scsu_job1_spdc1").prop("disabled", true);
    // 시스템 단축 다이얼 2 입력칸 비활성화(사용하지 않는 기능)
    $("#add_scsu_job1_spdc2").prop("disabled", true);
    $("#add_scsu_job1_cctidx").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || /^\d+$/.test(value);
        displayError($(this), isValid, "숫자만 입력 가능합니다.");
    });
    $("#dis_scsu_job2_stno").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || /^\d+$/.test(value);
        displayError($(this), isValid, "숫자만 입력 가능합니다.");
    });
    $("#cha_scsu_job3_stno").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || /^\d+$/.test(value);
        displayError($(this), isValid, "숫자만 입력 가능합니다.");
    });
    $("#cha_scsu_job3_dpln").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 1 && value <= 15);
        let errorMessage = value === "" ? "" : (value < 1 || value > 15 ? "1에서 15 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });
    $("#cha_scsu_job3_itr").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 1 && value <= 15);
        let errorMessage = value === "" ? "" : (value < 1 || value > 15 ? "1에서 15 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });
    $("#cha_scsu_job3_cos1").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 1 && value <= 1000);
        let errorMessage = value === "" ? "" : (value < 1 || value > 1000 ? "1에서 1000 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });
    $("#cha_scsu_job3_cos2").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 1 && value <= 1000);
        let errorMessage = value === "" ? "" : (value < 1 || value > 1000 ? "1에서 1000 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });
    $("#cha_scsu_job3_lcosv1").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 1 && value <= 1000);
        let errorMessage = value === "" ? "" : (value < 1 || value > 1000 ? "1에서 1000 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });
    $("#cha_scsu_job3_lcosv2").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 1 && value <= 1000);
        let errorMessage = value === "" ? "" : (value < 1 || value > 1000 ? "1에서 1000 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });
    $("#cha_scsu_job3_lcosd1").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 1 && value <= 1000);
        let errorMessage = value === "" ? "" : (value < 1 || value > 1000 ? "1에서 1000 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });
    $("#cha_scsu_job3_lcosd2").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 1 && value <= 1000);
        let errorMessage = value === "" ? "" : (value < 1 || value > 1000 ? "1에서 1000 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });
    // 개별 단축 다이얼 입력칸 비활성화(사용하지 않는 기능)
    $("#cha_scsu_job3_spdi").prop("disabled", true);
    // 시스템 단축 다이얼 1 입력칸 비활성화(사용하지 않는 기능)
    $("#cha_scsu_job3_spdc1").prop("disabled", true);
    // 시스템 단축 다이얼 2 입력칸 비활성화(사용하지 않는 기능)
    $("#cha_scsu_job3_spdc2").prop("disabled", true);
    $("#cha_scsu_job3_cctidx").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || /^\d+$/.test(value);
        displayError($(this), isValid, "숫자만 입력 가능합니다.");
    });


    // 에러 메시지가 나오면 send_button 비활성화, 사라지면 활성화
    function displayError(element, isValid, errorMessage) {
        element.toggleClass("is-invalid", !isValid);
        element.siblings(".invalid-feedback").remove();
        if (!isValid && errorMessage) {
            element.parent().append('<div class="invalid-feedback">' + errorMessage + '</div>');
        }
        validateForm(); // 각 input 이벤트 시 폼 전체 유효성 검사
    }

    // 모든 input칸 에러가 없어야만 명령어 전송 가능
    function validateForm() {
        let allValid = true;
        $("input").each(function() {
            if ($(this).hasClass("is-invalid")) {
                allValid = false;
                return false; // break the loop
            }
        });
        $("#send_button").prop("disabled", !allValid);
    }

    // 이벤트 위임을 사용하여 모든 input 변경 시 validateForm 호출
    $(document).on('input', 'input', function() {
        validateForm();
    });


});
