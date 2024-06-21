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

const assignButton = document.querySelector(".assign");

const assignedItems = document.querySelector(".assigned-items");



// Add an Event Listener & Create an Element
addGuestButton.addEventListener("click", function () {
    const guest = guestInput.value;
    // console.log(guest);
    if (guest !== "") {
        addToList(guest);
        updateGuestCount();
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

const updateGuestCount = function () {
    const guests = document.querySelectorAll(".guest-list li");
    guestCount.innerText = guests.length;

    if (guests.length === 8) {
        addGuestButton.classList.add("hide");
        guestInput.classList.add("hide");
        guestInputLabel.classList.add("hide");
        guestFull.classList.remove("hide");
    }
};

const assignItems = function () {
    const potluckItems = [
        "Buffalo Wing Dip",
        "Watermelon, Feta & Black Olive Dip",
        "Spinach & Artichoke Dip",
        "Cream Pie Whoopie Pies",
        "Vegan Pesto Pasta Salad",
        "Vegan Taco Pasta Casserole",
        "Meatballs w/Cranberry Glaze",
        "Creamy Vegan Potato Salad",
        "Quinoa Salad",
        "Mac & Cheese",
        "Jalapeno Poppers",
        "Vegan Pinwheels"];
};