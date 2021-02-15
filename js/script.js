$("#hamburger-link").click(function () {
  $("#gnav").toggleClass("gnav--open")
  $("#line1").toggleClass("hamburger-icon__part--open1")
  $("#line2").toggleClass("hamburger-icon__part--open2")
  $("#line3").toggleClass("hamburger-icon__part--open3")
  $("#hamburger-bg").toggleClass("hamburger-bg--open")
  $(".wrapper").toggleClass("wrapper-on")
})

$("#hamburger-bg").click(function () {
  $("#gnav").removeClass("gnav--open")
  $("#line1").removeClass("hamburger-icon__part--open1")
  $("#line2").removeClass("hamburger-icon__part--open2")
  $("#line3").removeClass("hamburger-icon__part--open3")
  $("#hamburger-bg").removeClass("hamburger-bg--open")
  $(".wrapper").removeClass("wrapper-on")
})

$(".radio-container").click(function () {
  $(".radio-container__input").prop("checked", false)
  $(this).find(".radio-container__input").prop("checked", true)
  console.log("click")
})

$(".form-item-check").click(function () {
  if ($('.form-item-check__input').attr('checked') == "checked") {
    $(".form-item-check__input").attr("checked", false)
    console.log("ki")
    console.log($('.form-item-check__input').attr('checked'))
  } else {
    $(".form-item-check__input").attr("checked", true)
    console.log("oi")
  }
})

$(function () {
  let $nameInput = false;
  let $emailInput = false;
  let $contentInput = false;
  let $privacyInput = false;

  let $submit = $("#contact-btn");
  function submit() {
    if ($nameInput == true && $emailInput == true && $contentInput == true && $privacyInput == true) {
      $submit.prop("disabled", false);
      $submit.text("送信可能!")
      console.log("送信準備ができました")
    } else {
      $submit.prop("disabled", true);
      console.log("未入力があります")
      $submit.text("送信不可")
    }
  }

  submit();

  $("#name-form").blur(function () {
    checkName($(this))
    submit()
  })

  $("#email-form").blur(function () {
    checkEmail($(this))
    submit()
  })

  $("#content-form").blur(function () {
    checkContent($(this))
    submit()
  })

  $(".form-item-check").click(function () {
    if ($("#privacy-form").attr('checked') !== "checked") {
      $privacyInput = false;
      submit();
      console.log("privacy is false")
      $(".form-item-check__error-blank").fadeIn(500);
    } else {
      $privacyInput = true;
      submit();
      console.log("privacy is true")
      $(".form-item-check__error-blank").fadeOut(500);
    }
  })

  checkName = function (ele) {
    let val = ele.val();
    if (val == "") {
      ele.parents(".form-item-text").find(".form-item-text__error-blank").fadeIn(500);
      $nameInput = false;
    } else {
      $nameInput = true;
      ele.parents(".form-item-text").find(".form-item-text__error-blank").fadeOut();
      console.log("name is true")
    }
  }

  checkEmail = function (ele) {
    let val = ele.val();
    if (val == "") {
      $emailInput = false;
      console.log("か")
      console.log("email is false")
      ele.parents(".form-item-email").find(".form-item-email__error-blank").fadeIn(500);

    } else if (!val.match(/^([a-zA-Z0-9])+([a-zA-Z0-9\._-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9\._-]+)+$/)) {
      $emailInput = false;
      console.log("email is false")
      ele.parents(".form-item-email").find(".form-item-email__error-blank").css("width", "240px");
      ele.parents(".form-item-email").find(".form-item-email__error-blank").text("半角英数字、@をつけてください").fadeIn(500);
    } else {
      $emailInput = true;
      console.log("き")
      ele.parents(".form-item-email").find(".form-item-email__error-blank").fadeOut();
      console.log("email is true")
    }
  }

  checkContent = function (ele) {
    let val = ele.val();
    if (val == "") {
      $contentInput = false;
      console.log("か")
      ele.parents(".form-item-content").find(".form-item-content__error-blank").fadeIn(500);
      console.log("content is false")
    } else {
      $contentInput = true;
      console.log("き")
      ele.parents(".form-item-content").find(".form-item-content__error-blank").fadeOut();
      console.log("content is true")
    }
  }

})

$(function() {
	Array.prototype.remove = function(element) {
	  for (var i = 0; i < this.length; i++)
	    if (this[i] == element) this.splice(i,1); 
	};

	function preload(images, progress) {
		var total = images.length;
	    $(images).each(function(){
			var src = this;
	        $('<img/>')
				.attr('src', src)
				.load(function() {
					images.remove(src);
					progress(total, total - images.length);
				});
	    });
	}
	
})