import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import IntroSlider from 'react-native-app-intro-slider';

import { slides } from './mocks/introSlider';

// Default State implementation
// export default class App extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             show_App: false,
//         };
//     }

//     onDone = () => {
//         this.setState({ show_App: true });
//     };

//     onSkip = () => {
//         this.setState({ show_App: true });
//     };

//     render() {
//         const { show_App } = this.state;

//         if (show_App) {
//             return (
//                 <View style = { styles.container }>
//                     <Text>This is My Main App</Text>
//                 </View>
//             );
//         }

//         return (
//             <IntroSlider
//                 showSkipButton
//                 slides = { slides }
//                 onDone = { this.onDone }
//                 onSkip = { this.onSkip }
//             />
//         );
//     }
// }

// Hooks API
export default function App() {
    const [ showApp, setShowApp ] = useState(false);

    function onDone() {
        setShowApp(true);
    }

    function onSkip() {
        setShowApp(true);
    }

    return showApp ? (
        <View style = { styles.container }>
            <Text>This is My Main App</Text>
        </View>
    ) : (
        <IntroSlider
            showSkipButton
            slides = { slides }
            onDone = { onDone }
            onSkip = { onSkip }
        />
    );
}

const styles = StyleSheet.create({
    mainapp: {
        flex:           1,
        alignItems:     'center',
        justifyContent: 'center',
        padding:        20,
    },
    container: {
        flex:            1,
        justifyContent:  'center',
        alignItems:      'center',
        backgroundColor: '#F5FCFF',
    },
});
