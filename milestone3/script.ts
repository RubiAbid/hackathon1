// Function to add a new skill input field to the form
    function addNewSkillField(): void {
        const container = document.getElementById('skills-container') as HTMLDivElement;
        const newField = document.createElement('input');
        newField.type = 'text';
        newField.classList.add('skill-input');
        newField.placeholder = 'Enter a skill here';
        container.appendChild(newField);
    }
    
    // Function to add a new work experience field to the form
    function addNewWEField(): void {
        const container = document.getElementById('work-experience-container') as HTMLDivElement;
        const newField = document.createElement('textarea');
        newField.rows = 5;
        newField.placeholder = 'Enter your work experience here';
        container.appendChild(newField);
    }
    
    // Function to add a new academic qualification field to the form
    function addNewAcademicField(): void {
        const container = document.getElementById('academic-qualifications-container') as HTMLDivElement;
        const newField = document.createElement('textarea');
        newField.rows = 5;
        newField.placeholder = 'Enter your academic qualification here';
        container.appendChild(newField);
    }
    
    // Function to toggle between the resume builder and generated resume
    function toggleResumeView(): void {
        const resumeForm = document.getElementById('resume-form') as HTMLDivElement;
        const resumeTemplate = document.getElementById('resume-template') as HTMLDivElement;
    
        resumeForm.style.display = 'none';
        resumeTemplate.style.display = 'block';
    }
    
    // Function to reset the form and show the resume builder again
    function resetForm(): void {
        const formElements = document.querySelectorAll('#resumeForm input, #resumeForm textarea');
        formElements.forEach((element) => {
            (element as HTMLInputElement | HTMLTextAreaElement).value = '';
        });
    
        const resumeForm = document.getElementById('resume-form') as HTMLDivElement;
        const resumeTemplate = document.getElementById('resume-template') as HTMLDivElement;
        resumeForm.style.display = 'block';
        resumeTemplate.style.display = 'none';
    }
    
    // Function to generate the CV and toggle the view
    function generateCV(): void {
        const fullName = (document.getElementById('full-name') as HTMLInputElement).value;
        const contactNumber = (document.getElementById('contact-number') as HTMLInputElement).value;
        const email = (document.getElementById('email') as HTMLInputElement).value;
        const linkedin = (document.getElementById('linkedin') as HTMLInputElement).value;
    
        (document.getElementById('nameT1') as HTMLElement).innerText = fullName;
        (document.getElementById('nameT2') as HTMLElement).innerText = fullName;
        (document.getElementById('contactT') as HTMLElement).innerText = contactNumber;
        (document.getElementById('emailT') as HTMLElement).innerText = email;
        (document.getElementById('linkedinT') as HTMLElement).innerText = linkedin;
    
        const objective = (document.getElementById('objective') as HTMLTextAreaElement).value;
        (document.getElementById('objectiveT') as HTMLElement).innerText = objective;
    
        const workExperienceFields = document.querySelectorAll('#work-experience-container textarea');
        const workExperienceList = document.getElementById('weT') as HTMLUListElement;
        workExperienceList.innerHTML = '';
        workExperienceFields.forEach((field) => {
            const li = document.createElement('li');
            li.innerText = (field as HTMLTextAreaElement).value;
            workExperienceList.appendChild(li);
        });
    
        const academicQualificationFields = document.querySelectorAll('#academic-qualifications-container textarea');
        const academicQualificationList = document.getElementById('aqT') as HTMLUListElement;
        academicQualificationList.innerHTML = '';
        academicQualificationFields.forEach((field) => {
            const li = document.createElement('li');
            li.innerText = (field as HTMLTextAreaElement).value;
            academicQualificationList.appendChild(li);
        });
    
        const skillsList = document.getElementById('skillsT') as HTMLUListElement;
        const skillInputs = document.querySelectorAll('#skills-container input');
        skillsList.innerHTML = '';
        skillInputs.forEach((input) => {
            if ((input as HTMLInputElement).value) {
                const listItem = document.createElement('li');
                listItem.innerText = (input as HTMLInputElement).value;
                skillsList.appendChild(listItem);
            }
        });
    
        toggleResumeView();
    }
    
    // Function to print the CV
    function printCV(): void {
        window.print();
    }
 
    // Attach functions to the global window object for access in HTML
    (window as any).generateCV = generateCV;
    (window as any).resetForm = resetForm;
    (window as any).addNewSkillField = addNewSkillField;
    (window as any).addNewWEField = addNewWEField;
    (window as any).addNewAcademicField = addNewAcademicField;
    (window as any).printCV = printCV;