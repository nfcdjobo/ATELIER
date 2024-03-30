import { StyleSheet } from "react-native";
import { COLORS, PADDING } from "../../outils/constantes";

export const dashboardStyle = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: PADDING.horizontal,
        paddingVertical: PADDING.vertical,
        backgroundColor: '#8485DD',
    },

    userImage: {
        width: 40,
        height: 40,
        borderRadius: 50/2,
        marginVertical: 15
    },

    userName: {
        fontSize:16,
    },

    // Style de la FlatList
    scrollabList: {
        paddingHorizontal: PADDING.horizontal,
        paddingVertical: PADDING.vertical
    },

    titleClient: {
        paddingHorizontal: PADDING.horizontal,
        paddingVertical: PADDING.paddingVertical,
    },

    titleContent: {
        fontWeight: "bold",
    },

    text_space_betwen: {
        paddingHorizontal: PADDING.horizontal,
        paddingVertical: PADDING.vertical,
        flexDirection: "row",
        justifyContent: "space-between",
    },

    link: {
        color: COLORS.main
    },

    docorClient: {
        paddingHorizontal: PADDING.horizontal,
        paddingVertical: PADDING.paddingVertical,
    },

    clientsCard: {
        flex:1,
        flexDirection: "row",
        backgroundColor: 'white',
        elevation: 3,
        padding: 1,
        paddingHorizontal: 10,
        paddingVertical: PADDING.vertical,
        marginBottom: 10,
        borderRadius: 5
    },

    clientsImage: {
        width: 40,
        height: 40,
        borderRadius: 80 / 2,
        marginRight: 10
    },

    phoneAndGenre: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: '75.7%'
    },

    clientName: {
        fontSize:15,
        fontWeight: "bold",
        marginBottom: 5,
    },

    clientPhone: {
        fontSize: 13
    },

    clientGenre: {
        fontSize: 13,
        color: 'grey',
        fontWeight: "bold",
    }
});

