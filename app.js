
/* $(window).resize(function(){
    if($(window).width() > 800){
        $(".btn").addClass('btn-lg');
    }
    if($(window).width() < 800){
        $(".btn").removeClass('btn-lg');
    }
}); */


/////////// homepage-button/ reset:
const homeButton = document.getElementsByClassName('home');
for (but of homeButton){
    if (but){
        but.addEventListener('click', function(){
            window.location.href = "./index.html";
        });
    }
}

const resetButton = document.getElementById("reset");
if (resetButton){
    resetButton.addEventListener('click', function(){
        window.location.href = "./index.html";
    });
}

/* const reset2Button = document.getElementById("reset2");
if (reset2Button){
    reset2Button.addEventListener('click', function(){
        window.location.href = "./index.html";
    });
} */
/////////////////////////


/////////// Sign-Up for fans:
const formUser = document.getElementById("registerForm");
const userName = document.getElementById("validationDefaultUsername");
formUser.addEventListener('submit', function(e){
    e.preventDefault();
    alert("Hey " + userName.value + ", you successfully signed up!");
    formUser.reset();
});


////////// Sign-Up for Musicians:
const formUser3 = document.getElementById("registerForm2");
const musicianUsername = document.getElementById("validationDefaultUsernameMusic");
const instrument = document.getElementById("instrument");
const bandsize1 = document.getElementById("one");
const bandsize = document.getElementsByName("checkboxcheck");
const sizeArray = [];

if (formUser3){
    formUser3.addEventListener('submit', function(e){
        e.preventDefault();
        const message1 = "Hey " + musicianUsername.value + " - Instrument: " + instrument.value + "  - Bands: ";
        for (let box of bandsize){
            if (box.checked){
                sizeArray.push(box.value + " - ");
            }
        }
        const message2 = sizeArray;
        const message3 = " will be checked, wait for approvals, then you decide which one you join. If no approval, you start automatically new band. You will be informed, if your band is full and ready to be booked. No need for approval when single musician."
        
        alert(message1 + message2 + message3);
    })
}




/////////// sing-in for fans:
const formUser2 = document.getElementById("signInForm");
const pwd = document.getElementById("exampleDropdownFormPassword2");
const mail = document.getElementById("exampleDropdownFormEmail2")
formUser2.addEventListener('submit', function(e){
    e.preventDefault();
    // fake-comparison:
    if(mail.value === "email@gmail.com" && pwd.value === "Password1"){
        alert("successfully signed in!");
    }
    else {
        alert("Email or/and Password wrong");
    }
    formUser2.reset();
});


///////// log-in for musicians:
const formUser4 = document.getElementById("signInFormMusic");
const pwdMusic = document.getElementById("exampleDropdownFormPasswordMusic2");
const mailMusic = document.getElementById("exampleDropdownFormEmailMusic");
formUser4.addEventListener('submit', function(e){
    e.preventDefault();
    // fake-comparison:
    if(mailMusic.value === "email@gmail.com" && pwdMusic.value === "Password1"){
        alert("successfully signed in!");
    }
    else {
        alert("Email or/and Password wrong");
    }
    formUser4.reset();
});


//////////// Concert-API(fake-API):
const concertShow = document.querySelector("#show-concerts");
const concertButton = document.querySelector("#concert-button");
const counter = 5;
const res_array = [];

// make fake-date be in future:
function checkData(dateCon, dateFull){
    const today = new Date();
    dateTemp = new Date (dateCon);
    if(dateTemp < today){
        currentYear = today.getFullYear();
        concertYear = currentYear + 1;
        concertYear.toString();
        dateCon =  concertYear + dateFull.substring(5,17);
    }
    return dateCon;
}

