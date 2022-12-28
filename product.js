function sortByPrice() {
// Get the parent container element
const parent = document.querySelector("#parentdiv");

// Get all the child elements (products) in the parent container
const children = Array.from(parent.children);

// Sort the children array by price
children.sort((a, b) => {
    const priceA = parseInt(a.querySelector("p").textContent.replace("Rs ", ""));
    const priceB = parseInt(b.querySelector("p").textContent.replace("Rs ", ""));
    return priceA - priceB;
});

// Remove all the child elements from the parent container
children.forEach(child => parent.removeChild(child));

// Append the sorted children to the parent container
children.forEach(child => parent.appendChild(child));
}



