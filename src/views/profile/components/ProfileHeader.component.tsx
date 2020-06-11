import React from 'react';
import { Animated, LayoutChangeEvent, View } from 'react-native';
import { Avatar, Paragraph, Subheading, Text, Title } from 'react-native-paper';
import { ProfileHeaderStyles as styles } from './ProfileHeader.styles';

export interface ProfileHeaderProps {
	name: string;
	tag: string;
	description: string;
	headerY: number;
	onLayout: (ev: LayoutChangeEvent) => void;
}
export const ProfileHeader: React.FC<ProfileHeaderProps> = ({ name, tag, description, headerY, onLayout }) => {
	return (
		<Animated.View style={[styles.root, { transform: [{ translateY: headerY }] }]} onLayout={onLayout}>
			<View style={styles.cover} />
			<View style={styles.content}>
				<Avatar.Text style={styles.avatar} label="E" size={72} />
				<Title>{name}</Title>
				<Subheading style={styles.tag}>@{tag}</Subheading>
				<Paragraph style={styles.description}>{description}</Paragraph>
			</View>
			<View style={styles.profileData}>
				<Text style={styles.follows}>
					<Text style={styles.followCount}>16</Text> following
				</Text>
				<Text style={styles.follows}>
					<Text style={styles.followCount}>16</Text> followers
				</Text>
			</View>
		</Animated.View>
	);
};