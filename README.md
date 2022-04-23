Describe: numArray()

Test: "It should return an array of numbers from 0 to the user's inputted number"
Code: numArray(8);
Expected Output: [0, 1, 2, 3, 4, 5, 6, 7, 8]

Describe: replaceNumbers()

Test: "It should replace the number with and return the string "Beep!" if the number contains the number 1"
Code: numArray(15) replaceNumbers();
Expected Output: 0, "Beep!", 2, 3, 5, 6, 7, 8, 9, "Beep!", "Beep!", "Beep!", "Beep!", "Beep!", "Beep!"

Test: "It should replace the number with and return the string "Boop!" if the number contains the number 2"
Code: numArray(20) replaceNumbers();
Expected Output: 0, "Beep!", "Boop!", 3, 4, 5, 6, 7, 8, 9, "Beep!", "Beep!", "Beep!", "Beep!", "Beep!", "Beep!", "Beep!", "Beep!", "Beep!", "Beep!", "Boop!"

Test: "It should replace the number with and return the string "Won't you be my neighbor?" if the number contains the number 3"
Code: numArray(30) replaceNumbers();
Expected Output: 0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, "Beep!", "Beep!", "Beep!", "Beep!", "Beep!", "Beep!", "Beep!", "Beep!", "Beep!", "Beep!", "Boop!", "Boop!", "Boop!", "Boop!", "Boop!", "Boop!", "Boop!", "Boop!", "Boop!", "Boop!", "Won't you be my neighbor?"
