// const x = 10
// console.log(x)



//Luas
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



// var counter = 1;

// // console.log(counter)

// for( i = 5 ; i > 1; i--) {
//   console.log(i);
// }
    
   


// while(counter < 10 ) {
//   console.log(counter);
//   counter++ ;
// }

// do {
//   console.log(counter)
//   counter++;
// }while(counter < 10)





var x = 1


// bawah gagal
// while( x <= 5){
  
// //   console.log(x)
// //   x++;
//   for(y = 1; y <= 5; y++ ) { while ( x <= 5 ){
//     console.log(x)
//     x++
//   }
//     console.log(y)
    
//     }
//   // }

// bawah berhasil looping
while ( x <= 5 ) { for ( y = 1; y <= 5; y++) { console.log(y) }
console.log(x);
x++;



}

let bil = [0]
for(let i= 0; i < 10; i++) {
  bil[i] = (i+1)*(i+1);
  console.log( bil[i])

}


// var nilai = [3][5];
// for(var i = 0; 0 < 3; i++) {
//   for(var j = 0; 0 < 5; j++);
//   console.log("%x", [i][j])
//   console.log("\n");
// }