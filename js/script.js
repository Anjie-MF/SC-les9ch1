// invite button
const addGuestButton = document.querySelector(".invite");
// label for the invite button
const guestInputLabel = document.querySelector(".add-guest label");
// text input box
const guestInput = document.querySelector(".add-guest input");
// unordered list (not yet visible)
const guestList = document.querySelector(".guest-list");
// span class for number of guests attending
const guestCount = document.querySelector(".attendance");
// alert when guest list is full (not yet visible)
const guestFull = document.querySelector(".alert");


// Add an Event Listener & Create an Element
addGuestButton.addEventListener("click", function () {
    const guest = guestInput.value;
    // console.log(guest);
    if (guest !== "") {
        addToList(guest);
        clearInput();
        //     let listItem = document.createElement("li");
        //     listItem.innerText = guest;
        //     guestList.append(listItem);    
    }
});

// Clear the Input Box
const clearInput = function () {
    guestInput.value = "";
};

//  ====== REFACTORED CODE ====== 
const addToList = function (guest) {
    let listItem = document.createElement("li");
    listItem.innerText = guest;
    guestList.append(listItem);
}