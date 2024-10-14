function cek(){

    if(form.alassjg.value == "" || form.tinggiijg.value == ""){
        alert("Maaf isi data terlebih dahulu")
    
    exit;
}
}

function kali() {
  cek();
  a=eval(form.alassjg.value);
  b=eval(form.tinggiijg.value);
  c=a*b;
  form.totalluas.value = c;
}
