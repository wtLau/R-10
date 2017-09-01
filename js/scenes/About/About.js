import React from 'react'
import PropTypes from 'prop-types'
import { 
    Text, 
    View,
    Image,
    FlatList,
    ScrollView,
} from 'react-native';

import { styles } from './styles'
import  LineSeparator  from '../../components/LineSeparator/'

import ConductItem from '../../components/ConductItem/'

const About = ({ data }) => (
    <ScrollView>
        <View style={styles.container}>
            <Image 
                style={styles.image}
                source={require('../../assets/images/r10_logo.png')}
            />
            <View>
                <LineSeparator />
                <Text style={styles.p}>R10 is a conference that focuses on just about any topic related to dev.</Text>
                <Text style={styles.title}>Date & Venue</Text>
                <Text style={styles.p}>The R10 conference will take place on Tuesday, June 27, 2017 in Vancouver, BC</Text>
                <Text style={styles.title}>Code of Conduct</Text>
            </View>
        </View>
        <View style={styles.list}>
            {
                data.map((item) => {
                return <ConductItem data={item} key={item.title} />
            })
            }
        </View>
        <View style={styles.footer}>
            <LineSeparator />
            <Text style={styles.copyRight}> &copy; Brian Lau 2017 </Text>
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