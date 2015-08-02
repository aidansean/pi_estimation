<?php
$title = '&pi; estimation' ;
$stylesheets = array('style.css') ;
$js_scripts  = array('functions.js') ;
include($_SERVER['FILE_PREFIX'] . '/_core/preamble.php') ;
?>
  <p>This page will estimate &pi; using a Monte Carlo method.  It was written from scratch in 1020 seconds.</p>
  <div class="right">
    <h3>Roll those dice!</h3>
    <div class="blurbn">
      <canvas id="canvas_pi" width="750" height="750"></canvas>
      <p>This script tries to esimate &pi;.  <span id="span_pi"></span></p>
    </div>
  </div>
    
<?php foot() ; ?>