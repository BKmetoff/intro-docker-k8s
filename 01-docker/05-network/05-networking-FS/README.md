This project is part of the [Docker & Kubernetes: The Practical Guide](https://www.udemy.com/course/docker-kubernetes-the-practical-guide/) Udemy course

### Purpose:

Practice dockerizing a multi-container application with persistent storage.
The application consists of a NodeJS REST API and a ReactJS SPA services, and uses MongoDB to persist data.

### Requirements:

mongodb:

- course-goals db should persist
- access should be limited to an admin user

backend:

- API logs in `./backend/logs/access.log` should persist
- running container should have live source code update

frontend:

- running container should have live source code update
