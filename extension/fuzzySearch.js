document.body.addEventListener("keydown", appendFuzzyToTarget);
console.log("FuzzySearch active");

function appendFuzzyToTarget(e) {
    if(e.target.classList.contains("multiselect__input"))
    {
        //When text is selected and we write a letter it wrongly gets appended to the end of the text instead of replacing it
        //To prevent this, we only append the tilde when nothing is selected
        if(e.target.selectionStart === e.target.selectionEnd)
        {
            if(!e.target.value.startsWith("~"))
            {
                e.target.value = "~" + e.target.value;
            }
        }
    }
}