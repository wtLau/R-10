import React from 'react'
import PropTypes from 'prop-types'
import { 
    Text, 
    View,
    Image,
    FlatList,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import realm from '../../config/models'

import { styles } from './styles'
import  LineSeparator  from '../../components/LineSeparator/'

import ConductItem from '../../components/ConductItem/'

const About = ({ data, toggleDescription }) => (
    <ScrollView>
        <View style={styles.container}>
            <Image 
                style={styles.image}
                source={require('../../assets/images/r10_logo.png')}
            />
            <View>
                <LineSeparator />
                <Text style={styles.title}>R10 is a conference that focuses on just about any topic related to dev.</Text>
                <Text style={styles.title}>Date & Venue</Text>
                <Text>The R10 conference will take place on Tuesday, June 27, 2017 in Vancouver, BC</Text>
                <Text style={styles.title}>Code of Conduct</Text>
            </View>
            <FlatList
                data={data}
                ItemSeparatorComponent = {()=> <LineSeparator/> }
                keyExtractor={item => item.title}
                renderItem={({ item }) => 
                    <ConductItem data={item} />
                }
            />
        </View>
    </ScrollView>
)


About.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        description: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
      })).isRequired
}

export default About