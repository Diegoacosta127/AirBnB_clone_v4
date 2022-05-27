$(document).ready(function(){
    var amenities = {};
    $('input[type=checkbox]').change(function(){
        var id = $(this).attr('id');
        if($(this).is(':checked')){
            amenities[id] = id;
        }
        else{
            delete amenities[id];
        }
        $('#amenities h4').text(Object.keys(amenities).join(', '));
    });
}
