import React from 'react'
import PropTypes from 'prop-types'
import { 
    Text, 
    View,
    Image,
    FlatList
} from 'react-native';

import { styles } from './styles'

const About = ({ data }) => (
    <View style={styles.container}>
        <Image 
            style={styles.image}
            source={require('../../assets/images/r10_logo.png')}
        />
        <View style={styles.border}/>
        <FlatList
            data={data}
            renderItem={({ item }) => 
                <View style={styles.wrapper}>
                    <Text style={styles.text}>          {item.title} 
                    </Text>
                    <Text>          
                        {item.description} 
                    </Text>
                </View>
            }
        ItemSeparatorComponent = {()=> <View style={styles.border}/>}
        keyExtractor={item => item.title}
        />
    </View>
)


About.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        description: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
      })).isRequired
}

export default About