
const jsonMCQs = [
  { question: "What does HTML stand for?", options: ["Hyper Text Markup Language", "Hyperlink and Text Markup Language", "Home Tool Markup Language", "Hyper Text Multi Language"], answer: "Hyper Text Markup Language" },
  { question: "Which HTML element is used to define the title of a document?", options: ["meta", "head", "title", "body"], answer: "title" },
  { question: "Which tag is used to create a hyperlink in HTML?", options: ["link", "a", "href", "url"], answer: "a" },
  { question: "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?", options: ["src", "title", "alt", "longdesc"], answer: "alt" },
  { question: "Which HTML element defines a paragraph?", options: ["para", "p", "text", "line"], answer: "p" },
  { question: "Which HTML element is used for short quotes?", options: ["q", "quote", "bq", "blockquote"], answer: "q" },
  { question: "Which HTML element is used to display a numbered list?", options: ["ul", "list", "ol", "dl"], answer: "ol" },
  { question: "Which HTML element defines video or movie content?", options: ["movie", "video", "media", "source"], answer: "video" },
  { question: "Which attribute is used to group related elements in a web form?", options: ["group", "fieldset", "formgroup", "section"], answer: "fieldset" },
  { question: "Which HTML tag is the root element of an HTML page?", options: ["head", "body", "html", "root"], answer: "html" },
  { question: "What does CSS stand for?", options: ["Creative Style Sheets", "Cascading Style Sheets", "Colorful Style Sheets", "Computer Style Sheets"], answer: "Cascading Style Sheets" },
  { question: "Which is the correct CSS syntax for making all the <p> elements bold?", options: ["p {font-weight: bold;}", "p.bold {text-decoration: bold;}", "'p style=\"text-size: bold;\"'", "<p style='font-weight:bold;'>"], answer: "p {font-weight: bold;}" },
  { question: "How do you insert a comment in a CSS file?", options: ["// this is a comment", "/* this is a comment */", "!-- this is a comment --", "\\this is a comment"], answer: "/* this is a comment */" },
  { question: "Which CSS property controls the text size?", options: ["text-size", "font-size", "text-style", "font-style"], answer: "font-size" },
  { question: "Which property is used to change the background color?", options: ["color", "bgcolor", "background-color", "background"], answer: "background-color" },
  { question: "Which CSS property is used to add shadows to elements?", options: ["shadow", "box-shadow", "element-shadow", "display-shadow"], answer: "box-shadow" },
  { question: "Which of the following describes the initial values of flex items if you only apply `display: flex` to the parent?", options: ["Items stretch to fit the container and stack vertically.", "Items shrink to fit the content size and stack horizontally.", "Items stretch to fit the container and stack horizontally.", "Items remain their original size and stack vertically."], answer: "Items stretch to fit the container and stack horizontally." },
  { question: "What is the correct CSS for a red background color?", options: ["body.color=red", "body {background-color: red;}", "{body:color=red;}", "{body;background-color:red;}"], answer: "body {background-color: red;}" },
  { question: "Which CSS property is used to change the font of an element?", options: ["font-name", "font", "font-family", "typeface"], answer: "font-family" },
  { question: "How do you select an element with id 'header'?", options: [".header", "#header", "*header", "header"], answer: "#header" },
  { question: "What is the correct syntax for referring to an external script called 'script.js'?", options: ["script name='script.js'", "script src='script.js'", "script href='script.js'", "script rel='script.js'"], answer: "script src='script.js'" },
  { question: "How do you write 'Hello World' in an alert box using JavaScript?", options: ["msg('Hello World');", "alertBox('Hello World');", "alert('Hello World');", "msgBox('Hello World');"], answer: "alert('Hello World');" },
  { question: "How do you create a function in JavaScript?", options: ["function myFunction()", "function:myFunction()", "function = myFunction()", "def myFunction()"], answer: "function myFunction()" },
  { question: "How do you call a function named 'myFunction'?", options: ["call myFunction()", "myFunction()", "run myFunction()", "execute myFunction()"], answer: "myFunction()" },
  { question: "How to write an IF statement in JavaScript?", options: ["if (i == 5)", "if i == 5 then", "if i = 5", "if (i == 5) then"], answer: "if (i == 5)" },
  { question: "How does a FOR loop start?", options: ["for (i = 0; i <= 5; i++)", "for i = 1 to 5", "for (i <= 5; i++)", "for (i = 0; i <= 5)"], answer: "for (i = 0; i <= 5; i++)" },
  { question: "How can you add a comment in a JavaScript?", options: ["<!--This is a comment-->", "'This is a comment'", "//This is a comment", "*This is a comment*"], answer: "//This is a comment" },
  { question: "Which operator is used to assign a value to a variable?", options: ["*", "-", "=", "x"], answer: "=" },
  { question: "Which of the following is not a JavaScript framework?", options: ["React", "Angular", "Vue", "Laravel"], answer: "Laravel" },
  { question: "Which method can be used to display data in some form using JavaScript?", options: ["document.write()", "console.log()", "alert()", "All of the above"], answer: "All of the above" },
  { question: "Which keyword is used to declare a constant variable in JavaScript?", options: ["var", "let", "const", "static"], answer: "const" },
  { question: "What is the purpose of the `DOM` in web development?", options: ["To style HTML elements", "To manage server-side logic", "To create databases", "To provide a structured representation of the document"], answer: "To provide a structured representation of the document" },
  { question: "Which function is used to convert a JavaScript object into a JSON string?", options: ["JSON.parse()", "JSON.toObject()", "JSON.stringify()", "JSON.toString()"], answer: "JSON.stringify()" },
  { question: "Which function is used to convert JSON text into a JavaScript object?", options: ["JSON.stringify()", "JSON.parse()", "JSON.toObject()", "JSON.decode()"], answer: "JSON.parse()" },
  { question: "What is the correct MIME type for JSON text?", options: ["text/json", "application/js", "application/xml", "application/json"], answer: "application/json" },
  { question: "Can you use comments inside a JSON file?", options: ["Yes, using //", "Yes, using /* */", "No, JSON does not support comments", "Yes, using <!-- -->"], answer: "No, JSON does not support comments" },
  { question: "In JSON, data is in ____ pairs.", options: ["class/object", "name/value", "datatype/variable", "key/data"], answer: "name/value" },
  { question: "Which of these is not a valid JSON data type?", options: ["string", "number", "date", "boolean"], answer: "date" },
  { question: "In the JSON syntax, arrays are written within which of the following?", options: ["Square brackets []", "Curly braces {}", "Parentheses ()", "Angle brackets <>"], answer: "Square brackets []" },
  { question: "Which of the following is a common use of JSON?", options: ["To store information locally", "To exchange data to/from a web server", "To update data into the database", "To create web pages"], answer: "To exchange data to/from a web server" },
  { question: "What does API stand for in the context of web development?", options: ["Application Programming Interface", "Advanced Programming Interface", "Automated Programming Interface", "Application Process Integration"], answer: "Application Programming Interface" },
  { question: "Which HTTP method is typically used to retrieve data from a server?", options: ["POST", "PUT", "GET", "DELETE"], answer: "GET" },
  { question: "Which term refers to the process of converting an object into a string format for transmission or storage?", options: ["Deserialization", "Parsing", "Stringification", "Serialization"], answer: "Serialization" },
  { question: "What is the 'box model' in CSS?", options: ["A way to create 3D effects", "A layout technique using flexbox", "A container that holds the border, padding, margin, and actual content of an element", "A method for aligning elements vertically"], answer: "A container that holds the border, padding, margin, and actual content of an element" },
  { question: "Which JavaScript method is used to access HTML elements using their ID?", options: ["document.getElementsByClass()", "document.querySelector()", "document.getElementById()", "document.getElementByName()"], answer: "document.getElementById()" },
  { question: "What is the 'event loop' in JavaScript?", options: ["A loop for iterating over arrays", "A mechanism that allows JavaScript to perform non-blocking I/O operations despite being single-threaded", "A method for handling user input events", "A type of a for loop with specific conditions"], answer: "A mechanism that allows JavaScript to perform non-blocking I/O operations despite being single-threaded" },
  { question: "What is the primary purpose of a CSS preprocessor like Sass?", options: ["To compile CSS into another language", "To enable server-side CSS execution", "To add features like variables and nesting to CSS and compile them into standard CSS", "To compress CSS files for faster loading"], answer: "To add features like variables and nesting to CSS and compile them into standard CSS" },
  { question: "Which new feature in HTML5 provides a way to draw graphics on a web page dynamically?", options: ["svg", "canvas", "graphic", "draw"], answer: "canvas" },
  { question: "What are Promises in JavaScript used for?", options: ["To handle synchronous operations", "To store data temporarily", "To manage asynchronous operations more effectively than callbacks", "To create complex loops"], answer: "To manage asynchronous operations more effectively than callbacks" },
  { question: "Which HTML5 element is used to embed audio content on a web page?", options: ["sound", "audio", "music", "media"], answer: "audio" }
];

