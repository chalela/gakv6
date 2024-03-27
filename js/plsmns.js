let plsmns = () => {
    let number = document.getElementById('answer').innerHTML;
    console.log(number);

  if(number>0){
    document.getElementById('answer').innerHTML= '-'+number;
  }
else{
    document.getElementById('answer').innerHTML=number;
    let pirvelisymbolo=number.slice(0,1);
    let darcenili=number.slice(1,number.length);
    console.log(darcenili);
    document.getElementById('answer').innerHTML=darcenili;
}
}