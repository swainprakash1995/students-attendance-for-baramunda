// Define students and their corresponding classes
const students = {
    "TOFAN": "10th",
    "PRAKASH": "10th",
    "DHRUV": "10th",
    "ANKIT": "10th",
    "AYUSH": "10th",
  "ARMAN": "9th",
  "BASUDEV": "9th",
  "SWAGAT": "9th",
  "TAPAS": "9th",
  "vVICTOR": "9th"
};

// Define subject-related questions
const subjectQuestions = {
    "math": [
        "What is 1+5=? \n A. 2 \n B. 3 \n C. 4 \n D. 6",
        "What is 4-2=? \n A. 2 \n B. 3 \n C. 4 \n D. 5",
        "What is 1+1=? \n A. 2 \n B. 3 \n C. 4 \n D. 5"
    ],
    "science": [
        "Where does the formation of Urea takes place in our body ? \n A. Pancreas \n B. Kidney \n C. Liver \n D. Lungs",
        "What is the freezing point of water as per the Fahrenheit scale? \n A. 0° \n B. 32° \n C. 100° \n D. 212°",
        "Which of the following scientific discoveries was made by C.V Raman? \n A. Inelastic scattering of light by molecules \n B. Super Conductivity \n C. Controlled nuclear fission \n D. Cyclotron"
    ],
    "history": [
        "Who was the first Prime Minister of independent India? \n A. Mahatma Gandhi \n B. Jawaharlal Nehru \n C. Subhas Chandra Bose \n D. Atal bihari baachpai",
        "The Indian Constitution was adopted on: \n A. 15th August 1947 \n B. 26th January 1950 \n C. 2nd October 1947 \n D. 20th October 1947",
        "Who was the first Emperor of the Maurya Dynasty? \n A. Samudragupta \n B. Ashoka \n C. Chandragupta Maurya \n D. Jahangir khan"
    ]
};

// Ask the user for confirmation to take attendance
const userConfirmation = confirm("Do you want to take attendance?");

let studentName = "";
if (userConfirmation) {    
    studentName = prompt("Please enter your name:");
    // Convert the student's name to lowercase for case-insensitive matching
    studentName = studentName.toLowerCase();

    if (students.hasOwnProperty(studentName)) {
        const studentClass = students[studentName];
        alert(`Welcome, ${studentName}! You are in class ${studentClass}.`);

        function takeAttendance(studentName) {    
            let attendance = [];
            let signIns = {};
            let work = {};
            let signOuts = {};
            
            let signInTime = prompt(`Enter sign-in time for ${studentName} (HH:MM AM/PM)`);    
            signIns[studentName] = signInTime;

            let subject = prompt(`Which subject do you want to study, ${studentName}? (e.g., Math, Science, History)`);    
            const subjectKey = subject.toLowerCase();
            work[studentName] = subjectKey;

            // Check if the subject has related questions
            if (subjectQuestions.hasOwnProperty(subjectKey)) {
                const questions = subjectQuestions[subjectKey];
                // Prompt the student with each question
                for (let i = 0; i < questions.length; i++) {
                    const answer = prompt(questions[i]);
                    // You can do something with the answer if needed
                }
            } else {
                alert("Invalid subject selected.");
            }
                    
            let signOutTime = prompt(`Enter sign-out time for ${studentName} (HH:MM AM/PM)`);    
            signOuts[studentName] = signOutTime;   
            return { attendance, signIns, work, signOuts };
        }

        function manageAttendance() {    
            if (userConfirmation) {        
                let { attendance, signIns, work, signOuts } = takeAttendance(studentName);
                
                // Show student's name, class, sign-in time, sign-out time, and subject
                alert(`Name: ${studentName}\nClass: ${studentClass}\nSign-in time: ${signIns[studentName]}\nSign-out time: ${signOuts[studentName]}\nSubject: ${work[studentName]}`);
            }
        }
        manageAttendance();
    } else {
        alert("Sorry, your name was not found in the list of students.");
    }
}
