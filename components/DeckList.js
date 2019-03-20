import React, { Component } from 'react';
import { TouchableOpacity, Text } from 'react-native';

class DeckList extends Component {
	render() {
		return (
			<TouchableOpacity onPress={() => this.props.navigation.navigate(
				'Deck',
				{ deckId: 'Temporary Id'} )}>
				<Text>Deck List Item Name</Text>
			</TouchableOpacity>
		);
	}
}

export default DeckList;