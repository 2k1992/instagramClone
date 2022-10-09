import { View,Touchable,Image, TouchableOpacity, StyleSheet } from 'react-native'
import React, {useState} from 'react'

export const bottomTabsIcons = [
    {
        name: 'Home',
        active: 'https://img.icons8.com/ios-filled/150/ffffff/home.png',
        inactive: 'https://img.icons8.com/ios/100/ffffff/home--v1.png',
    },
    {
        name: 'Search',
        active: 'https://img.icons8.com/ios-filled/100/ffffff/search-for-love.png',
        inactive: 'https://img.icons8.com/ios/100/ffffff/search--v1.png',
    },
    {
        name: 'Reels',
        active: 'https://img.icons8.com/ios-filled/150/ffffff/instagram-reel.png',
        inactive: 'https://img.icons8.com/ios/100/ffffff/instagram-reel.png',
    },
    {
        name: 'Shop',
        active: 'https://img.icons8.com/ios-filled/100/ffffff/shopping-bag.png',
        inactive: 'https://img.icons8.com/ios/100/ffffff/shopping-bag--v1.png',
    },
    {
        name: 'Profile',
        active: 'https://instagram.fadd2-1.fna.fbcdn.net/v/t51.2885-19/308188082_386717597003648_7920094936618864228_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fadd2-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=t7oJk8_3PoQAX_9hhRP&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AT_X4rLntm6RC5CpGGQB-grUbS9FH3XEbMCR7529bE9uiA&oe=63424E0E&_nc_sid=1527a3',
        inactive: 'https://instagram.fadd2-1.fna.fbcdn.net/v/t51.2885-19/308188082_386717597003648_7920094936618864228_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fadd2-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=t7oJk8_3PoQAX_9hhRP&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AT_X4rLntm6RC5CpGGQB-grUbS9FH3XEbMCR7529bE9uiA&oe=63424E0E&_nc_sid=1527a3',
    },
]

const BottomTabs = ({ icons }) => {
  const [activeTab, setActiveTab] = useState('Home')

  const Icon = ({ icon }) => (
    <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
        <Image 
        source={{ uri: activeTab === icon.name ? icon.active : icon.inactive }} 
        style={[styles.icon, // regular styles
        icon.name === 'Profile' ? styles.profilePic() : null, // styles for profile
        // when profile is clicked
        activeTab === 'Profile' && icons.name === activeTab 
            ? styles.profilePic(activeTab) : null, 
        ]}/>

    </TouchableOpacity>
  )

  return (
    <View style={styles.wrapper}>
        {/* divider between stories and post */}
        <View style={{flexDirection:'row'}}>
            <View style={{flex: 1, height: 0.1, backgroundColor: '#808080'}} />
        </View>
        <View style={styles.container}>
            {icons.map((icon, index) => (
                <Icon key={index} icon={icon}/>
            ))}      
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    wrapper: {
        position: 'absolute',
        width: '100%',
        bottom: '0%',
        zIndex: 999,
        backgroundColor: '#000',
    },
    icon: {
        width: 30,
        marginBottom: 5,
        height: 30,
    },
    container: {
        height: 40,
        padding: 10,
        fontWeight : 300,
        flexDirection:'row',
        justifyContent: 'space-around',
    },
    profilePic: (activeTab = '') => ({
        borderRadius: 50,
        borderWidth: activeTab === 'Profile' ? 3 : 0,
        borderColor: 'white',
    }),
})

export default BottomTabs