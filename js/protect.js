
document.addEventListener("contextmenu", function(e){
    e.preventDefault();
}, false);

jQuery(document).ready(function() {
    jQuery('body').bind('cut copy paste', function(e) {
        e.preventDefault();
    });
    jQuery("body").on("contextmenu", function(e) {
        return false;
    });
});
jQuery(document).keydown(function(event) {
    if (event.keyCode == 123) {
        return false;
    }
    if (event.ctrlKey && event.shiftKey && event.keyCode == 67) { // Prevent Ctrl+Shift+C
        return false;
    }
    if (event.ctrlKey && event.shiftKey && event.keyCode == 73) { // Prevent Ctrl+Shift+I
        return false;
    }
    if (event.ctrlKey && event.shiftKey && event.keyCode == 74) { // Prevent Ctrl+Shift+J
        return false;
    }
    if (event.ctrlKey && (event.keyCode === 85 || event.keyCode === 117)) { // Prevent Ctrl+U
        return false;
    }
});
document.onkeydown = function(e) {
    if (e.ctrlKey && (e.keydown === 85 || e.keydown === 117)) { // Prevent Ctrl+U or Ctrl+u
        return false;
    } else {
        return true;
    }
};
jQuery(document).keypress("u", function(e) {
    if (e.ctrlKey) {
        return false;
    } else {
        return true;
    }
});
document.body.addEventListener('keydown', event => {
    if (event.ctrlKey && 'spa'.indexOf(event.key) !== -1) {
        event.preventDefault()
    }
})