// get day and time (fake-data):
const getData = async () => {
    try{
        const res = await axios.get(`https://fakerapi.it/api/v1/custom?_quantity=${counter}&customfield1=name&customfield2=dateTime&customfield3=city`);
        
        for (let i=0; i<counter; i++){
            let name = JSON.stringify(res.data.data[i].customfield1);
            
            let dateFull = JSON.stringify(res.data.data[i].customfield2.date);
            let dateCon = dateFull.substring(0,17);
            dateCon = checkData(dateCon, dateFull);
            
            let city = JSON.stringify(res.data.data[i].customfield3);
            res_array[i] = name + " - " + dateCon + " - " + city;
        }
        return res_array;
    }
    catch(e){
        console.log("Error", e);
    }
}

// create list of concerts appearing in pop-up:
const addConcerts = async () => {
    const arrayData = await getData();
    for (let i=0; i<counter; i++){
        const newLi = document.createElement("LI");
        newLi.append(arrayData[i]);
        concertShow.append(newLi);
    }
}

if (concertButton){
    concertButton.addEventListener("click", addConcerts, {once:true});
}


/////////////////////////////////////////////


// dropdowns Bandsearch: ///////////////////////////////////////////////
/* let citySelected = "London"; // default
let bandsizeSelected = "medium"; // default

$("#size a").click(function (){
    $("#btnGroupDrop2").text($(this).text());
    bandsizeSelected = this.text;
});

$("#city a").click(function (){
    $("#btnGroupDrop1").text($(this).text());
    citySelected = this.text;
});

const goButton = document.getElementById('go');
if (goButton){
    goButton.addEventListener('click', function(){
        if (citySelected === "London" && bandsizeSelected === "small"){
            //window.open("https://www.google.com");
            window.location.href = "./indexLS.html";
        }
        else if (citySelected === "London" && bandsizeSelected === "medium"){
            window.location.href = "./indexLM.html";
        }
        else if (citySelected === "London" && bandsizeSelected === "large"){
            window.location.href = "./indexLL.html";
        }
        else if (citySelected === "Krakow" && bandsizeSelected === "small"){
            window.location.href = "./indexKS.html";
        }
        else if (citySelected === "Krakow" && bandsizeSelected === "medium"){
            window.location.href = "./indexKM.html";
        }
        else if (citySelected === "Krakow" && bandsizeSelected === "large"){
            window.location.href = "./indexKL.html";
        }
    });
} */
////////////////////////////////////


// select option Bandsearch: ///////////////////////////////////////////////
const selectCity = document.getElementById("cityBook");
const selectSize = document.getElementById("sizeBook");
const goButton2 = document.getElementById('go2');

if (goButton2){
    goButton2.addEventListener('click', function(){
        if (selectCity.value === "London" && selectSize.value === "small"){
            //window.open("https://www.google.com");
            window.location.href = "./indexLS.html";
        }
        else if (selectCity.value === "London" && selectSize.value === "medium"){
            window.location.href = "./indexLM.html";
        }
        else if (selectCity.value === "London" && selectSize.value === "large"){
            window.location.href = "./indexLL.html";
        }
        else if (selectCity.value === "Krakow" && selectSize.value === "small"){
            window.location.href = "./indexKS.html";
        }
        else if (selectCity.value === "Krakow" && selectSize.value === "medium"){
            window.location.href = "./indexKM.html";
        }
        else if (selectCity.value === "Krakow" && selectSize.value === "large"){
            window.location.href = "./indexKL.html";
        }
    });
}

///////// reset search:
const resetSearch = document.getElementById("reset2");
if(resetSearch){
    resetSearch.addEventListener('click', function(){
        selectCity.value = "default";
        selectSize.value = "default";
    })
}

////////////////////////////////////


// jazz-club next to you (google):
const jazzClubButton = document.getElementById("club");
if (jazzClubButton){
    jazzClubButton.addEventListener('click', function(){
        window.location.href = `https://www.google.com/maps/search/Jazz+Club`;
    });
}

// google-search:
const googleSearch = document.getElementById("form");
if (googleSearch){
    googleSearch.addEventListener("submit", (e) => {
        e.preventDefault();
        window.location.href = `https://www.google.com/search?q=${document.getElementById('input').value}`;
    });
}


