import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Platform, StyleSheet} from 'react-native';
import { white, purple } from '../utils/colors';
import { connect } from 'react-redux';
import { addQuestion } from '../actions';

function SubmitBtn ({ onPress }) {
	return (
		<TouchableOpacity
			style={Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.androidSubmitBtn}
			onPress={onPress}>
			<Text style={styles.submitBtnText}>SUBMIT</Text>
		</TouchableOpacity>
	);
}

class NewQuestion extends Component {
	
	state = {
		question: '',
		answer: ''
	}
	
	handleQuestionChange = (question) => {
		this.setState({
			question
		});
	};
	
	handleAnswerChange = (answer) => {
		this.setState({
			answer
		});
	};
	
	submit = () => {
		
		this.props.dispatch(addQuestion(this.props.deck.title, this.state));
		
		this.setState({
			question: '',
			answer: ''
		});
		
		// Save to AsyncStorage - addCardToDeck: take in two arguments, title and card, and will add the card to the list of questions for the deck with the associated title
		
	}
	
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.center}>
					<TextInput 
						placeholder="Question"
						style={styles.inputField}
						value={this.state.question}
						onChangeText={this.handleQuestionChange}
					/>
					<TextInput 
						placeholder="Answer"
						style={styles.inputField}
						value={this.state.answer}
						onChangeText={this.handleAnswerChange}
					/>
				</View>
				<SubmitBtn onPress={this.submit} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		backgroundColor: white
	},
	center: {
		flex: 1,
		justifyContent: 'space-evenly',
		alignItems: 'center',
		marginRight: 30,
		marginLeft: 30
	},
	inputField: {
		height: 40,
		borderWidth: 1,
		borderRadius: 5,
		padding: 10
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

export default connect(mapStateToProps)(NewQuestion);
