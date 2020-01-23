$(document).ready (
  function() {
    $('.send_button').click(
      function() {
        var testoDaInviare = $('.message').val();
        console.log(testoDaInviare);
        var nuovoMessaggio = $('.template div').clone();
        nuovoMessaggio.children('p').text(testoDaInviare)
        console.log(nuovoMessaggio);
        $('.chat__main').append(nuovoMessaggio)
        nuovoMessaggio.show()
      }
    );
  }
);
