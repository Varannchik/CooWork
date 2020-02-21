// import {

// } from '../../src/actions/actionTypes';
import update from 'immutability-helper';


const initialState = {
    data: [
        {
            'login': '',
            'pwd':'',
                    
        }
    ]
}

export default function(state=initialState, action){
    
    switch (action.type) {
        default:
            return state;
    }

}