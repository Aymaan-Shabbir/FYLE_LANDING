$(document).ready(function () {
  $(".dot").click(function () {
    const index = $(this).index();
    const container = $(".cards-container");
    const cardWidth = $(".card").outerWidth();

    container.animate(
      {
        scrollLeft: cardWidth * index,
      },
      "slow"
    );

    $(".dot").removeClass("active");
    $(this).addClass("active");
  });

  $(".contsbtm").click(function () {
    $(".contsbtm").removeClass("active");

    $(this).addClass("active");

    const imgContainer = $("#image");
    imgContainer.css("background-image", $(this).data("img"));
  });
});
$(document).ready(function () {
  var formOpened = false;

  function openForm() {
    if (!formOpened) {
      $("#contactForm").fadeIn();
      formOpened = true;
    }
  }

  function closeForm() {
    $("#contactForm").fadeOut();
    $("#contactFormContainer")[0].reset();
    formOpened = false;
  }

  function submitForm(event) {
    event.preventDefault();

    // Serialize the form data
    var formData = $("#contactFormContainer").serialize();

    $.ajax({
      type: "POST",
      url: "https://getform.io/f/bwngwyea",
      data: formData,
      success: function (response) {
        console.log("Form submitted successfully.");
        console.log("Server response:", response);
        closeForm();
      },
      error: function (error) {
        console.error("Form submission error:", error);
      },
    });
  }

  $(".contact-button").on("click", openForm);
  $(".btn.cancel").on("click", closeForm);
  $("#contactFormContainer").on("submit", submitForm);
});
