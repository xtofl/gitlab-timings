/*
Just draw a border round the document.body.
*/
document.body.style.border = "1px solid red";

$("body").ready(function(){
    var appending = {busy: false};
    $("#content-body").on("DOMSubtreeModified", ".js-job-content", appending, function(){
        if (appending.busy) return;
        appending.busy = true;
        $("[data-action='end']").removeClass("hidden").addClass("alert alert-info").html(function(index, val){
            var section =$(this).data('section');
            var start = $("[data-action='start'][data-section='"+section+"']");
            var startT = start.data('timestamp');
            var endT = $(this).data('timestamp');
            return section + ", time used: " + (endT - startT) + "s";
        });
        appending.busy = false;
    });
});