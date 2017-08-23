import React from 'react'
import PropTypes from 'prop-types'
import { 
    Text, 
    View,
    Image,
    FlatList,
    ScrollView
} from 'react-native';
import realm from '../../config/models'

import { styles } from './styles'
import  LineSeparator  from '../../components/LineSeparator/'

const About = ({ data }) => (
    <ScrollView>
        <View style={styles.container}>
            <Image 
                style={styles.image}
                source={require('../../assets/images/r10_logo.png')}
            />
            <View style={styles.border}/>
            <Text>R10 is a conference that focuses on just about any topic related to dev.</Text>
            <Text style={styles.title}>Date & Venue</Text>
            <Text>The R10 conference will take place on Tuesday, June 27, 2017 in Vancouver, BC</Text>
            <FlatList
                data={data}
                ItemSeparatorComponent = {()=> <LineSeparator/> }
                keyExtractor={item => item.title}
                renderItem={({ item }) => 
                    <View>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.p}>{item.description}</Text>
                    </View>
                }
            />
        </View>
        { console.log('the path is: ', realm.path)    }
    </ScrollView>
)


About.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        description: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
      })).isRequired
}

export default About