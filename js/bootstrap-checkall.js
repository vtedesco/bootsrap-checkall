// auto check all checkboxs
$('[data-toggle=autoCheck-on]').click(function(event) {
    $( $(this).data('target') ).find('input:checkbox').each(function() {
        $(this).prop('checked', true); 
    });
});
// auto un-check all checkboxs
$('[data-toggle=autoCheck-off]').click(function(event) {
    $( $(this).data('target') ).find('input:checkbox').each(function() {
        $(this).prop('checked', false); 
    });
});
// Check or uncheck controlled by a default checkbox
$('[data-toggle=autoCheck-toggle]').click(function(event) {
    if ($(this).is(':checked')){
        var direction = true;
    } else{
        var direction = false;
    }
    $( $(this).data('target') ).find('input:checkbox').each(function() {
        $(this).prop('checked', direction); 
    });
});
