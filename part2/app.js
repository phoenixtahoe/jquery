$(document).ready(() => {
    $("#submit").on('click', (e) => {
        e.preventDefault();
        let title = $("#title");
        let rating = $("#rating");
        $("ol").append("<li>" + "rating: " + title.val() + "<br>" + "title: " + rating.val() + "<button id=remove>remove");
        e.target.form.reset()
    });
    $("div").on("click", "#remove", (e) => {
        $(e.target.parentNode).remove()
    });
});