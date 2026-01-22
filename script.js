$(document).ready(function () {
    $('#myTable').DataTable({
        ajax: {
            url: '/api/extrates/currencies/all.json',
            type: 'GET',
            dataSrc: 'data',
            error: function (xhr, error, thrown) {
                console.error(xhr);
                document.getElementById('myTable').querySelector('tbody').innerHTML = `
                    <div class="text-center">${xhr.status} ${xhr.statusText}</div>
                `;
                alert(`${xhr.status} ${xhr.statusText}`);
            }
        },
        columns: [
            {
                title: 'ID',
                data: 'Cur_Code'
            },
            {
                title: 'Abbr',
                data: 'Cur_Abbreviation'
            },
            {
                title: 'Name',
                data: 'Cur_Name_Eng'
            },
            {
                title: 'Quot Name',
                data: 'Cur_QuotName_Eng'
            },
            {
                title: 'Multi Name',
                data: 'Cur_Name_EngMulti'
            },
            {
                title: 'Scale',
                data: 'Cur_Scale'
            },
            {
                title: 'Periodicity',
                data: 'Cur_Periodicity'
            },
            {
                title: 'Start',
                data: 'Cur_DateStart'
            },
            {
                title: 'End',
                data: 'Cur_DateEnd'
            },

        ],
        scrollY: "calc(100vh - 200px)",
        // scrollCollapse: true,
        scroller: true,
        paging: false,
        language: {
            url: "/assets/lib/datatable/language/ru.json"
        }
    });
});