import React,{Component} from 'react';
import {Header,Container,Left,Right,Body,Button,Title,Icon} from 'native-base';
//import Icon from 'react-native-vector-icons/FontAwesome';
import {Text,View,TouchableOpacity} from 'react-native';


const HeaderIcon = ({message,onDownPress,onQueuePress,onMessagePress}) =>{
    return(
        <Container>
            <Header style={{backgroundColor:'black'}}>
             <Left >
                <TouchableOpacity onPress={onDownPress}>

                    <Icon style={{color:'white'}} type="FontAwesome5" name="caret-down" />

                </TouchableOpacity>
             </Left>
             <Body>
               <Title>
                <Text onPress={onMessagePress}>
                {message.toUpperCase()}
               </Text>
               </Title>
             </Body>
             <Right>
                <TouchableOpacity onPress={onQueuePress}>
                        <Icon style={{color:'white'}} type="FontAwesome5" name="bars" />
                </TouchableOpacity>
             </Right>
            </Header>
        </Container>
    );

}

export default HeaderIcon;