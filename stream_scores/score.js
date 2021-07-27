
var SS = document.getElementById('senkou_score');
var KS = document.getElementById('koukou_score');
var Sname = document.getElementById('senkou_name');
var Kname = document.getElementById('koukou_name');

const stateSS = { count: 0 };
const stateKS = { count: 0 };
SS.addEventListener('click', () => {
  const counter = document.getElementById('counter');
  SS.innerHTML = ++stateSS.count;
});


Sname.addEventListener('click', () => {
  const counter = document.getElementById('counter');
  SS.innerHTML = --stateSS.count;
});


KS.addEventListener('click', () => {
  const counter = document.getElementById('counter');
  KS.innerHTML = ++stateKS.count;
});

Kname.addEventListener('click', () => {
  const counter = document.getElementById('counter');
  KS.innerHTML = --stateKS.count;
});

