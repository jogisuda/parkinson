import React, {useState, useEffect, useCallback} from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import {request, check, RESULTS, PERMISSIONS} from 'react-native-permissions';
import AudioRecord from 'react-native-audio-record';
import Icon from 'react-native-vector-icons/FontAwesome';


const recordOptions = {
  sampleRate: 8000,  // default 44100
  channels: 1,        // 1 or 2, default 1
  bitsPerSample: 16,  // 8 or 16, default 16
  audioSource: 6,     // android only (see below)
  wavFile: 'test.wav' // default 'audio.wav'
};


const AudioComponent: React.FC = ({navigation}) => {
	
  
  
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
  
  
	
const getAudioData = new Promise((resolve, reject) => {
			AudioRecord.on('data', data => {
			
			console.log('BASE64 DATA: ', data);
			
			//enviar para nosso backend via JSON cada chunk
			});
			resolve();
});
	
  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
  const startRecording = useCallback(async () => {
	  
	  	console.log('A');
		await AudioRecord.start();
		console.log('BB');
		await sleep(500); //
		const f = await AudioRecord.stop();
		await sleep(3000);
		console.log(f);
		await getAudioData();
		console.log('A2');
		console.log('3');
		/*AudioRecord.stop();
		AudioRecord.on('data', data => {
			
			console.log('BASE64 DATA: ', data);
		});*/
		
	  
  }, []);
  
  const stopRecording = useCallback(async () => {
	/*  
	  console.log('CASDASD');
	  
	  const f = await AudioRecord.stop();
	  console.log(f);
	 //	 console.log('BBBBBBBBBBB');
		await getAudioData();
		
		console.log('BBB');*/
		
	  
  }, []);
	
	return (
    <View>
      <Pressable
        onPressIn={startRecording}
		onPressOut={stopRecording}

        style={({ pressed }) => [
          {
            backgroundColor: pressed
              ? 'rgb(210, 230, 255)'
              : 'white'
          },
        ]}>
        {({ pressed }) => (
          <Text >
            {pressed ? 'Pressed!' : 'Press me!'}
          </Text>
        )}
      </Pressable>

	  
	          <View style={{ marginTop: 16, marginBottom: 16 }}>
          {/*Icon.Button Component*/}
          <Icon.Button
            name="microphone"
            backgroundColor="#3b5998"
            onPress={() => alert('Login with Facebook')}>
            Gravar
          </Icon.Button>
        </View>
	  
	  
    </View>
	
	);
}
                                                                                                        
export default AudioComponent;