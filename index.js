 const qrinput = document.getElementById("qr-input");
 const qrbtn = document.getElementById("qr-btn");
 const qrimg = document.getElementById("qr-img");
 
 qrbtn.addEventListener("click",()=>{
    if(!qrinput.value){
        alert("Please enter a text or URL")
     }
    else{
        let inputvalue = qrinput.value;
        qrimg.src =`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputvalue}`
        qrimg.alt =`QR code of ${inputvalue}`
     }
 });
 