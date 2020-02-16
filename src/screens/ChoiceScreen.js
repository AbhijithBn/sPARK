import * as React from 'react';
import { memo, useState } from 'react';
import { Avatar, Card, Title, Paragraph } from 'react-native-paper';
import Background from "../components/Background";
import { View } from 'react-native';
import Button from "../components/Button";
import Logo from "../components/Logo";
import Header from "../components/Header";
import {StyleSheet} from 'react-native';

const ChoiceScreen= ({navigation}) => (
        <View style={styles.container}>
            <Logo />

            <Card>
                <Card.Title title="Choose the service" subtitle="" left={(props) => <Avatar.Icon {...props} icon="folder" />} />
                <Card.Content>
                    <Title>Search for parking spaces</Title>
                    <Paragraph>Search for parking spaces around you or reserve parking spaces at your destination.</Paragraph>
                </Card.Content>
                <Card.Actions>
                    <Button mode="contained">Search</Button>            
                </Card.Actions>
                <Card.Content>
                    <Title>Rent out parking spaces</Title>
                    <Paragraph>Do you want to rent out your parking space?</Paragraph>
                </Card.Content>
                <Card.Actions>
                    <Button mode="contained">Register</Button>            
                </Card.Actions>
            </Card> 
                    
        </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        alignSelf: "center",
        alignItems: "center",
        padding:20
        }
    });
  

export default memo(ChoiceScreen);