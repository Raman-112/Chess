// Function to create a label and append it to the body
function print(data) {
    const div = document.createElement('div');
    div.innerHTML = data;
    document.body.appendChild(div);
}

// Function to create a line break element
function newLine() {
    const br = document.createElement('br');
    document.body.appendChild(br);
}

// Declare the board size
const board_size = 8; // Adjust the size as needed

// Create the chessboard
let chessboard = '';

for (let row = 0; row < board_size; row++) {
    let rowString = '';
    for (let col = 0; col < board_size; col++) {
        // Check if the sum of the row and column indices is even or odd
        if ((row + col) % 2 === 0) {
            rowString += '*';
        } else {
            rowString += '#';
        }
    }
    // Print the row and add a new line
    print(rowString);
    newLine();
}
