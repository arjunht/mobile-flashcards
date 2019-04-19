import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class Deck extends Component {
	
	static navigationOptions = ({ navigation }) => {
		const { deck } = navigation.state.params
		
		const deckName = deck.title
		
		return {
			title: deckName
		}
	}
	render() {
		return (
			<View>
				<Text>Deck Name</Text>
				<Text>Number of cards</Text>
				<TouchableOpacity onPress={() => this.props.navigation.navigate(
					'NewQuestion',
					{ deck: 'Temporary Id' })}>
					<Text>Add Card</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => this.props.navigation.navigate(
					'Quiz',
					{ deck: 'Temporary Id' })}>
					<Text>Start Quiz</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

export default Deck;