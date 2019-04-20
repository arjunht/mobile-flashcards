import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Platform, StyleSheet } from 'react-native';
import { white, purple, red, green } from '../utils/colors';
import { connect } from 'react-redux';

function TextBtn ({ backgroundColor, onPress, buttonTextStyle, buttonText }) {
	return (
		<TouchableOpacity
			style={[Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.androidSubmitBtn, { backgroundColor } ]}
			onPress={onPress}>
			<Text style={buttonTextStyle ? buttonTextStyle : styles.buttonText}>{buttonText}</Text>
		</TouchableOpacity>
	);
}

class Quiz extends Component {
	
	state = {
		questionDisplayed: true,
		questionNumber: 0,
		numberOfCorrectAnswers: 0,
	}
	
	toggleQuestionAnswer = () => {
		this.setState((prevState) => ({
			questionDisplayed: !prevState.questionDisplayed
		}));
	};
	
	correctAnswer = () => {
		this.setState((prevState) => ({
			questionDisplayed: true,
			questionNumber: prevState.questionNumber + 1,
			numberOfCorrectAnswers: prevState.numberOfCorrectAnswers + 1
		}));
	};
	
	incorrectAnswer = () => {
		this.setState((prevState) => ({
			questionDisplayed: true,
			questionNumber: prevState.questionNumber + 1
		}));
	};
	
	reset = () => {
		this.setState({
			questionDisplayed: true,
			questionNumber: 0,
			numberOfCorrectAnswers: 0
		});
	};
	
	backToDeck = () => {
		this.props.goBack();
	};
	
	render() {
		const { deck, navigation } = this.props;
		const { questionDisplayed, questionNumber, numberOfCorrectAnswers } = this.state;
		
		const { questions } = deck;
		const currentQuestion = questions[questionNumber];
		const score = ( numberOfCorrectAnswers / questions.length ) * 100;
		
		return (
			<View style={styles.container}>
				{questionNumber < questions.length
				?	<View style={styles.center}>
						<Text style={styles.questionIndex}>{`${questionNumber+1}/${questions.length}`}</Text>
						<View>
							<Text style={{fontSize: 40, textAlign: 'center'}}>
								{questionDisplayed === true ? currentQuestion.question : currentQuestion.answer}
							</Text>
							<TextBtn
								onPress={this.toggleQuestionAnswer}
								buttonTextStyle={styles.toggleQuestionAnswer}
								buttonText={questionDisplayed === true ? 'Answer': 'Question'} />
						</View>
						<View>
							<TextBtn
								backgroundColor={green}
								onPress={this.correctAnswer}
								buttonText={'Correct'} />
							<TextBtn
								backgroundColor={red}
								onPress={this.incorrectAnswer}
								buttonText={'Incorrect'} />
						</View>
					</View>
				:	<View style={styles.center}>
						<Text style={{fontSize: 40, textAlign: 'center'}}>Score: {score}%</Text>
						<TextBtn
							backgroundColor={purple}
							onPress={this.reset}
							buttonText={'Restart Quiz'} />
						<TextBtn
							backgroundColor={purple}
							onPress={this.backToDeck}
							buttonText={'Back to Deck'} />
					</View>
				}
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		justifyContent: 'center'
	},
	center: {
		flex: 1,
		justifyContent: 'space-around',
		alignItems: 'center',
		marginRight: 30,
		marginLeft: 30
	},
	questionIndex: {
		fontSize: 10
	},
	toggleQuestionAnswer: {
		fontSize: 20,
		fontWeight: 'bold',
		color: red,
		textAlign: 'center'
	},
	iosSubmitBtn: {
		padding: 10,
		borderRadius: 7,
		height: 45,
		marginLeft: 40,
		marginRight: 40,
	},
	androidSubmitBtn: {
		padding: 10,
		paddingLeft: 30,
		paddingRight: 30,
		borderRadius: 2,
		height: 45,
		justifyContent: 'center',
		alignItems: 'center'
	},
	buttonText: {
		color: white,
		fontSize: 22,
		textAlign: 'center'
	}
});

function mapStateToProps( state, { navigation }) {
	
	const { deck } = navigation.state.params
	
	return {
		deck: state[deck],
		goBack: () => navigation.goBack()
	}
}

export default connect(mapStateToProps)(Quiz);