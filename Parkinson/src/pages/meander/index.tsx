import React, {useCallback, useEffect, useState} from 'react';
import {ImageBackground, View, SafeAreaView, StyleSheet, Text, Alert} from 'react-native';
import meanderImage from '../../assets/meander.png'
import {SketchCanvas} from '@terrylinla/react-native-sketch-canvas';
import { gyroscope } from "react-native-sensors";
import { setUpdateIntervalForType, SensorTypes } from "react-native-sensors";
import AwesomeAlert from 'react-native-awesome-alerts';
import Lottie from 'lottie-react-native';
import success from '../../assets/animations/success.json';
//import {Background} from '../../global/styles';

const MeanderComponent: React.FC = ({navigation}) => {
	
	const [isFinished, setIsFinished] = useState(false);
	const [showAlert, setShowAlert] = useState(false);
	
	useEffect(() => {
		setUpdateIntervalForType(SensorTypes.gyroscope, 1);
	}, []);
	//setUpdateIntervalForType(SensorTypes.gyroscope, 1);
	const handleOnFinishDrawing = useCallback (() => {
			//setShowAlert(true);
			setIsFinished(true);
	}, []);
	
	const next = useCallback(() => {
		setShowAlert(false);
		navigation.navigate('Diado');
	}, []);
	
	const getTremor = useCallback(() => {
			const subscription = gyroscope.subscribe(({ x, y, z, timestamp }) =>
			  console.log('Sample rate: 1 kHz', { x, y, z, timestamp })
			);
		
	}, []);
	
	
	
		if(isFinished){
		return (<SafeAreaView style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
			<Lottie source={success} resizeMode='contain' autoPlay loop={false} onAnimationFinish={next} />
		</SafeAreaView>);
	} else {
		return (		
		<>
			<ImageBackground style={{
				flex: 1,
				resizeMode: "cover",
				justifyContent: "center"}} source={meanderImage}>
			<SketchCanvas
					style={{flex: 1}}					 
					  strokeWidth={8}
					  strokeColor="blue"
					  onStrokeStart={getTremor}
					  onStrokeEnd={handleOnFinishDrawing}
					/>
			</ImageBackground>
		  <AwesomeAlert
          show={showAlert}
          showProgress={false}
          title="Atenção"
          message="O próximo teste aaaa."
          closeOnTouchOutside={false}
          closeOnHardwareBackPress={false}
          showCancelButton={true}
          showConfirmButton={true}
          cancelText="Voltar"
          confirmText="Começar"
		  cancelButtonColor="#DD6B55"
          confirmButtonColor="#4ecf71"
          onCancelPressed={() => {
            this.hideAlert();
          }}
          onConfirmPressed={next}
        />
		</>);
	}
	

}

const page = StyleSheet.create({
	
	background: {
			flex:1
		
	}
	
});

export default MeanderComponent;