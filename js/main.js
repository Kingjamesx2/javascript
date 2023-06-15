const data = document.querySelector("#data");
const qr = document.querySelector("#qr");

data.addEventListener("keyup", e =>{
    if(e.code === "Enter"){
        qr.innerHTML = "";
        const href = data.value;
        //size of image
        const size = 360;

        new QRCode(qr, {
            text: href,
            width: size,
            height: size,

            colorDark: "#040404",
            colorLight: "#e9eef4"
        })
    }
})