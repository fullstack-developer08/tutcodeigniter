<!DOCTYPE HTML>
<html>
   <head>
      <title><?php echo $title;?></title>
      <meta name="google-site-verification" content="AIzaSyB5Zupfv1GbvriEdE-bCFk-EhBNty4hc_Y" />
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
      <meta name="robots" content="index, follow">
      <meta name="keywords" content="<?php echo $keywords ?>" />
      <meta name="description"  content="<?php echo $description ?>" />
      <link href='<?php echo base_url();?>assets/css/bootstrap.min.css'' rel='stylesheet' type='text/css' />
      <!-- Custom Theme files -->
      <link href="<?php echo base_url();?>assets/css/style.css" rel='stylesheet' type='text/css' />
      <script src="<?php echo base_url();?>assets/js/jquery-1.11.1.min.js"></script>
      <script src="<?php echo base_url();?>assets/js/bootstrap.min.js"></script>
      <!-- start menu -->
      <link href="<?php echo base_url();?>assets/css/megamenu.css" rel="stylesheet" type="text/css" media="all" />
      <script type="text/javascript" src="<?php echo base_url();?>assets/js/megamenu.js"></script>
      <script>$(document).ready(function(){$(".megamenu").megamenu();});</script>
      <script src="<?php echo base_url();?>assets/js/menu_jquery.js"></script>
      <!--web-fonts-->
      <link href='//fonts.googleapis.com/css?family=Open+Sans:400,300,400italic,300italic,600,700' rel='stylesheet' type='text/css'>
      <link href='//fonts.googleapis.com/css?family=Roboto+Slab:300,400,700' rel='stylesheet' type='text/css'>
      <!--//web-fonts-->
      <script src="<?php echo base_url();?>assets/js/scripts.js" type="text/javascript"></script>
      <script type="text/javascript">
         jQuery(document).ready(function($) {
         	$(".scroll").click(function(event){		
         		event.preventDefault();
         		$('html,body').animate({scrollTop:$(this.hash).offset().top},900);
         	});
         });
      </script>
      <script type="text/javascript" src="<?php echo base_url();?>assets/js/prettify.js"></script>
      <script type="text/javascript" src="<?php echo base_url();?>assets/js/run_prettify.js"></script>
   </head>
   <body>
      <!-- Google Tag Manager -->
      <noscript><iframe src="//www.googletagmanager.com/ns.html?id=GTM-TZXQ7F"
         height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
      <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
         new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
         j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
         '//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
         })(window,document,'script','dataLayer','GTM-TZXQ7F');
      </script>
      <!-- End Google Tag Manager -->
        <nav class="navbar navbar-light bg-primary">
            <a class="navbar-brand" href="<?php echo base_url();?>">
                Tutorials
            </a>
        </nav>
      <div class="header_bg">
      <div class="container-fluid">
         <div class="header">
            <div class="head-t">
               <!--  <div class="logo" >
                  <a href="index.php"><h1>Way2Programming<span>.com</span></h1> </a>
                  </div> -->
               <div class="header_right">
                  <div class="cart box_1">
                     <div class="clearfix"> </div>
                  </div>
               </div>
               <div class="clearfix"></div>
            </div>
            <!--start-header-menu-->
            <ul class="megamenu skyblue">
               <li class="grid"><a class="color1" href="<?php echo base_url();?>">Home</a></li>
            </ul>
            <br />
            <div class="container-fluid">
               <div class="col-md-9">
                  <br/><br/>
                  <h1><?php echo $heading?></h1>
                  <hr />