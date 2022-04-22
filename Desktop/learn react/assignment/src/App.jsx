import logo from './logo.svg';
import './App.css';
import Button from './component/button'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <div className="App-container">
        <h4>Button-base</h4>
          <div className="flex space-between mb-3">
          <Button variant="secondary" size="base"/>
        <Button variant="primary" size="base"/>
          </div>

          <div className="flex space-between">
          <Button variant="secondary" size="base" rounded/>
        <Button variant="primary" size="base" rounded/>
          </div>
        </div>

        <div className="App-container">
        <h4>Button-sm</h4>
          <div className="flex space-between mb-3">
          <Button variant="secondary" size="sm"/>
        <Button variant="primary" size="sm"/>
          </div>

          <div className="flex space-between">
          <Button variant="secondary" size="sm" rounded/>
        <Button variant="primary" size="sm" rounded/>
          </div>
        </div>

        <div className="App-container">
        <h4>Button-xs</h4>
          <div className="flex space-between mb-3">
          <Button variant="secondary" size="xs"/>
        <Button variant="primary" size="xs"/>
          </div>

          <div className="flex space-between">
          <Button variant="secondary" size="xs" rounded/>
        <Button variant="primary" size="xs" rounded/>

          </div>
        </div>
        


        
        



        
        
      </header>
    </div>
  );
}

export default App;
