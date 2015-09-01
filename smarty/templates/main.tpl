<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>VAA</title>
	<link rel="shortcut icon" href="favicon.ico">
    <!--<link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Open+Sans:300,400,700">-->
    <link rel="stylesheet" href="../dev/jquery/fonts.htm">
	<link rel="stylesheet" href="../dev/jquery/jquery.mobile-1.4.0.min.css">
	<script src="../dev/jquery/jquery-1.10.2.min.js"></script>
	<script src="../dev/jquery/jquery.mobile-1.4.0.min.js"></script>
	{block name=head}{/block}
</head>
<body>

<div data-role="page">
  <div data-role="header">
    {block name=header}{/block}
  </div> <!-- /header -->
  <div data-role="content">
    {block name=content}{/block}
  </div> <!-- /content -->
  <div data-role="footer">
    {block name=footer}{/block}
  </div> <!-- /footer -->
</div> <!-- /page -->
</body>
</html>
