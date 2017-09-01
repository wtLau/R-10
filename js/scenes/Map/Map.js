import React from 'react'

import MapView from 'react-native-maps';

import { styles } from './styles'

const Map = () => (
        <MapView
            style={styles.map}
            initialRegion={{
            latitude: 49.2633479,
            longitude: -123.1381278,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
            }}
        >
            <MapView.Marker draggable
                coordinate={{
                    latitude: 49.2633479,
                    longitude: -123.1381278,
                }}
            />
        </MapView>
)


export default Map