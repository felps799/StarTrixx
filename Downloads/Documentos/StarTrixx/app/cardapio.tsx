import { router } from "expo-router"
import { Image, StyleSheet, Text, TouchableOpacity, View, Alert, ImageBackground } from "react-native"

function voltar (){
    router.navigate("./")
}

export default function Index (){
    return(
        <View style ={style.corpo}>
            <Image source={require("../assets/images/logoStar.png")} style={style.imagem}></Image>
            <Text style={style.texto}>🍽 Cardápio da Semana</Text>
            <Text style={style.item}>🍔 Hambúrguer StarTrix - R$12</Text>
            <Text style={style.item}>🌭 Hot Dog Especial - R$10</Text>
            <Text style={style.item}>🍟 Batata Frita - R$8</Text>
            <Text style={style.item}>🥤 Suco Natural - R$6</Text>
            <Text style={style.item}>🍰 Bolo de Chocolate - R$7</Text>
            <Text style={style.item}>🍦 Sorvete - R$5</Text>
            <TouchableOpacity style={style.botao} onPress={voltar}>
                <Text style={style.textobot}>Voltar</Text>
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
        fontSize: 25,
        color: "#FFFFFF",
        fontFamily: "fira sans",
        textAlign:"center"
    },

    botao:{
        backgroundColor: "#E56700",
        borderRadius: 10,
        width: "80%",
        height: 52,
        alignItems:"center",
        justifyContent: "center",
        textAlign: "center"
    },

    item:{
        fontSize:20,
        color:"#555555",
        fontFamily:"roboto"
    },

    corpo:{
        justifyContent:"center",
        textAlign: "center",
        alignItems: "center",
        gap: 7,
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