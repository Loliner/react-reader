import React, { useState } from 'react';
import Happy from './happy'

const App = () => {
  const [type, setType] = useState(0);

  return <div>
    <div>App</div>
    <Happy />
  </div>
};


export default App;