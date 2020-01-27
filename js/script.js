$(document).ready(function() {
  $(document).on("click", ".send_button",
      function() {
        sendMessage();
        setTimeout(receiveMessage, 1000)
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
          searchContact();
  });
});

// FUNZIONI
// FUNZIONE INVIA MESSAGGIO
function sendMessage () {
  var testoDaInviare = $('.message').val();
  console.log(testoDaInviare);
  var nuovoMessaggio = $('.template .messager').clone();

  nuovoMessaggio.find('p').text(testoDaInviare)

  var data = new Date();
  var hours = addZero(data.getHours());
  var minutes = addZero(data.getMinutes());
  var time = hours +':'+ minutes;

  nuovoMessaggio.find('small').text(time);
  console.log(nuovoMessaggio);
  $('.active').append(nuovoMessaggio)

}
// FUNZIONE RICEVI MESSAGGIO
function receiveMessage () {
  var testoDaRicevere = 'ok';
  console.log(testoDaRicevere);
  var nuovoMessaggioRicevuto = $('.template .message_in').clone();
  nuovoMessaggioRicevuto.find('p').text(testoDaRicevere)
  var data = new Date();
  var hours = addZero(data.getHours());
  var minutes = addZero(data.getMinutes());
  var time = hours +':'+ minutes;

  nuovoMessaggioRicevuto.find('small').text(time);
  $('.active').append(nuovoMessaggioRicevuto)
}

// FUNZIONE CERCA CONTATTI
function searchContact() {
  var search = $(".search_input").val().toLowerCase();
  var contact = $(".chat_friend");

  contact.each(
    function() {
      var nomeContatto = $(this).find("h6").text().toLowerCase();
      if (!nomeContatto.includes(search)) {
        $(this).hide();
      } else {
        $(this).show();
      }
    }
  );
}
// FUNZIONE CHE AGGIUNGE LO ZERO ALL'ORARIO
function addZero(number) {
  if(number < 10) {
    number = '0' + number;
  }
  return number;
}

$('.chat_friend').click(
  function () {
      $('.chat_friend').removeClass('chat_active')
      $(this).addClass('chat_active');
      var chatSelect = $(this).attr('data-contact')
      $('.chat__main').removeClass('active')
      $('.chat__main[data-contact="'+chatSelect+'"]').addClass('active');
    }
)
