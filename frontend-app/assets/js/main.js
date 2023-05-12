const receipt = document.getElementById("receipt");
const ship = document.getElementById("ship");
const drop = document.getElementById("drop");
const btnTT = document.getElementById("btnTT");
const btnSR = document.getElementById("btnSR");
const btnDP = document.getElementById("btnDP");

function trackTrace(){
    receipt.style = 'display:block;';
    ship.style = 'display:none;';
    drop.style = 'display:none';
    btnTT.className = "col-sm bg-danger text-white text-center py-2 mt-5";
    btnSR.className = "col-sm bg-white text-dark text-center py-2 mt-5";
    btnDP.className = "col-sm bg-white text-dark text-center py-2 mt-5";
}
function shipRate(){
    receipt.style = 'display:none;';
    ship.style = 'display:block;';
    drop.style = 'display:none';
    btnTT.className = "col-sm bg-white text-dark text-center py-2 mt-5";
    btnSR.className = "col-sm bg-danger text-white text-center py-2 mt-5";
    btnDP.className = "col-sm bg-white text-dark text-center py-2 mt-5";
}
function dropPoint(){
    receipt.style = 'display:none;';
    ship.style = 'display:none;';
    drop.style = 'diplay:block';
    btnTT.className = "col-sm bg-white text-dark text-center py-2 mt-5";
    btnSR.className = "col-sm bg-white text-dark text-center py-2 mt-5";
    btnDP.className = "col-sm bg-danger text-white text-center py-2 mt-5";
}


function checkHashIndex(){

    if(window.location.hash=="#TT") {
        trackTrace();
    }else if(window.location.hash=="#SR"){
        shipRate();
    }else if(window.location.hash=="#DP"){
        dropPoint()
    }else{
        trackTrace();
    }
    usingPhone();
}

//ORDER HTML
const pickupElement = document.getElementById("pick");
const dropElement = document.getElementById("dropOff1");
function checkHashOrder(){
    if(window.location.hash=="#pickUp") {
    //    alert("Ada"+window.location.hash)
        pickUp()
      } else {
        // Fragment doesn't exist
        droppingOff()
      }
      usingPhone();
}

function pickUp(){
    pickupElement.className = "col-sm-9 text-danger ";
    dropElement.className = "col-sm-9";
}

function droppingOff(){
    pickupElement.className = "col-sm-9 ";
    dropElement.className = "col-sm-9 text-danger";
}


//ABOUT HTML
const compro = document.getElementById("compro");
const history1 = document.getElementById("history");
const motto = document.getElementById("motto");
const partner = document.getElementById("partner");
const btnCompro = document.getElementById("btnCompro");
const btnHist = document.getElementById("btnHist");
const btnMotto = document.getElementById("btnMotto");
const btnPart = document.getElementById("btnPart");

function comproFunc(){
    compro.style = 'display:block';
    history1.style = 'display:none';
    motto.style = 'display:none';
    partner.style = 'display:none';
    btnCompro.className = "btn btn-danger btn-block";
    btnHist.className = "btn btn-secondary btn-block";
    btnMotto.className = "btn btn-secondary btn-block";
    btnPart.className = "btn btn-secondary btn-block";
}

function histFunc(){
    compro.style = 'display:none';
    history1.style = 'display:block';
    motto.style = 'display:none';
    partner.style = 'display:none';
    btnCompro.className = "btn btn-secondary btn-block";
    btnHist.className = "btn btn-danger btn-block";
    btnMotto.className = "btn btn-secondary btn-block";
    btnPart.className = "btn btn-secondary btn-block";
}

function mottoFunc(){
    compro.style = 'display:none';
    history1.style = 'display:none';
    motto.style = 'display:block';
    partner.style = 'display:none';
    btnCompro.className = "btn btn-secondary btn-block";
    btnHist.className = "btn btn-secondary btn-block";
    btnMotto.className = "btn btn-danger btn-block";
    btnPart.className = "btn btn-secondary btn-block";
}

function partnerFunc(){
    compro.style = 'display:none';
    history1.style = 'display:none';
    motto.style = 'display:none';
    partner.style = 'display:block';
    btnCompro.className = "btn btn-secondary btn-block";
    btnHist.className = "btn btn-secondary btn-block";
    btnMotto.className = "btn btn-secondary btn-block";
    btnPart.className = "btn btn-danger btn-block";
}

//LOGIN FUNCTION
const userEmail = document.getElementById("userEmail");
const phone = document.getElementById("phone");
const userEmailTitle = document.getElementById("userEmailTitle");
const phoneTitle = document.getElementById("phoneTitle");
const hr1 = document.getElementById("hr1");
const hr2 = document.getElementById("hr2");

function usingPhone(){
    userEmail.style = 'display:none';
    phone.style = 'display:block';
    phoneTitle.className = 'text-danger';
    hr1.className = 'bg-danger';
    userEmail.className = 'text-dark';
    hr2.className = 'bg-dark';
}
function usingUserEmail(){
    userEmail.style = 'display:block';
    phone.style = 'display:none';
    phoneTitle.className = 'text-dark';
    hr1.className = 'bg-dark';
    userEmailTitle.className = 'text-danger';
    hr2.className = 'bg-danger';
}