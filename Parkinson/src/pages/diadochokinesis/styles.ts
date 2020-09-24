import styled from 'styled-components/native';


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

export const Text = styled.Text`
	
	color: #312e38;
	font-size: 30px;
	font-weight: 500;
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