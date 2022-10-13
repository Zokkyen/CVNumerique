<?php 

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