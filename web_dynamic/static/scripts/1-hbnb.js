$(document).ready(function(){
    let amenities = {};
    $('input[type=checkbox]').change(function(){
        let id = $(this).attr('data-id');
        if($(this).is(':checked')){
            amenities[id] = id;
        }
        else{
            delete amenities[id];
        }
        $('#amenities h4').text(Object.keys(amenities).join(', '));
    });
});
