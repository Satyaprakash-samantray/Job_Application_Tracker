document.addEventListener('DOMContentLoaded', () => {
    const jobForm = document.getElementById('jobForm');
    const applicationsContainer = document.getElementById('applications');

    jobForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const company = document.getElementById('company').value;
        const position = document.getElementById('position').value;
        const status = document.getElementById('status').value;

        addApplication(company, position, status);

        jobForm.reset();
    });

    const addApplication = (company, position, status) => {
        const applicationDiv = document.createElement('div');
        applicationDiv.classList.add('application');

        const applicationDetails = `
            <p><strong>Company:</strong> ${company}</p>
            <p><strong>Position:</strong> ${position}</p>
            <p><strong>Status:</strong> ${status}</p>
        `;

        applicationDiv.innerHTML = applicationDetails;

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete');
        deleteButton.innerHTML = '&times;';
        deleteButton.addEventListener('click', () => {
            applicationsContainer.removeChild(applicationDiv);
        });

        applicationDiv.appendChild(deleteButton);
        applicationsContainer.appendChild(applicationDiv);
    };
});