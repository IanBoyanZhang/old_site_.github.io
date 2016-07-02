// Global namespace
var $ = jQuery;
var IMAGE_SRC = new Array();
var viewPortWidth = $(window).width();
var viewPortHeight = $(window).height();

$(document).ready(function(){

  // jQuery(window).resize(function(){
  //   resizeWin();
  // });
  opening_effect(start_app);
});

var opening_effect = function(next) {
  $('#logo_wrap').hide();
  $('#video_bg').bind('ended', function() {
    $("#video_wrap").fadeOut(4000, next);
  });
};

var start_slideshow = function(next) {

};

var start_app = function() {
  // calculate border

  var calc_moving_dist = function() {
    var etop = $('')
  };


  $('#logo_wrap').fadeIn('fast', function() {
    var etop = $(this).offset().top;
    var eleft = $(this).offset().left;
    var t_b = 150;
    var l_b = 150;
    var move_top = viewPortHeight - etop - t_b;
    var move_left = viewPortWidth - eleft - l_b;

    $(this).animate({
      top: '+=' + move_top + 'px',
      left: '+=' + move_left + 'px'
    }, 1000);
  });
};

// var scene = new THREE.Scene();

// var camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight, 1,10000);

// var renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// var geometry = new THREE.BoxGeometry(700, 700, 700, 10, 10, 10);
// var material = new THREE.MeshBasicMaterial({color: 0xfffff, wireframe: true});

// var cube = new THREE.Mesh(geometry, material);
// scene.add(cube);

// camera.position.z = 1000;

// function render() {
//    requestAnimationFrame(render);
//    renderer.render(scene, camera);
// }

// render();