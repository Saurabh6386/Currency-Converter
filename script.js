let options = document.querySelectorAll(".currency-choose select");

let countryflag = document.querySelector

let btn = document.querySelector(".calculatebtn");

let inputvalue = document.querySelector(".input-amount input");

const fromcurr = document.querySelector(".from select");
const tocurr = document.querySelector(".to select");

let display = document.querySelector(".result");

options.forEach((option) => {
    for (let code in countryList) {
        let newoption = document.createElement("option");
        newoption.innerText = code;
        if (option.name === "from" && code === "USD") {
            newoption.selected = "selected";
        }
        if (option.name === "to" && code === "INR") {
            newoption.selected = "selected";
        }
        option.append(newoption);
    }
    option.addEventListener("change", (event) => {
        updateflag(event.target);
    })
})

const updateflag = (element) => {
    let currcode = element.value;
    let countrycode = countryList[currcode];
    let newlink = `https://flagsapi.com/${countrycode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newlink;


}

let BASE_URL = `https://2024-03-06.currency-api.pages.dev/v1/currencies`;

btn.addEventListener("click", async (evt) => {
    let fromval = fromcurr.value.toLowerCase();
    console.log(fromval);
    let toval = tocurr.value.toLowerCase();
    console.log(toval);
    let currinput = inputvalue.value;
    console.log(currinput);

    if(currinput < 0){
        inputvalue.value = 1;
        currinput = 1;
    }
    
    let URL = `${BASE_URL}/${fromval}.json`;
    let response = await fetch(URL);
    let data = await response.json();
    
    let v1 = data[fromval][toval];
    console.log(v1);

    let calcval = currinput * v1;
    console.log(calcval);
    

    display.innerText = `${currinput} ${fromval.toUpperCase()} = ${toval.toUpperCase()} ${calcval}`;

}
) 