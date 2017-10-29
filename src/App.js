import React from 'react';
import {
    AmbientLight,
    asset,
    Pano,
    Text,
    View,
    Sound,
    VrButton

} from 'react-vr';
import Penholder from './Penholder'
export default class App extends React.Component {
    constructor(props){
       super(props);

       this.state = {
           background: 'background.jpeg',
           sound: 'office.mp3',
           visible: true,
       };
    }

    changeScene = () => {
        if (this.state.visible === false){
            this.setState({
                background: 'background.jpeg',
                sound: 'office.mp3',
                visible: true
            })
        }
        else {
            this.setState({
                background: 'outside.jpeg',
                sound: 'birds.mp3',
                visible: false
            });
        }
    };

    renderItems = () => {
        if (this.state.visible === true){
            return <Penholder />
        }
    };


    render() {
        return (
            <View>
                <AmbientLight intensity={2.5} />
                <Pano source={asset(this.state.background)} />
                <Sound
                    loop={true}
                    volume={1.5}
                    source={{
                        mp3: asset(this.state.sound)
                    }}
                />
                <VrButton
                    onClick={this.changeScene}>
                    <Text
                        style={{
                            backgroundColor: '#777879',
                            fontSize: 0.8,
                            fontWeight: '400',
                            paddingLeft: 0.2,
                            paddingRight: 0.2,
                            textAlign: 'center',
                            textAlignVertical: 'center',
                            transform: [{translate: [0, 2, -6]}],
                        }}>
                        Sweet!
                    </Text>
                </VrButton>
                {this.renderItems()}
            </View>
        );
    }
};

