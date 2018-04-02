import {
  StackNavigator,
} from 'react-navigation';

import Home from './screens/Home'
import Chat from './screens/Chat'

const Navigator = StackNavigator({


  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Home',
      headerStyle: {
        backgroundColor:'#128c7e'
      },
      headerTintColor: "white",
    }
  },
  Chat: {
    screen: Chat,
    navigationOptions: {
      header: null,
    },
  },


});

export default Navigator;
