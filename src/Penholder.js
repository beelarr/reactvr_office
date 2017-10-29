import React from 'react';
import {
    asset,
    View,
    Model,

} from 'react-vr';

export default class Penholder extends React.Component {
    render() {
        return (
            <View>
                <Model
                    source={{
                        obj: asset('/penholder/Table_Set_obj.obj'),
                        mtl: asset('/penholder/Table_Set_obj.mtl'),
                    }}
                    style={{
                        transform: [
                            {translate: [-3.9, 0.5, -4.5]},
                            {scale: 0.00125},
                            {rotateX: -90},
                            ],
                    }}
                />
                <Model
                    source={{
                        obj: asset('/penholder/Table_Set_obj.obj'),
                        mtl: asset('/penholder/Table_Set_obj.mtl'),
                    }}
                    style={{
                        transform: [
                            {translate: [8.8, 0.45, -4]},
                            {scale: 0.00125},
                            {rotateX: -90},
                            {rotateZ: -270}

                        ],
                    }}
                />
                <Model
                    source={{
                        obj: asset('/penholder/Table_Set_obj.obj'),
                        mtl: asset('/penholder/Table_Set_obj.mtl'),
                    }}
                    style={{
                        transform: [
                            {translate: [6.2, 0.3, -6.3]},
                            {scale: 0.0015},
                            {rotateX: -90},
                        ],
                    }}
                />

            </View>
        );
    }
};

