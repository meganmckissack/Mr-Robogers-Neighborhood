# _Mr. Roboger's Neighborhood_

#### By _**Megan McKissack**_

## Description

Mr. Roboger's Neighborhood is an app that returns a set of numbers from 0 to the user's input number and replaces numbers that contain 1, 2, or 3 with the words Beep! if the number contains a 1, Boop! if the number contains a 2, or Won't you be my neighbor? if the number contains a 3.

## Technologies Used

- _HTML_
- _CSS_
- _JavaScript_

## Setup/Installation Requirements

- clone or download this repository to your computer
- Open files in your favorite text editor or IDE
  To view Mr. Roboger's Neighborhood application, open the index.html file in your web browser

- _To test the app functionality:_

  - Enter a number that contains a 1 _e.g. 15_ and press submit. You should receive _0, "Beep!", 2, 3, 5, 6, 7, 8, 9, "Beep!", "Beep!", "Beep!", "Beep!", "Beep!", "Beep!"_
  - Enter a number that contains a 2 _e.g. 20_ and press submit. You should receive _0, "Bleep", "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, "Bleep", "Bleep", "Boop!", "Won't you be my neighbor?", "Bleep", "Bleep", "Bleep", "Bleep", "Bleep", Bleep", "Boop!"_
  - Enter a number that contains a 3 _e.g. 13_ and press submit. You should receive _0, "Bleep", "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, "Bleep", "Bleep", "Boop!", "Won't you be my neighbor?"_

## Known Bugs

- form input button changes alignment after sumbmitting a number and displaying the result

## License

_MIT_

Copyright (c) _April 23, 2022_ _Megan McKissack_

---

# Tests

### Describe: numArray()

**Test:** "It should return an array of numbers from 0 to the user's inputted number"

**Code:** numArray(8);

**Expected Output:** [0, 1, 2, 3, 4, 5, 6, 7, 8]

### Describe: replaceNumbers()

**Test:** "It should replace the number with and return the string "Beep!" if the number contains the number 1"

**Code:** numArray(15) replaceNumbers();

**Expected Output:** 0, "Beep!", 2, 3, 5, 6, 7, 8, 9, "Beep!", "Beep!", "Beep!", "Beep!", "Beep!", "Beep!"

**Test:** "It should replace the number with and return the string "Boop!" if the number contains the number 2"

**Code:** numArray(20) replaceNumbers();

**Expected Output:** 0, "Beep!", "Boop!", 3, 4, 5, 6, 7, 8, 9, "Beep!", "Beep!", "Beep!", "Beep!", "Beep!", "Beep!", "Beep!", "Beep!", "Beep!", "Beep!", "Boop!"

**Test:** "It should replace the number with and return the string "Won't you be my neighbor?" if the number contains the number 3"

**Code:** numArray(30) replaceNumbers();

**Expected Output:** 0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, "Beep!", "Beep!", "Beep!", "Beep!", "Beep!", "Beep!", "Beep!", "Beep!", "Beep!", "Beep!", "Boop!", "Boop!", "Boop!", "Boop!", "Boop!", "Boop!", "Boop!", "Boop!", "Boop!", "Boop!", "Won't you be my neighbor?"
