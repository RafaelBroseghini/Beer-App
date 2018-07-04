$("#mo").on("click", function(){
  if ($("#mo").prop("checked", true)) {
    $(".drinker").val($(this).siblings('label').text())
  }
})

$("#rafa").on("click", function(){
  if ($("#rafa").prop("checked", true)) {
    $(".drinker").val($(this).siblings('label').text())
  }
})

$("#amount").text($('.id').length)