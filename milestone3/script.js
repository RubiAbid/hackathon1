// Function to add a new skill input field to the form
function addNewSkillField() {
    var container = document.getElementById('skills-container');
    var newField = document.createElement('input');
    newField.type = 'text';
    newField.classList.add('skill-input');
    newField.placeholder = 'Enter a skill here';
    container.appendChild(newField);
}
// Function to add a new work experience field to the form
function addNewWEField() {
    var container = document.getElementById('work-experience-container');
    var newField = document.createElement('textarea');
    newField.rows = 5;
    newField.placeholder = 'Enter your work experience here';
    container.appendChild(newField);
}
// Function to add a new academic qualification field to the form
function addNewAcademicField() {
    var container = document.getElementById('academic-qualifications-container');
    var newField = document.createElement('textarea');
    newField.rows = 5;
    newField.placeholder = 'Enter your academic qualification here';
    container.appendChild(newField);
}
// Function to toggle between the resume builder and generated resume
function toggleResumeView() {
    var resumeForm = document.getElementById('resume-form');
    var resumeTemplate = document.getElementById('resume-template');
    resumeForm.style.display = 'none';
    resumeTemplate.style.display = 'block';
}
// Function to reset the form and show the resume builder again
function resetForm() {
    var formElements = document.querySelectorAll('#resumeForm input, #resumeForm textarea');
    formElements.forEach(function (element) {
        element.value = '';
    });
    var resumeForm = document.getElementById('resume-form');
    var resumeTemplate = document.getElementById('resume-template');
    resumeForm.style.display = 'block';
    resumeTemplate.style.display = 'none';
}
// Function to generate the CV and toggle the view
function generateCV() {
    var fullName = document.getElementById('full-name').value;
    var contactNumber = document.getElementById('contact-number').value;
    var email = document.getElementById('email').value;
    var linkedin = document.getElementById('linkedin').value;
    document.getElementById('nameT1').innerText = fullName;
    document.getElementById('nameT2').innerText = fullName;
    document.getElementById('contactT').innerText = contactNumber;
    document.getElementById('emailT').innerText = email;
    document.getElementById('linkedinT').innerText = linkedin;
    var objective = document.getElementById('objective').value;
    document.getElementById('objectiveT').innerText = objective;
    var workExperienceFields = document.querySelectorAll('#work-experience-container textarea');
    var workExperienceList = document.getElementById('weT');
    workExperienceList.innerHTML = '';
    workExperienceFields.forEach(function (field) {
        var li = document.createElement('li');
        li.innerText = field.value;
        workExperienceList.appendChild(li);
    });
    var academicQualificationFields = document.querySelectorAll('#academic-qualifications-container textarea');
    var academicQualificationList = document.getElementById('aqT');
    academicQualificationList.innerHTML = '';
    academicQualificationFields.forEach(function (field) {
        var li = document.createElement('li');
        li.innerText = field.value;
        academicQualificationList.appendChild(li);
    });
    var skillsList = document.getElementById('skillsT');
    var skillInputs = document.querySelectorAll('#skills-container input');
    skillsList.innerHTML = '';
    skillInputs.forEach(function (input) {
        if (input.value) {
            var listItem = document.createElement('li');
            listItem.innerText = input.value;
            skillsList.appendChild(listItem);
        }
    });
    toggleResumeView();
}
// Function to print the CV
function printCV() {
    window.print();
}
// Attach functions to the global window object for access in HTML
window.generateCV = generateCV;
window.resetForm = resetForm;
window.addNewSkillField = addNewSkillField;
window.addNewWEField = addNewWEField;
window.addNewAcademicField = addNewAcademicField;
window.printCV = printCV;
