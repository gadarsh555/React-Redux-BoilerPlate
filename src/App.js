import React from 'react';
import {View,Text} from 'react-native';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducers from './reducers'
import {Header} from './components/common'
import LibraryList from './components/LibraryList'

//provider acts as a bridge between react and redux
//provider can have only one child but that child can have as many child as it can. 

const App = () => {
    return (
        <Provider store={createStore(reducers)}>
            <View style={{flex:1}}>
            <Header headerText="Tech Stack" />
            <LibraryList />
            </View>
        </Provider>
    );
}

export default App;