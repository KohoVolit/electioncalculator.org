<?php
/**
FRONT PAGE
*/

session_start();

// load settings
$settings = json_decode(file_get_contents('settings.json'));

//get language
$lang = lang($settings);




/**
* get language
*/
function lang($settings) {
    if (isset($_GET['lang']) and (in_array($_GET['lang'],$settings->languages))) {
        $_SESSION['lang'] = $_GET['lang'];
        return $_GET['lang'];
    }
    else {
        if (isset($_SESSION['lang']))
            return $_SESSION['lang'];
        else    //default language
            return $settings->defaults->language;
    }
}

/**
* reads csv file into associative array
* code, text => t[$code] = $text;
*/
function csv2array($handle) {
    $array = $fields = [];
    if ($handle) {
        while (($row = fgetcsv($handle, 4096)) !== false) {
            if (empty($fields)) {
                $fields = $row;
                continue;
            }
            foreach ($row as $k=>$value) {
                $array[$row[0]] = $value;
            }
        }
        if (!feof($handle)) {
            /*echo "Error: unexpected fgets() fail\n";*/
        }
    } 
    return $array;  
}
