import { StyleSheet } from "react-native";
import { PADDING } from "../../outils/constantes";

const styleClients = StyleSheet.create({
    item: {
        marginRight: 15,
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 5,
        alignItems: "center",
        paddingHorizontal: PADDING.horizontal,
        paddingVertical: PADDING.vertical,
        elevation: 5,
        marginBottom: 5
    },

    itemImage: {
        width: 40,
        height: 40,
        borderRadius: 50 / 2
    },

    text: {
        paddingHorizontal: 10
    },

   
});

export default styleClients;