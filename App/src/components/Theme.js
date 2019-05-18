import {createMuiTheme} from '@material-ui/core/styles';
import { blue, pink } from '@material-ui/core/colors';

const Theme = createMuiTheme({
  type: 'dark',
  palette:{
    primary: blue,
    secondary: pink,
  }
});

export default Theme;
