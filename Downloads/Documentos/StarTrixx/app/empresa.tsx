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
        color: "black",
        fontFamily: "fira sans"
    },

    textobot:{
        fontSize: 26,
        color: "black",
        fontFamily: "fira sans",
        marginTop: 10
    },

    descricao:{
        fontSize:18,
        textAlign:"center",
        fontFamily: "roboto"
    },

    botao:{
        backgroundColor: "gray",
        borderRadius: 10,
        width: "20%",
        height: 52,
        alignItems:"center"
    },

    corpo:{
        justifyContent:"center",
        textAlign: "center",
        alignItems: "center",
        gap: 16,
        flex: 1
    },

    imagem:{
        width: 300,
        height: 300,
        borderRadius: 500
    }
})