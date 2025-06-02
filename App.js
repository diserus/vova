import React from 'react';
import ToolTip from './ToolTip';

const App = () => {
  return (
    <div>
      <h1>ToolTip Example</h1>
      <ToolTip text="This is a tooltip" delay={500}>
        <button>Hover me</button>
      </ToolTip>
      
      <ToolTip text="Another tooltip with default delay">
        <span style={{ marginLeft: '20px', color: 'blue' }}>Hover over this text</span>
      </ToolTip>
    </div>
  );
};

export default App;