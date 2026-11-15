import React, { useContext } from 'react';
import { StudentContext } from '../context/StudentContext';

const StudentCard = ({ student, variant = 'list' }) => {
  // Use useContext hook to access favourite actions and state
  const { addToFavourites, removeFromFavourites, isFavourite } = useContext(StudentContext);

  const isFav = isFavourite(student.id);

  // Generate initials for avatar
  const initials = student.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2);

  return (
    <div className={`student-card ${isFav ? 'is-favourite' : ''}`}>
      {/* Top Header with Avatar & Status */}
      <div className="card-header">
        <div
          className="student-avatar"
          style={{
            backgroundColor: student.color || '#4f46e5',
            color: '#ffffff'
          }}
        >
          {initials}
        </div>
        <div className="student-header-info">
          <div className="student-name-row">
            <h3 className="student-name">{student.name}</h3>
            {isFav && (
              <span className="fav-star-badge" title="Favourite Student">
                ⭐ Favourite
              </span>
            )}
          </div>
          <span className="student-roll">Roll No: <strong>{student.rollNumber}</strong></span>
        </div>
      </div>

      {/* Details Section */}
      <div className="card-body">
        <div className="detail-item">
          <span className="detail-label">🎓 Department:</span>
          <span className="detail-value">{student.department}</span>
        </div>

        <div className="detail-item">
          <span className="detail-label">📅 Year:</span>
          <span className="detail-value">{student.year}</span>
        </div>

        <div className="detail-item">
          <span className="detail-label">✉️ Email:</span>
          <span className="detail-value email-value" title={student.email}>
            {student.email}
          </span>
        </div>

        <div className="detail-item">
          <span className="detail-label">📊 CGPA:</span>
          <span className="detail-value cgpa-badge">{student.cgpa} / 10.0</span>
        </div>

        {/* Skills Tags */}
        {student.skills && student.skills.length > 0 && (
          <div className="skills-container">
            {student.skills.map((skill, index) => (
              <span key={index} className="skill-pill">
                {skill}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Card Action Footer */}
      <div className="card-actions">
        {variant === 'list' ? (
          <button
            onClick={() => addToFavourites(student)}
            className={`btn btn-favourite ${isFav ? 'btn-already-fav' : 'btn-add-fav'}`}
            title={isFav ? 'Already in your favourite list' : 'Add to favourites'}
          >
            {isFav ? (
              <>
                <span className="btn-icon">✓</span>
                <span>Already in Favourites</span>
              </>
            ) : (
              <>
                <span className="btn-icon">⭐</span>
                <span>Add to Favourite</span>
              </>
            )}
          </button>
        ) : (
          <button
            onClick={() => removeFromFavourites(student.id)}
            className="btn btn-remove-fav"
            title="Remove from favourites"
          >
            <span className="btn-icon">🗑️</span>
            <span>Remove from Favourite</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default StudentCard;

