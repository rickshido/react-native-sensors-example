import React from 'react';
import {Text, View} from 'react-native';

import { accelerometer, gyroscope, magnetometer, barometer, SensorTypes, setUpdateIntervalForType } from 'react-native-sensors';

const App = () => {

  const [accel, setAccelerometer] = React.useState(null)
  const [gyro, setGyro] = React.useState(null)
  const [magnet, setMagnet] = React.useState(null)
  const [pressure, setPressure] = React.useState(null) 


  setUpdateIntervalForType(SensorTypes.accelerometer, 1000);
  setUpdateIntervalForType(SensorTypes.gyroscope, 1000);
  setUpdateIntervalForType(SensorTypes.magnetometer, 1000);
  setUpdateIntervalForType(SensorTypes.barometer, 1000);


  const subscriptionAccel = accelerometer.subscribe( ({x, y, z, timestamp}) => {
    setAccelerometer(`${x} ${y} ${z} ${timestamp}`)
  })

  const subscriptionGyro = gyroscope.subscribe( ({x, y, z, timestamp}) => {
    setGyro(`${x} ${y} ${z} ${timestamp}`)
  })

  const subscriptionMagnet = magnetometer.subscribe( ({x, y, z, timestamp}) => {
    setMagnet(`${x} ${y} ${z} ${timestamp}`)
  })

  const subscriptionBaro = barometer.subscribe( ({pressure}) => {
    setPressure(`${pressure}`)
  })

  return(
    <View>
      <Text>Acelerômetro: {accel}</Text>
      <Text>Giroscópio: {gyro}</Text>
      <Text>Magnet: {magnet}</Text>
      <Text>Barômetro: {pressure}</Text>
      
    </View>
  );
}

export default App;