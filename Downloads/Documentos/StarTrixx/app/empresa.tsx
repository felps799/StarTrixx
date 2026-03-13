import { router } from "expo-router"
import { Image, StyleSheet, Text, TouchableOpacity, View, Alert, ImageBackground } from "react-native"

function voltar (){
    router.navigate("./")
}

export default function Index (){
    return(
        <View style ={style.corpo}>
            <Image source={require("../assets/images/logoStar.png")} style={style.imagem}></Image>
            <Text style={style.texto}> 🏪 Sobre a StarTrix</Text>
            <Text style={style.descricao}> A StarTrix é uma cantina imaginária criada para os alunos da escola. </Text>
            <Text style={style.descricao}> Aqui servimos lanches deliciosos, sucos naturais e sobremesas incríveis. </Text>
            <Text style={style.descricao}> Nosso objetivo é deixar o intervalo dos alunos muito mais saboroso!</Text>
            <TouchableOpacity style={style.botao} onPress={voltar}>
                <Text style={style.textobot}> Voltar</Text>
            </TouchableOpacity>

        </View>
    )
}

const style = StyleSheet.create({
    texto:{
        fontSize: 26,
        color: "#1F1F1F",
        fontFamily: "fira sans"
    },

    textobot:{
        fontSize: 26,
        color: "#FFFFFF",
        fontFamily: "fira sans",

    },

    descricao:{
        fontSize: 18,
        textAlign:"center",
        fontFamily: "roboto",
        color:"#555555"
    },

    botao:{
        backgroundColor: "#E56700",
        borderRadius: 10,
        width: "80%",
        height: 52,
        alignItems:"center",
        justifyContent: "center"
    },

    corpo:{
        justifyContent:"center",
        textAlign: "center",
        alignItems: "center",
        gap: 15,
        flex: 1,
        padding: 20,
        backgroundColor:"#FFE8CC"
    },

    imagem:{
        width: 200,
        height: 200,
        borderRadius: 500
    }
})