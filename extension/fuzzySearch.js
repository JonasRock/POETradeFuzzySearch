document.body.addEventListener("keydown", appendFuzzyToTarget);
console.log("FuzzySearch active");

function appendFuzzyToTarget(e) {
    if(e.target.classList.contains("multiselect__input"))
    {
        if(!e.target.value.startsWith("~"))
        {
            e.target.value = "~" + e.target.value;
        }
    }
}