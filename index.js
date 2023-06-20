function addingEventListener(random) {
const random1=document.querySelector(random);
return random1.addEventListener("keydown", function (e){
    return console.log(e);
})
}

addingEventListener("div")