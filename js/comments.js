$('input.timelineCommentTextField').keypress(function(e){
  if (e.which == 13) {
     $('form#timelineCommentForm').submit();
     $(this).val('').blur();
     $('div.hiddenComment').css("display", "block");
   }
});
