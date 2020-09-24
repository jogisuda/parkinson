import styled from 'styled-components/native';
import { TextInputProps, ButtonProps } from 'react-native';
import {RectButton} from 'react-native-gesture-handler';


interface InputProps extends TextInputProps {
	
	name: string;
	icon: string;
}

export const Container = styled.View`
	flex: 1;
	align-items: center;
	justify-content: center;
	padding: 0 30px

`;


export const InputContainer = styled.View`
	width: 100%;
	height: 60px;
	padding: 0 16px;
	background: #d3dade;
	border-radius: 10px;
	margin-bottom: 8px;

`;

export const Input = styled.TextInput<InputProps>`
	flex: 1;
	font-size: 16px;

`;



export const ButtonContainer = styled.TouchableOpacity`

	width: 100%;
	height: 60px;
	background: #6bc9a4;
	border-radius: 10px;
	
	justify-content: center;
	align-items: center;
`;

export const ButtonText = styled.Text`
	
	color: #312e38;
	font-size: 18px;
`;