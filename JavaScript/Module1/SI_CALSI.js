

document.getElementById('form-detail').addEventListener('submit',(event)=>{
    event.preventDefault();
    let p=document.querySelector('.principal-amount').value;
let n=document.querySelector('.year').value;
let r=document.querySelector('.rate').value;
  n=Number(n);
  r=Number(r);
  p=Number(p);
   let b=false;
  if(p>=500 && p<=10000)
  {
    if(p<1000)
    {
        r=5;
    }
    else if(p>1000 &&  p<5000)
    {
       r=7;
    }
    else if(p>5000)
    {
        r=10;
    }
    else if(n>5)
    {
         b=true;
        r=r+2;
        document.querySelector('.Additional-c').innerHTML = 'Your applied with extra 2% rate';
    }
}
  else{
    document.querySelector('.err-message').style.display = 'block';
  }
  document.querySelector('.Interest-c').innerHTML = `${interest(p,r,n)}`;
  document.querySelector('.Total').innerHTML = `${interest(p,r,n)+p}`;
    if(b===false)
    {
     document.querySelector('.Additional-c').innerHTML = `---`;
    }
});
function interest(principal,rate,time)
{
console.log(principal+" "+rate+" "+time);
return  Math.round((principal*rate*time )/100);
}