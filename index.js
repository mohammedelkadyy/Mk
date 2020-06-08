const menuDOM = document.getElementById("menu");

const menuItems = [
    "Home", // index: 0
    "About us", // index: 1
    "Categories", // index: 2
    "Products", // index: 3
    "Blog" // index: 4
];

for (let i = 0; i < menuItems.length; i++) {
    let menuItem = menuItems[i];
    let item = document.createElement("li"); // <li></li>
    item.textContent = menuItem; // <li>Home</li>
    menuDOM.appendChild(item);
}

/*
    // i = 0
    let menuItem = menuItems[0]; // Home
    let item = document.createElement("li"); // <li></li>
    item.textContent = menuItem; // <li>Home</li>
    menuDOM.appendChild(item); // <ul id="menu"> set <li>Home</li> as child

    // i = 1
    let menuItem = menuItems[1]; // About us
    let item = document.createElement("li"); // <li></li>
    item.textContent = menuItem; // <li>About us</li>
    menuDOM.appendChild(item);// <ul id="menu"> set <li>About us</li> as child

    // i = 2
    let menuItem = menuItems[i];
    let item = document.createElement("li"); // <li></li>
    item.textContent = menuItem; // <li>Home</li>
    menuDOM.appendChild(item);

    // i = 3
    let menuItem = menuItems[i];
    let item = document.createElement("li"); // <li></li>
    item.textContent = menuItem; // <li>Home</li>
    menuDOM.appendChild(item);

    // i = 4
    let menuItem = menuItems[i];
    let item = document.createElement("li"); // <li></li>
    item.textContent = menuItem; // <li>Home</li>
    menuDOM.appendChild(item);
*/