
  (function ($) {
  
  "use strict";

    // PRE LOADER
    $(window).load(function(){
      $('.preloader').delay(500).slideUp('slow'); // set duration in brackets    
    });

    // NAVBAR
    $(".navbar").headroom();

    $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });

    $('.slick-slideshow').slick({
      autoplay: true,
      infinite: true,
      arrows: false,
      fade: true,
      dots: true,
    });

    $('.slick-testimonial').slick({
      arrows: false,
      dots: true,
    });
    
  })(window.jQuery);

  function showPopup() {
    document.getElementById("whatsapp-popup").style.display = "block";
  }
  
  function closePopup() {
    document.getElementById("whatsapp-popup").style.display = "none";
  }
  
  function toggleOtherInput() {
    var otherSelect = document.getElementById('how_did_you_hear');
    var otherInput = document.getElementById('otherInput');
    if (otherSelect.value === "Other") {
        otherInput.style.display = "block";
    } else {
        otherInput.style.display = "none";
    }
}

function toggleBudgetInputs() {
  var budgetSelect = document.getElementById('budget');
  var otherBudgetInput = document.getElementById('otherBudgetInput');
  if (budgetSelect.value === "Other") {
      otherBudgetInput.style.display = "block";
  } else {
      otherBudgetInput.style.display = "none";
  }
}

function toggleOtherInput() {
  var interestSelect = document.getElementById('TellUsYourInterest');
  var otherInput = document.getElementById('otherInterestInput');
  if (interestSelect.value === "Other") {
      otherInput.style.display = "block"; // Show the input field
  } else {
      otherInput.style.display = "none"; // Hide the input field
  }
}

