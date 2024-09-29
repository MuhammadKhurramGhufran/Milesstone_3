// Get Referencess //
const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;

// Handel forms Submission //
form.addEventListener('submit', (event: Event) => {
    event.preventDefault();

    //Collect Input Values//

    const Name = (document.getElementById('Name') as HTMLInputElement).value
    const Father_Name = (document.getElementById('Father Name') as HTMLInputElement).value
    const E_Mail = (document.getElementById('E-Mail') as HTMLInputElement).value
    const  DOB = (document.getElementById('DOB') as HTMLInputElement).value
    const Phone_Number = (document.getElementById('Phone Number') as HTMLInputElement).value
    const Education = (document.getElementById('Education') as HTMLInputElement).value
    const Experience = (document.getElementById('Experience') as HTMLInputElement).value
    const Skills = (document.getElementById('Skills') as HTMLInputElement).value 
     
    // Generate The Resume //
    
    const resumeHTML = `
    <h2><b>Resume</b><h2>
    <h3>Personal Information</h3>
    <p><b>Name:</b>${Name}</p>
    <p><b>Father Name:</b>${Father_Name}</p>
    <p><b>E-Mail:</b>${E_Mail}</p>
    <p><b>DOB:</b>${DOB}</p>
    <p><b>Phone Number:</b>${Phone_Number}</p>

    <h3>Education</h3>
    <p>${Education}</p>

    <h3>Experience</h3>
    <p>${Experience}</p>
    
    <h3>Skills</h3>
    <p>${Skills}</p>
    `;
    //Display Resume //
    if(resumeDisplayElement){
        resumeDisplayElement.innerHTML = resumeHTML;
    }else {
        console.error('The Resume Display Element is Missing. ');

    }
});