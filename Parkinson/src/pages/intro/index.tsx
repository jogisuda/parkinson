import React, {useCallback, useEffect, useState} from 'react';
import {View, Image, Text, TextInput, Button, Alert, StyleSheet} from 'react-native';
import IntroImg from '../../assets/intro.png';
import {request, check, RESULTS, PERMISSIONS} from 'react-native-permissions';

import AwesomeAlert from 'react-native-awesome-alerts';


import { Container, InputContainer, Input, ButtonContainer, ButtonText } from './styles';






const Intro: React.FC = ({ navigation }) => {
	
		const [showAlert, setShowAlert] = useState(false);
	
		
	
	  	useEffect(() => {
		request(PERMISSIONS.ANDROID.RECORD_AUDIO).then((result) => {
				check(PERMISSIONS.ANDROID.RECORD_AUDIO)
				  .then((result) => {
					switch (result) {
					  case RESULTS.UNAVAILABLE:
						console.log(
						  'This feature is not available (on this device / in this context)',
						);
						break;
					  case RESULTS.DENIED:
						console.log(
						  'The permission has not been requested / is denied but requestable',
						);
						break;
					  case RESULTS.GRANTED:
						console.log('The permission is granted');
						break;
					  case RESULTS.BLOCKED:
						console.log('The permission is denied and not requestable anymore');
						break;
					}
				  })
			
			}		
		);
	}, []);
	
	const handleOnPressStart = useCallback(() => {
		
		setShowAlert(true);
		
	}, []);
	
	const begin = useCallback (() => {
		//setShowAlert(true);
		setShowAlert(false);
		navigation.navigate('Spiral');
	}, []);
	
	return (
			<Container>
				<InputContainer>
					<Input keyboardType="numeric" placeholder="Informe sua idade" />
				</InputContainer>
				<ButtonContainer title="Começar" onPress={handleOnPressStart} >
					<ButtonText>Começar</ButtonText>
				</ButtonContainer>
				
				        <AwesomeAlert
          show={showAlert}
          showProgress={false}
          title="Atenção"
          message="O teste irá começar. Na primeira etapa, apenas segure o celular com uma mão, e com a outra, contorne o desenho da espiral utilizando seu dedo indicador."
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
          onConfirmPressed={begin}
        />
			</Container>
	
	);
}


export default Intro;