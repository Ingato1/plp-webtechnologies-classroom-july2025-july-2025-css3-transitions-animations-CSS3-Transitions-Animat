// A global variable
let globalMessage = "I am a global variable. I can be accessed anywhere!";

// Function to demonstrate scope
function showScope() {
    // This is a local variable, only accessible inside this function
    let localMessage = "I am a local variable, contained within this function.";
    console.log(localMessage);
    console.log(globalMessage); // This is valid, as local scope can access global variables
}

// showScope();
// console.log(localMessage); // This will cause a ReferenceError because localMessage is not defined in the global scope

// Function that takes parameters and returns a value
function calculateRectangleArea(width, height) {
    // Parameters are local variables to this function
    if (width <= 0 || height <= 0) {
        return "Invalid dimensions. Width and height must be positive.";
    }
    const area = width * height;
    return area; // Return the calculated area
}

// Example usage:
const myArea = calculateRectangleArea(10, 5);
console.log(`The area is: ${myArea}`);

const invalidArea = calculateRectangleArea(-2, 8);
console.log(invalidArea);

// This function will be used to trigger a CSS animation on a specific element
function triggerFlashAnimation(elementId) {
    // Find the element by its ID
    const element = document.getElementById(elementId);
    
    // Add the CSS class to start the animation
    element.classList.add('flash');
    
    // Listen for the end of the animation to remove the class and allow it to run again
    element.addEventListener('animationend', () => {
        element.classList.remove('flash');
    }, { once: true });
}