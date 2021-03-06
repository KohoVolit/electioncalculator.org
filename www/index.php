<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Voting advice applications.">
    <meta name="keywords" content="voting advice application, inventory of votes">
    <meta name="author" content="KohoVolit.eu">
    <link type="image/x-icon" href="image/favicon.ico" rel="shortcut icon">

    <meta property="og:image" content="http://volebnikalkulacka.cz/image/logo.jpg"/>
	<meta property="og:title" content="Election calculator"/>
	<meta property="og:url" content="http://electioncalculator.cz"/>
	<meta property="og:site_name" content="Election calculator"/>
	<meta property="og:type" content="website"/>

    <title>Election calculator 2019</title>

    <!-- Bootstrap core CSS -->
    <link href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css" rel="stylesheet">
    <link href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css" rel="stylesheet">

    <!-- Add custom CSS here -->
    <link href="css/stylish-portfolio.min.css" rel="stylesheet">
	<link type="text/css" rel="stylesheet" href="http://fonts.googleapis.com/css?family=Open+Sans:400,700,800|Roboto+Slab:400,700&subset=latin,latin-ext">
	<link rel="stylesheet" href="css/vaa2015.css">
	<style>
	body {
      padding-top: 0;
    }
	@media (min-width: 666px) {
  .header {
        background: url("inventory-of-votes-european-parliament-2014-2015/image/bg.jpg") no-repeat fixed center center / cover rgba(0, 0, 0, 0);
      }
    }
    @media (min-width: 750px) {
      h1 {background: none repeat scroll 0 0 rgba(0, 0, 0, 0.2);}
    }
    h1 { color: #FFFFFF; display: inline; line-height: 60px; font-family: 'Roboto Slab',serif; padding: 10px 20px; vertical-align: baseline; width: auto; }
    .lead { font-size: 16px; font-weight: 200; line-height: 1.4; margin-bottom: 50px; margin-bottom: 20px; font-size: 21px; color: #fff;}
    .nav a {color: #428BCA}
    </style>

</head>
<body>

    <!-- Side Menu -->
    <a id="menu-toggle" href="#" class="btn btn-primary btn-lg toggle"><i class="fa fa-bars"></i></a>
    <div id="sidebar-wrapper">
        <ul class="sidebar-nav">
            <a id="menu-close" href="#" class="btn btn-default btn-lg pull-right toggle"><i class="fa fa-times"></i></a>
            <li class="sidebar-brand"><a href="http://kohovolit.eu/">KohoVolit.eu</a>
            </li>
            <li><a href="http://volebnikalkulacka.cz/info/">About project</a>
            </li>
            <li><a href="http://volebnikalkulacka.cz/embed/">Embed calculator</a>
            </li>
            <li><a href="http://volebnikalkulacka.cz/archive/">Archive of calculators</a>
            </li>
            <li><a href="http://kohovolit.eu/cs/kontakt/">Contact</a>
            </li>
        </ul>
    </div>
    <!-- /Side Menu -->

    <!-- Full Page Image Header Area -->
        <div id="top" class="header">

		<div class="vert-text">

			<h1>Election Calculator</h1>
			<div class="row">
                <div class="col-md-8 col-md-offset-2 text-center" style="padding-top:2em;">
                    <p class="lead">
                        Inventory of votesfor <strong>European parliament 2014 - 2019</strong>. Compare your opinions with current members of EP on 35 real votes from the parliament.
                    </p>
                    <p class="lead">
                            <a href="en/inventory-of-votes-european-parliament-2014-2019/?hr=<?php if( isset($_SERVER['HTTP_REFERER'])) { $hr=$_SERVER['HTTP_REFERER']; if ($hr!="") {echo base64_encode($hr);} } ?><?php if( isset($_GET['ref'])) { $ref=$_GET['ref']; if ($ref!="") {echo '&ref=' . $ref;} } ?>" class="btn btn-lg btn-success" style="white-space: normal;" >
                                    LAUNCH INVENTORY OF VOTES 2014-2019
                            </a>

                    </p>
                    <!-- <p class="lead">
                        Election calculator for <strong>Czech elections 2017</strong> compares your stands with candidating parties. Online test takes about 5 minutes.
                        <br />
                         <a href="./en/czech-election-2017" class="btn btn-lg btn-success btn-block" style="white-space: normal;" >
                        LAUNCH ELECTION CALCULATOR <strong>IN ENGLISH</strong></a>
                    </p> -->
                    <!-- <p class="lead">
			        Inventory of votes from European Parliament 2014-2015 will show you, which MEPs are <em>really</em> representing you. Online test takes about 5 minutes.
                       <div class="col-md-8 col-md-offset-2">
				        <a href="./inventory-of-votes-european-parliament-2014-2015/select/?lang=en" class="btn btn-lg btn-success btn-block" style="white-space: normal;" ><img src="http://www.europarl.europa.eu/ep_framework/img/flag/flag_icon_gb.gif"> <img src="http://www.europarl.europa.eu/ep_framework/img/flag/flag_icon_ie.gif"> <img src="http://www.europarl.europa.eu/ep_framework/img/flag/flag_icon_mt.gif"> LAUNCH INVENTORY OF VOTES IN <strong>ENGLISH</strong></a>
				        <a href="./inventory-of-votes-european-parliament-2014-2015/select/?lang=pl" class="btn btn-lg btn-success btn-block" style="white-space: normal;" ><img src="http://www.europarl.europa.eu/ep_framework/img/flag/flag_icon_pl.gif"> ZOBACZ KLUCZOWE GŁOSOWANIA W PE PO <strong>POLSKU</strong></a>
				        <a href="./inventory-of-votes-european-parliament-2014-2015/select/?lang=cs" class="btn btn-lg btn-success btn-block" style="white-space: normal;" ><img src="http://www.europarl.europa.eu/ep_framework/img/flag/flag_icon_cz.gif"> <img src="http://www.europarl.europa.eu/ep_framework/img/flag/flag_icon_sk.gif"> SPUSTIT INVENTURU HLASOVÁNÍ <strong>ČESKY</strong></a>
				       </div> -->
				       <div class="col-md-2"></div>
				   </div>
				   <!-- <div class="col-md-8 col-md-offset-2 text-center" style="padding-top:2em;">
				   <p class="lead">
			        Inventory of votes from the Czech parliament 2015 will show you, which MPs are <em>really</em> representing you.
                       <div class="col-md-8 col-md-offset-2">
				        <a href="./inventory-of-votes-czech-parliament-2015/?lang=en" class="btn btn-lg btn-success btn-block" style="white-space: normal;" ><img src="http://www.europarl.europa.eu/ep_framework/img/flag/flag_icon_cz.gif"> LAUNCH INVENTORY OF VOTES IN <strong>ENGLISH</strong></a>
				       </div>
			    </div> -->
			</div>


				   <p>

				  





    <!-- Footer -->
    <footer>
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-md-offset-3 text-center">

                    <a href="www.kohovolit.eu" title="KohoVolit.eu"><img src="image/logo.png" alt="logo kohovolit.eu" /></a>
                    <!--<p><a href="http://votematch.eu" id="footer-votematch"><img src="image/eu2014/votematch.png" title="VoteMatch.eu" alt="VoteMatch.eu"/></a></p>-->
					<p class="lead black" style="color:#333333"><a href="http://kohovolit.eu">KohoVolit.eu</a>, your voting advice application maker since 2006.

                    <hr>
					<ul class="nav nav-pills" style="color: #428BCA;">
  <li><a href="http://volebnikalkulacka.cz/info/">About project</a></li>
  <li><a href="http://volebnikalkulacka.cz/embed/">Embed calculator</a></li>
  <li><a href="http://volebnikalkulacka.cz/archive/">Archive</a></li>
</ul>
					<p class="black">Creative Commons BY 4.0 | <a href="http://kohovolit.eu">KohoVolit.eu</a> 2015</p>
                </div>
            </div>
        		</div>
    </footer>
    <!-- /Footer -->

    <!-- JavaScript -->
    <script src="https://code.jquery.com/jquery-1.11.0.min.js"></script>
    <script src="//netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js"></script>

    <!-- Custom JavaScript for the Side Menu and Smooth Scrolling -->
    <script>
    $("#menu-close").click(function(e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
    });
    </script>
    <script>
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
    });
    </script>
    <script>
    $(function() {
        $('a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });
    </script>
    <!-- google analytics -->
    <script>
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

      ga('create', 'UA-8592359-27', 'auto');
      ga('send', 'pageview');

    </script>
    <!-- /google analytics --><!-- Yandex.Metrika counter -->
    <script type="text/javascript">
        (function (d, w, c) {
            (w[c] = w[c] || []).push(function() {
                try {
                    w.yaCounter32980694 = new Ya.Metrika({
                        id:32980694,
                        clickmap:true,
                        trackLinks:true,
                        accurateTrackBounce:true,
                        webvisor:true,
                        trackHash:true
                    });
                } catch(e) { }
            });

            var n = d.getElementsByTagName("script")[0],
                s = d.createElement("script"),
                f = function () { n.parentNode.insertBefore(s, n); };
            s.type = "text/javascript";
            s.async = true;
            s.src = "https://mc.yandex.ru/metrika/watch.js";

            if (w.opera == "[object Opera]") {
                d.addEventListener("DOMContentLoaded", f, false);
            } else { f(); }
        })(document, window, "yandex_metrika_callbacks");
    </script>
    <noscript><div><img src="https://mc.yandex.ru/watch/32980694" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
    <!-- /Yandex.Metrika counter -->
</body>

</html>