const random15 = jsonMCQs.sort(() => Math.random() - 0.5).slice(0, 15);

let currentIndex = 0;
let score = 0;

function quiz() {
  const abc = random15[currentIndex];   
  document.getElementById("que").innerHTML = "Question: " + abc.question;

  let optionsHTML = "";
  for (let i = 0; i < abc.options.length; i++) {
    optionsHTML +=
      "<label><input type='radio' name='option' value='" +
      abc.options[i] +
      "'> " +
      abc.options[i] +
      "</label><br>";
  }
  document.getElementById("options").innerHTML = optionsHTML;
}
function submitAnswer() {
  const selected = document.querySelector("input[name='option']:checked");

  if (!selected) {
    alert("Please select an option first.");
    return;
  }

  if (selected.value === random15[currentIndex].answer) {
    score++;
    document.getElementById("result").innerHTML = "✅ Correct!";
  } else {
    document.getElementById("result").innerHTML =
      "❌ Wrong! Correct answer: " + random15[currentIndex].answer;
  }

  setTimeout(() => {
    currentIndex++;
    if (currentIndex < random15.length) {
      quiz();
    } else {
      document.getElementById("quiz-container").innerHTML =
        "<h2>Your Score: " + score + " out of " + random15.length + "</h2>" +
        "<button onclick='restartQuiz()'>Restart Quiz</button>";
    }
  }, 1000); 
}
