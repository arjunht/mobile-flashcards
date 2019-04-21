import React, { Component } from 'react';
import { Fragment, ScrollView, TouchableOpacity, Text, View, StyleSheet, Platform } from 'react-native';
import { white } from '../utils/colors';
import { connect } from 'react-redux'

class DeckList extends Component {
	
	render() {
		const { decks } = this.props;
		
		if(Object.keys(decks).length === 0) {
			return (
				<View style={styles.item}>
					<Text style={styles.noDataText}>No decks yet, add a new deck through the New Deck tab</Text>
				</View>
			);
		}
		
		return (
			<ScrollView style={styles.container}>
				{Object.keys(decks).map(deck => (
					<TouchableOpacity 
						key={deck}
						onPress={() => this.props.navigation.navigate(
							'Deck',
							{ deck }
					)}>
						<Text style={styles.deckTitle}>{deck}</Text>
						<Text style={styles.cardsInDeck}>{decks[deck].questions.length} cards</Text>
					</TouchableOpacity>
				))}
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		backgroundColor: white
	},
	deckTitle: {
		fontSize: 40,
		fontWeight: 'bold',
		textAlign: 'center'
	},
	cardsInDeck: {
		fontSize: 20,
		textAlign: 'center'
	},
	noDataText: {
		fontSize: 20,
		paddingTop: 20,
		paddingBottom: 20,
		justifyContent: 'center'
	}
});

function mapStateToProps(decks) {
	return {
		decks
	}
}

export default connect(mapStateToProps)(DeckList);