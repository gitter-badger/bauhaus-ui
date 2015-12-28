import React, {PropTypes, Component} from 'react';
import Look, {StyleSheet} from 'react-look/dom';

class Error extends Component {
	render() {
		console.log('Rerender!');
		const {state, actions} = this.props;
		return (
			<div look={styles.center}>
				<img src="media/bauhausuilogo.svg"/>
				<br/><br/>
				<img src="media/loader.gif"/>
			</div>
		);
	}
}

/*
<div look={styles.footer}>
	<div look={styles.footerLanguage}></div>
</div>
*/

Loading.propTypes = {
	state: PropTypes.object.isRequired,
	actions: PropTypes.object.isRequired
};

import styleSheet from './Error.styles.js';
var styles = StyleSheet.create(Error, styleSheet);

export default Look(Error);
