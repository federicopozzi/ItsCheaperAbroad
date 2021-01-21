let prefi = document.location.hostname === "federicopozzi.github.io" ? "/phase3/" : "/phase3/";

if (document.location.pathname === prefi + "home.html" || document.location.pathname === prefi + "index.html") {
  document.getElementById("footer").innerHTML = `
<div class="displayDesk">
<section class="websiteMargin pt-5 pb-5">
<div class="row">
     <div class="col-lg-3 col-2">
     <img src="./assets/svg/density_white.svg" class="img-fluid" alt="Responsive image" width="50">
</div>
<div class="col-lg-4 col-3">
     <img src="./assets/svg/polimi_white.svg" class="img-fluid" alt="Responsive image" width="200">
</div>
<div class="col-lg-5 col-7">
     <span class="textFoot">© All pictures shown at Itscheaperabroad belong to Instagram.
Instagram is a registered trademark and it’s part of The Facebook Company.
Images are not modified nor altered. You may download anything on these pages for your own personal, non-commercial use.</span>
</div>
</div>
</section>
</div>

<div class="displayMobile">
<section class="websiteMargin pt-5 pb-5 pr-2">
<div class="row pl-4 pt-4 pb-2 pr-3">
     <div class="col-5">
     <div class="row">
     <div class="col-12 d-flex justify-content-center">
     <img src="./assets/svg/density_white.svg" class="img-fluid" alt="Responsive image" width="50">
     
</div>
<div class="col-12 pt-3 d-flex justify-content-left">
   
   <img src="./assets/svg/polimi_white.svg" class="img-fluid" alt="Responsive image" width="120">
</div>
</div>
     
</div>
<div class="col-lg-5 col-7">
     <span class="textFoot">© All pictures shown at Itscheaperabroad belong to Instagram.
Instagram is a registered trademark and it’s part of The Facebook Company.
Images are not modified nor altered. You may download anything on these pages for your own personal, non-commercial use.</span>
</div>
</div>
</section>
</div>


      `
} else {
  document.getElementById("footer").innerHTML = `

<div class="displayDesk">
<section class="websiteMargin pt-5 pb-5">
<div class="row">
     <div class="col-lg-3 col-2">
     <img src="../assets/svg/density_white.svg" class="img-fluid" alt="Responsive image" width="50">
</div>
<div class="col-lg-4 col-3">
     <img src="../assets/svg/polimi_white.svg" class="img-fluid" alt="Responsive image" width="200">
</div>
<div class="col-lg-5 col-7">
     <span class="textFoot">© All pictures shown at Itscheaperabroad belong to Instagram.
Instagram is a registered trademark and it’s part of The Facebook Company.
Images are not modified nor altered. You may download anything on these pages for your own personal, non-commercial use.</span>
</div>
</div>
</section>
</div>

<div class="displayMobile">
<section class="websiteMargin pt-5 pb-5 pr-2">
<div class="row pl-4 pt-4 pb-2 pr-3">
     <div class="col-5">
     <div class="row">
     <div class="col-12 d-flex justify-content-center">
     <img src="../assets/svg/density_white.svg" class="img-fluid" alt="Responsive image" width="50">
     
</div>
<div class="col-12 pt-3 d-flex justify-content-left">
   
   <img src="../assets/svg/polimi_white.svg" class="img-fluid" alt="Responsive image" width="120">
</div>
</div>
     
</div>
<div class="col-lg-5 col-7">
     <span class="textFoot">© All pictures shown at Itscheaperabroad belong to Instagram.
Instagram is a registered trademark and it’s part of The Facebook Company.
Images are not modified nor altered. You may download anything on these pages for your own personal, non-commercial use.</span>
</div>
</div>
</section>
</div>


      `

}
