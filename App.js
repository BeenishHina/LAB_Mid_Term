import { useState } from 'react';
import DatePicker from 'sassy-datepicker';
import { StyleSheet, View, Image, Button } from 'react-native';
import {
  LineChart,
  BarChart,
} from "react-native-chart-kit";

// import moment from 'moment';
import React from 'react';
import { CheckBox } from 'react-native-elements';
const App = () => {
  const [date, setDate] = useState(new Date());
  const [startDate, setStartDate] = useState(null)
  const [endDate, setendDate] = useState(null)

  const [offeredF, setOfferedF] = useState(false);
  const [notofferedF, setNotOfferedF] = useState(false);

  const [offeredZ, setOfferedZ] = useState(false);
  const [notofferedZ, setNotOfferedZ] = useState(false);

  const [offeredA, setOfferedA] = useState(false);
  const [notofferedA, setNotOfferedA] = useState(false);

  const [offeredM, setOfferedM] = useState(false);
  const [notofferedM, setNotOfferedM] = useState(false);

  const [offeredI, setOfferedI] = useState(false);
  const [notofferedI, setNotOfferedI] = useState(false);

  const onChange = (newDate) => {
    console.log(`New date selected - ${newDate.toString()}`);
    setDate(newDate);
  };

  const FajarOffer = () => {
    setOfferedF(true);
    setNotOfferedF(false);
  }
  const FajarNotOffer = () => {
    setOfferedF(false);
    setNotOfferedF(true);
  }
  const ZuhrOffer = () => {
    setOfferedZ(true);
    setNotOfferedZ(false);
  }
  const ZuhrNotOffer = () => {
    setOfferedZ(false);
    setNotOfferedZ(true);
  }
  const AsarOffer = () => {
    setOfferedA(true);
    setNotOfferedA(false);
  }
  const AsarNotOffer = () => {
    setOfferedA(false);
    setNotOfferedA(true);
  }
  const MaghribOffer = () => {
    setOfferedM(true);
    setNotOfferedM(false);
  }
  const MaghribNotOffer = () => {
    setOfferedM(false);
    setNotOfferedM(true);
  }
  const IshaOffer = () => {
    setOfferedI(true);
    setNotOfferedI(false);
  }
  const IshaNotOffer = () => {
    setOfferedI(false);
    setNotOfferedI(true);
  }

  const record = () => {
    let arr = [];
    console.log(`New date selected`);
    arr.push(newDate);
  }


  const data = {
    labels: ["Fajar", "Zuhar", "Asar", "Maghrib", "Isha"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99]
      }
    ]
  };
  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
  };
  return (
    <View>

      <h1 style={{ backgroundColor: '#8fbc8f', textAlign: 'center' }}>Salah_Tracker</h1>
      <View >
        <DatePicker style={{ marginLeft: 40 }}
          onChange={onChange}
          minDate={new Date(true)} maxDate={new Date()}

        />

      </View>
      <View style={{ marginTop: 20, marginLeft: 20, flexDirection: 'row' }}>
        <Image source={require('./assets/fajar.png')}
          style={{ width: 40, height: 40 }}
        />

        <CheckBox
          title="Offered"
          checked={offeredF}
          checkedIcone="dot-circle-o"
          uncheckedIcon="circle-o"
          onPress={FajarOffer}
        />
        <CheckBox
          title="Not Offered"
          checked={notofferedF}
          checkedIcone="dot-circle-o"
          uncheckedIcon="circle-o"
          onPress={FajarNotOffer}
        />


      </View>
      <View style={{ marginTop: 20, marginLeft: 20, flexDirection: 'row' }}>
        <Image source={require('./assets/Zuhr.png')}
          style={{ width: 40, height: 40 }}
        />

        <CheckBox
          title="Offered"
          checked={offeredZ}
          checkedIcone="dot-circle-o"
          uncheckedIcon="circle-o"
          onPress={ZuhrOffer}
        />
        <CheckBox
          title="Not Offered"
          checked={notofferedZ}
          checkedIcone="dot-circle-o"
          uncheckedIcon="circle-o"
          onPress={ZuhrNotOffer}
        />




      </View>
      <View style={{ marginTop: 20, marginLeft: 20, flexDirection: 'row' }}>
        <Image source={require('./assets/asr.png')}
          style={{ width: 40, height: 40 }}
        />

        <CheckBox
          title="Offered"
          checked={offeredA}
          checkedIcone="dot-circle-o"
          uncheckedIcon="circle-o"
          onPress={AsarOffer}
        />
        <CheckBox
          title="Not Offered"
          checked={notofferedA}
          checkedIcone="dot-circle-o"
          uncheckedIcon="circle-o"
          onPress={AsarNotOffer}
        />

      </View>
      <View style={{ marginTop: 20, marginLeft: 20, flexDirection: 'row' }}>
        <Image source={require('./assets/maghrib.png')}
          style={{ width: 40, height: 40 }}
        />

        <CheckBox
          title="Offered"
          checked={offeredM}
          checkedIcone="dot-circle-o"
          uncheckedIcon="circle-o"
          onPress={MaghribOffer}
        />
        <CheckBox
          title="Not Offered"
          checked={notofferedM}
          checkedIcone="dot-circle-o"
          uncheckedIcon="circle-o"
          onPress={MaghribNotOffer}
        />




      </View>
      <View style={{ marginTop: 20, marginLeft: 20, flexDirection: 'row' }}>

        <Image source={require('./assets/isha.png')}
          style={{ width: 40, height: 40 }}
        />
        <CheckBox
          title="Offered"
          checked={offeredI}
          checkedIcone="dot-circle-o"
          uncheckedIcon="circle-o"
          onPress={IshaOffer}
        />
        <CheckBox
          title="Not Offered"
          checked={notofferedI}
          checkedIcone="dot-circle-o"
          uncheckedIcon="circle-o"
          onPress={IshaNotOffer}
        />

      </View>
      
      <h1 style={{margin:70}}>Previous Record</h1>
  
   
    </View>
  );
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e9967a',
    alignContent: 'center',

  },
});