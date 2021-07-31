import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';

import { IntlProvider, addLocaleData } from 'react-intl';
import locale_en from 'react-intl/locale-data/en';
import locale_de from 'react-intl/locale-data/de';

import Header from './common/Header';
import LeftPane from './common/LeftPane';

import messages_de from "./../translations/de.json";
import messages_en from "./../translations/en.json";

import { routes } from './../routes';
import useStyles from './../styles/hotel-listings.styles';
import theme from './../styles/theme';

const messages = {
    'de': messages_de,
    'en': messages_en
};

addLocaleData([...locale_en, ...locale_de]);

const App = (props) => {
    const classes = useStyles();
    const [mobileOpen, setMobileOpen] = useState(false);
    const { language, showFilters } = props;

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    }
    
    return (
        <ThemeProvider theme={theme}>
            <IntlProvider locale={language} messages={messages[language]}>
                <div className={classes.root}>
                    <CssBaseline />
                    <Router>
                        <Header language={language} handleDrawerToggle={handleDrawerToggle}/>
                        <LeftPane showFilters={showFilters} mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle}/>
                        {routes.map((route, idx) => <Route  key={idx} exact={route.exact} path={route.path} component={route.component} />)}
                    </Router>
                </div>
            </IntlProvider>
        </ThemeProvider>
    );
}

const mapStateToProps = (state) => {
    return {
        language: state.app.language,
        showFilters: state.hotelListing.showFilters
    }
}

export default connect(mapStateToProps, null)(memo(App));
