jQuery(document).ready(function ($) {
    $(".scroll-to-tag").click(function (event) {
        event.preventDefault();
        $("html,body").animate({ scrollTop: $(this.hash).offset().top }, 500);
    });
});
