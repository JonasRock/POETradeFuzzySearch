document.body.addEventListener("keydown", appendFuzzyToTarget);
document.body.addEventListener("paste", function(e) {setTimeout(appendFuzzyToTarget, 0, e)} );

console.log("FuzzySearch active");

function appendFuzzyToTarget(e) {
    if(e.target.classList.contains("multiselect__input"))
    {
        //When text is selected and we write a letter it wrongly gets appended to the end of the text instead of replacing it
        //To prevent this, we only append the tilde when nothing is selected
        if(e.target.selectionStart === e.target.selectionEnd)
        {
            //Don't append the tilde if the first character is already a tilde or we start with a space (so we can opt out of fuzzy search)
            if(!e.target.value.startsWith("~") && !e.target.value.startsWith(" ") && e.key !== " ")
            {
                e.target.value = "~" + e.target.value;
            }
        }
    }
}