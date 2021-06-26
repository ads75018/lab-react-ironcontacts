import React from 'react';
import './App.css';
import Contacts from './components/Contacts'



class App extends React.Component {
  render() {
    return (
      <div className="App">
      <h1>IronContacts</h1>
      <Contacts/>
      </div>
    );
  }
}

export default App;
