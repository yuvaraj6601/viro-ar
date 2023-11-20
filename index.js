/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import MyARComponent from './object';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => MyARComponent);
