import React, {useEffect, useRef} from 'react';
import {Text, View, Platform, BackHandler} from 'react-native';
import {WebView} from 'react-native-webview';
function App() {
  const webViewRef = useRef(null);
  const onBackPress = () => {
    if (webViewRef.current) {
      webViewRef.current.goBack();
    }
    return false;
  };
  useEffect(() => {
    if (Platform.OS === 'android') {
      BackHandler.addEventListener('hardwareBackPress', onBackPress);
      return () => {
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
      };
    }
  }, []);
  return (
    <WebView
      ref={webViewRef}
      scalesPageToFit={true}
      source={{uri: 'https://sch.itcampussoft.com'}}
    />
  );
}

export default App;
