$(document).ready(function() {
  $(document).on("click", ".send_button",
      function() {
        sendMessage();
        setTimeout(receiveMessage, 1000)
      }
  );
  $(document).on("click", ".contacts__main .fa-search",
      function() {
        searchContact();
      }
  );
  $(document).keyup(
      function() {
        if (event.which == 13) {
          sendMessage();
          setTimeout(receiveMessage, 1000)
        }
      }
  );
  $(document).keyup(
      function() {
        if (event.which == 13) {
          searchMessage();
        }
  });
});

// FUNZIONI
function sendMessage () {
  var testoDaInviare = $('.message').val();
  console.log(testoDaInviare);
  var nuovoMessaggio = $('.template .messager').clone();
  nuovoMessaggio.children('p').text(testoDaInviare)
  console.log(nuovoMessaggio);
  $('.chat__main').append(nuovoMessaggio)

}

function receiveMessage () {
  var testoDaRicevere = 'ok';
  console.log(testoDaRicevere);
  var nuovoMessaggioRicevuto = $('.template .message_in').clone();
  nuovoMessaggioRicevuto.children('p').text(testoDaRicevere)
  $('.chat__main').append(nuovoMessaggioRicevuto)
}
function searchContact() {
  var search = $(".search_input").val().toLowerCase();
  var contact = $(".chat_friend");

  contact.each(
    function() {
      var nomeContatto = $(this).find("h6").text().trim().toLowerCase();
      if (!nomeContatto.includes(search)) {
        $(this).hide();
      } else {
        $(this).show();
      }
    }
  );
}
