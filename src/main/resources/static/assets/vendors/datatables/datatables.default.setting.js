$.fn.dataTable.ext.errMode = 'none';

$.extend( true, $.fn.dataTable.defaults, {
    autoWidth: true,
    bPaginate: false,
    bFilter: false,
    bInfo: false,
    responsive: true,
    processing: true,
    stateSave: false,
    select: true,
    searching: true,
    bLengthChange: false,
    ordering: false,
    dom: "<'row'<'col-md-6 d-flex gap-1 align-items-center'f>>" +
        "<'row'<'col-md-12'tr>>" +
        "<'row mt-2'<'col-md-6 col-sm-3'i><'col-md-6 col-sm-9'p>>",
    language: {
        sEmptyTable: "데이타가 없습니다.",
        sZeroRecords: "검색 결과가 없습니다.",
        sLoadingRecords: "Loading..",
        sSearch: "",
        sSearchPlaceholder: "Search",
        sInfo: "", //"Showing _START_ to _END_ of _TOTAL_ entries",
        sInfoEmpty: "",
        sInfoFiltered: "",
        select: {
            rows:  {
                _: "%d 개 선택됨",
                0: "&nbsp;",
                1: "1개 선택됨"
            }
        },
        paginate: {
            sNext: "다음",
            sPrevious: "이전"
        }

    }
} );
