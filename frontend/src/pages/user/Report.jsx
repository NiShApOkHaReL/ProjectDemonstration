import React from 'react';
import { Route, Routes, Link, Outlet } from 'react-router-dom';

const Report = () => {
  return (
    <div>
      <h1>Report Page</h1>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <h2>Report Part 1</h2>
              <Link to="part2">Next</Link>
            </div>
          }
        />
        <Route
          path="part2"
          element={
            <div>
              <h2>Report Part 2</h2>
              {/* Your code for the second part */}
            </div>
          }
        />
      </Routes>
      <Outlet />
    </div>
  );
};

export default Report;
