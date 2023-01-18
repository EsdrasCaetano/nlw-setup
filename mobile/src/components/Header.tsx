import { View } from "react-native";

import Logo from "../assets/logo.svg"

export function Header(){
    return (
        <View className="w-q\full flex-row items-center justify-between">
            <Logo width={120} height={40} />
        </View>
    )
}