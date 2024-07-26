import {
  Button,
  Image,
  Pressable,
  SafeAreaView,
  Text,
  TextInput,
  View,
} from 'react-native';
import logo from './assets/logo.png';
import {useEffect, useState} from 'react';

export default function App() {
  const [startScreen, setStartScreen] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setStartScreen(false);
    }, 4000);
  }, []);

  return (
    <SafeAreaView>
      {startScreen && (
        <View className="bg-[#52AA5E] h-screen relative flex items-center justify-end ">
          <View className="absolute h-full flex justify-center items-center w-full">
            <Image source={logo} alt="logo" />
          </View>
          <Text className="text-white mb-16 font-semibold">
            Get inspired by the words of Allah
          </Text>
        </View>
      )}

      {!startScreen && (
        <View className="p-5 pt-10 flex flex-col gap-10 relative">
          <View className="absolute p-5 right-0">
            <Pressable>
              <Text className="text-0-primary-green text-lg font-medium w-fit">
                Skip
              </Text>
            </Pressable>
          </View>
          <View className="flex flex-col items-center py-8 gap-3">
            <Text className="text-3xl font-semibold text-center text-gray-950">
              Marhaban whats's your name?
            </Text>
            <Text className="text-center text-gray-700">
              Your name will be displayed in your quotes
            </Text>
          </View>
          <View className="border-[1px] p-2 rounded-md border-gray-300">
            <TextInput
              className="outline-none text-lg w-full"
              placeholder="What's your name?"
            />
          </View>
          <Pressable className="bg-0-primary-green rounded-md p-2">
            <Text className="text-white text-center text-lg">Done</Text>
          </Pressable>
        </View>
      )}
    </SafeAreaView>
  );
}
