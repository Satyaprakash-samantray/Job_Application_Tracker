# Job Application Tracker

## Overview
The **Job Application Tracker** is a web-based application designed to help job seekers efficiently manage their job applications. It allows users to track job applications, record details such as company names, job roles, application statuses, and interview dates, and receive reminders for follow-ups.

## Features
- **User Authentication**: Secure login and signup functionality.
- **Application Management**: Add, edit, and delete job applications.
- **Status Tracking**: Track application status (e.g., Applied, Interview Scheduled, Offer Received, Rejected).
- **Responsive Design**: Mobile-friendly and accessible from any device.

## Tech Stack
- **Frontend**: HTML, CSS, JavaScript
- **Authentication**: Session-based authentication
- **Deployment**: Apache Tomcat

## Installation & Setup
### Prerequisites
- Java Development Kit (JDK)
- Apache Tomcat
- MySQL Database
- A web browser

### Steps
1. Clone the repository:
   ```sh
   git clone https://github.com/satyaprakash-samantray/job-application-tracker.git
   cd job-application-tracker
   ```
2. Set up the database:
   - Create a MySQL database named `job_tracker`.
   - Import the SQL schema provided in `database/schema.sql`.
3. Configure database connection:
   - Update `DatabaseConnection.java` with your MySQL credentials.
4. Deploy the project on Tomcat:
   - Place the project files in the Tomcat `webapps` directory.
   - Start the Tomcat server and access the application at `http://localhost:8080/job-tracker`.

## Usage
1. **Sign Up / Login** to create an account.
2. **Add a new job application** by filling in the job details.
3. **Update the application status** as you progress through the hiring process.
4. **Set reminders** for follow-ups and interviews.
5. **Filter and search** applications for easy access.

## Future Enhancements
- Resume and cover letter upload feature.
- Email integration for automatic status updates.
- Analytics dashboard for tracking application trends.

## Contributing
Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch (`feature/job-trecker`).
3. Commit your changes and push to your fork.
4. Submit a pull request.


## Contact
For any queries or suggestions, feel free to reach out via [satyaprakashsamantray@gmail.com] or create an issue in the repository.

