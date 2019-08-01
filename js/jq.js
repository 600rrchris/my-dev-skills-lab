let $obj = $('#list-container');

$('.add-skill').on('click', 'button', function() {
    let $skill = $('input').val();
    $obj.append(`
    <div class ="wrapper">
    <button class="btn btn-xs btn-danger">
        X
    </button> 
    <div class="skills">
        ${$skill}
    </div>
</div>`)
$('input').val('');
});


