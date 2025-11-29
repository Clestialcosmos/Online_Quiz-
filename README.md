Frontend Engineering Quiz Application

A simple and interactive MCQ Quiz Web Application built using HTML, CSS, and JavaScript.
This project contains a login page, instructions page, and a randomized 15-question quiz generated from a question bank.

🚀 Features
✅ Login Page

User enters Name, Email, Password

On submit → redirected to the Instructions Page

📄 Instructions Page

Displays all exam rules

Contains a button to begin the quiz

Designed with a gradient background using external CSS

📝 Quiz Page

Displays one MCQ at a time

Questions are chosen randomly (15 out of many)

Provides Correct/Wrong feedback

Shows final score after completion

Option to restart the quiz

📦 JSON Question Bank

Large set of MCQs stored in Tanishq.json (50 questions total)

Used in attempt.js to generate random quizzes

📁 Project Structure
project/
│── REGISTRATION.HTML      # Login Page  
│── instruction.html       # Instructions Page
│── instruction.css        # Styling for instruction page
│── attempt.html           # Main Quiz Interface  
│── attempt.js             # Quiz Logic (JavaScript)
│── Tanishq.json           # Question Bank (50 MCQs)
│── README.md              # Project documentation

🧠 How the Quiz Works

On loading the quiz page (attempt.html), the script:

Loads all questions

Randomly shuffles them

Selects 15 MCQs

For each question:

User selects an option

Click Next

System checks the answer, updates score, and loads the next one

After the 15th question:

Final Score is shown

User can restart quiz

💡 Technologies Used
Component	Technology
Structure	HTML5
Styling	CSS3
Logic	JavaScript
Data Storage	JSON
▶️ How to Run the Project
Option 1: Open Locally

Download the entire project folder

Open REGISTRATION.HTML in any browser

Option 2: Using Live Server (Recommended)

If using VS Code:

Install Live Server Extension

Right click → "Open with Live Server"

🧪 Files Explanation
1. REGISTRATION.HTML

Simple login form

Validates required inputs

Redirects to instruction.html

2. instruction.html

Displays exam rules

Button leads to quiz page

Uses instruction.css

3. instruction.css

Creates gradient background

Styled box for instructions

4. attempt.html

Layout for quiz container

Loads quiz script (attempt.js)

5. attempt.js

Contains:

Question loading

Randomization logic

Answer validation

Score tracking

Quiz restart function

6. Tanishq.json

Complete MCQ question bank

Contains:

id

question

options

answer

topic

🛠️ Future Enhancements (Optional)

Add timer

Add scoreboard

Store results in localStorage

Add category-wise quiz

Use Tanishq.json dynamically (Fetch API)

👩‍💻 Author

Tanishq / Frontend Developer
