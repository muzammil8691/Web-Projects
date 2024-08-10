//          Count Increase on Click (All Buttons)

var str=0;          
let btn = document.querySelectorAll(".increase");
for(let i=0; i<btn.length; i++){

    btn[i].addEventListener("click", function()
    {
        str= str + 1;
    document.getElementById('counting').innerHTML = str;



    })
}

                            //           Login Button Alert

let login = document.querySelector("#loginbtn");

    login.addEventListener("click", function(){
        alert("Sorry No Login Page Created Yet");
    })

                            //           Signup Button Alert


let signup = document.querySelector("#signupbtn");

    signup.addEventListener("click", function(){
        alert("Sorry No Signup Page Created Yet");
    })


                        // On Mouse Enter & Leave the Logo Changes fron Cat  to Paw   

let cat = document.querySelector(".fa-cat");
let paw = document.querySelector(".fa-paw");


cat.addEventListener("mouseenter", function(){

    cat.style.display= "none";
    paw.style.display= "block";

})
paw.addEventListener("mouseleave", function(){

    cat.style.display= "block";
    paw.style.display= "none";

})

// 





