const a_tags = document.getElementsByClassName("a_tag");
let id = 1;
a_tags.forEach((a) => {
    a.id = id;
    id++;
});


document.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
        a.style.backgroundColor = green;
        //sayfa yüklendiğinde nasıl kalacak
    });
});


//flasktaki cookiler daha kolay olabilir



