import 'react-native-gesture-handler';
import React from 'react';
//import SpiralComponent from './src/pages/spiral';
//import MeanderComponent from './src/pages/meander';
import Intro from './src/pages/intro';

import {NavigationContainer} from '@react-navigation/native';
import Routes from './src/routes';

/*		<NavigationContainer>
			<Routes />
		</NavigationContainer>*/

const App = () => {
  return (
		<NavigationContainer>
			<Routes />
		</NavigationContainer>
  );
};


export default App;
