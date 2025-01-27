// let ele = document.createElement("h1");
// ele.innerText= "dynamic creation of html element";
// // ele.id = "demo"
// ele.setAttribute("id" , "demo")
// console.log(ele);

// // ele.removeAttribute("id");
// document.body.appendChild(ele);


// let image = document.createElement("img");
// image.src= "./3606208.jpg";
// console.log(image);

// document.body.appendChild(image)


let form = document.querySelector("form");
let username = document.querySelector("#uName");
let email = document.querySelector("#uMail");
let psw = document.querySelector("#uPsw");

form.addEventListener("submit",(event)=>{
    event.preventDefault();
    // console.log(event);
    // console.log("form submitted");
    // console.log(username.value);
    let name =username.value;
    let mail = email.value;
    let password = psw.value;
    let userDetails={
        name:name,
        mail : mail,
        password:password
    } ;
    // console.log(userDetails);
    localStorage.setItem("userData" , JSON.stringify(userDetails))
})


// localStorage.clear()