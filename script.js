$(document).ready(function(){
  var DD;
  $(".description-tab2").click(function(){
    $(".description-tab1").toggleClass("highlight");
    $(".description-tab2").toggleClass("highlight");
    $(".SideEffects").toggle();
    $(".DrugDrug").toggle();
  });
  if (DD) {
      $(".description-tab2").addClass("highlight");
      $(".description-tab1").removeClass("highlight");
      $(".DrugDrug").show();
      $(".SideEffects").hide();
        DD=false;
      }  else {
        $(".description-tab1").addClass("highlight");
        $(".description-tab2").removeClass("highlight");
        $(".description-tab3").removeClass("highlight");
        $(".SideEffects").show();
        $(".DrugDrug").hide();
        $("#FD").hide();
      };
  var FD;
  $(".description-tab3").click(function(){
    $(".description-tab3").toggleClass("highlight");
    $(".description-tab1").toggleClass("highlight");
    $(".SideEffects").toggle();
    $("#FD").toggle();
  });
  if (FD) {
      $(".description-tab3").addClass("highlight");
      $(".description-tab1").removeClass("highlight");
      $(".SideEffects").hide();
      $("#FD").show();
        FD=false;
      }  else {
        $(".description-tab1").addClass("highlight");
        $(".description-tab2").removeClass("highlight");
        $(".description-tab3").removeClass("highlight");
        $(".SideEffects").show();
        $(".DrugDrug").hide();
        $("#FD").hide();
      };
  var Meds;
  $(".description-tab5").click(function(){
    $(".description-tab4").toggleClass("highlight");
    $(".description-tab5").toggleClass("highlight");
    $(".profile-Record").toggle();
    $(".profile-Con").toggle();
    $(".profile-Med").toggle();
  });
  if (Meds) {
      $(".description-tab5").addClass("highlight");
      $(".description-tab4").removeClass("highlight");
      $(".profile-Med").show();
      $(".profile-Record").hide(); 
      $(".profile-Con").hide();
      Meds=false;
      }  else {
        $(".description-tab4").addClass("highlight");
        $(".description-tab5").removeClass("highlight");
        $(".description-tab6").removeClass("highlight");
        $(".profile-Med").hide();
        $(".profile-Record").show();
        $(".profile-Con").show();
        $(".profile-Coupon").hide();
      };
  var Coupons;
  $(".description-tab6").click(function(){
    $(".description-tab4").toggleClass("highlight");
    $(".description-tab6").toggleClass("highlight");
    $(".profile-Record").toggle();
    $(".profile-Con").toggle();
    $(".profile-Coupon").toggle();
  });
  if (Coupons) {
    $(".description-tab6").addClass("highlight");
    $(".description-tab4").removeClass("highlight");
    $(".profile-Record").hide();
    $(".profile-Con").hide();
    $(".profile-Coupon").show();
      Coupons=false;
    }  else {
      $(".description-tab4").addClass("highlight");
      $(".description-tab5").removeClass("highlight");
      $(".description-tab6").removeClass("highlight");
      $(".profile-Med").hide();
      $(".profile-Record").show();
      $(".profile-Con").show();
      $(".profile-Coupon").hide();
    };


  var Premium;
  $("#pay").click(function(){
    $(".money").toggle();
    $("#pay").hide();
  });
  if (Premium) {
    $(".money").show();
    Premium=false;
  } else {
    $(".money").hide();
    $(".finish").hide();
  };


  var Confirm;
  $("#confirm").click(function(){
    $(".money").toggle();
    $(".finish").toggle();
  });
  if (Confirm) {
    $(".money").hide();
    $(".finish").show();
    Confirm=false;
  } else {
    $(".money").hide();
    $(".finish").hide();
  };
})