import { SafeAreaView, Text, Button, Image, StyleSheet, View, Pressable, Vibration } from "react-native";
import FontAwesome, { BrandIcons, SolidIcons } from "react-native-fontawesome";

export default function HomeScreen() {
    function findDevice() {
        alert("Button is pressed!");
        Vibration.vibrate(1, false);
    }

    return(
        <SafeAreaView style={styles.homeScreen}>
            <View style={styles.imageView}>
                <Image style={styles.image} source={require("../gripfire.png")}/>
            </View>
            <View style={styles.box}>
                <Text style={styles.textic}>Ispaljivač vatrometa</Text>
                <Pressable onPress={() => findDevice()} style={styles.btnView}>
                    <Text style={styles.btn}>Poveži se sa ispaljivačem</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    homeScreen: {
        flex: 1,
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#34495E",
    },
    image: {
        width: 130,
        height: 160,
    },
    imageView: {
        width: "100%",
        maxHeight: "20%", 
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        marginBottom: 150,
    },
    textic: {
        fontSize: 25,
        fontWeight: "bold",
        color: "#fff",
        textAlign: "center",
        marginBottom: 30,
    },
    box: {
        borderWidth: 1,
        borderColor: "transparent",
        borderRadius: 10,
        backgroundColor: "rgba(217, 217, 217, 0.23);",
        padding: 30,
        transform: "translateY(-100px)",
    },
    btn: {
        color: "#151E28",
        fontSize: 23,
        fontWeight: "bold",
        textAlign: "center",
        padding: 20,
    },
    btnView: {
        borderWidth: 1,
        borderColor: "transparent",
        borderRadius: 10,
        backgroundColor: "#92A1AF",
    }
});

