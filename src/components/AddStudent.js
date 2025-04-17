import React, { useState } from 'react';

function AddStudent({ onAdd }) {
  const [student, setStudent] = useState({ name: '', mobile: '', address: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!student.name || !student.mobile || !student.address) return;
    onAdd(student);
    setStudent({ name: '', mobile: '', address: '' }); // Reset form
  };

  return (
    <form onSubmit={handleSubmit} className="add-form">
      <input
        type="text"
        placeholder="Name"
        value={student.name}
        onChange={(e) => setStudent({ ...student, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Mobile"
        value={student.mobile}
        onChange={(e) => setStudent({ ...student, mobile: e.target.value })}
      />
      <input
        type="text"
        placeholder="Address"
        value={student.address}
        onChange={(e) => setStudent({ ...student, address: e.target.value })}
      />
      <button type="submit">Add Student</button>
    </form>
  );
}

export default AddStudent;