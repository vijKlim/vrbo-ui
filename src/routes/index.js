import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import HotelListingContainer  from './../containers/HotelListingContainer';

export const routes = [
    {
        path: '/',
        component: HotelListingContainer
    }
]