📋 Automated Employee Onboarding System
ls a full-stack system that automates employee onboarding using checklists, task progress tracking and welcome emails.


---

🛠️ Tech Stack

Layer	Technologies

Frontend	Next.js, React.js, Tailwind CSS
Backend API	Node.js (Express), MongoDB, Nodemailer
Deployment	Docker



---

📁 Project Structure

project/
├── backend/       # Express backend API + email automation
└── frontend/      # React.js + Next.js admin dashboard & employee UI


---

⚙️ Backend Setup (/backend)

Prerequisites:

Node.js

MongoDB

Gmail account (for sending emails)


Setup:

cd backend
cp .env.example .env
# Fill MONGODB_URI, EMAIL_USERNAME, EMAIL_PASSWORD
npm install
npm start

.env Example:

MONGODB_URI=mongodb://localhost:27017/employees
EMAIL_USERNAME=youremail@gmail.com
EMAIL_PASSWORD=your_gmail_app_password

API Endpoints:

POST /api/employees — create employee and auto-send welcome email.

GET /api/employees — list employees.

GET /api/employees/:id — employee details.

DELETE /api/employees/:id — remove employee and tasks.

POST /api/tasks — create task.

GET /api/tasks/employee/:employeeId — tasks for employee.

PUT /api/tasks/:id — update task (e.g., mark complete).

DELETE /api/tasks/:id — delete task.



---

🎨 Frontend Setup (/frontend)

Setup:

cd frontend
npm install
npm run dev

Runs at:
http://localhost:3000

Features:

Admin dashboard:

View employees.

Navigate to individual task dashboards.


Employee view:

Checklist of onboarding tasks.

Visual task completion tracking.




---

🐳 Docker Deployment

Backend:

cd backend
docker build -t onboarding-backend .
docker run -p 8000:8000 onboarding-backend

Frontend:

cd frontend
docker build -t onboarding-frontend .
docker run -p 3000:3000 onboarding-frontend


---

🚀 Future Improvements

Email task reminders.

Role-based access control (admin vs employee).

Real-time updates via WebSockets.

Mobile-friendly UI.

OAuth login for employees.



---

📌 Author

Robert Chonge
📧 robertchonge07@gmail.com
