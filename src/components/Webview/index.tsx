import {requestCameraPermission} from '../../util/permissions';
import {useEffect, useRef} from 'react';
import {BackHandler} from 'react-native';
import {WebView} from 'react-native-webview';
import TopNav from '../TopNav';

const BASE_URL = 'https://gkitamanaries.org/';

export default function Webview() {
  const webViewRef = useRef<any>(null);

  useEffect(() => {
    requestCameraPermission();
  }, []);

  useEffect(() => {
    const backAction = () => {
      webViewRef.current.goBack();
      return true;
    };
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  return (
    <>
      <TopNav webRef={webViewRef} />
      <WebView
        ref={webViewRef}
        source={{uri: BASE_URL}}
        allowsFileAccess={true}
        allowFileAccessFromFileURLs={true}
        allowUniversalAccessFromFileURLs={true}
      />
    </>
  );
}
