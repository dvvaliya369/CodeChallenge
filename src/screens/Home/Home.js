import React, { useEffect } from 'react'
import { ScrollView, View } from 'react-native'
import GlobalFont from 'react-native-global-font'
import { Button, Text } from 'react-native-paper'
import Category from '../../components/Home/Category'
import HomeRecipeList from '../../components/Home/HomeRecipeList'
import HomeUserStory from '../../components/Home/HomeUserStory'
import TestPaperComponents from '../../components/TestPaperComponents'
import Style from '../../styles/Style'

// Block of code for Home screen render
const Home = ({ route }) => {
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
            
            {/* Test Paper Components - Remove this after verifying setup */}
            <View style={{ padding: 16, backgroundColor: '#f5f5f5', margin: 16, borderRadius: 8 }}>
                <Text variant="titleMedium" style={{ marginBottom: 8 }}>
                    React Native Paper Test:
                </Text>
                <Button 
                    mode="contained" 
                    onPress={() => console.log('Paper is working!')}
                    style={{ marginBottom: 8 }}
                >
                    Paper Button Test
                </Button>
            </View>
            
            {/* Component for home user story view from top of the screen */}
            <HomeUserStory />
            {/* Component for home type of food  cateory */}
            <Category />
            <View style={Style.homeSeperator} />
            {/* Component for home user recipe list view */}
            <HomeRecipeList />
        </ScrollView>
    )
}

export default Home;