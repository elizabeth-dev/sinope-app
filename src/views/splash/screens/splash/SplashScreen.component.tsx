import { AppState } from '@core/app.store';
import { dashboardRoot } from '@shared/navigation/roots/dashboard.root';
import { loginRoot } from '@shared/navigation/roots/login.root';
import React from 'react';
import { Text, View } from 'react-native';
import { Navigation } from 'react-native-navigation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector } from 'react-redux';
import { SplashScreenStyles as styles } from './SplashScreen.styles';

export const SplashScreen: React.FC = () => {
	const loggedIn = useSelector<AppState>((state) => state.auth.loggedIn);

	if (!loggedIn) Navigation.setRoot(loginRoot());
	else
		Promise.all([MaterialCommunityIcons.getImageSource('menu', 25)]).then(([menuIcon]) => {
			Navigation.setRoot(dashboardRoot(menuIcon));
		});

	return (
		<View style={styles.root}>
			<Text>Splash</Text>
		</View>
	);
};
