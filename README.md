Simple checkers game built using Electron.js, jQuery, and Bootstrap.

The views are handled as HTML pages using the Bootstrap framework. The styles are mostly made using Bootstrap classes,
with customization where appropriate. Electron.js renders the "website" as an app that can be deployed across systems, hence 
the direction chosen for design and implementation (as opposed to writing it as a desktop app). Electron's website https://electronjs.org .

The model folder contains class definitions for the game board and the pieces. This was chosen so that there would be 
easily accessible data about each, with methods to alter the state where appropriate. All changes to state for the game 
board are made with methods in the board class; the state in the piece class changes less, and so methods were not 
created to change the state, but may be implemented later.

For game play, jQuery event listeners were used to register where a user clicks on the board. The listeners waits for a 
user to click on a tile on the board, and retrieves the piece on that space if there is one. If there is a piece, the 
color is checked against whose turn it is to determine whether or not to select that piece. Upon attempting to move, 
a board class method is used to determine whether the move is valid, and if it is to tell the view to update the game. 
The normal rules of checkers are followed for movement. There are two validators of movement in game, which validate 
normal movement and a jump. The latter case is almost the same as the former during execution, except that the turn is 
not changed, the appropriate score is incremented, and the jumped piece disappears.

After every move, a lightweight method in board is called to check if there is a winner. The board class maintains a list 
of all the piece on the board for red and black. If either list is empty, then the opposite color has won, and the board 
class tells the view to close the game and bring up an end-of-game screen. Players have the option to play again or return 
to the menu.

A single board instance is used as a global variable in the views directory to control the game. This makes it convenient 
for view methods to access board methods.