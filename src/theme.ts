import { createMuiTheme } from '@material-ui/core/styles'
// import { red } from '@material-ui/core/colors'

// Create a theme instance.
const theme = createMuiTheme({

	palette: {
		type: 'dark',
		primary: {
			light: '#673ab7',
			main: '#212121',
			dark: '#212121',
			// contrastText: '#fff',
		},
		secondary: {
			light: '#303f9f',
			main: '#f44336',
			dark: '#fffafa',
			// contrastText: '#000',
		},

		background: {
		  paper: "#424242",
		  default: "#303030"
		}
	},

	shape: {
		borderRadius: 8
	},

	overrides: {
		MuiButtonBase: {
			root: {
				color: 'rgba(250,250,250,1)'
			}
		},

		MuiLinearProgress: {
			colorPrimary: {
				backgroundColor: '#fff'
			}
		},

		MuiSnackbarContent: {
			root: {
				backgroundColor: '#323232',
				color: 'rgba(250,250,250,1)'
			}
		}
	}
})

export default theme