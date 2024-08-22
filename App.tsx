import {
  ViroARScene,
  ViroARSceneNavigator,
  ViroText,
  ViroTrackingReason,
  ViroTrackingStateConstants,
} from "@reactvision/react-viro";
import React, { useEffect, useRef, useState } from "react";
import { StyleSheet } from "react-native";

const HelloWorldSceneAR = () => {
  const [text, setText] = useState("Initializing AR...");
  const [capturedVideo, setCapturedVideo] = useState("");
  const [isRecording, setIsRecording] = useState(false);

  useEffect(() => {
    
    return () => {
      
    }
  }, [])

  function onInitialized(state: any, reason: ViroTrackingReason) {
    console.log("onInitialized", state, reason);
    if (state === ViroTrackingStateConstants.TRACKING_NORMAL) {
      setText("Hello World!");
    } else if (state === ViroTrackingStateConstants.TRACKING_UNAVAILABLE) {
      // Handle loss of tracking
    }
  }

  return (
    <ViroARScene onTrackingUpdated={onInitialized}>
      <ViroText
        text={text}
        scale={[0.5, 0.5, 0.5]}
        position={[0, 0, -1]}
        style={styles.helloWorldTextStyle}
      />
    </ViroARScene>
  );
};

export default () => {
  const arSceneRef = useRef(null)
  useEffect(() => {
    setTimeout(async () => handleCaptureVideo(), 5000);
    return () => {
    }
  }, [])


  const handleCaptureVideo = async () => {
    try {
      const result = await arSceneRef.current.sceneNavigator.startVideoRecording(
        'name.mp4',
        true,
        (error: any) => console.log('error', error)
      );

      // const result = await arSceneRef.current.sceneNavigator.takeScreenshot("name", true)
      console.log("result.url", result);
      setTimeout(async () => stopRecording() ,5000) ;
    } catch (error) {
      console.log("error", error);
    }
  }

  const stopRecording = async()=>{
    console.log("stop recording");
    const result = await arSceneRef.current.sceneNavigator.stopVideoRecording();
    console.log("result.url", result);
  }
  return (
    <ViroARSceneNavigator
      ref={arSceneRef} 
      autofocus={true}
      initialScene={{
        scene: HelloWorldSceneAR,
      }}
      style={styles.f1}
    />
  );
};

var styles = StyleSheet.create({
  f1: { flex: 1 },
  helloWorldTextStyle: {
    fontFamily: "Arial",
    fontSize: 30,
    color: "#ffffff",
    textAlignVertical: "center",
    textAlign: "center",
  },
});