import React,{Component} from 'react';
import {connect} from 'react-redux';
import {FlatList,Text} from 'react-native'
import ListItem from './ListItem' 

class LibraryList extends Component {
    renderItem({item}){
     return <ListItem library={item} />;
    }
    render(){
       /*  console.log("props : ",this.props.libraries); */
        return (
            <FlatList 
              data={this.props.libraries}
              renderItem={this.renderItem}
              keyExtractor={library => library.id.toString()}
            />
        );
    }
}

const mapStateToProps = state => {
return {libraries : state.libraries};
};

export default connect(mapStateToProps)(LibraryList);
//connect helps the component to acces the state it connects the component with the state