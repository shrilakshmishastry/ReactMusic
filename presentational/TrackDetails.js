import React from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
import {Icon,Container} from 'native-base';
import {Col,Row,Grid} from 'react-native-easy-grid';

const TrackDetails = ({title,
artist,
onAddPress,
onMorePress,
onTitlePress,
onArtistPress

})=>{
    return(
    <Container  style={{padding:20,backgroundColor:'black'}}>
        <Grid>
            <Row>

                <Col size={1}  >
                    <TouchableOpacity onPress={onAddPress}>
                        <Icon style={{color:'white'}} type="FontAwesome5" name="creative-commons-sampling-plus" />
                    </TouchableOpacity>
                </Col>
                <Col size={2}>
                    <Text style={{color:'white'}}>
                        {title}
                    </Text>
                    <Text style={{color:'white'}}>
                        {artist}
                    </Text>
                </Col>
                <Col size={1}>
                <TouchableOpacity >
                    <Icon type="FontAwesome" name="circle-o-notch" style={{color:'white'}} />
                </TouchableOpacity>
                </Col>
            </Row>
        </Grid>
    </Container>
);
}
export default TrackDetails