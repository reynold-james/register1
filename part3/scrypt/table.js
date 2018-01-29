$(document).ready(function(){
    $.ajax({
        url: 'table.php',
        type: 'POST',
        success: function(res)
        {
            $("#tab").html(res);
        }
    })
});