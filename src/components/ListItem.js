import React,{Component} from 'react';
import {Text,StyleSheet,TouchableWithoutFeedback,View,LayoutAnimation, UIManager} from 'react-native';
import {connect} from 'react-redux'
import {CardSection} from './common'
import * as actions from '../actions'

if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

class ListItem extends Component {

    /* componentWillMount(){
        LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    } */

    renderDescription(){
        const {library,expanded} = this.props;
        if(expanded){
             return (
             <CardSection>
                <Text style={{flex:1}}>{library.description}</Text>
             </CardSection>
             );
        }
    }
    
    render(){
        const {id,title,description} = this.props.library;
        return( 
            <TouchableWithoutFeedback onPress={() => {
                LayoutAnimation.configureNext(LayoutAnimation.Presets.spring)
                this.props.selectLibrary(id)}}>
                <View style={styles.viewStyle}>
                    <CardSection>
                    <Text style={styles.textStyle}>
                        {title}
                    </Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    viewStyle:{
        padding:10,
    },
    textStyle:{
        fontSize:18,
        paddingLeft:15
    }
})

//ownProps are the props sent to this component by the parent component which can be accessed by the mapStateToProps function for any operations
const mapStateToProps = (state,ownProps) => {
    const expanded = state.selectedLibraryId === ownProps.library.id;
    return { expanded };
}

export default connect(mapStateToProps,actions)(ListItem);