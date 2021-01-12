
let url = new URL(document.location);

let prev = url.searchParams.get('prev');

if (prev === 'Mex') {
  document.getElementById("bellybtn").innerHTML = `
  <a href="mexico.html">
    <span class="backButton">❮ MEXICO</span>
  </a>
        `
}

else if (prev === 'Thai') {
  document.getElementById("bellybtn").innerHTML = `
  <a href="thailand.html">
    <span class="backButton">❮ THAILAND</span>
  </a>
        `
}

else if (prev === 'Col') {
  document.getElementById("bellybtn").innerHTML = `
  <a href="colombia.html">
    <span class="backButton">❮ COLOMBIA</span>
  </a>
        `
}

else {
  document.getElementById("bellybtn").innerHTML = `
  <a href="belly.html">
    <span class="backButton">❮ BELLY</span>
  </a>
        `
}
