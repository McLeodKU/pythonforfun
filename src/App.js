import React from 'react';
import './App.css';

const ProfilePage = () => {
  return (
    <div>
      {/* Navbar top */}
      <div className="navbar-top">
        <div className="title">
          <h1>Lesson Temp</h1>
        </div>

        {/* Navbar */}
        <ul>
          <li>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="button"><i className="fas fa-home"></i> Back to Home</a>    
          </li>
        </ul>
        {/* End Navbar */}
      </div>
      {/* End Navbar top */}

      {/* Sidenav */}

      {/* Main */}
      <div className="main">
        <h2>Proof of Concept</h2>
        <div className="card">
          <div className="card-body">
            <table>
              <tbody>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* End Main */}
    </div>
  );
}

export default ProfilePage;
