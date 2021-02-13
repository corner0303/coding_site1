// // チェックボックスの取得
// const btn = document.querySelector("#btn-mode");
// // let dark = document.querySelectorAll("*").hasAttribute("data-dark");
// // チェックした時の挙動
// btn.addEventListener("change", () => {
//   if (btn.checked == true) {
//     // ダークモード
//     document.body.classList.remove("light-theme");
//     document.body.classList.add("dark-theme");
//     // if( dark == true){
//     //   dark.setAttribute("data-dark","yes")
//     // }
//   } else {
//     // ライトモード
//     document.body.classList.remove("dark-theme");
//     document.body.classList.add("light-theme");
//   }
// });
{
  const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  const darkModeOn = darkModeMediaQuery.matches;
  $("*").attr("data-dark","")
  if (darkModeOn) { // Dark
    document.getElementById("btn-mode").checked = true;
    $("[data-dark").attr("data-dark","dark")
    console.log('初期設定:ダークモード');
  } else { // Light
    document.getElementById("btn-mode").checked = false;
    $("[data-dark]").attr("data-dark","light")
    console.log('初期設定:ライトモード');
  }
}

$(function () {

  $("#btn-mode").change(function () {
    console.log($("#btn-mode").prop("checked"));
    console.log($("#btn-mode").attr("checked") == "checked")
    if ($("#btn-mode").prop("checked") == true) {
      $("[data-dark]").attr("data-dark","dark")
      console.log("ダークモード")
    } else {
      console.log("ライトモード")
      $("[data-dark]").attr("data-dark","light")
    }
  })

})

