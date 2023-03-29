import { SafeAreaView, View, StatusBar, StyleSheet } from "react-native";
import NodeButton from "./NodeButton";

export default function NodeControll({nodeNumber}) {
    return(
        <SafeAreaView style={styles.container}>
            <View>
                <NodeButton nodeNumber={1}/>
                <NodeButton nodeNumber={2}/>
                <NodeButton nodeNumber={3}/>
                <NodeButton nodeNumber={4}/>
            </View>
                
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        color: "#000",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%"
    }
});