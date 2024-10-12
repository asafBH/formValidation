Registration Form with Validation
This project is a simple registration form built using HTML, CSS, and JavaScript. It demonstrates how to validate user input and ensures that the form is responsive across different screen sizes.

Features
Form Validation:
Name must contain only letters and be at least 5 characters long.
Address must be between 5 and 50 characters.
Error Feedback:
Error messages appear below input fields when validation fails.
Responsive Design:
The form layout adjusts for mobile and desktop screens.
Interactive Elements:
Button hover effects for improved user experience.
Project Structure
bash
Copy code
project-folder  
│  
├── index.html        # HTML structure of the form  
├── form.css          # Styling for the form  
├── formValid.js      # JavaScript for form validation  
└── README.md         # Documentation (this file)
How to Use
Clone or Download the Project:
bash
Copy code
git clone https://github.com/your-username/registration-form.git
cd registration-form
Open the index.html file in any web browser.

Form Inputs & Behavior:

Name: Must contain only letters and be at least 5 characters long.
Address: Must be between 5 and 50 characters.
Submit Button: If inputs are valid, the form submits (you can customize the action). If not, error messages are shown.
Code Overview
HTML (index.html)

Defines the structure of the form with <input> fields for name and address.
Uses the <form> tag with the onsubmit event to trigger JavaScript validation.
CSS (form.css)

Styles the form to be centered, visually appealing, and responsive.
Includes input focus effects and hover animations for the submit button.
JavaScript (formValid.js)

Contains a validateForm() function to ensure inputs meet required conditions.
Uses regular expressions to validate the name field.
Displays error messages dynamically based on user input.
Technologies Used
HTML5
CSS3
JavaScript (ES6)
Improvements and Future Enhancements
Add more fields (like email and phone number) with appropriate validation.
Implement a backend to store submitted form data.
Use a modal confirmation dialog on successful submission.
License
This project is licensed under the MIT License – feel free to use, modify, and distribute it as needed.

Author
Created by Assaf Ben Horin
