$( document ).ready(function() {
  $('#submit').click(function() {
    message = $("#message").val(); 
    email = $("#email").val();
    
    if(email === ""){
      $("<div>Please put something in me.</div>").insertAfter('.mandatory-email').delay(3000).fadeOut();
      return false;
    } else if(message === "") {
      $("<div>Please put something in me.</div>").insertAfter('.mandatory-message').delay(3000).fadeOut();
      return false;
    } else {
      $.ajax({
        type: 'POST',
        url: 'https://mandrillapp.com/api/1.0/messages/send.json',
        data: {
          'key': 'U_3JF4R15LZpTBHLtsNn3Q',
          'message': {
            'from_email': email,
            'to': [
                {
                  'email': 'hannah@soulcookie.net',
                  'name': 'Hannah Graham',
                  'type': 'to'
                }
              ],
            'autotext': 'true',
            'subject': 'Email from your website',
            'html': message
          }
        },
        success: function() {
          $("#message").val("");
          $("#email").val("");
          $("<div>Thanks, I'll be in touch soon!</div>").insertAfter('#submit').delay(3000).fadeOut().addClass('success');
        }
      })
    }
  });
});