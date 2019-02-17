function addBotMessage(type, input) {
  //Welcome = 0, After Profile = 1, After symptoms = 2
  if (type === 0) {
    setTimeout(() => {
      $(".chat-content").append(
        "<div class='chat-box-bot'>Hi welcome to MedKick.<br/>I am AI Dr. Johnson and I will assist you with your health concerns!</div><br/>"
      );
    }, 1000);
    setTimeout(() => {
      $(".chat-content").append(
        "<div class='chat-box-bot'>To examine carefully, I will need your information.<br/>Please select a profile or add a new one.</div>"
      );
    }, 2000);
    showInput(0);
  } else if (type === 1) {
    setTimeout(() => {
      $(".chat-content").append(
        "<div class='chat-box-bot'>Great!<br/>Now, can you tell me what symptoms you have?</div><br/>"
      );
    }, 1500);
  } else if (type === 2) {
    setTimeout(() => {
      $(".chat-content").append(
        "<div class='chat-box-bot'>That sounds terrible.</div><br/>"
      );
    }, 1000);
    setTimeout(() => {
      $(".chat-content").append(
        "<div class='chat-box-bot'>Let's start with fever.<br/>Can you tell me what temperature you have?</div><br/>"
      );
      scrollBottom();
      $(".rec-container")
        .append(
          "<div class='rec-content-2'>~100F</div><div class='rec-content-2'>100F~103F</div><div class='rec-content-2'>104F~</div>"
        )
        .hide()
        .fadeIn(1000);
    }, 2000);
  }
}
function addResponseMessage(type) {
  if (type === 0) {
    $(".chat-content").append(
      "<div class='row'><div class='chat-box-me'>Hi I'm Nick. You already have my information.</div></div>"
    );
  } else if (type === 1) {
    $(".chat-content").append(
      "<div class='row'><div class='chat-box-me'>I have symptoms #fever, #abdominal pain, #diarrhea, #vommit, #nausia.</div><div>"
    );
  } else if (type === 2) {
    $(".chat-content").append(
      "<div class='row'><div class='chat-box-me'>I have temperature between 100 and 103 F</div><div>"
    );
    scrollBottom();
    setTimeout(() => {
      $(".chat-content").append(
        "<div class='chat-box-bot'>Ok. Can you tell me about how much abdominal pain you are having?<br/>In scale from 0 being no pain to 5 being in need of emergency room right now.</div><br/>"
      );
      scrollBottom();
      $(".rec-container")
        .append(
          "<div class='rec-content-2'>1</div><div class='rec-content-2'>2</div><div class='rec-content-2'>3</div><div class='rec-content-2'>4</div><div class='rec-content-2'>5</div>"
        )
        .hide()
        .fadeIn(1000);
    }, 1000);
  } else if (type === 3) {
    $(".chat-content").append(
      "<div class='row'><div class='chat-box-me'>I have scale 3 of pain, which is intermediate pain.</div><div>"
    );
    scrollBottom();
    setTimeout(() => {
      $(".chat-content").append(
        "<div class='chat-box-bot'>Ok. Give me some time to write a report on your symptoms!</div><br/>"
      );
      scrollBottom();
    }, 1000);
    setTimeout(() => {
      $("#reportmodal").show();
      progress(80, $("#progressBar"));
      progress(20, $("#progressBar2"));
    }, 2000);
  }
}
function showInput(type) {
  if (type === 0) {
    setTimeout(() => {
      $(".rec-container")
        .append(
          "<div class='rec-content-1' id='profile1'>Nick</div><div id='addNewProfile' class='rec-content-1'>+</div>"
        )
        .hide()
        .fadeIn(1000);
    }, 2000);
  } else if (type === 1) {
    setTimeout(() => {
      $(".rec-container")
        .append(
          "<div class='rec-content-2'>#fever</div><div class='rec-content-2'>#abdominal pain</div><div class='rec-content-2'>#diarrhea</div><div class='rec-content-2'>#vommit</div><div class='rec-content-2'>#nausia</div>"
        )
        .hide()
        .fadeIn(1000);
    }, 2100);
  }
}
//takes care when user puts input
let submitType = 0;
function enterInput() {
  $(".rec-container").empty();
  if (submitType === 0) {
    $("#patientinfo").css("display", "block");
    setTimeout(addResponseMessage(0), 1000);
    addBotMessage(1);
    showInput(1);
    submitType = 1;
  } else if (submitType === 1) {
    addBotMessage(2);
    addResponseMessage(1);
    submitType = 2;
  } else if (submitType === 2) {
    addResponseMessage(2);
    submitType = 3;
  } else if (submitType === 3) {
    addResponseMessage(3);
    submitType = 4;
  }
}

//Report Modal
function closeModal() {
  $("#reportmodal").hide();
}
//Helper to scroll to bottom of the chat.
function scrollBottom() {
  $(".chat-content").animate(
    { scrollTop: $(".chat-content").height() },
    "slow"
  );
}
// function for progressbar
function progress(percent, $element) {
  var progressBarWidth = (percent * $element.width()) / 100;
  $element
    .find("div")
    .animate({ width: progressBarWidth }, 500)
    .html(percent + "% ");
}
