document.getElementById("header").innerHTML = `
<div class="sticky-top">
  <header class="">
    <nav class="navbar d-flex justify-content-between pl-5">


<span id="sidebarCollapse"><i class="fas fa-bars"></i></span>

      <div><a class="nav-item nav-link" href="../index.html"><img src="../assets/svg/logo_Header.svg" class="img-fluid" alt="Responsive image" width="400"></a></div>
<div><a class="nav-item nav-link" href="./pages/about.html"></a></div>

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

        <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false">BODY <span uk-icon="triangle-down"></span></a>
        <ul class="collapse list-unstyled" id="pageSubmenu">
          <li>
            <a href="#">Body 1</a>
          </li>
          <li>
            <a href="#">Body 2</a>
          </li>
          <li>
            <a href="#">Body 3</a>
          </li>
        </ul>

      </li>

      <li>
        <a href="#pageSubmenu1" data-toggle="collapse" aria-expanded="false">COUNTRY <span uk-icon="triangle-down"></span></a>
        <ul class="collapse list-unstyled" id="pageSubmenu1">
          <li>
            <a href="#">Country 1</a>
          </li>
          <li>
            <a href="#">Country 2</a>
          </li>
          <li>
            <a href="#">Country 3</a>
          </li>
        </ul>
        <a href="./about.html">ABOUT</a>
        <a href="#">INFO</a>
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
