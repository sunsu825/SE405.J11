import { StackNavigator } from 'react-navigation';
import Bookcase from '../screens/Bookcase';
import Detail from '../screens/Detail';

export const App = StackNavigator({
    Bookcase : {screen : Bookcase},
    Detail : {screen : Detail}
});


