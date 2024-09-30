const $=(elementId)=>{
    return document.getElementById(elementId);
}

let resultat=$("resultat").innerText;
const bt=$("btCalc");
bt.addEventListener("click",()=>{
    const nb1=$("nb1").value;
    resultat=parseInt(resultat)+parseInt(nb1);
    $("resultat").innerText=resultat;
    const li=document.createElement("li");
    li.innerText="+"+nb1;
    $("historique").appendChild(li);

});

const btClear=$("btClear");
btClear.addEventListener("click",()=>{
    resultat=0;
}