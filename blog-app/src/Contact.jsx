import React from 'react';

const students = [
  { id: 1, name: 'Madhu.k', age: 20, course: 'CSE(Ai&Ml)' },
  { id: 2, name: 'Mohammad Nasir.s', age: 22, course: 'Computer Science and Engineering' },
  { id: 3, name: 'Gowtham Raju.c', age: 21, course: 'EEE' },
  { id: 4, name: 'Naveen jk', age: 23, course: 'ECE' },
  { id: 5, name: 'Aruna.G', age: 20, course: 'CIVIL' },
  { id: 6, name: 'Bharath', age: 22, course: 'MECH' },
];

function Contact() {
  return (
    <div>
      <h2>Contact Us - Student Contacts</h2>
      <ul>
        {students.map(student => (
          <li key={student.id}>
            {student.name} - Age: {student.age} - Course: {student.course}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Contact;
