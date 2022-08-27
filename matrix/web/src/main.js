$(document).on('load',function(){
$('body' ).off('click').on('click', function() {
  $( this ).css({'background':'blue'});
  alert('test');
});
});