
import { createStackNavigator } from 'react-navigation'
import HomeScreen from './pages/home'

import DetailsScreen from './pages/details'

const AppNavigator = createStackNavigator(
    {
        HOME: HomeScreen,
        STARGATE_DETAILS: DetailsScreen
    },
    {
        initialRouteName: "HOME"
    }
);

export default AppNavigator