import React,{Component} from 'react';
import {connect} from 'react-redux';
import {FlatList,Text} from 'react-native'
import ChildComponent from './ChildComponent.js' 

class LibraryList extends Component {
    renderItem({item}){
     return <ChildComponent data={item} />;
    }
    render(){
        return (
            <FlatList 
              data={this.props.anyReducerName1}
              renderItem={this.renderItem}
              keyExtractor={data => data.id.toString()}
            />
        );
    }
}

const mapStateToProps = state => {
return {};
};

export default connect(mapStateToProps)(LibraryList);
//connect helps the component to acces the state it connects the component with the state