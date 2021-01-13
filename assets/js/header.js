document.getElementById("header").innerHTML = `
<div class="sticky-top">
  <header class="">
  <nav class=" d-flex align-items-center justify-content-between">


    <div>
      <span id="sidebarCollapse" class="marginNavSx"><i class="fas fa-bars"></i></span>
    </div>

    <div><a class="nav-item nav-link" href="../index.html"><img src="../assets/svg/logo_Header.svg" class="img-fluid logo" alt="Responsive image"></a></div>
    <div>
      <span id="" class="marginNavDx"></span>
    </div>
  </nav>
  </header>



</div>

<!-- <div id="sideBar"></div> -->
<div>
  <!-- Sidebar  -->
  <nav id="sidebar">
    <div id="dismiss" class="d-flex align-items-center justify-content-center">
      <i class="fas fa-arrow-left"></i>
    </div>

    <div class="sidebar-header">
      <!-- <h3>MENU</h3> -->
    </div>

    <ul class="list-unstyled components">
      <!-- <p>Dummy Heading</p> -->
      <li class="active">
        <!-- <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false">Home</a> -->
        <!-- <ul class="collapse list-unstyled" id="homeSubmenu">
                      <li>
                          <a href="#">Home 1</a>
                      </li>
                      <li>
                          <a href="#">Home 2</a>
                      </li>
                      <li>
                          <a href="#">Home 3</a>
                      </li>
                  </ul> -->
      </li>
      <li>

        <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false"><span class="secCat">BODY</span> <span uk-icon="triangle-down"></span></a>
        <ul class="collapse list-unstyled" id="pageSubmenu">
          <li>
            <a href="./belly.html">Belly</a>
          </li>
          <li>
            <a href="./breast.html">Breast</a>
          </li>
          <li>
            <a href="./butt.html">Butt</a>
          </li>
          <li>
            <a href="./eye.html">Eye</a>
          </li>
          <li>
            <a href="./face.html">Face</a>
          </li>
          <li>
            <a href="./hair.html">Hair</a>
          </li>
          <li>
            <a href="./nose.html">Nose</a>
          </li>
          <li>
            <a href="./teeth.html">Teeth</a>
          </li>
        </ul>

      </li>

      <li>
        <a href="#pageSubmenu1" data-toggle="collapse" aria-expanded="false"><span class="secCat">COUNTRY</span> <span uk-icon="triangle-down"></span></a>
        <ul class="collapse list-unstyled" id="pageSubmenu1">
        <li>
          <a href="./colombia.html">Colombia</a>
        </li>
        <li>
          <a href="./dominicanRep.html">Dominican Republic</a>
        </li>
        <li>
          <a href="./mexico.html">Mexico</a>
        </li>
        <li>
          <a href="./southKorea.html">South Korea</a>
        </li>
        <li>
          <a href="./thailand.html">Thailand</a>
        </li>
        <li>
          <a href="./turkey.html">Turkey</a>
        </li>
        </ul>
        <a href="./about.html"><span class="secCat">ABOUT</span></a>
        <a href="#"><span class="secCat">INFO</span></a>
      </li>
    </ul>
    <!-- <ul class="list-unstyled CTAs">
              <li>
                  <a href="https://bootstrapious.com/tutorial/files/sidebar.zip" class="download">Download source</a>
              </li>
              <li>
                  <a href="https://bootstrapious.com/p/bootstrap-sidebar" class="article">Back to article</a>
              </li>
          </ul> -->
  </nav>
</div>
      `
