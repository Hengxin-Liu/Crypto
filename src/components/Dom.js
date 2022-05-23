import React from 'react';

function Dom(props) {
  const handler = () => {
   var para = document.createElement("p");
   para.innerHTML = 'Hope get a job';
   document.getElementById("btn").appendChild(para);
  }
  return (
    <>
     <h1>Coins</h1>
    
    </>     
    );
}

export default Dom;