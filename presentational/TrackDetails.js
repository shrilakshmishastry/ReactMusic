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
    <Container>
        <Grid>
            <Row>
                <Col>
                    <TouchableOpacity onPress={onAddPress}>
                        <Icon type="FontAwesome5" name="creative-commons-sampling-plus" />
                    </TouchableOpacity>
                </Col>
                <Col>
                    <Text onPress={onTitlePress}>
                        {Title}
                    </Text>
                    <Text onPress="onArtistPress">
                        {artist}
                    </Text>
                </Col>
                <Col>
                <TouchableOpacity onPress={onMorePress}>
                    <Icon type="FontAwesome" name="circle-o-notch" />
                </TouchableOpacity>
                </Col>
            </Row>
        </Grid>
    </Container>

}
export default TrackDetails