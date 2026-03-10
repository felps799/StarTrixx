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
        color: "black",
        fontFamily:"fira sans"
    },

    textobot:{
        fontSize: 26,
        color: "black",
        fontFamily: "fira sans",
        marginTop: 10
    },

    botao:{
        backgroundColor: "gray",
        borderRadius: 10,
        width: "20%",
        height: 52,
        alignItems:"center"
    },

    item:{
        fontSize:20,
        color:"black",
        fontFamily:"roboto"
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