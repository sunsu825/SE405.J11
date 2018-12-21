/** @format */

import {AppRegistry} from 'react-native';
import App  from './app/App';
import {name as appName} from './app.json';
import Login from './app/screens/login';
import FlashScreen from './app/screens/flashScreen';
import { createStackNavigator } from 'react-navigation';
import Register from './app/screens/Register';

const MyApp = createStackNavigator({
    FlashScreen: {screen : FlashScreen},
    Login: {screen: Login},
    Register: {screen: Register},
    App: {screen: App}
},
{
    navigationOptions: {
        header: null,
    }
}
)

AppRegistry.registerComponent(appName, () => MyApp);
