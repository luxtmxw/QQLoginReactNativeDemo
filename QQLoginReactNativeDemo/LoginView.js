/**
 * Created by luxtmxw on 16/11/3.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput
} from 'react-native';

var Dimensions = require('Dimensions');
var kScreenWidth = Dimensions.get('window').width;
var kScreenHeight = Dimensions.get('window').height;

class LoginView extends Component {
    render() {
        return (
            <View style={styles.container}>
               <Image source={require('./img/icon.png')} style={styles.ImageStyle} />
                <TextInput style={styles.TextInputStyle}
                           numberOfLines={1}
                           textAlign='center'
                           placeholder='请输入用户名'
                           clearButtonMode = 'while-editing'
                />
                <TextInput style={styles.TextInputStyle}
                           numberOfLines={1}
                           textAlign='center'
                           placeholder='请输入密码'
                           clearButtonMode = 'while-editing'
                           secureTextEntry = {true}
                />
                <View style={styles.ButtonStyle}>
                    <Text style={{color:'white'}}>登录</Text>
                </View>

                <View style={styles.SettingStyle}>
                    <Text style={styles.SmallBtnStyle}>无法登录</Text>
                    <Text style={styles.SmallBtnStyle}>新用户</Text>
                </View>
                <View style={styles.BottomViewStyle}>
                    <Text style={{color: '#333333'}}>其他登录方式: </Text>
                    <Image source={require('./img/icon3.png')} style={styles.OtherImageStyle} />
                    <Image source={require('./img/icon7.png')} style={styles.OtherImageStyle}/>
                    <Image source={require('./img/icon8.png')} style={styles.OtherImageStyle}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

        //justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },

    ImageStyle: {
        marginTop: 50,
        marginBottom: 30,
        width: 80,
        height: 80,
        borderRadius: 40
    },

    TextInputStyle: {
        width: kScreenWidth,
        height: 30,
        backgroundColor: 'white',
        marginBottom: 0.5,
        justifyContent: 'center',
        alignItems:'center'
        //fontSize: 15
    },

    ButtonStyle: {
        marginTop: 30,
        //fontSize: 15,
        //fontcolor('white'),
        //fontColor:'white',
        width: kScreenWidth - 20,
        height: 30,
        borderRadius: 8,
        backgroundColor: 'rgb(101,183,255)',
        justifyContent:'center',
        alignItems: 'center',
        marginBottom: 20
    },

    SettingStyle: {
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
        width:kScreenWidth-20
    },

    SmallBtnStyle: {
        color: 'rgb(101,183,255)'
    },

    BottomViewStyle: {
        flexDirection:'row',
        alignItems:'center',
        //绝对定位
        position: 'absolute',
        bottom:20,
        left:10,

    },

    OtherImageStyle: {
       marginRight: 8,
        width:40,
        height:40,
        borderRadius:20
    }

});

module.exports = LoginView;