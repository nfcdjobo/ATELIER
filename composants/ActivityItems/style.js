import { StyleSheet } from "react-native";
import { PADDING } from "../../outils/constantes";

export const Style = StyleSheet.create({
    scrollabListItem: {
        flexDirection: "column",
        paddingHorizontal: PADDING.horizontal,
        paddingVertical: PADDING.vertical,
        marginRight: 15,
        marginBottom:5,
        backgroundColor: '#fff',
        elevation: 5,
        borderRadius: 10
    },
    
    mainText: {
        fontWeight: 'bold',
        fontSize: 16
    },
    
    subText: {
        marginTop: 3,
        fontSize: 11
    },
    
    icon:{
        width: 50,
        height: 50,
    }
})






