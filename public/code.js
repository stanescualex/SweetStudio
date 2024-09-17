
$('#myPopup').addClass("hidden");
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  $('#submit').click(function (e) {

    let objectMail = {
      firstName: $("#FirstName").val(),
      lastName: $("#LastName").val(),
      mail: $("#Mail").val(),
      phone: $("#Phone").val(),
      details: $("#Details").val()
    }

    $.post("/api", objectMail, (data, status) => {
      if(!data.isSucess){
        $("#textPopUp").text("Mail-ul nu a putut fii trimis incercati sa contactati prin datele din sectiunea de contact")
        $("#myPopup").removeClass("hidden")
      }else{
        $("#myPopup").removeClass("hidden")
      }
    });
    


  })

  let hidePopUp = function(){
    $('#myPopup').addClass("hidden");
  }

  $('#loadMore').click(function(){
    $('#galeryMore').removeClass("hidden");
    $('#loadMoreContainer').addClass("hidden");
    $('#hideMore').removeClass("hidden");
    
  })
  $('#hideMore').click(function(){
    $('#galeryMore').addClass("hidden");
    $('#hideMore').addClass("hidden");
    $('#loadMoreContainer').removeClass("hidden");
  })

  let blinking_text = $('#blink_effect');
  setInterval(function() {
    if(blinking_text.hasClass("home-title")){
      blinking_text.removeClass('home-title')
      blinking_text.addClass('blink-effect')
    }else {
      blinking_text.removeClass('blink-effect')
      blinking_text.addClass('home-title')
    }

  }, 1000);

window.addEventListener("scroll", reveal, {passive: true});