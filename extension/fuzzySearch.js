'use strict';

const afterDOMLoaded = () => {
  // var to store all input fields
  let inputFieldNodeList = 'undefined';

  const getInputFields = () => document.querySelectorAll('.multiselect__input');
  const addFuzzyToNode = (e) => {
    if (!e.target.value.startsWith('~')) {
      e.target.value = '~' + e.target.value;
      // remove the event listener when the user wrote something into the field to prevent input lag
      e.target.removeEventListener('keydown', addFuzzyToNode);
    }
  };

  const wait = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  // fetch all input fields and only attach listeners when input field is empty
  // already attached listeners will be overwritten
  const restoreListeners = async () => {
    inputFieldNodeList = getInputFields();
    inputFieldNodeList.forEach((selectInput) => {
      if (selectInput.value == '')
        selectInput.addEventListener('keydown', addFuzzyToNode, false);
    });

    // wait a second before overwriting new listeners
    await wait(1000);

    restoreListeners();
  };

  // start here
  restoreListeners();
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', afterDOMLoaded, false);
} else {
  afterDOMLoaded();
}
