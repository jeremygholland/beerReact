
$(document).ready(function(){
  $('.submit').click(function(){
    var hmm = $('.hmm').val();
    console.log(hmm);
    $.getJSON('http://api.brewerydb.com/v2/?key=4b50655001c2875f2ef1e4cf9dc31c6c', function(){

    })
  })
})
