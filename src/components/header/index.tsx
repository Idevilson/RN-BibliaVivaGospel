import React from "react";
import ModalDropdown from "react-native-modal-dropdown";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { Container, ButtonContainer } from "./styles";

export function Header(){
    const navigation = useNavigation();

    return(
        <Container>
            <ButtonContainer
                onPress={() => navigation.toggleDrawer()}
            >  
                <AntDesign 
                    name="menuunfold" 
                    size={30} 
                    color="#7205DC" 
                />
            </ButtonContainer>    

                <ModalDropdown 
                    options={['Versão AA', 'Versã ACF', 'Versão NVI']}
                    animated={true} 
                    
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: 50,
                        borderRadius: 5,
                        width: 150,
                        marginLeft: "20%"
                    }}   
                    
                    textStyle={{
                        fontSize: 23,
                        color: "#7205DC"
                    }}
                    
                    dropdownTextStyle={{
                        fontSize: 20,
                    }}

                    dropdownStyle={{
                        width: 150,
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginLeft: -13
                    }}

                           
                    defaultValue="VERSÃO AA"
                    defaultIndex={-1}
                />
            
        </Container>
    )
}