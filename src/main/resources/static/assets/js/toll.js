$(document).ready(function() {
    // 유효성 검사

    // 트렁크 그룹 번호, 이름 및 채널 수량 설정
    $("#add_buend_job1_tgrp").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 1 && value <= 512);
        let errorMessage = value === "" ? "" : (value < 1 || value > 512 ? "1에서 512 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });
    $("#add_buend_job1_name").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || value.length <= 18;
        displayError($(this), isValid, "최대 18자 입력 가능합니다.");
    });
    $("#add_buend_job1_no").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 1 && value <= 2000);
        let errorMessage = value === "" ? "" : (value < 1 || value > 2000 ? "1에서 2000 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });
    $("#add_buend_job1_traceno").on("input", function () {
        $(this).val("0");
        $(this).prop('disabled', true); // 수정이 불가능하도록 input 요소를 비활성화
    });
    $("#add_buend_job1_acdthrh").on("input", function () {
        $(this).val("*");
        $(this).prop('disabled', true); // 수정이 불가능하도록 input 요소를 비활성화
    });
    $("#add_buend_job1_tddrflag").on("input", function () {
        $(this).val("ON");
        $(this).prop('disabled', true); // 수정이 불가능하도록 input 요소를 비활성화
    });
    $("#add_buend_job1_gdtrrule").on("input", function () {
        $(this).val("0");
        $(this).prop('disabled', true); // 수정이 불가능하도록 input 요소를 비활성화
    });
    $("#add_buend_job1_acdpmgrp").on("input", function () {
        $(this).val("0");
        $(this).prop('disabled', true); // 수정이 불가능하도록 input 요소를 비활성화
    });
    $("#add_buend_job1_charcon").on("input", function () {
        $(this).val("NEUTRAL");
        $(this).prop('disabled', true); // 수정이 불가능하도록 input 요소를 비활성화
    });
    $("#dis_buend_job2_tgrp").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 1 && value <= 512);
        let errorMessage = value === "" ? "" : (value < 1 || value > 512 ? "1에서 512 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });
    $("#cha_buend_job3_tgrp").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 1 && value <= 512);
        let errorMessage = value === "" ? "" : (value < 1 || value > 512 ? "1에서 512 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });
    $("#cha_buend_job3_name").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || value.length <= 18;
        displayError($(this), isValid, "최대 18자 입력 가능합니다.");
    });
    $("#cha_buend_job3_no").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 1 && value <= 2000);
        let errorMessage = value === "" ? "" : (value < 1 || value > 2000 ? "1에서 2000 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });
    $("#cha_buend_job3_traceno").on("input", function () {
        $(this).val("0");
        $(this).prop('disabled', true); // 수정이 불가능하도록 input 요소를 비활성화
    });
    $("#cha_buend_job3_acdthrh").on("input", function () {
        $(this).val("*");
        $(this).prop('disabled', true); // 수정이 불가능하도록 input 요소를 비활성화
    });
    $("#cha_buend_job3_priono").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 1 && value <= 48);
        let errorMessage = value === "" ? "" : (value < 1 || value > 48 ? "1에서 48 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });
    $("#cha_buend_job3_tddrflag").on("input", function () {
        $(this).val("ON");
        $(this).prop('disabled', true); // 수정이 불가능하도록 input 요소를 비활성화
    });
    $("#cha_buend_job3_gdtrrule").on("input", function () {
        $(this).val("0");
        $(this).prop('disabled', true); // 수정이 불가능하도록 input 요소를 비활성화
    });
    $("#cha_buend_job3_charcon").on("input", function () {
        $(this).val("NEUTRAL");
        $(this).prop('disabled', true); // 수정이 불가능하도록 input 요소를 비활성화
    });
    $("#cha_buend_job3_acdpmgrp").on("input", function () {
        $(this).val("0");
        $(this).prop('disabled', true); // 수정이 불가능하도록 input 요소를 비활성화
    });
    $("#reg_buend_job4_tgrp").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 1 && value <= 512);
        let errorMessage = value === "" ? "" : (value < 1 || value > 512 ? "1에서 512 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });
    $("#del_buend_job5_tgrp").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 1 && value <= 512);
        let errorMessage = value === "" ? "" : (value < 1 || value > 512 ? "1에서 512 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });

    // 트렁크 구성 설정
    $("#add_tdcsu_job1_cotno").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 0 && value <= 255);
        let errorMessage = value === "" ? "" : (value < 0 || value > 255 ? "0에서 255 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });
    $("#add_tdcsu_job1_copno").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 0 && value <= 255);
        let errorMessage = value === "" ? "" : (value < 0 || value > 255 ? "0에서 255 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });
    $("#add_tdcsu_job1_dpln").on("input", function () {
        $(this).val("0");
        $(this).prop('disabled', true); // 수정이 불가능하도록 input 요소를 비활성화
    });
    $("#add_tdcsu_job1_itr").on("input", function () {
        $(this).val("0");
        $(this).prop('disabled', true); // 수정이 불가능하도록 input 요소를 비활성화
    });
    $("#add_tdcsu_job1_cos").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 1 && value <= 1000);
        let errorMessage = value === "" ? "" : (value < 1 || value > 1000 ? "1에서 1000 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });
    $("#add_tdcsu_job1_lcosv").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 1 && value <= 1000);
        let errorMessage = value === "" ? "" : (value < 1 || value > 1000 ? "1에서 1000 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });
    $("#add_tdcsu_job1_lcosd").on("input", function () {
        $(this).val("1");
        $(this).prop('disabled', true); // 수정이 불가능하도록 input 요소를 비활성화
    });
    $("#add_tdcsu_job1_cct").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || value.length <= 12;
        displayError($(this), isValid, "최대 12자 입력 가능합니다.");
    });
    $("#add_tdcsu_job1_segment").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "1" || value === "8"; // 1 또는 8만 허용
        displayError($(this), isValid, "1 또는 8만 입력 가능합니다.");
    });
    $("#add_tdcsu_job1_supress").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 0 && value <= 8);
        let errorMessage = value === "" ? "" : (value < 0 || value > 8 ? "0에서 8 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });
    $("#add_tdcsu_job1_dgtpr").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d{1,8}$/.test(value)); // 숫자 최대 8자리까지 입력 가능
        displayError($(this), isValid, "숫자 최대 8자리까지 입력 가능합니다.");
    });
    $("#add_tdcsu_job1_nno").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || /^[\d-]+$/.test(value);
        displayError($(this), isValid, "숫자 또는 하이픈(-)만 입력 가능합니다.");
    });
    $("#add_tdcsu_job1_cotx").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 0 && value <= 255);
        let errorMessage = value === "" ? "" : (value < 0 || value > 255 ? "0에서 255 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });
    $("#add_tdcsu_job1_tgrp").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 0 && value <= 512);
        let errorMessage = value === "" ? "" : (value < 0 || value > 512 ? "0에서 512 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });
    $("#add_tdcsu_job1_bchan").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 1 && value <= 30);
        let errorMessage = value === "" ? "" : (value < 1 || value > 30 ? "1에서 30 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });
    $("#add_tdcsu_job1_bcgr").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 1 && value <= 30);
        let errorMessage = value === "" ? "" : (value < 1 || value > 30 ? "1에서 30 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });
    $("#add_tdcsu_job1_lwpar").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 0 && value <= 25);
        let errorMessage = value === "" ? "" : (value < 0 || value > 25 ? "0에서 25 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });
    $("#dis_tdcsu_job2_tgrp").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 0 && value <= 512);
        let errorMessage = value === "" ? "" : (value < 0 || value > 512 ? "0에서 512 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });
    $("#cha_tdcsu_job3_cotno").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 0 && value <= 255);
        let errorMessage = value === "" ? "" : (value < 0 || value > 255 ? "0에서 255 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });
    $("#cha_tdcsu_job3_copno").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 0 && value <= 255);
        let errorMessage = value === "" ? "" : (value < 0 || value > 255 ? "0에서 255 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });
    $("#cha_tdcsu_job3_cos").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 1 && value <= 1000);
        let errorMessage = value === "" ? "" : (value < 1 || value > 1000 ? "1에서 1000 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });
    $("#cha_tdcsu_job3_lcosv").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 1 && value <= 1000);
        let errorMessage = value === "" ? "" : (value < 1 || value > 1000 ? "1에서 1000 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });
    $("#cha_tdcsu_job3_lcosd").on("input", function () {
        $(this).val("1");
        $(this).prop('disabled', true); // 수정이 불가능하도록 input 요소를 비활성화
    });
    $("#cha_tdcsu_job3_cct").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || value.length <= 12;
        displayError($(this), isValid, "최대 12자 입력 가능합니다.");
    });
    $("#cha_tdcsu_job3_supress").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 0 && value <= 8);
        let errorMessage = value === "" ? "" : (value < 0 || value > 8 ? "0에서 8 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });
    $("#cha_tdcsu_job3_dgtpr").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d{1,8}$/.test(value)); // 숫자 최대 8자리까지 입력 가능
        displayError($(this), isValid, "숫자 최대 8자리까지 입력 가능합니다.");
    });
    $("#cha_tdcsu_job3_nno").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || /^[\d-]+$/.test(value);
        displayError($(this), isValid, "숫자 또는 하이픈(-)만 입력 가능합니다.");
    });
    $("#cha_tdcsu_job3_cotx").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 0 && value <= 255);
        let errorMessage = value === "" ? "" : (value < 0 || value > 255 ? "0에서 255 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });
    $("#cha_tdcsu_job3_tgrp").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 0 && value <= 512);
        let errorMessage = value === "" ? "" : (value < 0 || value > 512 ? "0에서 512 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });
    $("#cha_tdcsu_job3_bchan").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 1 && value <= 30);
        let errorMessage = value === "" ? "" : (value < 1 || value > 30 ? "1에서 30 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });
    $("#cha_tdcsu_job3_bcgr").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 1 && value <= 30);
        let errorMessage = value === "" ? "" : (value < 1 || value > 30 ? "1에서 30 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });
    $("#cha_tdcsu_job3_lwpar").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 1 && value <= 25);
        let errorMessage = value === "" ? "" : (value < 1 || value > 25 ? "1에서 25 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });
    $("#del_tdcsu_job4_bchan").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 1 && value <= 30);
        let errorMessage = value === "" ? "" : (value < 1 || value > 30 ? "1에서 30 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });
    $("#del_tdcsu_job4_bcgr").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 1 && value <= 30);
        let errorMessage = value === "" ? "" : (value < 1 || value > 30 ? "1에서 30 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });
    $("#del_tdcsu_job4_tgrp").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 0 && value <= 512);
        let errorMessage = value === "" ? "" : (value < 0 || value > 512 ? "0에서 512 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });

    // IP 트렁크 구성 설정
    $("#add_tdcsu2_job1_cotno").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 0 && value <= 255);
        let errorMessage = value === "" ? "" : (value < 0 || value > 255 ? "0에서 255 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });
    $("#add_tdcsu2_job1_copno").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 0 && value <= 255);
        let errorMessage = value === "" ? "" : (value < 0 || value > 255 ? "0에서 255 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });
    $("#add_tdcsu2_job1_dpln").on("input", function () {
        $(this).val("0");
        $(this).prop('disabled', true); // 수정이 불가능하도록 input 요소를 비활성화
    });
    $("#add_tdcsu2_job1_itr").on("input", function () {
        $(this).val("0");
        $(this).prop('disabled', true); // 수정이 불가능하도록 input 요소를 비활성화
    });
    $("#add_tdcsu2_job1_cos").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 1 && value <= 1000);
        let errorMessage = value === "" ? "" : (value < 1 || value > 1000 ? "1에서 1000 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });
    $("#add_tdcsu2_job1_lcosv").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 1 && value <= 1000);
        let errorMessage = value === "" ? "" : (value < 1 || value > 1000 ? "1에서 1000 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });
    $("#add_tdcsu2_job1_lcosd").on("input", function () {
        $(this).val("1");
        $(this).prop('disabled', true); // 수정이 불가능하도록 input 요소를 비활성화
    });
    $("#add_tdcsu2_job1_cct").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || value.length <= 12;
        displayError($(this), isValid, "최대 12자 입력 가능합니다.");
    });
    $("#add_tdcsu2_job1_segment").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "1" || value === "8"; // 1 또는 8만 허용
        displayError($(this), isValid, "1 또는 8만 입력 가능합니다.");
    });
    $("#add_tdcsu2_job1_supress").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 0 && value <= 8);
        let errorMessage = value === "" ? "" : (value < 0 || value > 8 ? "0에서 8 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });
    $("#add_tdcsu2_job1_dgtpr").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d{1,8}$/.test(value)); // 숫자 최대 8자리까지 입력 가능
        displayError($(this), isValid, "숫자 최대 8자리까지 입력 가능합니다.");
    });
    $("#add_tdcsu2_job1_nno").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || /^[\d-]+$/.test(value);
        displayError($(this), isValid, "숫자 또는 하이픈(-)만 입력 가능합니다.");
    });
    $("#add_tdcsu2_job1_cotx").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 0 && value <= 255);
        let errorMessage = value === "" ? "" : (value < 0 || value > 255 ? "0에서 255 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });
    $("#add_tdcsu2_job1_tgrp").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 0 && value <= 512);
        let errorMessage = value === "" ? "" : (value < 0 || value > 512 ? "0에서 512 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });
    $("#add_tdcsu2_job1_bchan").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 1 && value <= 30);
        let errorMessage = value === "" ? "" : (value < 1 || value > 30 ? "1에서 30 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });
    $("#add_tdcsu2_job1_bcgr").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 1 && value <= 30);
        let errorMessage = value === "" ? "" : (value < 1 || value > 30 ? "1에서 30 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });
    $("#dis_tdcsu2_job2_tgrp").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 0 && value <= 512);
        let errorMessage = value === "" ? "" : (value < 0 || value > 512 ? "0에서 512 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });
    $("#cha_tdcsu2_job3_cotno").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 0 && value <= 255);
        let errorMessage = value === "" ? "" : (value < 0 || value > 255 ? "0에서 255 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });
    $("#cha_tdcsu2_job3_copno").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 0 && value <= 255);
        let errorMessage = value === "" ? "" : (value < 0 || value > 255 ? "0에서 255 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });
    $("#cha_tdcsu2_job3_cos").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 1 && value <= 1000);
        let errorMessage = value === "" ? "" : (value < 1 || value > 1000 ? "1에서 1000 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });
    $("#cha_tdcsu2_job3_lcosv").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 1 && value <= 1000);
        let errorMessage = value === "" ? "" : (value < 1 || value > 1000 ? "1에서 1000 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });
    $("#cha_tdcsu2_job3_lcosd").on("input", function () {
        $(this).val("1");
        $(this).prop('disabled', true); // 수정이 불가능하도록 input 요소를 비활성화
    });
    $("#cha_tdcsu2_job3_cct").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || value.length <= 12;
        displayError($(this), isValid, "최대 12자 입력 가능합니다.");
    });
    $("#cha_tdcsu2_job3_supress").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 0 && value <= 8);
        let errorMessage = value === "" ? "" : (value < 0 || value > 8 ? "0에서 8 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });
    $("#cha_tdcsu2_job3_dgtpr").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d{1,8}$/.test(value)); // 숫자 최대 8자리까지 입력 가능
        displayError($(this), isValid, "숫자 최대 8자리까지 입력 가능합니다.");
    });
    $("#cha_tdcsu2_job3_nno").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || /^[\d-]+$/.test(value);
        displayError($(this), isValid, "숫자 또는 하이픈(-)만 입력 가능합니다.");
    });
    $("#cha_tdcsu2_job3_cotx").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 0 && value <= 255);
        let errorMessage = value === "" ? "" : (value < 0 || value > 255 ? "0에서 255 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });
    $("#cha_tdcsu2_job3_tgrp").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 0 && value <= 512);
        let errorMessage = value === "" ? "" : (value < 0 || value > 512 ? "0에서 512 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });
    $("#cha_tdcsu2_job3_bchan").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 1 && value <= 30);
        let errorMessage = value === "" ? "" : (value < 1 || value > 30 ? "1에서 30 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });
    $("#cha_tdcsu2_job3_bcgr").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 1 && value <= 30);
        let errorMessage = value === "" ? "" : (value < 1 || value > 30 ? "1에서 30 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });
    $("#del_tdcsu2_job4_bchan").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 1 && value <= 30);
        let errorMessage = value === "" ? "" : (value < 1 || value > 30 ? "1에서 30 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });
    $("#del_tdcsu2_job4_bcgr").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 1 && value <= 30);
        let errorMessage = value === "" ? "" : (value < 1 || value > 30 ? "1에서 30 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });
    $("#del_tdcsu2_job4_tgrp").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 0 && value <= 512);
        let errorMessage = value === "" ? "" : (value < 0 || value > 512 ? "0에서 512 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });

    // 트렁크 경로 설정(Open Num)
    $("#add_richt_job1_lrte").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 1 && value <= 64000);
        let errorMessage = value === "" ? "" : (value < 1 || value > 64000 ? "1에서 64000 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });
    $("#add_richt_job1_name").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || value.length <= 16;
        displayError($(this), isValid, "최대 16자 입력 가능합니다.");
    });
    $("#add_richt_job1_tgrp").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 1 && value <= 512);
        let errorMessage = value === "" ? "" : (value < 1 || value > 512 ? "1에서 512 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });
    $("#add_richt_job1_dnno").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || /^[\d-]+$/.test(value);
        displayError($(this), isValid, "숫자 또는 하이픈(-)만 입력 가능합니다.");
    });
    $("#add_richt_job1_dtmfcnv").on("input", function () {
        $(this).val("FIX");
        $(this).prop('disabled', true); // 수정이 불가능하도록 input 요소를 비활성화
    });
    $("#add_richt_job1_dtmfpuls").on("input", function () {
        $(this).val("PP80");
        $(this).prop('disabled', true); // 수정이 불가능하도록 input 요소를 비활성화
    });
    $("#add_richt_job1_charcon").on("input", function () {
        $(this).val("NEUTRAL");
        $(this).prop('disabled', true); // 수정이 불가능하도록 input 요소를 비활성화
    });
    $("#dis_richt_job2_lrte").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 1 && value <= 64000);
        let errorMessage = value === "" ? "" : (value < 1 || value > 64000 ? "1에서 64000 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });
    $("#dis_richt_job2_tgrp").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 1 && value <= 512);
        let errorMessage = value === "" ? "" : (value < 1 || value > 512 ? "1에서 512 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });
    $("#dis_richt_job2_dnno").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || /^[\d-]+$/.test(value);
        displayError($(this), isValid, "숫자 또는 하이픈(-)만 입력 가능합니다.");
    });
    $("#cha_richt_job3_lrte").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 1 && value <= 64000);
        let errorMessage = value === "" ? "" : (value < 1 || value > 64000 ? "1에서 64000 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });
    $("#cha_richt_job3_name").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || value.length <= 16;
        displayError($(this), isValid, "최대 16자 입력 가능합니다.");
    });
    $("#cha_richt_job3_dnno").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || /^[\d-]+$/.test(value);
        displayError($(this), isValid, "숫자 또는 하이픈(-)만 입력 가능합니다.");
    });
    $("#reg_richt_job4_lrte").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 1 && value <= 512);
        let errorMessage = value === "" ? "" : (value < 1 || value > 512 ? "1에서 512 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });
    $("#reg_richt_job4_tgrp").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 1 && value <= 512);
        let errorMessage = value === "" ? "" : (value < 1 || value > 512 ? "1에서 512 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });
    $("#del_richt_job5_lrte").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 0 && value <= 64000);
        let errorMessage = value === "" ? "" : (value < 0 || value > 64000 ? "0에서 64000 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });
    $("#del_richt_job5_tgrp").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 1 && value <= 512);
        let errorMessage = value === "" ? "" : (value < 1 || value > 512 ? "1에서 512 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });

    // 트렁크 경로 설정 (Close Num)
    $("#add_richt2_job1_lrte").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 1 && value <= 64000);
        let errorMessage = value === "" ? "" : (value < 1 || value > 64000 ? "1에서 64000 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });
    $("#add_richt2_job1_cd").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || value.length <= 6;
        displayError($(this), isValid, "최대 6자 입력 가능합니다.");
    });
    $("#add_richt2_job1_cps").on("input", function () {
        $(this).val("0");
        $(this).prop('disabled', true); // 수정이 불가능하도록 input 요소를 비활성화
    });
    $("#add_richt2_job1_name").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || value.length <= 16;
        displayError($(this), isValid, "최대 16자 입력 가능합니다.");
    });
    $("#add_richt2_job1_tgrp1").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 1 && value <= 512);
        let errorMessage = value === "" ? "" : (value < 1 || value > 512 ? "1에서 512 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });
    $("#add_richt2_job1_destno").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 0 && value <= 254);
        let errorMessage = value === "" ? "" : (value < 0 || value > 254 ? "0에서 254 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });
    $("#add_richt2_job1_dnno").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || /^[\d-]+$/.test(value);
        displayError($(this), isValid, "숫자 또는 하이픈(-)만 입력 가능합니다.");
    });
    $("#add_richt2_job1_pdnno").on("input", function () {
        $(this).val("2-100-99");
        $(this).prop('disabled', true); // 수정이 불가능하도록 input 요소를 비활성화
    });
    $("#add_richt2_job1_charcon").on("input", function () {
        $(this).val("NEUTRAL");
        $(this).prop('disabled', true); // 수정이 불가능하도록 input 요소를 비활성화
    });
    $("#dis_richt2_job2_cd").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^[0-9\W]{0,6}$/.test(value));
        displayError($(this), isValid, "최대 6자 숫자나 기호만 입력 가능합니다.");
    });
    $("#dis_richt2_job2_tgrp").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 1 && value <= 512);
        let errorMessage = value === "" ? "" : (value < 1 || value > 512 ? "1에서 512 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });
    $("#dis_richt2_job2_lrte").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 1 && value <= 64000);
        let errorMessage = value === "" ? "" : (value < 1 || value > 64000 ? "1에서 64000 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });
    $("#dis_richt2_job2_dnno").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || /^[\d-]+$/.test(value);
        displayError($(this), isValid, "숫자 또는 하이픈(-)만 입력 가능합니다.");
    });
    $("#cha_richt2_job3_cd").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^[0-9\W]{0,6}$/.test(value));
        displayError($(this), isValid, "최대 6자 숫자나 기호만 입력 가능합니다.");
    });
    $("#cha_richt2_job3_name").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || value.length <= 16;
        displayError($(this), isValid, "최대 16자 입력 가능합니다.");
    });
    $("#cha_richt2_job3_destno").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 0 && value <= 254);
        let errorMessage = value === "" ? "" : (value < 0 || value > 254 ? "0에서 254 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });
    $("#cha_richt2_job3_dnno").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || /^[\d-]+$/.test(value);
        displayError($(this), isValid, "숫자 또는 하이픈(-)만 입력 가능합니다.");
    });
    $("#cha_richt2_job3_lrte").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 0 && value <= 64000);
        let errorMessage = value === "" ? "" : (value < 0 || value > 64000 ? "0에서 64000 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });
    $("#reg_richt2_job4_cd").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 1 && value <= 512);
        let errorMessage = value === "" ? "" : (value < 1 || value > 512 ? "1에서 512 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });
    $("#reg_richt2_job4_tgrp").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 1 && value <= 512);
        let errorMessage = value === "" ? "" : (value < 1 || value > 512 ? "1에서 512 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });
    $("#del_richt2_job5_lrte").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 0 && value <= 64000);
        let errorMessage = value === "" ? "" : (value < 0 || value > 64000 ? "1에서 64000 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });
    $("#del_richt2_job5_tgrp").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 1 && value <= 512);
        let errorMessage = value === "" ? "" : (value < 1 || value > 512 ? "1에서 512 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });

    // 다이얼 룰 설정
    $("#add_lodr_job1_odr").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 1 && value <= 4096);
        let errorMessage = value === "" ? "" : (value < 1 || value > 4096 ? "1에서 4096 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });
    $("#add_lodr_job1_cmdpos").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 1 && value <= 100);
        let errorMessage = value === "" ? "" : (value < 1 || value > 100 ? "1에서 100 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });
    $("#add_lodr_job1_info").on("input", function () {
        $(this).val("0");
        $(this).prop('disabled', true); // 수정이 불가능하도록 input 요소를 비활성화
    });
    $("#add_lodr_job1_field").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 1 && value <= 10);
        let errorMessage = value === "" ? "" : (value < 1 || value > 10 ? "1에서 10 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });
    $("#dis_lodr_job2_odr").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 1 && value <= 512);
        let errorMessage = value === "" ? "" : (value < 1 || value > 512 ? "1에서 512 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });
    $("#del_lodr_job3_odr").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 1 && value <= 4096);
        let errorMessage = value === "" ? "" : (value < 1 || value > 4096 ? "1에서 4096 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });
    $("#del_lodr_job3_cmdpos").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 1 && value <= 2000);
        let errorMessage = value === "" ? "" : (value < 1 || value > 2000 ? "1에서 2000 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });
    $("#reg_lodr_job4_odr").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 1 && value <= 4096);
        let errorMessage = value === "" ? "" : (value < 1 || value > 4096 ? "1에서 4096 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });

    // 각각의 트렁크 경로에 대한 요소 설정
    $("#add_ldat_job1_lroute").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 1 && value <= 64000);
        let errorMessage = value === "" ? "" : (value < 1 || value > 64000 ? "1에서 64000 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });
    $("#add_ldat_job1_lval").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 1 && value <= 254);
        let errorMessage = value === "" ? "" : (value < 1 || value > 254 ? "1에서 254 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });
    $("#add_ldat_job1_lvalnew").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 1 && value <= 254);
        let errorMessage = value === "" ? "" : (value < 1 || value > 254 ? "1에서 254 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });
    $("#add_ldat_job1_tgrp").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 0 && value <= 512);
        let errorMessage = value === "" ? "" : (value < 0 || value > 512 ? "0에서 512 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });
    $("#add_ldat_job1_odr").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 1 && value <= 4096);
        let errorMessage = value === "" ? "" : (value < 1 || value > 4096 ? "1에서 4096 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });
    $("#add_ldat_job1_lauth").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 1 && value <= 64);
        let errorMessage = value === "" ? "" : (value < 1 || value > 64 ? "1에서 64 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });
    $("#add_ldat_job1_dnno").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || /^[\d-]+$/.test(value);
        displayError($(this), isValid, "숫자 또는 하이픈(-)만 입력 가능합니다.");
    });
    $("#add_ldat_job1_vccyc").on("input", function () {
        $(this).val("4");
        $(this).prop('disabled', true); // 수정이 불가능하도록 input 요소를 비활성화
    });
    $("#dis_ldat_job2_lroute").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 1 && value <= 64000);
        let errorMessage = value === "" ? "" : (value < 1 || value > 64000 ? "1에서 64000 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });
    $("#dis_ldat_job2_tgrp").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 0 && value <= 512);
        let errorMessage = value === "" ? "" : (value < 0 || value > 512 ? "0에서 512 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });
    $("#dis_ldat_job2_odr").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 1 && value <= 4096);
        let errorMessage = value === "" ? "" : (value < 1 || value > 4096 ? "1에서 4096 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });
    $("#dis_ldat_job2_lauth").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 1 && value <= 64);
        let errorMessage = value === "" ? "" : (value < 1 || value > 64 ? "1에서 64 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });
    $("#dis_ldat_job2_dnno").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || /^[\d-]+$/.test(value);
        displayError($(this), isValid, "숫자 또는 하이픈(-)만 입력 가능합니다.");
    });
    $("#cha_ldat_job3_lroute").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 1 && value <= 64000);
        let errorMessage = value === "" ? "" : (value < 1 || value > 64000 ? "1에서 64000 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });
    $("#cha_ldat_job3_lrtel").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 1 && value <= 254);
        let errorMessage = value === "" ? "" : (value < 1 || value > 254 ? "1에서 254 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });
    $("#cha_ldat_job3_tgrp").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 0 && value <= 512);
        let errorMessage = value === "" ? "" : (value < 0 || value > 512 ? "0에서 512 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });
    $("#cha_ldat_job3_odr").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 1 && value <= 4096);
        let errorMessage = value === "" ? "" : (value < 1 || value > 4096 ? "1에서 4096 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });
    $("#cha_ldat_job3_lauth").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 1 && value <= 64);
        let errorMessage = value === "" ? "" : (value < 1 || value > 64 ? "1에서 64 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });
    $("#cha_ldat_job3_dnno").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || /^[\d-]+$/.test(value);
        displayError($(this), isValid, "숫자 또는 하이픈(-)만 입력 가능합니다.");
    });
    $("#reg_ldat_job4_lroute").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 1 && value <= 64000);
        let errorMessage = value === "" ? "" : (value < 1 || value > 64000 ? "1에서 64000 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });
    $("#del_ldat_job5_lroute").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 1 && value <= 64000);
        let errorMessage = value === "" ? "" : (value < 1 || value > 64000 ? "1에서 64000 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });
    $("#del_ldat_job5_lrtel").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 1 && value <= 512);
        let errorMessage = value === "" ? "" : (value < 1 || value > 512 ? "1에서 512 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });

    // 각각의 트렁크 경로에 대한 다이얼 플랜 설정
    $("#add_ldpln_job1_ldp").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || value.length <= 22;
        displayError($(this), isValid, "최대 22자 입력 가능합니다.");
    });
    $("#add_ldpln_job1_dpln").on("input", function () {
        $(this).val("0");
        $(this).prop('disabled', true); // 수정이 불가능하도록 input 요소를 비활성화
    });
    $("#add_ldpln_job1_lroute").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 0 && value <= 65535);
        let errorMessage = value === "" ? "" : (value < 0 || value > 65535 ? "0에서 65535 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });
    $("#add_ldpln_job1_lauth").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 1 && value <= 64);
        let errorMessage = value === "" ? "" : (value < 1 || value > 64 ? "1에서 64 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });
    $("#dis_ldpln_job2_ldpno").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 1 && value <= 64000);
        let errorMessage = value === "" ? "" : (value < 1 || value > 64000 ? "1에서 64000 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });
    $("#dis_ldpln_job2_ldp").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || value.length <= 22;
        displayError($(this), isValid, "최대 22자 입력 가능합니다.");
    });
    $("#dis_ldpln_job2_lroute").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 0 && value <= 65535);
        let errorMessage = value === "" ? "" : (value < 0 || value > 65535 ? "0에서 65535 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });
    $("#dis_ldpln_job2_lauth").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 1 && value <= 64);
        let errorMessage = value === "" ? "" : (value < 1 || value > 64 ? "1에서 64 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });
    $("#reg_ldpln_job3_ldpno").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 1 && value <= 64000);
        let errorMessage = value === "" ? "" : (value < 1 || value > 64000 ? "1에서 64000 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });
    $("#reg_ldpln_job3_ldp").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || value.length <= 22;
        displayError($(this), isValid, "최대 22자 입력 가능합니다.");
    });
    $("#del_ldpln_job4_diplnum").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 0 && value <= 2047);
        let errorMessage = value === "" ? "" : (value < 0 || value > 2047 ? "0에서 2047 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });
    $("#del_ldpln_job4_ldpno").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || (/^\d+$/.test(value) && value >= 1 && value <= 64000);
        let errorMessage = value === "" ? "" : (value < 1 || value > 64000 ? "1에서 64000 사이의 숫자만 입력 가능합니다." : "숫자만 입력 가능합니다.");
        displayError($(this), isValid, errorMessage);
    });
    $("#del_ldpln_job4_ldp").on("input", function () {
        let value = $(this).val().trim();
        let isValid = value === "" || value.length <= 22;
        displayError($(this), isValid, "최대 22자 입력 가능합니다.");
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
