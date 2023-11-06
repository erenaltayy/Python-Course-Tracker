const a_tags = Array.from(document.getElementsByClassName("a_tag"));
let clickeds = [];

let a_id = 1;
a_tags.forEach((a) => {
    a.setAttribute("id", a_id);
    a_id++;
});

document.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", (event) => {
        localStorage.setItem("id_"+ event.target.id, event.target.id);
        console.log("local storage eklendi: " + event.target.id);
    });
});

window.addEventListener("load", () => {
    let clicked_keys = Object.keys(localStorage);
    if(clicked_keys.length == 200){
        window.alert("Congrats, you've done it!!!");
    }
    clicked_keys.forEach( (key) => {
        console.log("eklenen key: " + key)
        clickeds.push(key);
    });
   
    clickeds.forEach( (c) => {
        const id = c.match(/\d+/g);
        let clicked_a_tag = document.getElementById(id);
        if(clicked_a_tag){
            let parentdiv = clicked_a_tag.parentElement;
            parentdiv.style.backgroundColor = "green";
            parentdiv.style.color = "white";
        }
        else{
            console.log("aranan eleman bulunamadı");
        }
       
    });
    
});


window.addEventListener("pageshow", (event) => {
    if (event.persisted) {
        location.reload();
    }
});




//elle de yeşil işaretleme ekle
// yeşil işareti kaldırma ekle
//hepsii bitirince tebrik mesajı ekle
