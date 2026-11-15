import React, { useContext, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { StudentContext } from '../context/StudentContext';
import StudentCard from '../components/StudentCard';

const StudentListPage = () => {
  // Use useContext hook to access the students list and favourites
  const { students, favourites } = useContext(StudentContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDept, setSelectedDept] = useState('All');

  // Extract unique departments for filtering
  const departments = useMemo(() => {
    const depts = new Set(students.map((s) => s.department));
    return ['All', ...Array.from(depts)];
  }, [students]);

  // Filter students dynamically based on search and department
  const filteredStudents = useMemo(() => {
    return students.filter((student) => {
      const matchesSearch =
        student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.rollNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.email.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesDept = selectedDept === 'All' || student.department === selectedDept;

      return matchesSearch && matchesDept;
    });
  }, [students, searchTerm, selectedDept]);

  return (
    <div className="page-wrapper">
      {/* Hero / Page Header */}
      <section className="page-header">
        <div className="header-content">
          <div className="title-area">
            <h1 className="page-title">Student Directory</h1>
            <p className="page-subtitle">
              Browse student profiles and save your standout candidates to your Favourite list.
            </p>
          </div>

          <div className="stats-badges">
            <div className="stat-pill">
              <span className="stat-label">Total Students:</span>
              <span className="stat-value">{students.length}</span>
            </div>
            <Link to="/favourites" className="stat-pill stat-pill-highlight">
              <span className="stat-label">Favourites Saved:</span>
              <span className="stat-value">⭐ {favourites.length}</span>
            </Link>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="filter-bar">
          <div className="search-input-wrapper">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder="Search by name, roll number, or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            {searchTerm && (
              <button
                className="clear-search-btn"
                onClick={() => setSearchTerm('')}
                title="Clear search"
              >
                ✕
              </button>
            )}
          </div>

          <div className="dept-select-wrapper">
            <label htmlFor="dept-select" className="dept-label">Filter Department:</label>
            <select
              id="dept-select"
              value={selectedDept}
              onChange={(e) => setSelectedDept(e.target.value)}
              className="dept-select"
            >
              {departments.map((dept) => (
                <option key={dept} value={dept}>
                  {dept}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Dynamic Student Grid using map() */}
      <section className="students-grid-section">
        {filteredStudents.length > 0 ? (
          <div className="students-grid">
            {filteredStudents.map((student) => (
              <StudentCard key={student.id} student={student} variant="list" />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <div className="empty-icon">🔎</div>
            <h3>No matching students found</h3>
            <p>Try refining your search keyword or reset the department filter.</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedDept('All');
              }}
              className="btn btn-outline"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default StudentListPage;

