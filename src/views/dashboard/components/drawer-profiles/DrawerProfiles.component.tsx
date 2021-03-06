import React from 'react';
import { FlatList } from 'react-native';
import { DrawerProfilesStyles as styles } from './DrawerProfiles.styles';
import { useSelector } from 'react-redux';
import { fromProfile } from '@core/state/selectors/profile.selectors';
import { DrawerItem } from '@shared/components/drawer-item/DrawerItem.component';

export const DrawerProfiles: React.FC = () => {
	const currentProfile = useSelector(fromProfile.current);
	const myProfiles = useSelector(fromProfile.mine)!.filter((el) => el.profile?.id !== currentProfile?.profile?.id);

	return (
		<>
			<FlatList
				data={myProfiles}
				renderItem={({ item }) => <DrawerItem icon="account" label={item.profile.name} />}
				keyExtractor={(item) => item.profile.id}
				showsVerticalScrollIndicator={false}
				style={styles.root}
			/>
			<DrawerItem label="Add account" />
		</>
	);
};
