# 🎓 Favourite Student List

A modern React application demonstrating **Client-Side Routing with React Router (v6)** and **Global State Management with `createContext` and `useContext`**.

---

## 🚀 Key Features

1. **React Functional Components & Hooks**:
   - Modern React with functional components, `useState`, `useContext`, `useMemo`, and custom context providers.

2. **React Router Multi-Page Navigation**:
   - **Student List Page (`/`)**: Displays all students directory with dynamic search and department filtering.
   - **Favourite Students Page (`/favourites`)**: Dedicated page showing the shortlist of favourite students.
   - Seamless navigation using the `<Link>` component without full-page reloads.

3. **Global State with `useContext` & `createContext`**:
   - Single source of truth for favourite students across all components and pages (`Navbar`, `StudentListPage`, `FavouriteStudentsPage`, `StudentCard`).

4. **Dynamic Rendering (`.map()`)**:
   - Dynamic rendering of student cards containing complete student profiles:
     - Name
     - Roll Number / Student ID
     - Department & Year
     - Email Address
     - CGPA Rating
     - Skill Tags

5. **Duplicate Prevention**:
   - Logic in `StudentContext` checks if a student ID or roll number is already present before adding.
   - Visual feedback via status badge, disabled/styled button, and toast notification.

6. **Removal & Empty State**:
   - Easy one-click removal of individual students or clearing the whole list.
   - Conditional rendering displays the message: **"No favourite students added yet"** with a direct call-to-action link to browse the directory when the list is empty.

7. **Instant UI Feedback**:
   - Notification toasts when students are added, removed, or when duplicates are prevented.
   - Live badge counter in the Navbar showing the exact count of favourite students with pulse animation.

---

## 📁 Project Structure

```text
project 9/
├── index.html                  # HTML template with Google Fonts
├── package.json                # Project dependencies & scripts
├── vite.config.js              # Vite configuration
├── README.md                   # Documentation
└── src/
    ├── main.jsx                # Application root entry point
    ├── App.jsx                 # Routes & Context Provider wrapper
    ├── index.css               # Modern responsive styling
    ├── context/
    │   └── StudentContext.jsx  # createContext & useContext logic
    ├── data/
    │   └── studentsData.js     # Student array of objects
    ├── components/
    │   ├── Navbar.jsx          # Top navigation with <Link> & badge
    │   ├── StudentCard.jsx     # Card component with Add/Remove action
    │   └── NotificationBanner.jsx # Toast alerts
    └── pages/
        ├── StudentListPage.jsx     # All students directory page
        └── FavouriteStudentsPage.jsx # Favourite students page
```

---

## 🛠️ How to Run

1. Open your terminal in this directory:
   ```bash
   cd "e:\FSWD\React\project 9"
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser at:
   ```
   http://localhost:5173
   ```

4. To create a production build:
   ```bash
   npm run build
   ```

