import React, { useEffect, useState } from 'react'
import { ScrollView, View, Text } from 'react-native'
import GlobalFont from 'react-native-global-font'
import Category from '../../components/Home/Category'
import HomeRecipeList from '../../components/Home/HomeRecipeList'
import HomeUserStory from '../../components/Home/HomeUserStory'
import { Dropdown } from '../../components/Common'
import Style from '../../styles/Style'
import Colors from '../../utilities/Colors'

// Block of code for Home screen render
const Home = ({ route }) => {
    const [selectedFilter, setSelectedFilter] = useState(null);

    // Sample data for dropdown filter
    const filterOptions = [
        { id: 1, label: 'Most Popular', value: 'popular' },
        { id: 2, label: 'Latest', value: 'latest' },
        { id: 3, label: 'Quick & Easy', value: 'quick' },
        { id: 4, label: 'Healthy', value: 'healthy' },
    ];

    useEffect(() => {
        // Globally apply font for all the screens in the app(if fonts is different for each screens like 
        // bold or anything we just need to change the style in fontStyle)
        let fontName = 'Inter-Medium'
        GlobalFont.applyGlobal(fontName)
    }, [])

    return (
        // Change ScrollView to View if we want to scroll just Recipe List
        <ScrollView showsVerticalScrollIndicator={false}
            style={{ flex: 1, backgroundColor: 'white' }}>
            {/* Component for home user story view from top of the screen */}
            <HomeUserStory />
            {/* Component for home type of food  cateory */}
            <Category />
            
            {/* Red Dropdown Filter Component */}
            <View style={{ paddingHorizontal: 24, marginTop: 16 }}>
                <Text style={[Style.categoryText, { fontSize: 16, marginLeft: 0, marginTop: 0 }]}>
                    Filter Recipes:
                </Text>
                <Dropdown
                    data={filterOptions}
                    placeholder="Select filter..."
                    onSelect={(item) => setSelectedFilter(item)}
                    selectedValue={selectedFilter}
                />
            </View>
            
            <View style={Style.homeSeperator} />
            {/* Component for home user recipe list view */}
            <HomeRecipeList />
        </ScrollView>
    )
}

export default Home;