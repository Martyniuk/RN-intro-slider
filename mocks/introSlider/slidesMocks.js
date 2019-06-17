import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    title: {
        fontSize:   26,
        color:      '#fff',
        fontWeight: 'bold',
        textAlign:  'center',
        marginTop:  20,
    },
    text: {
        color:    '#fff',
        fontSize: 20,
    },
    image: {
        width:      200,
        height:     200,
        resizeMode: 'contain',
    },
});

const slides = [
    {
        key:   's1',
        title: 'Study Navigation',
        text:  'Play with Stack, Drawer, BottomTabNavigator',
        image: {
            uri: 'https://imgur.com/7ClQj9M.png',
        },
        titleStyle:      styles.title,
        textStyle:       styles.text,
        imageStyle:      styles.image,
        backgroundColor: '#BCF4F5',
    },
    {
        key:   's2',
        title: 'GraphQL',
        text:  'Apollo vs Relay + GraphQL - must have',
        image: {
            uri: 'https://imgur.com/BVQ79rh.png',
        },
        titleStyle:      styles.title,
        textStyle:       styles.text,
        imageStyle:      styles.image,
        backgroundColor: '#B4EBCA',
    },
    {
        key:   's3',
        title: 'Firebase',
        text:  'Firebase for auth or find an alternative',
        image: {
            uri: 'https://imgur.com/RPI8wie.png',
        },
        titleStyle:      styles.title,
        textStyle:       styles.text,
        imageStyle:      styles.image,
        backgroundColor: '#D9F2B4',
    },
    {
        key:   's4',
        title: 'Enjoy Coding',
        text:  'GO coding your personal Performance project',
        image: {
            uri: 'https://imgur.com/f1GhQo1.png',
        },
        titleStyle:      styles.title,
        textStyle:       styles.text,
        imageStyle:      styles.image,
        backgroundColor: '#FFB7C3',
    },
];

export { slides };
