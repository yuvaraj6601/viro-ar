/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {
  Viro3DObject,
  ViroARSceneNavigator,
  ViroNode,
  ViroSphere,
} from '@viro-community/react-viro';
import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {ViroARScene} from '@viro-community/react-viro/dist/components/AR/ViroARScene';
import {ViroText} from '@viro-community/react-viro/dist/components/ViroText';
import {ViroTrackingStateConstants} from '@viro-community/react-viro';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const HelloWorldSceneAR = () => {
    const [text, setText] = useState('Initializing AR...');

    function onInitialized(state: any, reason: any) {
      console.log('guncelleme', state, reason);
      if (state === ViroTrackingStateConstants.TRACKING_NORMAL) {
        setText('Hello World!');
      } else if (state === ViroTrackingStateConstants.TRACKING_UNAVAILABLE) {
        // Handle loss of tracking
      }
    }

    return (
      <ViroARScene onTrackingUpdated={onInitialized}>
        <Viro3DObject
          source={{uri: 'https://groups.csail.mit.edu/graphics/classes/6.837/F03/models/teapot.obj'}}
          position={[-0.0, -5.5, -1.15]}
          // materials={['']}
          type="OBJ"
        />
      </ViroARScene>
    );
  };
  return (
    <>
      <ViroARSceneNavigator
        autofocus={true}
        initialScene={{
          scene: HelloWorldSceneAR,
        }}
        style={styles.f1}
      />
    </>
  );
}

var styles = StyleSheet.create({
  f1: {flex: 1},
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});

export default App;
