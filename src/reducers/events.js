import { READ_EVENTS } from '../action';
import _ from 'lodash';

const events = (events = {}, action) => {
    switch (action.type) {
        case READ_EVENTS:
            return _.mapKeys(action.response.data, 'id');
        default:
            return events;
    }
};

export default events;
