import {useEffect, useRef, useState} from 'react';
import {requestCameraPermission} from '../../util/permissions';
import {BackHandler} from 'react-native';
import {WebView} from 'react-native-webview';
import TopNav from '../TopNav';

const BASE_URL = 'https://gkitamanaries.org/';

export default function Webview() {
  const webViewRef = useRef<any>(null);
  const [backPressed, setBackPressed] = useState<number>(0);
  // const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    requestCameraPermission();
  }, []);

  useEffect(() => {
    const backAction = () => {
      if (backPressed === 1) {
        BackHandler.exitApp();
      } else {
        webViewRef.current.goBack();
        setBackPressed(1);
        setTimeout(() => {
          setBackPressed(0);
        }, 2000);
      }
      return true;
    };
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, [backPressed]);

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
