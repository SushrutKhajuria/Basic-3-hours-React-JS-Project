import React, { useState } from 'react';

function StudentList({ students, onDelete, onUpdate }) {
  const [editingId, setEditingId] = useState(null);
  const [editStudent, setEditStudent] = useState({ name: '', mobile: '', address: '' });

  const handleEdit = (student) => {
    setEditingId(student.id);
    setEditStudent(student);
  };

  const handleUpdate = () => {
    onUpdate(editingId, editStudent);
    setEditingId(null);
  };

  return (
    <div >
      {students.map(student => (
        <div key={student.id} >
          {editingId === student.id ? (
            <div >
              <input
                value={editStudent.name}
                onChange={(e) => setEditStudent({ ...editStudent, name: e.target.value })}
              />
              <input
                value={editStudent.mobile}
                onChange={(e) => setEditStudent({ ...editStudent, mobile: e.target.value })}
              />
              <input
                value={editStudent.address}
                onChange={(e) => setEditStudent({ ...editStudent, address: e.target.value })}
              />
              <button onClick={handleUpdate}>Save</button>
            </div>
          ) : (
            <>
              <p><strong>Name:</strong> {student.name}</p>
              <p><strong>Mobile:</strong> {student.mobile}</p>
              <p><strong>Address:</strong> {student.address}</p>
              <div className="actions">
                <button onClick={() => handleEdit(student)}>Edit</button>
                <button onClick={() => onDelete(student.id)}>Delete</button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default StudentList;