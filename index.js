// Students Ana and Robson

console.log("I'm ready!");

// Iteration 1: Names and Input
let hacker1 = "Robson";
let hacker2 = "Ana";

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}
else if (hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}
else if (hacker1.length = hacker2.length){
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`);
}

// Iteration 3: Loops
let nameUpperSpace = "";

    for (let i = 0; i < hacker1.length; i++){
        nameUpperSpace += hacker1[i] + " ";
    }
    console.log(nameUpperSpace.toUpperCase());

let nameReverse = ""

    for (let i = hacker2.length - 1; i >= 0; i--) {
        nameReverse += hacker2[i];
    }

    console.log(nameReverse);

let result = hacker1.localeCompare(hacker2);
 
    if (result < 0) {
        console.log("The driver's name goes first");
    }
    else if (result >= 1) {
        console.log("Yo, the navigator goes first definitely.");
    }
    else {
        console.log("What!? You both have the same name?");
    }


let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ullamcorper vulputate nisi, vitae ultrices urna congue eu. Aliquam ultrices arcu id gravida consectetur. Nunc lacinia ligula ut congue fermentum. Etiam quis eleifend libero. Nullam nulla quam, bibendum non quam sit amet, rutrum finibus nunc. Etiam vestibulum est sed ante vehicula rhoncus. Fusce nec ornare purus. Phasellus vitae maximus nibh, in tempor purus. Ut fermentum hendrerit commodo. Proin ac enim fringilla, tincidunt quam sit amet, venenatis est. Pellentesque feugiat felis in porttitor bibendum.

Integer sed pharetra sapien. Pellentesque rhoncus nisi eget condimentum cursus. Curabitur ipsum massa, tincidunt sed sollicitudin suscipit, posuere quis risus. Duis a nisi dapibus, accumsan massa vitae, porta dolor. Proin porttitor quis sapien sed egestas. Nam eget metus id tortor sagittis blandit. Proin a sollicitudin ipsum, ornare lacinia massa. Aenean vitae nunc scelerisque, sodales nulla a, ullamcorper nunc. Duis convallis finibus justo vel placerat. Praesent rutrum magna sem, quis sagittis diam accumsan tristique. Curabitur sagittis mattis elementum. Vestibulum sollicitudin turpis vel augue dapibus, eget dictum erat tincidunt. Sed pellentesque dignissim odio eget accumsan.

Nunc rhoncus est vel metus consequat aliquet. Sed eget justo at lorem dictum aliquet tincidunt et nibh. Morbi sollicitudin tellus eget congue egestas. Etiam auctor sed nisl eget fermentum. Integer id faucibus mauris. Vestibulum luctus mi ac lorem ornare, sed mollis risus consequat. Ut velit arcu, venenatis eu mauris et, ultricies dictum lorem. Praesent eleifend scelerisque tristique. Proin dapibus, ex eget sodales egestas, quam purus posuere purus, et sagittis enim leo nec nulla. Pellentesque nisi odio, rutrum a faucibus non, imperdiet ac justo. In euismod nec mauris eu ultrices. Sed quis metus metus. Donec in dignissim urna. Aliquam euismod eleifend dictum. Sed imperdiet erat non egestas tincidunt.`

