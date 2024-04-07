import {PermissionsAndroid, ToastAndroid} from 'react-native';

export const requestCameraPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        title: 'Camera Permission',
        message:
          'App needs access to your camera ' + 'so you can take pictures.',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
      ToastAndroid.show('Camera permission denied', ToastAndroid.SHORT);
    }
  } catch (err) {
    console.warn(err);
  }
};
