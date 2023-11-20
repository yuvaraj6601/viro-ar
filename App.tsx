/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {
  Viro360Image,
  Viro360Video,
  Viro3DObject,
  ViroARPlaneSelector,
  ViroARSceneNavigator,
  ViroAnimatedImage,
  ViroBox,
  ViroCamera,
  ViroImage,
  ViroNode,
  ViroOmniLight,
  ViroSkyBox,
  ViroSphere,
} from '@viro-community/react-viro';
import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {StyleSheet, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {ViroARScene} from '@viro-community/react-viro/dist/components/AR/ViroARScene';
import {ViroText} from '@viro-community/react-viro/dist/components/ViroText';
import {ViroTrackingStateConstants} from '@viro-community/react-viro';
// import {
//   ViroLoadEndEvent,
//   ViroLoadErrorEvent,
//   ViroLoadStartEvent,
// } from "./Types/ViroEvents";
type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [state, setState] = useState({
    position: [0, 0, 0],
    rotation: [0, 0, 0],
  });

  const _onInitialized = (state: any, reason: any) => {
    if (state == ViroTrackingStateConstants.TRACKING_NORMAL) {
      console.log('AR tracking initialized.');
    } else if (state == ViroTrackingStateConstants.TRACKING_UNAVAILABLE) {
      console.log('AR tracking not available.');
    }
  };

  const _onClickObject = (source: any) => {
    const {position, rotation} = source.transform;
    setState({
      position: [position[0], position[1] + 0.2, position[2]],
      rotation: [0, rotation[1], 0],
    });
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
      <ViroARScene onTrackingUpdated={_onInitialized}>
        {/* <Viro360Image
          source={require('./sample.png')}
        /> */}

        {/* <Viro360Video
          source={require('./samplevideo2.mp4')}
          loop={true}
          paused={false}
        /> */}
        {/* <ViroText text='hello world' position={[0, 0, -5]} /> */}
        {/* <Viro3DObject
          source={{uri: 'https://groups.csail.mit.edu/graphics/classes/6.837/F03/models/teddy.ob'}}
          position={[-0.0, -5.5, -1.15]}
          materials={['heart']}
          type="OBJ"
        /> */}
        {/* <ViroAnimatedImage
          height={2}
          width={2}
          placeholderSource={require('./sample.png')}
          source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdCF13PFnQ0TVcIay6hvsSTq9ZceKBPa_X45eSyscgmw&s'}}
        /> */}
        {/* <ViroImage
          height={2}
          width={2}
          placeholderSource={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdCF13PFnQ0TVcIay6hvsSTq9ZceKBPa_X45eSyscgmw&s'}}
          source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdCF13PFnQ0TVcIay6hvsSTq9ZceKBPa_X45eSyscgmw&s'}}
        /> */}
        {/* <ViroSkyBox
          source={{
            nx: require('./left.png'),
            px: require('./right.png'),
            ny: require('./bottom.png'),
            py: require('./top.png'),
            nz: require('./back.png'),
            pz: require('./front.png'),
          }}
        /> */}

        <ViroARPlaneSelector>
          {/* <ViroNode position={state.position} rotation={state.rotation}>
            <ViroBox
              position={[0, 0.5, 0]}
              scale={[0.3, 0.3, 0.3]}
              // materials={['box']}
              onClick={_onClickObject}>
              <Viro360Image source={require('./sample.png')} />
            </ViroBox>
          </ViroNode> */}
        </ViroARPlaneSelector>
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
