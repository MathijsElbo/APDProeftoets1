function show_choice() {
    let p_tag1;
    let p_tag2;
    let img_tag;
    p_tag1 = document.querySelector("#p_01");
    p_tag2 = document.querySelector("#p_02");
    img_tag = document.querySelector("#img_01");
    p_tag1.innerHTML = "Keuze vak 1, keuze vak 2 en keuze vak 3";
    p_tag2.innerHTML = "Applicatie- en Media ontwikkelaar";
    p_tag2.setAttribute("data-target", "#exampleModal");
    img_tag.setAttribute("style", "display: block;");
}
function img_hover() {
    let p_tag1;
    let p_tag2;
    let img_tag;
    p_tag1 = document.querySelector("#p_01");
    p_tag2 = document.querySelector("#p_02");
    img_tag = document.querySelector("#img_01");
    p_tag1.innerHTML = "Door te klikken op de onderstaande knop worden de keuzendelen zichtbaar die ik ga kiezen voor de opleiding applicatieontwikkeling";
    p_tag2.innerHTML = "Ik maak ook bekend of ik als applicatie- en mediaontwikkelaar of als gamedeveloper ga afstuderen";
    p_tag2.setAttribute("data-target", "#-");
    img_tag.setAttribute("style", "display: none;");
}
function savemodal() {
    let text_tag;
    let p_tag2;
    text_tag = document.querySelector("#text_01");
    p_tag2 = document.querySelector("#p_02");
    p_tag2.innerHTML = text_tag.value;
}
