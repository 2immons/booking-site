// модал удаления админки
let dcloseBtn = $('.close-btn__date-popup');
let dopenBtn = $('.date-popup-open-btn');
let dsubmitBtn = $('.submit-btn___date-popup');
let dpopupBody = $('.popup-body__date-popup');
let dpopup = $('.popup__date-popup');

$(document).on("click", function(e){
   if (dcloseBtn.is(e.target)) {
      dpopup.removeClass('_active');
   }
   if (dsubmitBtn.is(e.target) || (dpopupBody.is(e.target))) {
      dpopup.removeClass('_active');
   }
   if (dopenBtn.is(e.target)) {
      dpopup.addClass('_active');
   }
})

// // модал едита админки
// let ecloseBtn = $('.close-btn__admin-edit-popup');
// let eopenBtn = $('.admin-edit-popup-open-btn');
// let esubmitBtn = $('.submit-btn___admin-edit-popup');
// let epopupBody = $('.popup-body__admin-edit-popup');
// let epopup = $('.popup__admin-edit-popup');

// $(document).on("click", function(e){
//    if (ecloseBtn.is(e.target)) {
//       epopup.removeClass('_active');
//    }
//    if (esubmitBtn.is(e.target) || (epopupBody.is(e.target))) {
//       epopup.removeClass('_active');
//    }
//    if (eopenBtn.is(e.target)) {
//       epopup.addClass('_active');
//    }
// })

// // модал создания админки
// let ccloseBtn = $('.close-btn__admin-create-popup');
// let copenBtn = $('.admin-create-popup-open-btn');
// let csubmitBtn = $('.submit-btn___admin-create-popup');
// let cpopupBody = $('.popup-body__admin-create-popup');
// let cpopup = $('.popup__admin-create-popup');

// $(document).on("click", function(e){
//    if (ccloseBtn.is(e.target)) {
//       cpopup.removeClass('_active');
//    }
//    if (csubmitBtn.is(e.target) || (cpopupBody.is(e.target))) {
//       cpopup.removeClass('_active');
//    }
//    if (copenBtn.is(e.target)) {
//       cpopup.addClass('_active');
//    }
// })

// модал
let delcloseBtn = $('.close-btn__admin-delete-popup');
let delopenBtn = $('.admin-delete-popup-open-btn');
let delsubmitBtn = $('.submit-btn___admin-delete-popup');
let delpopupBody = $('.popup-body__admin-delete-popup');
let delpopup = $('.popup__admin-delete-popup');

$(document).on("click", function(e){
   console.log(e.target);
   if (delcloseBtn.is(e.target)) {
      delpopup.removeClass('_active');
   }
   if (delsubmitBtn.is(e.target) || (delpopupBody.is(e.target))) {
      delpopup.removeClass('_active');
   }
   if (dopenBtn.is(e.target)) {
      delpopup.addClass('_active');
   }
})