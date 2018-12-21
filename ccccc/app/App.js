import React, {Component} from 'react';
import {Icon, SearchBar} from 'react-native-elements';
import { Dimensions, Platform } from 'react-native';
import { StyleSheet, Text, View, AppRegistry} from 'react-native';
import { createBottomTabNavigator,createAppContainer , TabNavigator, TabBarBottom, createStackNavigator, StackNavigator } from 'react-navigation';
import Bookcase from './screens/Bookcase';
import Search from './screens/Explore';
import AddBook from './screens/AddBook';
import Lists from './screens/Lists';
import Profile from './screens/Profile';


// const MyApp = createStackNavigator({
//   Bookcase: {screen : Bookcase},
//   AddBook: {screen: AddBook},
//   Search: {screen: Search},
//   Profile: {screen: Profile}
// },
// {
//   navigationOptions: {
//       header: null,
//   }
// }
// )

//AppRegistry.registerComponent('ccccc', () => MyApp);
const Screen = createBottomTabNavigator(
  {
    Book : Bookcase ,
    Add : AddBook ,
    Pro : Profile
  },
  {
    navigationOptions: ({navigation})=>({
      tabBarIcon: ({ focused, tintColor })=>{
        const { routeName } = navigation.state;
        let iconName;
        switch(routeName){
          case 'Book': 
          iconName = `book`;
          break;

          case 'Add':
          iconName = `library-add`;
          break;

          case 'Pro':
          iconName = `face`;
          break;
        }
        return <Icon name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeBackgroundColor: '#AEC3F7',
      inactiveBackgroundColor: 'white',
      activeTintColor: 'red',
      inactiveTintColor: 'black',
      pressOpacity: 122
      
    },
  }
)

export default Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});


// import BottomNavigation, {
//   FullTab,IconTab,Badge,ShiftingTab
// } from 'react-native-material-bottom-navigation'

// export default class App extends React.Component {
//   state = {
//     activeTab: 'Favorite'
//   }
//   tabs = [
//     {
//       key: 'Bookcase',
//       icon: 'book',
//       label: 'Bookcase',
//       barColor: '#388E3C',
//       pressColor: 'rgba(255, 255, 255, 0.16)'
//     },
//     {
//       key: 'AddBook',
//       icon: 'library-add',
//       label: 'Favorite',
//       barColor: '#B71C1C',
//       pressColor: 'rgba(255, 255, 255, 0.16)'
//     },
//     {
//       key: 'Search',
//       icon: 'search',
//       label: 'Search',
//       barColor: '#C8B515',
//       pressColor: 'rgba(255, 255, 255, 0.16)'
//     },
//     {
//       key: 'Profile',
//       icon: 'face',
//       label: 'Profile',
//       barColor: '#E64A19',
//       color: 'black',
//       pressColor: 'rgba(255, 255, 255, 0.16)'
//     }
//   ]
//   state = {
//     activeTab: this.tabs[0].key
//   }

//   renderIcon = icon => ({ isActive }) => (
//     <Icon size={20} color="white" name={icon} />
//   )

//   renderTab = ({ tab, isActive }) => (
//     <ShiftingTab
//       isActive={isActive}
//       // showBadge={tab.key === 'Book'}
//       // renderBadge={() => <Badge>1</Badge>}
//       handlePressTab = {this.handlePressTab(tab.key)}
//       key={tab.key}
//       label={tab.label}
//       renderIcon={this.renderIcon(tab.icon)}
//     />
//   )

//   handlePressTab = Page_url => {
//     this.props.navigation.navigate(Page_url);
//   }

//   render() {
//     return (
//       <View style={{ flex: 1 }}>
//         <View style={{ flex: 1 }}>
          
//         </View>
//         <BottomNavigation
//           tabs={this.tabs}
//           onTabPress={newTab => this.setState({ activeTab: newTab.key })}
//           renderTab={this.renderTab}
//           useLayoutAnimation
//         />
//       </View>
//     )
//   }
// }