import React from "react";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {
    MaterialIcons,
    MaterialCommunityIcons
} from '@expo/vector-icons';

import { AtBookProvider } from "../hooks/atBooksContext";

const Tab = createMaterialTopTabNavigator();

import { ChaptersScreens } from "../screens/AntigoTestamentoHome/ChaptersScreens";
import { VerseScreen } from "../screens/AntigoTestamentoHome/ChaptersScreens/VerseScreen";
import { Books } from "../screens/AntigoTestamentoHome";

export function AtTopTabs() {

    return (
        <AtBookProvider>
            <Tab.Navigator
                initialRouteName={"LIVROS"}
                tabBarPosition={"bottom"}
            >
                <Tab.Screen
                    name={"LIVROS"}
                    component={ Books }
                    options={{
                        tabBarIndicatorStyle: {
                            backgroundColor: "#7205DC"
                        },
                        tabBarActiveTintColor: "#7205DC",
                        tabBarPressColor: "#3AF1A1",
                        tabBarIcon: () => <MaterialCommunityIcons name="book-multiple" size={24} color="#7205DC" />,
                    }}
                />

                <Tab.Screen
                    name={"CAPÍTULOS"}
                    component={ ChaptersScreens }
                    options={{
                        tabBarIndicatorStyle: {
                            backgroundColor: "#7205DC"
                        },
                        tabBarActiveTintColor: "#7205DC",
                        tabBarPressColor: "#3AF1A1",
                        tabBarIcon: () => <MaterialCommunityIcons name="numeric-3-box-multiple" size={24} color="#7205DC" />,
                        lazy: true
                    }}
                />

                <Tab.Screen
                    name={"VERSÍCULOS"}
                    component={ VerseScreen }
                    options={{
                        tabBarIndicatorStyle: {
                            backgroundColor: "#7205DC"
                        },
                        tabBarActiveTintColor: "#7205DC",
                        tabBarPressColor: "#3AF1A1",
                        tabBarIcon: () => <MaterialIcons name="library-books" size={24} color="#7205DC" />,
                        lazy: true
                    }}
                />
            </Tab.Navigator>
        </AtBookProvider>
    )
}