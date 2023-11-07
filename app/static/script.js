const a_tags = Array.from(document.getElementsByClassName("a_tag"));
const compBtns = Array.from(document.getElementsByClassName("compBtn"));
const incompBtns = Array.from(document.getElementsByClassName("incompBtn"));
let clickeds = [];

a_tags.forEach((a, index) => {
    a.setAttribute("id", index);
});

compBtns.forEach((c, index) => {
    c.setAttribute("id", "c_" + index);
    c.addEventListener("click", () => {
        localStorage.setItem("id_" + index, index);
        location.reload();
    });
});

incompBtns.forEach((i, index) => {
    i.setAttribute("id", "i_" + index);
    i.addEventListener("click", () => {
        localStorage.removeItem("id_" + index);
        console.log("kaldırıldı: " + "id_" + index);
        location.reload();
    });
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
            clicked_a_tag.style.color = "white";
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
