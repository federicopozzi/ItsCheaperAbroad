let prefi = document.location.hostname === "federicopozzi.github.io" ? "/phase3/" : "/phase3/";

if (document.location.pathname === prefi + "home.html" || document.location.pathname === prefi + "index.html") {
  document.getElementById("footer").innerHTML = `

<section class="websiteMargin pt-3 pb-3">
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

      `
} else {
  document.getElementById("footer").innerHTML = `

<section class="websiteMargin pt-3 pb-3">
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

      `

}
