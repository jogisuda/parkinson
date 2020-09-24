import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SpiralComponent from '../pages/spiral';
import MeanderComponent from '../pages/meander';
import AudioComponent from '../pages/audio';
import Intro from '../pages/intro';
import DiadochokinesisComponent from '../pages/diadochokinesis';

const Nav = createStackNavigator();
/*			<Nav.Screen name="Spiral" component={SpiralComponent}/>
			<Nav.Screen name="Meander" component={MeanderComponent}/>
			<Nav.Screen name="Diado" component={DiadochokinesisComponent}/>
			<Nav.Screen name="Audio" component={AudioComponent}/>*/
const Routes: React.FC = () => {
	
	return (
		<Nav.Navigator screenOptions={{
						headerShown: false,
						mode: 'card',}}>
			<Nav.Screen name="Diado" component={DiadochokinesisComponent}/>		
			<Nav.Screen name="Intro" component={Intro} />
			<Nav.Screen name="Spiral" component={SpiralComponent}/>
			<Nav.Screen name="Meander" component={MeanderComponent}/>
			
			<Nav.Screen name="Audio" component={AudioComponent}/>	
			
		</Nav.Navigator>
	);
}
export default Routes;