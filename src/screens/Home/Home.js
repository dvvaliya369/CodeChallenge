import React, { useEffect } from 'react'
import { ScrollView, View } from 'react-native'
import GlobalFont from 'react-native-global-font'
import Category from '../../components/Home/Category'
import HomeRecipeList from '../../components/Home/HomeRecipeList'
import HomeUserStory from '../../components/Home/HomeUserStory'
import Button from '../../components/Button'
import Style from '../../styles/Style'

// Block of code for Home screen render
const Home = ({ route, navigation }) => {
    useEffect(() => {
        // Globally apply font for all the screens in the app(if fonts is different for each screens like 
        // bold or anything we just need to change the style in fontStyle)
        let fontName = 'Inter-Medium'
        GlobalFont.applyGlobal(fontName)
    }, [])

    const handleButtonDemoPress = () => {
        navigation.navigate('ButtonDemo');
    };

    return (
        // Change ScrollView to View if we want to scroll just Recipe List
        <ScrollView showsVerticalScrollIndicator={false}
            style={{ flex: 1, backgroundColor: 'white' }}>
            {/* Component for home user story view from top of the screen */}
            <HomeUserStory />
            {/* Component for home type of food  cateory */}
            <Category />
            <View style={Style.homeSeperator} />
            {/* Button to navigate to Button Demo */}
            <View style={{ padding: 20 }}>
                <Button 
                    title="View Button Component Demo" 
                    onPress={handleButtonDemoPress}
                    variant="primary"
                />
            </View>
            {/* Component for home user recipe list view */}
            <HomeRecipeList />
        </ScrollView>
    )
}

export default Home;