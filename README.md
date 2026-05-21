# Student Management Backend API

A simple Student Management Backend API built using Node.js, Express.js, MongoDB Atlas, and Mongoose.

---

## Features

- Add Student
- Get All Students
- Get Single Student
- Search Students by Name
- Update Student Details
- Delete Student
- MongoDB Database Integration
- REST API
- Render Deployment

---

## Technologies Used

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- Render
- Postman
- GitHub

---

## Database

MongoDB Atlas is used as the cloud database.

### Database Name
studentDB

### Collection Name
students

---

## API Endpoints

### Home Route

GET /

### Create Student

POST /student

### Get All Students

GET /student

### Get Single Student

GET /student/:id

### Search Student

GET /search?name=Prithihaa

### Update Student

PUT /student/:id

### Delete Student

DELETE /student/:id

---

## Sample JSON Data

```json
{
  "name": "Prithihaa",
  "email": "prithi@gmail.com",
  "age": 20,
  "gender": "Female",
  "phone": 9876543210,
  "course": "MTech",
  "department": "Software Engineering",
  "city": "Chennai"
}
```

---

## Live Deployment

Backend deployed using Render.

### Live URL

https://backend-2026-827x.onrender.com

---

## Author

Prithihaa D
Integrated M.Tech Software Engineering
VIT Chennai
