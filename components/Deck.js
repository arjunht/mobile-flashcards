import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class Deck extends Component {
	
	static navigationOptions = ({ navigation }) => {
		const { deckId } = navigation.state.params
		
		// Todo: Get the name of the deck
		const deckName = 'Deck Name'
		
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
					{ deckId: 'Temporary Id' })}>
					<Text>Add Card</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => this.props.navigation.navigate(
					'Quiz',
					{ deckId: 'Temporary Id' })}>
					<Text>Start Quiz</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

export default Deck;