// Sign Up
const signUpForm = document.querySelector(".register");
const regName = document.querySelector("#name");
const regLevel = document.querySelector("#level");
const regDicipline = document.querySelector("#dicipline");
const regSid = document.querySelector("#sid");
const regPassword = document.querySelector("#password");
const disReg = document.querySelector(".dis-reg");
const regBtn = document.querySelector(".reg-btn");

// Sign In
const signInForm = document.querySelector(".login");
const logSid = document.querySelector("#log-sid");
const logPassword = document.querySelector("#log-password");
const disLog = document.querySelector(".dis-log");
const logBtn = document.querySelector(".log-btn");

// Display Appropriate Form
disReg.addEventListener("click", () => {
    signInForm.style.display = "none";
    signUpForm.style.display = "block";
});

disLog.addEventListener("click", () => {
    signInForm.style.display = "block";
    signUpForm.style.display = "none";
});

// Sign Up Button
regBtn.addEventListener("click", e => {
    e.preventDefault();
    
    if (
        regName.value == "" ||
        regDicipline.value == "" ||
        regLevel.value == "" ||
        regSid.value == "" ||
        regPassword.value == ""
    ) {
        alert(
            "All field are required for this form, hint password must be greater than 5 character"
        );
    }
    
    let regReq = fetch("http:://localhost:5000", {
        method: "post",
        body: {
            name: regName.value,
            sid: regSid.value,
            level: regLevel,
            discipline: regDicipline,
            password: regPassword,
        }
    });
    localStorage.setItem("name", regName.value);
    localStorage.setItem("sid", regSid.value)
    localStorage.setItem("level", regLevel.value)
    localStorage.setItem("discipline", regDicipline.value)
    localStorage.setItem("password", regPassword.value)
    
    alert("FUTi HUB account creation is successful, happy surf :)");
});

// Sign In Button
logBtn.addEventListener("click", async e => {
    e.preventDefault();
    let logReq = await fetch("http:://localhost:5000", {
        method: "get",
        
    });
    let objReq = await logReq;
    
    let sid = localStorage.getItem("sid")
    let password = localStorage.getItem("password");
    console.log(sid, typeof password)
    if (sid != logSid.value && password != logPassword.value) {
        alert("SID and password doesn't match, enter your correct sid and password to access the HUB");
    } else { alert(`Welcome back ${localStorage.getItem("name")}, remember be nice and polite, no cyber bullying, everyone wellbeing is our consign`) }
    location.pathname="/documents/NB.html"
});