import React from 'react';

function BlankPage(){
  return(
    <div>
      <h1>Blank Page</h1>
      <p>Just to make me remember, i make this blank page for routing test if the route work or no.</p>
      <img src={import.meta.env.BASE_URL + '/time.gif'} alt="Time"/>
    </div>
  );
}

export default BlankPage;
