<?php 

    //------------- CSS SPECIFIC ---------//
    $cssSpecific = '
        <link rel="stylesheet" href="../public/assets/css/bootstrap/bootstrap.min.css" />
        <link rel="stylesheet" href="../public/assets/css/style.css" />
        <link rel="stylesheet" media="(min-width: 1000px)" href="../public/assets/css/style_desktop.css" />
    ';

    //------------- JS SPECIFIC ---------//
    $jsSpecific = '
        <script src="../public/assets/js/common.js"></script>
        <script src="../public/assets/js/home.js"></script>
    ';

    //------------- VIEWS ---------//
    include(__DIR__.'/../views/header.php');
    include(__DIR__.'/../views/navbar.php');
    include(__DIR__.'/../views/home.php');
    include(__DIR__.'/../views/footer.php');