import React from 'react';
import {View,Text,Image,TouchableOpacity} from 'react-native';
import {Card,CardItem,Container} from 'native-base';


const AlbumArt = ({url,onPress}) =>{
return(
    <Container style={{height:100,backgroundColor:'black'}}>
        <Card>
            <CardItem cardBody>
                <TouchableOpacity onPress={onPress}>
                    <Image source={{uri:url}} style={{height: 100, width: 100, flex: 1}} />
                </TouchableOpacity>
                <Text>
                    hello
                </Text>
            </CardItem>
        </Card>
    </Container>

    );

}

export default AlbumArt;