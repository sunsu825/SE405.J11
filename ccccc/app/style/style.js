import {
    StyleSheet,
    Dimensions,
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
    },
    image: {
        flex:1,
        // width: Dimensions.get('window').width,
        // height: Dimensions.get('window').height,
        resizeMode:'contain',
        //backgroundColor: 'gray'
    },
    logo: {
        flex: 1,
        resizeMode: 'contain',
    },
    form: {
        
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        
    },
    form_Register: {
        
        flex: 2,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        
    },
    username: {
        
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    username_Register: {
        
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    ButtonLogin: {
        
        marginTop: 10,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
        resizeMode: 'contain'
    },
    ButtonRegister: {
        
        
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
        resizeMode: 'contain'
    },
    button: {
        // borderWidth: 0.5,
        // borderRadius: 5,
        //backgroundColor: 'blue',
    },

    textinput: {
        marginBottom: 5,
        width: Dimensions.get('window').width*0.9,
        height: 40,
        marginTop: 10,
        borderWidth: 0.8,
        borderRadius: 5
    }
});

export default styles;