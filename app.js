let requestURL = 'http://cbu.uz/oz/arkhiv-kursov-valyut/json/';
let request = new XMLHttpRequest();
let selec2 = document.createElement('select');
let ides = [];
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
  globalThis.curse = request.response;
  console.log(curse);
  for (let i = 0; i <= 75; i++) {
    let crOpt = document.createElement("option");
    crOpt.value = globalThis.curse[i].Ccy;
    crOpt.innerText = globalThis.curse[i].CcyNm_UZ;
    selec2.append(crOpt);
    document.body.append(selec2);
  }

}
function showUp(){
  document.getElementById('here').innerText = globalThis.curse[selec2.selectedIndex].Rate + " so'm";
}