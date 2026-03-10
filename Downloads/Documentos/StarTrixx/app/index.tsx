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
        color: "black",
        fontFamily: "fira sans",
        marginTop: 10
    },

    textobot:{
        fontSize: 26,
        color: "black",
        fontFamily: "fira sans",
    },

    subtexto:{
        fontSize: 20,
        color:"black",
        fontFamily: "roboto",
        marginBottom: 15,
    },

    botao:{
        backgroundColor: "gray",
        borderRadius: 10,
        width: "30%",
        height: 52,
        alignItems:"center",
        padding: 10,
        marginTop: 5
    },

    corpo:{
        justifyContent:"center",
        textAlign: "center",
        alignItems: "center",
        flex: 1
    },

    imagem:{
        width: 300,
        height: 300,
        borderRadius: 500
    }
}
)