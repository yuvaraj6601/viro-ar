import React, { useState } from 'react';
import { View } from 'react-native';
import { ViroARSceneNavigator, ViroARPlaneSelector, ViroARTrackingTargets } from '@viro-community/react-viro';

const MyARComponent = () => {
  const [selectedPlane, setSelectedPlane] = useState(null);

  const handlePlaneSelected = (anchor, position, rotation) => {
    setSelectedPlane(anchor);

    const { x, y, z } = position;
    const { x: rx, y: ry, z: rz } = rotation;

    ViroARTrackingTargets.createTarget({
      "ben": {
        source: require('./sample.png'),
        orientation: "Up",
        physicalWidth: 0.157, // real world width in meters  
        type: 'Image'
      },
      "targetOne": {
        source: require('./sample.png'),
        orientation: "Up",
        physicalWidth: 0.25, // real world width in meters
        type: 'Image'
      }
    })
  };

  return (
    <View style={{ flex: 1 }}>
      <ViroARSceneNavigator
        initialScene={{
          scene: () => (
            <View />
          ),
        }}
      />

      <ViroARPlaneSelector onPlaneSelected={handlePlaneSelected} />

      {selectedPlane && (
        <View style={{ position: 'absolute', top: 20, left: 20 }}>
          <Text>Selected plane: {selectedPlane}</Text>
        </View>
      )}
    </View>
  );
};

export default MyARComponent;
