import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Platform, StyleSheet } from 'react-native';
import { white, purple } from '../utils/colors';
import { connect } from 'react-redux';

class Deck extends Component {
	
	static navigationOptions = ({ navigation }) => {
		const { deck } = navigation.state.params
		
		return {
			title: deck
		}
	}
	
	render() {
		
		const deck = this.props.deck;
		const title = deck.title;
		
		return (
			<View style={styles.container}>
				<Text style={styles.header}>{title}</Text>
				<Text style={styles.numberOfCards}>{deck.questions.length} cards</Text>
				<TouchableOpacity 
					style={Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.androidSubmitBtn}
					onPress={() => this.props.navigation.navigate(
						'NewQuestion',
						{ deck: title })}>
					<Text style={styles.submitBtnText}>Add Card</Text>
				</TouchableOpacity>
				<TouchableOpacity 
					style={Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.androidSubmitBtn}
					onPress={() => this.props.navigation.navigate(
						'Quiz',
						{ deck: title })}>
					<Text style={styles.submitBtnText}>Start Quiz</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		backgroundColor: white,
		justifyContent: 'space-around',
		alignItems: 'center',
		marginRight: 30,
		marginLeft: 30
	},
	header: {
		fontSize: 40,
		paddingTop: 20,
		paddingBottom: 20
	},
	numberOfCards: {
		fontSize: 30,
		paddingTop: 20,
		paddingBottom: 20
	},
	iosSubmitBtn: {
		backgroundColor: purple,
		padding: 10,
		borderRadius: 7,
		height: 45,
		marginLeft: 40,
		marginRight: 40,
	},
	androidSubmitBtn: {
		backgroundColor: purple,
		padding: 10,
		paddingLeft: 30,
		paddingRight: 30,
		borderRadius: 2,
		height: 45,
		justifyContent: 'center',
		alignItems: 'center'
	},
	submitBtnText: {
		color: white,
		fontSize: 22,
		textAlign: 'center'
	}
})

function mapStateToProps( state, { navigation }) {
	
	const { deck } = navigation.state.params
	
	return {
		deck: state[deck]
	}
}

export default connect(mapStateToProps)(Deck);