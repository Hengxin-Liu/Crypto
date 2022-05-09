import React, { createElement } from 'react';

function Dom(props) {
  const handler = () => {
   var para = document.createElement("p");
   para.innerHTML = 'Hope get a job';
   document.getElementById("btn").appendChild(para);
  }
  return (
    <>
     <h1>Succeed</h1>
     {createElement('h2', null, 'Lift History!')}
     <button type='button' onClick={handler} id="btn"></button>
    </>     
    );
}

export default Dom;