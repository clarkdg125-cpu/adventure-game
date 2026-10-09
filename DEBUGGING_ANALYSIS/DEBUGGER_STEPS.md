# Debugger Steps:

I used Chrome DevTools to pause my game at three points, look at the variables, and step through the code with F10.

## Breakpoint 1 (line 22)

This is where the player's choice gets saved.

Breakpoint 1 before(bp1-before.png):
I clicked "Face the enemy pirates" and the code paused on line 22. nextState was "pirates" and currentState was still "start". The choice was made but not saved yet. The call stack showed the click listener.

Breakpoint 1 after(bp1-after.png):
After stepping, currentState changed to "pirates". The choice was saved and the game was ready to call renderQuestion to update the screen.

## Breakpoint 2 (line 36)

This is where the switch picks which part of the story to show.

Breakpoint 2 before(bp2-before.png):
I clicked "Fight the pirates" and the code paused on line 36. currentState was "pirates_fight". The call stack showed renderQuestion was called by the click listener. The old buttons were already cleared but the old text was still on the page.

Breakpoint 2 after(bp2-after.png):
After stepping, the code jumped straight to line 53 inside the "pirates_fight" case and skipped all the other cases. The text hadn't changed yet because that line hadn't run.

## Breakpoint 3 (line 33)

This is where the game hides the ending after clicking Play Again.
Breakpoint 3 before(bp3-before.png):
I played to the end and clicked Play Again. The code paused on line 33. currentState was already "start", but the page still showed "YOU WIN THE ADVENTURE!" and the Play Again button. The call stack showed the Play Again listener at line 151.

Breakpoint 3 after(bp3-after.png):
After stepping, the conclusion got the hidden class and the win message disappeared. The Play Again button was still showing because line 34 hadn't run yet.

## Critical State Analysis:

I picked Breakpoint 3 (before) because the game is out of sync here. currentState says "start" but the screen still shows the ending. This shows that changing a variable doesn't update the page by itself. renderQuestion is what actually updates the page.

The program is working as expected now, but this is where I found a bug while testing. Line 33 was missing at first, so the win message stayed on screen after clicking Play Again. Adding line 33 fixed it.

Next, line 34 hides the Play Again button, then the switch goes to the "start" case and shows the intro and the three first choices. After that, the screen matches currentState again.