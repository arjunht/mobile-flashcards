import React from 'react';
import { StyleSheet, Text, View, Platform, StatusBar } from 'react-native';
import DeckList from './components/DeckList';
import NewDeck from './components/NewDeck';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { white, purple } from './utils/colors';
import { createMaterialTopTabNavigator, createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';
import Deck from './components/Deck';
import Quiz from './components/Quiz';
import NewQuestion from './components/NewQuestion';
import { Constants } from 'expo';

function UdaciStatusBar({ backgroundColor, ...props }) {
	return (
		<View style={{backgroundColor, height: Constants.statusBarHeight}}>
			<StatusBar translucent backgroundColor={backgroundColor} {...props} />
		</View>
	);
}

const RouteConfigs = {
	DeckList: {
		screen: DeckList,
		navigationOptions: {
			tabBarLabel: 'DECKS',
			tabBarIcon: ({ tintColor }) => <Ionicons name='ios-list-box' size={30} color={tintColor} />
		}
	},
	NewDeck: {
		screen: NewDeck,
		navigationOptions: {
			tabBarLabel: 'NEW DECK',
			tabBarIcon: ({ tintColor }) => <FontAwesome name='plus-square' size={30} color={tintColor} />
		}
	}
};

const TabNavigatorConfig = {
	navigationOptions: {
		header: null
	},
	tabBarOptions: {
		activeTintColor: Platform.OS === 'ios' ? purple: white,
		style : {
			height: 56,
			backgroundColor: Platform.OS === 'ios' ? white: purple,
			shadowColor: 'rgba(0,0,0,0.24)',
			shadowOffset: {
				width: 0,
				height: 3
			},
			shadowRadius: 6,
			shadowOpacity: 1
		}
	}
};

const Tabs = Platform.OS === 'ios'
	? createBottomTabNavigator(RouteConfigs, TabNavigatorConfig)
	: createMaterialTopTabNavigator(RouteConfigs, TabNavigatorConfig);

const Stacks = createStackNavigator({
	Home: {
		screen: Tabs
	},
	Deck: {
		screen: Deck,
		navigationOptions: {
			headerTintColor: white,
			headerStyle: {
				backgroundColor: purple
			}
		}
	},
	Quiz: {
		screen: Quiz,
		navigationOptions: {
			title: 'Quiz',
			headerTintColor: white,
			headerStyle: {
				backgroundColor: purple
			}
		}
	},
	NewQuestion: {
		screen: NewQuestion,
		navigationOptions: {
			title: 'Add Card',
			headerTintColor: white,
			headerStyle: {
				backgroundColor: purple
			}
		}
	}
});

const MainNavigator = createAppContainer(Stacks);

export default class App extends React.Component {
	render() {
		return (
			<View style={{flex: 1}}>
				<UdaciStatusBar backgroundColor={purple} barStyle='light-content' />
				<MainNavigator />
			</View>
		);
	}
}
