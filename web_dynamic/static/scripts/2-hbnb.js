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

$.get("http://0.0.0.0:5001/api/v1/status/", function(data, status){
    if(data.status == "OK"){
        $("#api_status").addClass("available");
    }
    else{
        $("#api_status").removeClass("available");
    }
});
