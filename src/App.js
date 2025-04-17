import React, { useState } from 'react';
import './App.css';
import AddStudent from './components/AddStudent';
import StudentList from './components/StudentList';

function App() {
  const [students, setStudents] = useState([]);

  const addStudent = (student) => {
    setStudents([...students, { ...student, id: Date.now() }]);
  };

  const deleteStudent = (id) => {
    setStudents(students.filter(student => student.id !== id));
  };

  const updateStudent = (id, updatedStudent) => {
    setStudents(students.map(student => student.id === id ? updatedStudent : student));
  };

  return (
    <div className="app">
      <h1>Student Manager</h1>
      <AddStudent onAdd={addStudent} />
      <p className="student-count">Total Students: {students.length}</p>
      <StudentList 
        students={students} 
        onDelete={deleteStudent} 
        onUpdate={updateStudent} 
      />
    </div>
  );
}

export default App;