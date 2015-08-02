<?php
include_once($_SERVER['FILE_PREFIX']."/project_list/project_object.php") ;
$github_uri   = "https://github.com/aidansean/pi_estimation" ;
$blogpost_uri = "http://aidansean.com/projects/?tag=pi_estimation" ;
$project = new project_object("pi_estimation", "pi estimation", "https://github.com/aidansean/pi_estimation", "http://aidansean.com/projects/?tag=pi_estimation", "pi_estimation/images/project.jpg", "pi_estimation/images/project_bw.jpg", "This project was put together quickly while waiting for a physics job to finish.  It was an exercise to see how quickly I could make a useful page with my current setup on my website.  Including time to research, write, upload, and test the page it took around 20 minutes.", "Maths", "canvas,HTML,JavaScript") ;
?>