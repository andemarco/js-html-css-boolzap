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
  var nuovoMessaggio = $('.template .messager').clone();

  nuovoMessaggio.find('p').text(testoDaInviare)

  var data = new Date();
  var hours = addZero(data.getHours());
  var minutes = addZero(data.getMinutes());
  var time = hours +':'+ minutes;

  nuovoMessaggio.find('small').text(time);
  $('.active').append(nuovoMessaggio)
  var testoDaInviare = $('.message').val('');
}
// FUNZIONE RICEVI MESSAGGIO
function receiveMessage () {
  var testoDaRicevere = 'ok';
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
  var cerca = $(".search_input").val().toLowerCase();
  var contatto = $(".chat_friend");

  contatto.each(function() {
      var nomeContatto = $(this).find("h6").text().toLowerCase();
      if (!nomeContatto.includes(cerca)) {
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

// SELEZIONARE LA CHAT
$('.chat_friend').click(
  function () {
      $('.chat_friend').removeClass('chat_active')
      $(this).addClass('chat_active');
      var chatSelect = $(this).attr('data-contact')
      var chatSelectName = $(this).find('h6').text();
      var chatSelectTime = $(this).find('.time').text();
      var chatSelectImage = $(this).find('img').attr('src');
      $('.chat__main').removeClass('active')
      $('.chat__main[data-contact="'+chatSelect+'"]').addClass('active');
      $('.chat__header__text').find('h6').text(chatSelectName);
      $('.chat__header__text').find('p').text('Ultimo accesso alle ore ' + chatSelectTime);
      $('.chat__header img').attr('src', chatSelectImage);
    }
)
 // APRIRE menu a tendina messaggio
 $(document).on('click', '.fa-chevron-down',
       function () {
         $(this).parent('.message--top').parent('.chat_message').find('.dropdown').toggle();
       }
     );

// CANCELLARE MESSAGGIO
$(document).on('click', '.chat_message .dropdown span',
  function () {
    var messaggio = $(this).parent('li').parent('.dropdown').parent().remove();
  }
)

// FOCUS BARRA
$('.message').focus(
  function() {
    $('.send_button').removeClass('fa-microphone').addClass('fa-paper-plane')
  }
)
//BLUR BARRA
$('.message').blur(
  function() {
    $('.send_button').addClass('fa-microphone').removeClass('fa-paper-plane')
  }
)
