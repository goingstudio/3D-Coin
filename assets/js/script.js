jQuery(document).ready(function($) {

    //Slidebars
    var controller = new slidebars();
    controller.init();

    // Toggle Slidebars
    $('.toggle-menu').on('click', function(event) {
        // Stop default action and bubbling
        event.stopPropagation();
        event.preventDefault();

        // Toggle the Slidebar with id 'id-1'
        controller.toggle('page-sidebar');
    });

});