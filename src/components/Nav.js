import React from 'react';
import "../styles/Nav.css";

const Nav = () => {
  return (
    <div className='nav'>
      <img src='https://th.bing.com/th/id/R.0d250f79ab1e2b0b3772bea4e1ad9208?rik=b4c1e2d20Jxs3Q&riu=http%3a%2f%2fwww.padel-arena.com%2fimages%2fimages%2flogo+wpt.png&ehk=hRufctIVVewFcHwGa1IhMgNg50%2bKKNkodAiw1j53xw0%3d&risl=&pid=ImgRaw&r=0' alt='300' className='logo'/>
        <button className='btnReg'>Registrate</button>
        <button className='btnCon'>Conectate</button>
        </div>
  )
}

export default Nav