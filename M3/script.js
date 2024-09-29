// Get Referencess //
var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
// Handel forms Submission //
form.addEventListener('submit', function (event) {
    event.preventDefault();
    //Collect Input Values//
    var Name = document.getElementById('Name').value;
    var Father_Name = document.getElementById('Father Name').value;
    var E_Mail = document.getElementById('E-Mail').value;
    var DOB = document.getElementById('DOB').value;
    var Phone_Number = document.getElementById('Phone Number').value;
    var Education = document.getElementById('Education').value;
    var Experience = document.getElementById('Experience').value;
    var Skills = document.getElementById('Skills').value;
    // Generate The Resume //
    var resumeHTML = "\n    <h2><b>Resume</b><h2>\n    <h3>Personal Information</h3>\n    <p><b>Name:</b>".concat(Name, "</p>\n    <p><b>Father Name:</b>").concat(Father_Name, "</p>\n    <p><b>E-Mail:</b>").concat(E_Mail, "</p>\n    <p><b>DOB:</b>").concat(DOB, "</p>\n    <p><b>Phone Number:</b>").concat(Phone_Number, "</p>\n\n    <h3>Education</h3>\n    <p>").concat(Education, "</p>\n\n    <h3>Experience</h3>\n    <p>").concat(Experience, "</p>\n    \n    <h3>Skills</h3>\n    <p>").concat(Skills, "</p>\n    ");
    //Display Resume //
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The Resume Display Element is Missing. ');
    }
});
