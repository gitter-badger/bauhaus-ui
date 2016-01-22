var sideBarSize = 280;
var headerHeight = 50;

var style = {
	wrapper: {},
	sideBar: {
		position: 'fixed',
		left: '0px',
		height: '100%',
		width: sideBarSize + 'px',
		backgroundColor: 'transparent',
		userSelect: 'none'
	},
	sideBarAppName: {
		height: '50px',
		backgroundColor: 'transparent',
		boxSizing: 'border-box',
		color: '#ffffff', //6E00FF
		textTransform: 'uppercase',
		padding: '7px',
		paddingTop: '20px',
		textAlign: 'center',
		fontSize: '20px',
		fontWeight: 700,
		letterSpacing: '2px'
	},
	sideBarLogo: {
		textAlign: 'center',
		padding: '10px'
	},
	sideBarLogoImg: {
		width: '50px'
	},
	sideBarMenu: {},
	sideBarListElement: {
		position: 'relative',
		width: '100%',
		fontSize: '12px',
		textTransform: 'uppercase',
		fontWeight: 700,
		padding: '14px',
		boxSizing: 'border-box',
		color: '#ffffff',
		paddingLeft: '20px',
		cursor: 'pointer',
		letterSpacing: '1px',
		borderLeft: '2px solid transparent',
		':hover': {
			borderLeft: '2px solid #F96331',
		},
		':active': {
			borderLeft: '6px solid #F96331',
			fontWeight: 700,
			transition: 'ease-in-out 0.1s',
			paddingLeft: '30px'
		}
	},
	sideBarUser: {
		position: 'fixed',
		bottom: '20px',
		left: '20px',
		width: sideBarSize - 40 + 'px',
		paddingTop: '20px',
		fontSize: '10px',
		color: '#ffffff',
		boxSizing: 'border-box',
		borderTop: '1px solid rgba(255, 255, 255, 0.1)',
		fontWeight: 300
	},
	sideBarUserLogOut: {
		fontSize: '14px',
		textTransform: 'uppercase',
		paddingBottom: '10px'
	},
	sideBarHistory: {},
	sideBarInbox: {},
	sideBarSwitch: {
		position: 'fixed',
		bottom: '0px',
		left: '0px',
		width: sideBarSize + 'px',
		height: '40px',
		boxSizing: 'border-box',
		color: '#595959',
		borderTop: '1px solid rgba(0, 0, 0, 0.04)',
		display: 'flex'
	},
	sideBarSelect: {
		flex: 1,
		padding: '10px',
		textAlign: 'center',
		fontWeight: 300,
		cursor: 'pointer',
		borderBottom: '2px solid transparent',
		':hover': {
			borderBottom: '2px solid #6E00FF'
		},
		':active': {
			borderBottom: '6px solid #6E00FF',
			fontWeight: 700
		}
	},
	mainFrame: {
		position: 'fixed',
		//left: sideBarSize + 'px', 
		left: (props, state, context) => sideBarSize,
		top: '0px',
		right: '0px',
		height: '100%',
		backgroundColor: '#ffffff'
	},
	header: {
		position: 'absolute',
		top: '0px',
		left: '0px',
		right: '0px',
		height: headerHeight + 'px',
		backgroundColor: '#F96331',
		boxSizing: 'border-box',
		color: '#ffffff',
		padding: '18px',
		zIndex: 2,
		fontWeight: 300,
		userSelect: 'none',
		fontSize: '10px'
	},
	headerSettingsButton: {},
	headerUser: {},
	headerLeft: {
		position: 'absolute',
		top: '0px',
		left: '0px',
		bottom: '0px',
		width: '200px',
		textAlign: 'left',
		verticalAlign: 'middle',
		lineHeight: headerHeight + 'px'
	},
	headerRight: {
		position: 'absolute',
		top: '0px',
		right: '0px',
		bottom: '0px',
		width: '200px',
		textAlign: 'right',
		verticalAlign: 'middle',
		lineHeight: headerHeight + 'px'
	},
	inlineBlock: {
		display: 'inline-block',
		textAlign: 'center',
		width: '60px'
	},
	contentWrapper: {
		position: 'absolute',
		top: '50px',
		left: '0px',
		right: '0px',
		bottom: '0px',
		overflowY: 'scroll',
		boxSizing: 'border-box',
		padding: '30px',
		//boxShadow: '0 0 2px 2px rgba(0, 0, 0, 0.14) inset'
		boxShadow: '0 .25em 2em 0 rgba(0,0,0,.2) inset'
	},
	content: {
		position: 'relative',
		width: '100%'
	},
	contentHeadline: {
		fontWeight: 100,
		color: '#676767',
		fontSize: '32px'
	},
	contentHr: {
		border: 'none',
		height: '1px',
		backgroundColor: 'rgba(0, 0, 0, 0.15)',
		marginLeft: '-10px',
		width: 'calc(100% + 20px)'
	},
	textInput: {
		padding: '8px',
		paddingLeft: '16px',
		paddingRight: '16px',
		borderRadius: '50px', // 4px
		border: '1px solid rgb(210, 210, 210)',
		boxSizing: 'border-box',
		fooBar: 'none',
		outline: 'none',
		color: '#4E4E4E',
		fontSize: '14px',
		width: '100%',
		':focus': {
			border: '1px solid #F96331', // F96331 6E00FF
			color: '#000000'
		}
	},
	formHr: {
		border: 'none',
		height: '1px',
		backgroundColor: 'rgba(0, 0, 0, 0.1)',
	},
	formTable: {
		width: '100%',
		/*borderLeft: '2px solid #6E00FF',*/
		borderCollapse: 'separate',
		borderSpacing: '0px',
		fontWeight: '100',
		marginLeft: '2px',
		color: '#676767',
		fontSize: '14px'
	},
	tableTr: {
		paddingBottom: '6px'
	},
	backTd: {
		width: '100%',
		padding: '8px',
		paddingLeft: '15px',
		paddingRight: '15px'
	},
	frontTd: {
		whiteSpace: 'nowrap',
		textAlign: 'right',
		padding: '8px',
		paddingLeft: '30px',
		paddingRight: '15px'
			//paddingRight: '15px',
			//paddingLeft: '15px'
	},
	menuIcon: {
		display: 'inline-block',
		width: '42px'
	},
	imageIcon: {
		width: '20px',
		verticalAlign: 'middle'
	}
};

style.frontTdHeadLine = Object.assign({}, style.frontTd, {
	fontWeight: 500,
	fontSize: '16px',
	textAlign: 'left',
	paddingLeft: '15px'
});

export default style;