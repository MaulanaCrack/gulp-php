<?php

  $view = 'view-index';
  $title = 'View Index';

  if (isset($_GET['view'])) {
    $view = $_GET['view'];
  }

  switch ($view) {
    case 'dashboard':
      $title = 'Dashboard';
      break;
    default:
      break;
  }

?>


<html>
<head>
  <title><?php echo $view ?></title>

  <!-- build:css css/main.min.css -->
  <link rel="stylesheet" type="text/css" href="css/main.css">
  <!-- endbuild -->
  
</head>
<body class="<?php echo $body_class ?>">

  <?php include_once('views/'.$view.'.php') ?>

  <!-- build:js scripts/vendor.min.js -->
  <script type="text/javascript" src="bower_components/jquery/dist/jquery.js"></script>
  <!-- endbuild -->

  <!-- build:js scripts/plugin.min.js -->
  <script type="text/javascript" src="bower_components/bootstrap-sass/assets/javascripts/bootstrap/affix.js"></script>
  <script type="text/javascript" src="bower_components/bootstrap-sass/assets/javascripts/bootstrap/alert.js"></script>
  <script type="text/javascript" src="bower_components/bootstrap-sass/assets/javascripts/bootstrap/button.js"></script>
  <script type="text/javascript" src="bower_components/bootstrap-sass/assets/javascripts/bootstrap/carousel.js"></script>
  <script type="text/javascript" src="bower_components/bootstrap-sass/assets/javascripts/bootstrap/collapse.js"></script>
  <script type="text/javascript" src="bower_components/bootstrap-sass/assets/javascripts/bootstrap/dropdown.js"></script>
  <script type="text/javascript" src="bower_components/bootstrap-sass/assets/javascripts/bootstrap/modal.js"></script>
  <script type="text/javascript" src="bower_components/bootstrap-sass/assets/javascripts/bootstrap/scrollspy.js"></script>
  <script type="text/javascript" src="bower_components/bootstrap-sass/assets/javascripts/bootstrap/tab.js"></script>
  <script type="text/javascript" src="bower_components/bootstrap-sass/assets/javascripts/bootstrap/tooltip.js"></script>
  <script type="text/javascript" src="bower_components/bootstrap-sass/assets/javascripts/bootstrap/popover.js"></script>
  <script type="text/javascript" src="bower_components/bootstrap-sass/assets/javascripts/bootstrap/transition.js"></script>
  <!-- endbuild -->

  <!-- build:js scripts/main.min.js -->
  <script type="text/javascript" src="js/main.js"></script> 
  <!-- endbuild -->

</body>
</html>



