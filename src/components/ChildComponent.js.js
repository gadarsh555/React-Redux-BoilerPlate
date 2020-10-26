import React,{Component} from 'react';
import {Text,StyleSheet,TouchableWithoutFeedback,View,LayoutAnimation, UIManager} from 'react-native';
import {connect} from 'react-redux'
import {CardSection} from './common'
import * as actions from '../actions'

//to implement LayoutAnimation in the react-native
if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

class ListItem extends Component { 
    render(){
        return( 
            <TouchableWithoutFeedback onPress={() => this.props.anyAction(id)}>
                {/* this.props.anyAction(id) - This calls action creator in actions folder and sends the payload id. */}
                <View>
                  {this.props.data}
                  {this.props.anyReducerName2}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
   
})

//ownProps are the props sent to this component by the parent component which can be accessed by the mapStateToProps function for any operations
const mapStateToProps = (state,ownProps) => {
    return { };
}

export default connect(mapStateToProps,actions)(ListItem);