<?php
/**
* VAA
* select member state
*/

session_start();

$relative_path = "../";

include("../common.php");

$countries = json_decode(file_get_contents("member_states.json"));

$countries_ar = [];
foreach($countries as $country) {
    $countries_ar[$country->name] = $country;
}
ksort($countries_ar);

$smarty->assign('t', $t);
$smarty->assign('countries', $countries_ar);
$smarty->display('select.tpl');

?>
