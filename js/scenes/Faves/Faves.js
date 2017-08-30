import React from 'react'
import PropTypes from 'prop-types'
import { 
    Text, 
    View,
    Image,
    SectionList
} from 'react-native';

import { styles } from './styles'

const Faves = ({ FaveData }) => (
    <View style={styles.container}>
        <SectionList
            renderSectionHeader= { 
                (headerItem) => 
                    <Text style={[styles.h3, styles.h3_time, styles.wrapper]}>
                        {convertTimeHelper(headerItem.section.title)} </Text>}
            renderItem={
                ({item}) => 
                    <View>
                        <TouchableOpacity onPress={() =>goToSession('schedule', item)}>
                            <View style={styles.p_wrapper}>
                                <Text style={styles.h3}>
                                    {item.title}
                                    </Text>
                                <Text style={styles.p}>
                                    {item.location}
                                    </Text> 
                            </View>
                        </TouchableOpacity>
                        <View style={styles.faveHeart}>
                            <FaveHeart/>
                        </View>
                    </View>
                }
            ItemSeparatorComponent = {()=> <LineSeparator/> }
            keyExtractor={data => data.session_id}
            sections={data}
        />
    </View>
)


Faves.propTypes = {}

export default Faves