$(function () {
  'use strict';//表示强规则
  var console = window.console || { log: function () {} };
  var $image = $('#image');
  var options = {
        autoCrop: false, //关闭自动显示裁剪框
      };


  // Cropper
  $image.on({
    ready: function (e) {
      console.log(e.type);
    },
    cropstart: function (e) {
      console.log(e.type, e.action);
    },
    cropmove: function (e) {
      console.log(e.type, e.action);
    },
    cropend: function (e) {
      console.log(e.type, e.action);
    },
    crop: function (e) {
      console.log(e.type, e.x, e.y, e.width, e.height, e.rotate, e.scaleX, e.scaleY);
    },
    zoom: function (e) {
      console.log(e.type, e.ratio);
    }
  }).cropper(options);


  $("#createImage").on("click", function () {
    console.log("开始转换")
    console.log($('#image').cropper('getCroppedCanvas'));;
    var cas=$('#image').cropper('getCroppedCanvas');
    var base64url=cas.toDataURL('image/jpeg', 0.8);
    console.log(base64url)
    cas.toBlob(function (e) {
      console.log(e);  //生成Blob的图片格式
    })
    console.log(base64url); //生成base64图片的格式
  });




});
