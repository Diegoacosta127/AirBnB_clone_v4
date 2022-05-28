$(document).ready(function(){
    let amenities = {};
    $('input[type=checkbox]').change(function(){
        let id = $(this).attr('data-id');
        if($(this).is(':checked')){
            amenities[id] = id;
            $('.amenities h4').append(Object.keys(amenities).join(', '));   
        }
        else{
            $('.amenities h4').empty().remove(Object.keys(amenities));
        }
    });
});
