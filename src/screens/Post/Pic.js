import React, { useRef } from 'react'
import { View, Text, TouchableOpacity, SafeAreaView, Platform, Dimensions } from 'react-native'
import { Camera, useCameraDevices } from 'react-native-vision-camera';
import Style from '../../styles/Style';

const Pic = ({ navigation }) => {

    const cameraRef = useRef();
    const devices = useCameraDevices();
    const device = devices.back;

    // Capture event for camera
    const takePicture = async () => {
        // if (cameraRef) {
        const options = { quality: 0.5, base64: true };
        const data = await cameraRef.current.takePhoto(options)
        console.log(data.path);
        await navigation.navigate('Post', { photo: data.path })
        // }
    };

    if (device == null) return <View style={{ flex: 1 }}><Text>Loading Camera...</Text></View>;

    return (
        <View style={{ flex: 1 }}>
            {Platform.OS === "ios" ?
                <SafeAreaView /> : <View></View>}
            <TouchableOpacity onPress={() => {
                navigation.navigate('Home', { value: true })
            }}>
                <Text style={[Style.cancelText, { marginTop: 20 }]}>Cancel</Text>
            </TouchableOpacity>
            <Camera
                ref={cameraRef}
                device={device}
                isActive={true}
                photo={true}
                //Custom style for camera overlay
                style={{
                    width: Dimensions.get("screen").width,
                    height: Dimensions.get("screen").height * 0.60, marginTop: 24
                }}
            />

            {/* Custom Camera Button */}
            <TouchableOpacity style={Style.picCameraBUttonOuterView} onPress={takePicture}>
                <View style={Style.picCameraButtonInnerView} />
            </TouchableOpacity>
        </View>

    )
}

export default Pic;