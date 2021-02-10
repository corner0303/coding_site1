$("#hamburger-link").click(function () {
  $("#gnav").toggleClass("gnav--open")
  $("#line1").toggleClass("hamburger-icon__part--open1")
  $("#line2").toggleClass("hamburger-icon__part--open2")
  $("#line3").toggleClass("hamburger-icon__part--open3")
  $("#hamburger-bg").toggleClass("hamburger-bg--open")
})

$("#hamburger-bg").click(function () {
  $("#gnav").removeClass("gnav--open")
  $("#line1").removeClass("hamburger-icon__part--open1")
  $("#line2").removeClass("hamburger-icon__part--open2")
  $("#line3").removeClass("hamburger-icon__part--open3")
  $("#hamburger-bg").removeClass("hamburger-bg--open")

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

//formの確認

// $(function () {
//   //formの入力確認
//   let $submit = $("#contact-btn");//送信ボタンに指定されたIDを定義
//   let $checked = false;
//   let $val = false;
//   let $kanaLast = false;
//   let $kanaFirst = false;
//   function btn_submit() {
//     if ($checked == true && $val == true && $kanaLast == true && $kanaFirst == true) {
//       $submit.prop("disabled", false)
//       console.log("success2")
//     } else {
//       $submit.prop("disabled", true)
//       console.log("false1")
//     }
//   }
//   $("#check_trigger").click(function () {
//     $(this).toggleClass("is-checked")
//     if ($("#check_trigger").hasClass("is-checked")) {
//       $checked = true;
//       console.log($checked)
//       btn_submit()
//     } else {
//       $checked = false;
//       console.log($checked)
//       btn_submit()
//     }
//   })
//   //input要素のフォーカスを失ったタイミングで発生します。
//   $('#js_form input[data-required="required0"]').blur(function () {
//     //空値及びカナ以外の値が入っていないかチェックするバリデーション
//     emptyCheck($(this));
//     btn_submit()
//   });
//   $('#js_form input[data-required="required1"]').blur(function () {
//     //空値及びカナ以外の値が入っていないかチェックするバリデーション
//     emptyCheck($(this));
//     btn_submit()
//   });
//   $('#js_form input[data-required="required4"]').blur(function () {
//     //空値及びカナ以外の値が入っていないかチェックするバリデーション
//     emptyCheck($(this));
//     btn_submit()
//     gmailCheck($(this));
//   });
//   $('#js_form input[type="tel"]').blur(function () {
//     numberCheck($(this));
//   });
//   $('#js_form .form_item_body__input--postal_code').blur(function () {
//     numberCheck($(this));
//   });
//   $('#js_form .form_item_body__input--address').blur(function () {
//     let val = $(this).val()
//     if (!$(this).val() == "") {
//       //valueを一度リセットしてもう一回入れるとなんか行ける
//       $(this).val("")
//       $(this).val(val)
//       $(this).addClass("input_success")
//     } else {
//       $(this).removeClass("input_success")
//     }
//     inputReset($(this))
//   });
//   $('#js_form textarea[data-required="required5"]').blur(function () {
//     //空値及びカナ以外の値が入っていないかチェックするバリデーション
//     emptyCheck($(this));
//     btn_submit()
//   });
//   $('#js_form input[data-kana="katakana--last"]').blur(function () {
//     //ひらがなを自動変換するイベントの呼び出し
//     kanaChange($(this));
//     emptyCheckKanaLast($(this));
//     btn_submit()
//     inputReset(ele)

//     //空値及びカナ以外の値が入っていないかチェックするバリデーション
//   });
//   $('#js_form input[data-kana="katakana--first"]').blur(function () {
//     //ひらがなを自動変換するイベントの呼び出し
//     kanaChange($(this));
//     emptyCheckKanaFirst($(this));
//     btn_submit()
//     inputReset(ele)

//     //空値及びカナ以外の値が入っていないかチェックするバリデーション
//   });

//   kanaChange = function (ele) {
//     var val = ele.val();
//     //正規表現でひらがなを引数の値に置換
//     var kana = val.replace(/[ぁ-ん]/g, function (s) {
//       // ユニコード値でカナに変換
//       ele.addClass("input_success")
//       return String.fromCharCode(s.charCodeAt(0) + 0x60)
//     });

//     if (val.match(/[ぁ-ん]/g)) {
//       $(ele).val(kana)
//     }

//   };

//   emptyCheck = function (ele) {
//     let placeholder = ele.attr("placeholder")
//     let val = ele.val();
//     console.log(placeholder)
//     if (val == "") {
//       ele.addClass("input_error")
//       ele.attr("placeholder", "入力されていません");
//     }
//     else {
//       //valueを一度リセットしてもう一回入れるとなんか行ける
//       ele.val("")
//       ele.val(val)
//       ele.removeClass("input_error")
//       ele.addClass("input_success")
//     }

//   };
//   emptyCheckKanaLast = function (ele) {
//     let placeholder = ele.attr("placeholder")
//     let val = ele.val();
//     console.log(placeholder)
//     inputReset(ele)
//     if (val == "") {
//       ele.addClass("input_error")
//       $kanaLast = false;
//       ele.attr("placeholder", "入力されていません");
//     }
//     else if (val.match(/[^ぁ-んァ-ン　\s]+/)) {
//       ele.addClass("input_error")
//       ele.attr("placeholder", "全角カナで入力ください。");
//       ele.val("")
//       $kanaLast = false;
//     }

//     else {
//       //valueを一度リセットしてもう一回入れるとなんか行ける
//       ele.val("")
//       ele.val(val)
//       $kanaLast = true;
//       ele.removeClass("input_error")
//       ele.addClass("input_success")
//     }
//   };
//   emptyCheckKanaFirst = function (ele) {
//     let placeholder = ele.attr("placeholder")
//     let val = ele.val();
//     inputReset(ele)

//     if (val == "") {
//       ele.addClass("input_error")
//       $kanaFirst = false;
//       ele.attr("placeholder", "入力されていません");
//       ele.focusin(function () {
//         ele.attr("placeholder", placeholder);
//         ele.removeClass("input_error")
//         ele.removeClass("input_success")
//         console.log(placeholder)
//       })
//     }
//     else if (val.match(/[^ぁ-んァ-ン　\s]+/)) {
//       ele.addClass("input_error")
//       ele.attr("placeholder", "全角カナで入力ください。");
//       ele.val("")
//       $kanaFirst = false;
//     }

//     else {
//       //valueを一度リセットしてもう一回入れるとなんか行ける
//       ele.val("")
//       ele.val(val)
//       $kanaFirst = true;
//       ele.removeClass("input_error")
//       ele.addClass("input_success")
//     }

//   };

//   gmailCheck = function (ele) {
//     let val = ele.val()
//     let placeholder = ele.attr("placeholder")
//     if (val == "") {
//       ele.addClass("input_error")
//       ele.attr("placeholder", "入力してください");
//       ele.val("")
//     }
//     else if (!val.match(/^([a-zA-Z0-9])+([a-zA-Z0-9\._-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9\._-]+)+$/)) {
//       ele.addClass("input_error")
//       ele.attr("placeholder", "半角英数字、@をつけてください");
//       ele.val("")
//     }
//     else {
//       //valueを一度リセットしてもう一回入れるとなんか行ける
//       // ele.val("") 今回はemptyの方にある為コメントアウト
//       // ele.val(val) 
//       ele.removeClass("input_error")
//       ele.addClass("input_success")
//     }
//     ele.focusin(function () {
//       ele.attr("placeholder", placeholder);
//       ele.removeClass("input_error")
//       console.log(placeholder)
//     })
//   };

//   numberCheck = function (ele) {
//     let placeholder = ele.attr("placeholder")
//     let val = ele.val()
//     $hyphen = val.replace(/[━.*‐.*―.*－.*\–.*ー.*\-]/gi, ''); ele.val($hyphen)
//     if (!val.match(/^[0-9\-]+$/) && !val == "") {
//       ele.addClass("input_error")
//       ele.attr("placeholder", "数字で入力してください");
//       ele.val("")
//     } else if (val == "") { //必須項目ではないので
//       ele.removeClass("input_error")
//       ele.removeClass("input_success")
//       ele.attr("placeholder", placeholder);
//     } else {
//       //valueを一度リセットしてもう一回入れるとなんか行ける
//       ele.val("")
//       ele.val($hyphen)
//       ele.removeClass("input_error")
//       ele.addClass("input_success")
//     }
//     inputReset(ele)
//   }

//   inputReset = function (ele) {
//     let placeholder = ele.attr("placeholder")
//     ele.focusin(function () {
//       $(this).attr("placeholder", placeholder);
//       $(this).removeClass("input_error")
//       $(this).removeClass("input_success")
//       console.log(placeholder)
//     })
//   }

//   $('#check_trigger').click(function () {
//     if ($('.form_item_check__input').attr('checked') === 'checked') {
//       $('.form_item_check__input').attr('checked', false);
//     } else {
//       $('.form_item_check__input').attr('checked', true);

//     }
//     console.log($('.form_item_check__input').attr('checked'));
//   })

//   $("#js_form input[name='zip11']").on("change", function () {
//     let val = $(this).val()
//     $("input[name='entry.1952773575']").val(val)
//   })
//   $("#js_form input[name='addr11']").focusout(function () {
//     let val = $(this).val()
//     $("input[name='entry.834013239']").val(val)
//   })
//   $("#js_form input, #js_form textarea").on("change", function () {//value値が変更されたら、その時点で発動
//     if (
//       $("#js_form input[data-required='required0']").val() !== "" &&//空白でない
//       $("#js_form input[data-required='required1']").val() !== "" &&//空白でない
//       $("#js_form input[data-required='required4']").val() !== "" &&//空白でない
//       $("#js_form textarea[data-required='required5']").val() !== "" //空白でな
//       //空白でない
//     ) {//全てOKな場合
//       //全て入力された時
//       // $submit.addClass("-active")//submitに-activeクラス追加
//       //disabledを消す
//       $val = true;
//       btn_submit()
//     } else {
//       //されていないとき
//       // $submit.removeClass("-active")//submitに-activeクラス消去
//       //$submit.prop("disabled", true)//disabledを付与
//       $val = false;
//       btn_submit()
//     }
//   })

//送信

// let $form = $("#js_form")//formタグにidをつけてその値の定義
// $form.submit(function (e) { 
//   $.ajax({ 
//     url: $form.attr('action'), 
//     data: $form.serialize(), 
//     type: "POST", 
//     dataType: "xml", 
//     statusCode: { //ここから上は解読してくれ
//       0: function () { 
//       //送信に成功したときの処理 
//       $form.slideUp(300)//formをスライドアップして消す
//       $("#submit_success").slideDown(300)//サクセス文を出す
//     }, 
//     200: function () { 
//       $("#submit_error").slideDown(300)//エラー文を出す
//       //送信に失敗したときの処理 
//       $form.slideUp()//formをスライドアップして消す
//     } 
//     } 
//   }); 
//   return false; //返り値ドーン
// }); 
// })


$(function () {
  let $nameInput = false;
  let $emailInput = false;
  let $contentInput = false;
  let $privacyInput = false;

  let $submit = $("#contact-btn");
  function submit() {
    if ($nameInput == true && $emailInput == true && $contentInput == true && $privacyInput == true) {
      $submit.prop("disabled", false);
      console.log("送信準備ができました")
    } else {
      $submit.prop("disabled", true);
      console.log("未入力があります")
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
      ele.parents(".form-item-email").find(".form-item-email__error-blank").css("width","240px");
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


