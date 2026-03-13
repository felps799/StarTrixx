import { router } from "expo-router"
import { Image, StyleSheet, Text, TouchableOpacity, View, Alert, ImageBackground } from "react-native"

function empresa (){
router.navigate("./empresa")
}

function cardapio(){
router.navigate("./cardapio")
}

function alertar () {
Alert.alert("COMPRE CONOSCO!")
}

export default function Index (){
    return(
        <View style ={style.corpo}>
            <Image source={require("../assets/images/logoStar.png")} style={style.imagem}></Image>
            <Text style={style.texto}>🍔 Bem-vindo(a) à StarTrix Lanches!</Text>
            <Text style={style.subtexto}>O melhor lanche da escola!</Text>
            <TouchableOpacity style={style.botao} onPress={empresa}>
                <Text style={style.textobot}> Saiba mais sobre a empresa</Text>
            </TouchableOpacity>
            <Text style={style.texto}> Saiba mais sobre o nosso cardápio</Text>
            <TouchableOpacity style={style.botao} onPress={cardapio}>
                <Text style={style.textobot}> Veja o cardápio</Text>
            </TouchableOpacity>
        </View>
)
}

const style = StyleSheet.create({
    texto:{
        fontSize: 26,
        color: "#1F1F1F",
        fontFamily: "fira sans",
        textAlign: "center"
    },

    textobot:{
        fontSize: 22,
        color: "#FFFFFF",
        fontFamily: "fira sans",
        textAlign:"center"
    },

    subtexto:{
        fontSize: 20,
        color:"#555555",
        fontFamily: "roboto",
    },

    botao:{
        backgroundColor: "#E56700",
        borderRadius: 10,
        width: "80%",
        height: 52,
        alignItems:"center",
        justifyContent: "center",
    },

    corpo:{
        justifyContent:"center",
        alignItems: "center",
        flex: 1,
        padding: 20,
        gap: 15,
        backgroundColor: "#FFF4E6"
    },

    imagem:{
        width: 200,
        height: 200,
        borderRadius: 500
    }
}
)