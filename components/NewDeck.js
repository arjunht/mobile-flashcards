import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Platform, StyleSheet } from 'react-native';
import { white, purple } from '../utils/colors';
import { connect } from 'react-redux';
import { addDeck } from '../actions';
import { saveDeckTitle } from '../utils/api'

function SubmitBtn ({ onPress }) {
	return (
		<TouchableOpacity
			style={Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.androidSubmitBtn}
			onPress={onPress}>
			<Text style={styles.submitBtnText}>SUBMIT</Text>
		</TouchableOpacity>
	);
}

class NewDeck extends Component {
	
	state = {
		deck: ''
	}
	
	handleChange = (deck) => {
		this.setState({
			deck
		});
	};
	
	submit = () => {
		
		this.props.dispatch(addDeck(this.state.deck));
		
		this.setState({
			deck: ''
		});
		
		saveDeckTitle(this.state.deck);
		
		this.props.navigation.navigate(
			'Deck',
			{ deck: this.state.deck }
		)
	}
	
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.center}>
					<Text style={styles.header}>What is the title of your new Deck?</Text>
					<TextInput 
						placeholder="Deck Title"
						style={styles.inputField}
						value={this.state.deck}
						onChangeText={this.handleChange}
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
		justifyContent: 'center',
		alignItems: 'center',
		marginRight: 30,
		marginLeft: 30
	},
	header: {
		fontSize: 20,
		paddingTop: 20,
		paddingBottom: 20
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
		alignSelf: 'flex-end',
		justifyContent: 'center',
		alignItems: 'center'
	},
	submitBtnText: {
		color: white,
		fontSize: 22,
		textAlign: 'center'
	}
})

export default connect()(NewDeck);