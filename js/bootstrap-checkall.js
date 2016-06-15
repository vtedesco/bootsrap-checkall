// auto check all checkboxs
$('[data-toggle=autoCheck-on').click(function(event) {
    $( $(this).data('target') ).find('input:checkbox').each(function() {
        $(this).prop('checked', true); 
    });
});
// auto un-check all checkboxs
$('[data-toggle=autoCheck-off').click(function(event) {
    $( $(this).data('target') ).find('input:checkbox').each(function() {
        $(this).prop('checked', false); 
    });
});