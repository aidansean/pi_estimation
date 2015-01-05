var cw = 750 ;
var ch = 750 ;
var  r = Math.min(cw,ch)*0.5 ;
var n_trial = 0 ;
var n_success = 0 ;
var n_fail = 0 ;
var canvas = null ;
var context = null ;
var counter = 0 ;
var delay = 5 ;
var stop = 1000 ;
function start(){
  canvas = document.getElementById('canvas_pi') ;
  context = canvas.getContext('2d') ;
  context.fillStyle = 'white' ;
  context.fillRect(0,0,cw,ch) ;
  context.beginPath() ;
  context.arc(r, r, r, 0, Math.PI*2, true) ;
  context.stroke() ;
  window.setTimeout(throw_MC, delay) ;
}
function throw_MC(){
  counter++ ;
  if(counter>stop){
    var pi = 4*n_success/n_trial ;
    document.getElementById('span_pi').innerHTML = '&pi; is approximately ' + pi + ' and this estimate was obtained using ' + stop + ' trials'  ;
    return ;
  }
  var x = -1 + 2*Math.random() ;
  var y = -1 + 2*Math.random() ;
  var u = r + 0.5*cw*x ;
  var v = r + 0.5*cw*y ;
  n_trial++ ;
  if(Math.pow(x,2) + Math.pow(y,2)<1){
    n_success++ ;
    context.strokeStyle = 'green' ;
  }
  else{
    n_fail++ ;
    context.strokeStyle = 'red' ;
  }
  var d = 10 ;
  context.beginPath() ;
  context.moveTo(u-d,v-d) ;
  context.lineTo(u+d,v+d) ;
  context.moveTo(u-d,v+d) ;
  context.lineTo(u+d,v-d) ;
  context.stroke() ;
  window.setTimeout(throw_MC, delay) ;
}