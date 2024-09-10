const x = 10
console.log(x)


// var alass = document.getElementById("alass");
// var tinggii = document.getElementById("tinggii");


function cek() {
  if(form.alass.value == "" || form.tinggii.value == "") {
    alert("Maaf isi data terlebih dahulu")
    exit;
  }
}



function kalibagi() {
  cek();
  a=eval(form.alass.value);
  b=eval(form.tinggii.value);
  c=a*b/2;
// console.log('hasil')
  form.totalluas.value = c;
  


}


//keliling 
function kek() {
  if(form2.sisi1.value == "" || form2.sisi2.value == "" || form2.sisi3.value == "")  {
    alert("Maaf isi data terlebih dahulu");
    exit;
  }
}



function tambah() {
  kek();
  d=eval(form2.sisi1.value);
  e=eval(form2.sisi2.value);
  f=eval(form2.sisi3.value);
  g= d+e+f;
// console.log('hasil')
  form2.totalkeliling.value = g;
  


}



//let hasil = perseInt(alas) + perseInt(tinggi)


//document.write('Hasilnya adalah' + hasi)



// if(jajargenjang.checked)



var counter = 0;

console.log(counter)

while(counter < 10 ) {
    console.log(counter);
    counter++;
}

