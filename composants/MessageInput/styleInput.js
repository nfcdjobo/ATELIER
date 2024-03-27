import { StyleSheet } from "react-native";
import { COLORS } from "../../outils/constantes";


export const StyleInput = StyleSheet.create({
    container: {
        padding: 5,
        flexDirection: "row",
        backgroundColor: '#eee',
        justifyContent: "space-between"
    },
    input: {
        flex: 1,
        backgroundColor: 'white',
        padding:1
    },
    send: {
        backgroundColor: COLORS.main,
        padding: 7,
        color: 'white',

    }
})

