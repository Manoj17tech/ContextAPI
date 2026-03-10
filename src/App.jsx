import React, { useState } from "react";
import College from "./College";
import Subject from "./Subject";
import { subjectContext } from "./ContextData";

function App() {
  const [subject,setSubject] = useState('English')
  return (
    <>
      <div
        className="app"
        style={{
          backgroundColor: "green",
          padding: 10,
          border: "2px solid black",
        }}
      >
        <subjectContext.Provider value={subject}>
          <select onChange={(e)=>setSubject(e.target.value)} value={subject}>
            <option value="">Select Subject</option>
            <option value="Maths">Maths</option>
            <option value="Science">Science</option>
            <option value="English">English</option>
            <option value="Computer Science">Computer Science</option>
          </select>
          <h1>ContextAPI</h1>
          <button onClick={()=>{setSubject('')}}>Clear Subject</button>
          <College />
        </subjectContext.Provider>
      </div>
    </>
  );
}

export default App;
