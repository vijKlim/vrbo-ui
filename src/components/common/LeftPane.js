import React from 'react';
import PropTypes from 'prop-types';

import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
import { useTheme, makeStyles } from '@material-ui/core/styles';

import Filters from './../filters';
import { DRAWER_WIDTH } from '../../constants/app.constants';

const useStyles = makeStyles(theme =>({
    drawer: {
        [theme.breakpoints.up('sm')]: {
          flexShrink: 0,
        },
    },
    drawerPaper: {
        width: DRAWER_WIDTH,
    }
}));

/**
 * 
 * @param {*} props 
 * Filter panel once the search term has results
 */
const LeftPane = (props) => {
    const { showFilters, mobileOpen, handleDrawerToggle } = props;
    const classes = useStyles();
    const theme = useTheme();

    return (
        <nav className={classes.drawer} aria-label="Mailbox folders">
            <Hidden smUp implementation="css">
                <Drawer
                    variant="temporary"
                    anchor={theme.direction === 'rtl' ? 'left' : 'right'}
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                >
                    {showFilters && <Filters />}
                </Drawer>
            </Hidden>
            <Hidden xsDown implementation="css">
                <Drawer
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    anchor="right"
                    variant="permanent"
                    open
                >
                    {showFilters && <Filters /> }
                </Drawer>
            </Hidden>
        </nav>
    );
};

LeftPane.propTypes = {
    showFilters: PropTypes.bool,
    mobileOpen: PropTypes.bool,
    handleDrawerToggle: PropTypes.func
};

export default LeftPane;