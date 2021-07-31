import { makeStyles } from '@material-ui/core/styles';
import { relative } from 'path';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    padding: theme.spacing(3),
  },
  toolbar: theme.mixins.toolbar,
  content: {
    width: '100%',
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  textField: {
      width: '100%'
  },
  searchButton: {
    display: 'flex',
    'align-items': 'flex-start'
  },
  listingCard: {
    maxWidth: '100%',
  },
  listingMedia: {
    height: 400,
  },
  info: {
    backgroundColor: theme.palette.primary.main,
  },
  icon: {
    fontSize: 20,
  },
  error: {
    backgroundColor: theme.palette.error.dark,
  },
  message: {
    display: 'flex',
    alignItems: 'center'
  },
}));

export default useStyles;