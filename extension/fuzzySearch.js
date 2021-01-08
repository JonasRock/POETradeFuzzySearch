// Put all the javascript code here, that you want to execute after page load.
addExtension();

function addExtension() {
        console.log("Added Eventlistener");
        document.removeEventListener("keydown", addExtension);
        var searchbar = document.querySelector("#trade > div.top > div.search-panel > div:nth-child(1) > div.search-left > div > div.multiselect__tags > input");
        var attributeFilter = document.querySelector("#trade > div.top > div.search-panel > div.search-bar.search-advanced > div > div.search-advanced-pane.brown > div.filter-group.expanded > div.filter-group-body > div > span > div > div.multiselect__tags > input");
        searchbar.addEventListener("keydown", appendFuzzyToValue);
        attributeFilter.addEventListener("keydown", appendFuzzyToValue);
}

function appendFuzzyToValue(element)
{
    console.log("Inserted ~ into searchfield");
    if (!element.currentTarget.value.startsWith("~"))
    {
        element.currentTarget.value = "~" + element.currentTarget.value;
    }
}