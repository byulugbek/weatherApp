import PropTypes from "prop-types";
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Thunderstorm: {
        iconName: 'weather-lightning',
        gradient: ['#141e30','#243b55'],
        title: 'Сиди дома',
        subtitle: 'Ты видишь что на улице?',
    },
    Drizzle: {
        iconName: 'weather-rainy',
        gradient: ['#3a7bd5','#3a6073'],
        title: 'Возьми зонтик',
        subtitle: 'Возможно дождь усилится',
    },
    Rain: {
        iconName: 'weather-pouring',
        gradient: ['#000046','#1cb5e0'],
        title: 'На улице дождь',
        subtitle: 'А значит скоро будет радуга!',
    },
    Snow: {
        iconName: 'snowflake',
        gradient: ['#83a4d4','#b6fbff'],
        title: 'На улице снежок',
        subtitle: 'Одевайтесь по теплее, лепите снеговиков',
    },
    Dust: {
        iconName: 'weather-windy-variant',
        gradient: ['#b79891','#94716b'],
        title: 'Пыльно',
        subtitle: 'Лучше закройте окна',
    },
    Smoke: {
        iconName: 'weather-windy',
        gradient: ['#56ccf2','#2f80ed'],
        title: 'На улице смог :(',
        subtitle: 'Не советую выходить на улицу',
    },
    Clouds: {
        iconName: 'weather-cloudy',
        gradient: ['#757f9a','#d7dde8'],
        title: 'Облока',
        subtitle: 'Белогривые лошадки',
    },
    Clear: {
        iconName: 'weather-sunny',
        gradient: ['#56ccf2','#2f80ed'],
        title: 'Погода супер',
        subtitle: 'Иди гулять, хватит сидеть дома!',
    },
    Haze: {
        iconName: 'weather-hazy',
        gradient: ['#3e5151','#decba4'],
        title: 'На улице снежок',
        subtitle: 'Одевайтесь по теплее, лепите снеговиков',
    },
    Mist: {
        iconName: 'weather-fog',
        gradient: ['#606c88','#3f4c6b'],
        title: 'Ни черта не видно в тумане',
        subtitle: 'Зато как в Сайлент-Хилле :)',
    },

}

export default function Weather({temp, condition}){
    return (
        <LinearGradient
            colors={weatherOptions[condition].gradient}
            style={styles.container}>
                <StatusBar barStyle='light-content'/>
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons name={weatherOptions[condition].iconName} size={96} color='white'/>
                <Text style={styles.temp}>{temp}°C</Text>
            </View>
            <View style={{...styles.halfContainer, ...styles.textContainer}}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
            </View>
        </LinearGradient>
    );
}

Weather.prototype = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf(['Thunderstorm','Drizzle','Rain','Snow','Dust', 'Mist', 'Haze', 'Smoke','Clear','Clouds']).isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems:  'center'
    },
    halfContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    temp: {
        fontSize: 42,
        color: 'white',
    },
    title: {
        color: 'white',
        fontSize: 44,
        fontWeight: '300',
        marginBottom: 10,
    },
    subtitle: {
        color: 'white',
        fontSize: 24,
        fontWeight: '600',
    },
    textContainer: {
        paddingHorizontal: 20,
        alignItems: "flex-start",

    }
})