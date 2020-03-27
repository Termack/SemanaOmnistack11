import {StyleSheet} from "react-native";
import Constants from "expo-constants";


export default StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:24,
        paddingTop: Constants.statusBarHeight + 20
    },

    header:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },

    incident:{
        marginTop:40,
        padding:24,
        borderRadius:8,
        backgroundColor: "#FFF",
        marginBottom:16
    },

    incidentProperty:{
        fontSize:14,
        color:"#41414d",
        fontWeight:"bold"
    },

    incidentValue:{
        marginTop:8,
        fontSize:15,
        marginBottom:24,
        color:"#737380"
    },

    contactBox:{
        paddingVertical:15,
        paddingHorizontal:24,
        borderRadius:8,
        backgroundColor: "#FFF",
    },

    heroTitle:{
        fontSize:18,
        color:"#13131a",
        fontWeight:"bold",
        lineHeight:30
    },

    heroDescription:{
        marginTop:16,
        fontSize:15,
        color:"#737380"
    },

    actions:{
        marginTop:16,
        flexDirection:"row",
        justifyContent:"space-between"
    },

    action:{
        borderRadius:8,
        backgroundColor: "#e02041",
        height:50,
        width:"48%",
        alignItems:"center",
        justifyContent:"center"
    },

    actionText:{
        color:"#FFF",
        fontSize:16,
        fontWeight:"bold"
    }
});