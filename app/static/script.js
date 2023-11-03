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

//  let dizi = Object.keys(localStorage);
//  console.log(dizi);


window.addEventListener("load", () => {
    let clicked_keys = Object.keys(localStorage);
    clicked_keys.forEach( (key) => {
        console.log("eklenen key: " + key)
        clickeds.push(key);
    });
   

    clickeds.forEach( (c) => {
        const id = c.match(/\d+/g);
        let clicked_a_tag = document.getElementById(id);
        if(clicked_a_tag){
            clicked_a_tag.style.backgroundColor = "green";
            clicked_a_tag.style.color = "white";
        }
        else{
            console.log("aranan eleman bulunamadı");
        }
       
    })
    
});
