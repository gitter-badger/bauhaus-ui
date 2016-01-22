import React, {PropTypes, Component} from 'react';
import look, {StyleSheet} from 'react-look';
import Loader from '../Loader';

const bauhaus = {
	name: 'SimpleWrapper',
	components: [
		{
			name: 'InputText',
			props: {
				defaultValue: 'core.auth.login.username',
				label: 'core.auth.login.submit'
			}
		}
	]
}

class Content extends Component {
	render() {
		const {state, actions} = this.props;
		return (
			<div look={styles.contentWrapper}>
				<div look={styles.content}>
					<span look={styles.contentHeadline}>User</span><hr look={styles.contentHr}/><br/><br/>
					<Loader bauhaus={bauhaus}></Loader>
					<br/>
				</div>
			</div>
		);
	}
}

/*
<div look={styles.footer}>
	<div look={styles.footerLanguage}></div>
</div>
*/

Content.propTypes = {
	state: PropTypes.object.isRequired,
	actions: PropTypes.object.isRequired
};

import styleSheet from './style.js';
var styles = StyleSheet.create(Content, styleSheet);

export default look(Content);