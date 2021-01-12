let url = new URL(document.location);

let prev = url.searchParams.get('prev');

if (prev === 'Mex') {
  document.getElementById("eyebtn").innerHTML = `
          <a href="mexico.html">
            <span class="backButton">❮ MEXICO</span>
          </a>
                `
} else if (prev === 'Thai') {
  document.getElementById("eyebtn").innerHTML = `
          <a href="thailand.html">
            <span class="backButton">❮ THAILAND</span>
          </a>
                `
} else if (prev === 'Col') {
  document.getElementById("eyebtn").innerHTML = `
          <a href="colombia.html">
            <span class="backButton">❮ COLOMBIA</span>
          </a>
                `
} else if (prev === 'Turk') {
  document.getElementById("eyebtn").innerHTML = `
          <a href="turkey.html">
            <span class="backButton">❮ TURKEY</span>
          </a>
                `
} else if (prev === 'SKor') {
  document.getElementById("eyebtn").innerHTML = `
          <a href="southKorea.html">
            <span class="backButton">❮ SOUTH KOREA</span>
          </a>
                `
} else if (prev === 'RDom') {
  document.getElementById("eyebtn").innerHTML = `
          <a href="dominicanRep.html">
            <span class="backButton">❮ DOMINICAN REPUBLIC</span>
          </a>
                `
} else {
  document.getElementById("eyebtn").innerHTML = `
          <a href="eye.html">
            <span class="backButton">❮ EYE</span>
          </a>
                `
}
