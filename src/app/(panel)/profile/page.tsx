import { View, Text, StyleSheet, Button } from "react-native";  
import { supabase } from "@/src/lib/supabase";
import { useAuth } from "@/src/context/AuthContext";

export default function Profile () {
    const {setAuth, user} = useAuth()
    async function handleSignout () {
        const { error } = await supabase.auth.signOut();
        setAuth(null);
        console.log("Usuário deslogado com sucesso");
        if (error) {
            console.error("Erro ao sair:", error);
            return;
        }
    }
    return (
        <View style={styles.container}>
            <Text>Página Perfil</Text>
            <Text>Email: {user?.email}</Text>
            <Button
                title="Deslogar"
                onPress={() => {handleSignout()}}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f0f0f0",
    },
});
