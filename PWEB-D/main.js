// mengatur tombol switchbutton => animasi

const button = document.getElementById("switchButton-bar");

button.addEventListener("click", mySwitchButton);

function mySwitchButton() {
    var paymentMonthly = document.getElementsByTagName("h3");
    var paymentAnnually = document.getElementsByTagName("h4");
    var x;
    var n;

    for (x = 0; x < paymentMonthly.length; x++) {
        for (n = 0; n < paymentAnnually.length; n++) {
            if (paymentMonthly[x].style.display === "none") {
                paymentMonthly[x].style.display = "block";
                paymentAnnually[x].style.display = "none";
                button.style.justifyContent = "flex-end"
            } 
            
            else {
                paymentMonthly[x].style.display = "none";
                paymentAnnually[x].style.display = "block";
                button.style.justifyContent = "flex-start"
            }
        }
    }

}
