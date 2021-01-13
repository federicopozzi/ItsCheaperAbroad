document.getElementById("sideBar").innerHTML = `
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
      <a class="marginMenu" href="#pageSubmenu" data-toggle="collapse" aria-expanded="false"><span class="secCat">BODY</span> <i class="fas fa-chevron-down"></i></a>
      <ul class="collapse list-unstyled" id="pageSubmenu">
        <li>
          <a href="./pages/belly.html">Belly</a>
        </li>
        <li>
          <a href="./breast.html">Breast</a>
        </li>
        <li>
          <a href="./pages/butt.html">Butt</a>
        </li>
        <li>
          <a href="./pages/eye.html">Eye</a>
        </li>
        <li>
          <a href="./pages/face.html">Face</a>
        </li>
        <li>
          <a href="./pages/hair.html">Hair</a>
        </li>
        <li>
          <a href="./pages/nose.html">Nose</a>
        </li>
        <li>
          <a href="./pages/teeth.html">Teeth</a>
        </li>
      </ul>

    </li>

    <li>
      <a class="marginMenu" href="#pageSubmenu1" data-toggle="collapse" aria-expanded="false"><span class="secCat">COUNTRY</span> <i class="fas fa-chevron-down"></i></a>
      <ul class="collapse list-unstyled" id="pageSubmenu1">
      <li>
        <a href="./pages/colombia.html">Colombia</a>
      </li>
      <li>
        <a href="./pages/dominicanRep.html">Dominican Republic</a>
      </li>
      <li>
        <a href="./pages/mexico.html">Mexico</a>
      </li>
      <li>
        <a href="./pages/southKorea.html">South Korea</a>
      </li>
      <li>
        <a href="./pages/thailand.html">Thailand</a>
      </li>
      <li>
        <a href="./pages/turkey.html">Turkey</a>
      </li>
      </ul>
      <a class="marginMenu" href="./pages/about.html"><span class="secCat">ABOUT</span></a>
      <a class="marginMenu" href="./index.html"><span class="secCat">INTRO</span></a>
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
      `
