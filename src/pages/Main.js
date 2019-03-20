import React from 'react';

import logo from '../assets/logo.jpg';

const Main = () => (
  <div>
    <img src={logo} alt="Github Compare" />

    <form>
      <input type="text" placeholder="usuário/repositório" />
      <button type="submit">OK</button>
    </form>
  </div>
);

export default Main;
