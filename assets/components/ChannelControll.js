import { SafeAreaView, View, Text, StyleSheet } from "react-native";

export default function ChannelControll() {
    return(
        <SafeAreaView style={styles.container}>
            <Text>Channel Controll</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        color: "#000",
    }
});