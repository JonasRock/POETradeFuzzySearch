# POETradeFuzzySearch
When searching on pathofexile.com/trade, this addon inserts the tilde(~) before your search query. This enables fuzzy search, so you can be more lenient with your search.

For example, when searching for "#% to Fire and Cold Resistance" it's enought to just write "fire cold res". Without fuzzy search, this would not find the modifier.

---

Without fuzzy search:

![](img/strict.jpg)


With fuzzy search:

![](img/fuzzy.jpg)

---

## Install: ##

This Extension is available for **Firefox**, **Chrome** or as a **Greasemonkey** userscript

### **Firefox**: ###
Just install it from the Firefox Webstore [here](https://addons.mozilla.org/en-US/firefox/addon/poetrade-fuzzy-search/)

### **Chrome**: ###
Chrome Webstore version is currently under review, might take a bit, link will be added once available.

You can also install it manually. Don't worry, it's not hard:

1. Download the extension from the releases tab to the right.
2. Go to "chrome://extensions".
3. On the top right corner, enable developer mode. You should see the "Load unpacked", "Pack extension" and "Update" buttons now.

![](img/Install1.jpg)

4. Drag and drop the downloaded .crx file into the window

![](img/Install2.jpg)

5. Click on "Add extension"

![](img/Install3.jpg)

6. Finished. See you in game :)

You might end up with this Warning:
~~~
"This Extension is not listed in the Chrome Web Store and may have been added without your knowledge."
~~~
This seems to sometimes still work, sometimes not. If it doesn't work, you can try using Greasemonkey as explained below or wait for the Webstore Version.

### **Greasemonkey or Alternatives** ###
The `POETradeFuzzySearch.gm_script` file contains a userscript for the Greasemonkey Extension (or any of its alternatives). This should work with any browser that has a Greasemonkey extension.