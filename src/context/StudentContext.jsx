import React, { createContext, useContext, useState } from 'react';
import { initialStudents } from '../data/studentsData';

// 1. Create Student Context using createContext()
export const StudentContext = createContext();

// 2. Custom Provider component to manage favourite students globally
export const StudentProvider = ({ children }) => {
  const [students] = useState(initialStudents);
  const [favourites, setFavourites] = useState([]);
  const [notification, setNotification] = useState(null);

  // Helper to show temporary feedback banner
  const triggerNotification = (message, type = 'info') => {
    setNotification({ message, type });
    setTimeout(() => {
      setNotification((curr) => (curr?.message === message ? null : curr));
    }, 3000);
  };

  // Add a student to favourites (prevents duplicate entries)
  const addToFavourites = (student) => {
    // Check if student already exists in favourites
    const isAlreadyFavourite = favourites.some(
      (item) => item.id === student.id || item.rollNumber === student.rollNumber
    );

    if (isAlreadyFavourite) {
      triggerNotification(`"${student.name}" is already in your favourites!`, 'warning');
      return false;
    }

    setFavourites((prevFavourites) => [...prevFavourites, student]);
    triggerNotification(`Added "${student.name}" to favourites!`, 'success');
    return true;
  };

  // Remove a student from favourites list
  const removeFromFavourites = (studentId) => {
    const studentToRemove = favourites.find((item) => item.id === studentId);
    setFavourites((prevFavourites) =>
      prevFavourites.filter((item) => item.id !== studentId)
    );
    if (studentToRemove) {
      triggerNotification(`Removed "${studentToRemove.name}" from favourites.`, 'info');
    }
  };

  // Helper to check if a student is already marked as favourite
  const isFavourite = (studentId) => {
    return favourites.some((item) => item.id === studentId);
  };

  // Clear all favourites
  const clearAllFavourites = () => {
    if (favourites.length === 0) return;
    setFavourites([]);
    triggerNotification('All favourite students removed.', 'info');
  };

  const contextValue = {
    students,
    favourites,
    addToFavourites,
    removeFromFavourites,
    isFavourite,
    clearAllFavourites,
    notification,
    setNotification
  };

  return (
    <StudentContext.Provider value={contextValue}>
      {children}
    </StudentContext.Provider>
  );
};

// 3. Custom hook to conveniently access the StudentContext
export const useStudentContext = () => {
  const context = useContext(StudentContext);
  if (!context) {
    throw new Error('useStudentContext must be used within a StudentProvider');
  }
  return context;
};

