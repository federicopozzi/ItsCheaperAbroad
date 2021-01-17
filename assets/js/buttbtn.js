let url = new URL(document.location);

let prev = url.searchParams.get('prev');

if (prev === 'Mex') {
  document.getElementById("buttbtn").innerHTML = `
          <a href="mexico.html">
            <span class="backButton">❮ MEXICO</span>
          </a>
                `
} else if (prev === 'Thai') {
  document.getElementById("buttbtn").innerHTML = `
          <a href="thailand.html">
            <span class="backButton">❮ THAILAND</span>
          </a>
                `
} else if (prev === 'Col') {
  document.getElementById("buttbtn").innerHTML = `
          <a href="colombia.html">
            <span class="backButton">❮ COLOMBIA</span>
          </a>
                `
} else if (prev === 'Turk') {
  document.getElementById("buttbtn").innerHTML = `
          <a href="turkey.html">
            <span class="backButton">❮ TURKEY</span>
          </a>
                `
} else if (prev === 'SKor') {
  document.getElementById("buttbtn").innerHTML = `
          <a href="southKorea.html">
            <span class="backButton">❮ SOUTH KOREA</span>
          </a>
                `
} else if (prev === 'RDom') {
  document.getElementById("buttbtn").innerHTML = `
          <a href="dominicanRep.html">
            <span class="backButton">❮ DOMINICAN REPUBLIC</span>
          </a>
                `
} else {
  document.getElementById("buttbtn").innerHTML = `
          <a href="butt.html">
            <span class="backButton">❮ BUTT</span>
          </a>
                `
}
