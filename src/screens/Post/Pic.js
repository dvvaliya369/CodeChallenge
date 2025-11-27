import React, { useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Platform,
  Dimensions,
} from 'react-native';
import { RNCamera } from 'react-native-camera';
import Style from '../../styles/Style';

const Pic = ({ navigation }) => {
  const cameraRef = useRef();

  const takePicture = async () => {
    const options = { quality: 0.5, base64: true };
    const data = await cameraRef.current.takePictureAsync(options);
    console.log(data.uri);
    await navigation.navigate('Post', { photo: data.uri });
  };

  return (
    <View style={{ flex: 1 }}>
      {Platform.OS === 'ios' ? <SafeAreaView /> : <View></View>}
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Home', { value: true });
        }}
      >
        <Text style={[Style.cancelText, { marginTop: 20 }]}>Cancel</Text>
      </TouchableOpacity>
      <RNCamera
        ref={cameraRef}
        autoFocus={false}
        captureAudio={false}
        mirrorImage={false}
        removeClippedSubviews={true}
        style={{
          width: Dimensions.get('screen').width,
          height: Dimensions.get('screen').height * 0.6,
          marginTop: 24,
        }}
      />

      <TouchableOpacity
        style={Style.picCameraBUttonOuterView}
        onPress={takePicture}
      >
        <View style={Style.picCameraButtonInnerView} />
      </TouchableOpacity>
    </View>
  );
};

export default Pic;
