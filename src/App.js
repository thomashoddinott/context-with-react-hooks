import React from 'react'
import ContextComponent from './ContextComponent'
import {ThemeProvider} from './ThemeContext'

function App() {
  return (
    <>
      <ThemeProvider>
      {/* wrap everything that needs context here */}
      {/* everything has access to darkTheme now */}
        <ContextComponent/>
      </ThemeProvider>
    </>
  );
}

export default App;
