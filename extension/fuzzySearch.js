// Put all the javascript code here, that you want to execute after page load.
document.addEventListener("keydown", addExtension);
document.addEventListener("mousedown", addExtension);

function addExtension() {
    document.removeEventListener("keydown", addExtension);
    let searchBars = document.getElementsByClassName("multiselect__input");
    for(var i = 0; i < searchBars.length; i++)
    {
        var element = searchBars[i];
        if (element.placeholder === "Search Items...")
        {
            element.addEventListener("keydown", appendFuzzyToValue);
            console.log("Search Items... found");
            
        }
        if (element.placeholder === "+ Add Stat Filter")
        {
            element.addEventListener("keydown", appendFuzzyToValue);
            console.log("+ Add Stat Filter found")
        }
    }
}

function appendFuzzyToValue(element)
{
    if (!element.currentTarget.value.startsWith("~"))
    {
        element.currentTarget.value = "~" + element.currentTarget.value;
    }
}