# Restaurant Management System

This is an interactive web project designed to manage and book restaurant tables. Built with **Spring Boot** for the backend and **React.js** for the frontend, the project has two main modules:
1. **Admin Dashboard**: Enables administrators to manage tables (CRUD: Create, Read, Update, Delete).
2. **Client Interface**: Provides an interactive way for customers to view and book tables in a realistic restaurant layout.

---

## **Technologies Used**

### **Frontend:**
- **React.js**: Component-based architecture for creating user interfaces.
- **CSS**: Dedicated styling for the Admin and Client modules.
- **React Router**: Facilitates navigation between the Admin and Client interfaces.
- **Axios**: Manages API requests between frontend and backend.

### **Backend:**
- **Spring Boot**: Framework for building REST APIs.
- **PostgreSQL**: Database
- **Maven**: Dependency and build management tool.

---

## **Implemented Features**

### **1. Admin Dashboard**
- **Add Tables**: Administrators can add tables by specifying:
  - Table number
  - Seating capacity
  - Status (e.g., "available", "reserved")
- **Delete Tables**: Tables can be removed from the restaurant layout.
- **Edit Tables**: Modify the details of existing tables.
- **User-Friendly Interface**: Built with dedicated styling in `AdminApp.css`.

### **2. Client Interface**
- **Restaurant Layout Visualization**: Interactive restaurant layout showing all tables, with personalized positioning.
- **Table Booking**: Customers can select available tables to reserve. Once reserved, the table's status updates automatically.
- **Interactive Elements**:
  - **Different Colors**: Green for available tables, red for reserved ones.
  - **Tooltips**: Hover over a table to view details like its number and seating capacity.
  - **Optional Background Image**: A visual representation of the restaurant floor for realism.



**Still working to add more functionalities.**

