import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { StudentContext } from '../context/StudentContext';
import StudentCard from '../components/StudentCard';

const FavouriteStudentsPage = () => {
  // Use useContext hook to access and update the favourite student list globally
  const { favourites, clearAllFavourites } = useContext(StudentContext);

  return (
    <div className="page-wrapper">
      {/* Page Header */}
      <section className="page-header">
        <div className="header-content">
          <div className="title-area">
            <div className="page-title-badge">
              <span className="badge-star">⭐</span>
              <span className="badge-text">Personal Shortlist</span>
            </div>
            <h1 className="page-title">Favourite Students</h1>
            <p className="page-subtitle">
              Manage your selected favourite student profiles stored in global context.
            </p>
          </div>

          {favourites.length > 0 && (
            <div className="header-actions">
              <div className="stat-pill stat-pill-highlight">
                <span className="stat-label">Total Favourites:</span>
                <span className="stat-value">{favourites.length}</span>
              </div>
              <button
                onClick={clearAllFavourites}
                className="btn btn-clear-all"
                title="Remove all students from favourites"
              >
                Clear All Favourites
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Conditional Rendering */}
      <section className="students-grid-section">
        {favourites.length === 0 ? (
          // Required empty state message when no favourites are added
          <div className="empty-state empty-favourites-card">
            <div className="empty-illustration">⭐</div>
            <h2 className="empty-title">No favourite students added yet</h2>
            <p className="empty-desc">
              You haven't marked any students as favourites yet. Browse the student directory and click
              <strong> "Add to Favourite"</strong> on any student card to add them here!
            </p>
            {/* Link component for navigation back without full page reload */}
            <Link to="/" className="btn btn-primary">
              <span className="btn-icon">📋</span>
              <span>Browse Student List</span>
            </Link>
          </div>
        ) : (
          // Display favourite students dynamically using map()
          <div className="students-grid">
            {favourites.map((student) => (
              <StudentCard
                key={student.id}
                student={student}
                variant="favourite"
              />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default FavouriteStudentsPage;

