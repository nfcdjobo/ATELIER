import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    chatsContenaire: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: 'white',
        borderRadius: 5,
        marginTop: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
        elevation: 3,
    },

    chatsImage: {
        width: 45,
        height: 45,
        borderRadius: 50 / 2,
        marginRight: 15
    },

    infoChats: {
        flexDirection: "column",
        flex: 1,
    },

    date_name:{
        flexDirection: "row",
        justifyContent: "space-between"
    },

    name: {
        fontWeight: "bold",
        fontSize: 13
    },

    date: {
        fontSize: 10,
        color: 'grey'
    }
})