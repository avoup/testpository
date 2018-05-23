<?php

error_reporting(E_ALL);
session_start();

    $view = 'views/';
    $view .= isset($_REQUEST['view']) ? $_REQUEST['view'] : 'index';
    $view .= '.html';
    include($view);

?>
