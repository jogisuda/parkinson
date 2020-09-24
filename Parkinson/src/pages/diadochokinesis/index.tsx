import React, {useEffect, memo, useState, useCallback, shouldComponentUpdate} from 'react';
import {ImageBackground, View, SafeAreaView, StyleSheet, Alert} from 'react-native';
import { gyroscope } from "react-native-sensors";
import { setUpdateIntervalForType, SensorTypes } from "react-native-sensors";
import {Container, Text, ButtonContainer, ButtonText} from './styles';

import {useFocusEffect} from '@react-navigation/native';

import AwesomeAlert from 'react-native-awesome-alerts';
import Lottie from 'lottie-react-native';
import loading from '../../assets/animations/loading.json'
import success from '../../assets/animations/success.json'

import { defer } from 'rxjs'; //to cancell easily subscriptions



const DiadochokinesisComponent: React.FC = ({navigation}) => {
	const [startCapturing, setStartCapturing] = useState(false);
	const [subscribe, setSubscribe] = useState([]);
	

	//haha.unsubscribe();
	

	
	const [isWarningScreen, setIsWarningScreen] = useState(true);

	const [flag, setFlag] = useState(true);
	const [timerTest, setTimerTest] = useState(2);
	const [timerSplash, setTimerSplash] = useState(5);
	const [timerTestIsFinished, setTimerTestIsFinished] = useState(false);
	const [timerSplashIsFinished, setTimerSplashIsFinished] = useState(false);
	const [showAlert, setShowAlert] = useState(false);
	
	
	/*const haha = memo(() => gyroscope.subscribe(({ x, y, z, timestamp }) => {
				console.log(startCapturing);
				if(startCapturing){
					setSubscribe([...subscribe, [x,y,z]]);
					console.log(subscribe);
				} else {
					//console.log('ENTROU');
					 setSubscribe([...subscribe, [x,y,z]]);
					//console.log(startCapturing);
					
				}	
	}) );*/
	
	/*useFocusEffect(useCallback(()=>{
			setUpdateIntervalForType(SensorTypes.gyroscope, 100);
			_subscribe();
			
			return () => {
				console.log('Out of useFocusEffect')
				_unsubscribe();
			};
		
		}, [])
	);*/
	
	
	useEffect(() => {
		let wait = ms => new Promise(resolve => setTimeout(resolve, ms));
		
		const a = async() => {
			
			const timer1 = await wait(3000);
			await setTimerSplashIsFinished(true);		
			const timer2 = await wait(2000);
			await setTimerTestIsFinished(true);
			await setFlag(false);
			await setStartCapturing(true);				
		};
		
		console.log(timerSplashIsFinished);
		console.log(timerTestIsFinished);
		a().then(() => {
		console.log(timerSplashIsFinished);
		console.log(timerTestIsFinished);});
		/*const timer1 = setTimeout(() => {setTimerSplashIsFinished(true);}, 3000);
		const timer2 = setTimeout(() => {
				setTimerTestIsFinished(true);
				setFlag(false);
				setStartCapturing(true);
		}, 3000);*/
		return () => {
			clearTimeout(timer1);
			clearTimeout(timer2)
			};
	}, []);
	
	useEffect(() => {
		console.log('ANTES');
		if(!startCapturing){
			return;
		}
		console.log('KKK');
		const subscription = defer(() => gyroscope).subscribe(({ x, y, z, timestamp }) => {
				//console.log(startCapturing);
				setSubscribe([...subscribe, [x,y,z]]);
		});		
		console.log('KKK22222');
		return () => {
			console.log('UNsub');
			subscription.unsubscribe();
		};
	}, [startCapturing]);
	


	  const _toggle = () => {
		if (this._subscription) {
		  _unsubscribe();
		} else {
		  _subscribe();
		}
	  };
	
	
	const _subscribe = () => {
		console.log('SUBSCRIBE()');
		this._subscription = gyroscope.subscribe(async ({ x, y, z, timestamp }) => {
				console.log(startCapturing);
				if(startCapturing){
					await setSubscribe([...subscribe, [x,y,z]]);
					console.log(subscribe);
				} else {
					//console.log('ENTROU');
					await setSubscribe([...subscribe, [x,y,z]]);
					//console.log(startCapturing);
					
				}	
		});		
	}
	
	
	  const _unsubscribe = () => {
		console.log('UNSUB()');
		//this._subscription = false;
		this._subscription && this._subscription.remove();
		this._subscription = null;
	  };
	
	
	
	
	
	const handleOnFinishTest = useCallback (() => {
			setShowAlert(true);
	}, []);
	
	const next = useCallback(() => {
		//setShowAlert(false);
		//_unsubscribe();
		setTimeout(()=>{
			navigation.navigate('Audio');
		}, 1200);
	}, []);
	
	
	
	const getTremor = useCallback( () => {
			console.log('OOOOOOOOOOOOO');
			setStartCapturing(true);
		
	}, []);
	
	
	const handleOnPressStart = useCallback(() => {
		setIsWarningScreen(false);
	}, []);
	

	if(isWarningScreen){
		
		return(
			<>
				<SafeAreaView style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
					<Text>Para esta etapa, estenda seu braço, segurando o celular na ponto apenas com uma mão</Text>
					<ButtonContainer title="Começar" onPress={handleOnPressStart} >
						<ButtonText>Começar</ButtonText>
					</ButtonContainer>
				</SafeAreaView>
			</>
		);
	}
	
	else if(flag === false){
		
		setStartCapturing(true);
					return (
					<>
					<SafeAreaView style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
						<Lottie source={success} resizeMode='contain' autoPlay loop={false} onAnimationFinish={next} />
					</SafeAreaView>
					</>
				);
	}
	
	else if (timerSplashIsFinished && flag){
		
	/*	setTimeout(() => {
			setTimerTest(timerTest - 1);
			//console.log(timerTest);
			if (timerTest < 0){
				//console.log(haha.unsubscribe());
				setTimerTestIsFinished(true);
				setFlag(false);
				setStartCapturing(true);
			}
		

		}, 1000);*/
		

		return (
				<>
				<SafeAreaView style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
					<Lottie source={loading} resizeMode='contain' autoPlay loop />
				</SafeAreaView>
				</>
			);

		
	} else {
		
	/*	setTimeout(() => {
			setTimerSplash(timerSplash - 1);
			if(timerSplash < 6){
				setTimerSplashIsFinished(true);
				//setStartCapturing(true);
				//getTremor();
			}
		}, 1000);*/

			
			return (
				<>
				<SafeAreaView style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
					<Text>TESTE COMEÇANDO EM</Text>
					<Text>{timerSplash}</Text>
				</SafeAreaView>
				</>
			);
	}
}


export default DiadochokinesisComponent;