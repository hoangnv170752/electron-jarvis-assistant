import { useEffect, useMemo, useState } from 'react';
import './App.css';

function App() {

  return (
    <div className="App">
      <Header />
      <div className="main">
        <div>
        </div>
        <div className="mainGrid">
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <header>
      <button
        id="close"
        onClick={() => window.electron.sendFrameAction('CLOSE')}
      />
      <button
        id="minimize"
        onClick={() => window.electron.sendFrameAction('MINIMIZE')}
      />
      <button
        id="maximize"
        onClick={() => window.electron.sendFrameAction('MAXIMIZE')}
      />
    </header>
  );
}

export default App;