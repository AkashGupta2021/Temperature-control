import React, { useState } from 'react'

const App = () => {
  const [temperatureValue, settemperatureValue] = useState(10);
  const [temperatureColor, settemperatureColor] = useState("cold")


  const increaseTemperatureValue = () => {
    if (temperatureValue === 30)
      return;
    const newTemperature = temperatureValue + 1;

    if (newTemperature >= 20) {
      settemperatureColor('hot')
    } 

    settemperatureValue(newTemperature);

  }

  const decreaseTemperatureValue = () => {
    if (temperatureValue === 0) return;
    
     const newTemperature = temperatureValue - 1;
    
     if (newTemperature < 20) {
      settemperatureColor('cold')
    } 
    
    settemperatureValue(newTemperature);
  }
  return (
    <div className="container">
      <div className="temperature-display-container ">
        <div className={`temperature-display ${temperatureColor}`}> {temperatureValue}°C  </div>
      </div>
      <div className="button-container">
        <button onClick={increaseTemperatureValue}>+</button>
        <button onClick={decreaseTemperatureValue}>-</button>
      </div>
    </div>


  )
}
export default App;