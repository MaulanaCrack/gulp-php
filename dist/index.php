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

  <link rel="stylesheet" href="css/main.min.css">
  
</head>
<body class="<?php echo $body_class ?>">

  <?php include_once('views/'.$view.'.php') ?>

  <script src="scripts/vendor.min.js"></script>

  <script src="scripts/plugin.min.js"></script>

  <script src="scripts/main.min.js"></script>

</body>
</html>



