import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList, TouchableHighlight } from 'react-native';
import { styles} from './Styles/styles.js'
import { PopUp } from './components/modal.js'
 
export default function App() {
 return (
   <View style={ styles.container }>

    <Text style = { styles.title }> Hello my name is Angel </Text>

    <Image
      source = {{
        uri: "https://assets.classy.org/12621426/e5845086-2d2d-11ea-a0d7-0a825fa67f2f.png"
      }}
      style = {{
        width: 150,
        height: 150
      }}
    />

    <Text style = { styles.subTitle }> List of Hobbies that I Have </Text>

    <FlatList
      data={[
        {key : "Gaming", des: "I enjoy playing a lot of games in my free time. Although currently I haven't been able to play games"},
        {key : "Running", des: "I recently started running in my second quarter of college and have enjoyed doing it ever since. I try to run at least 3 time a week since it helps me handle stress"},
      ]}
      renderItem={({ item }) => <Text> {item.key} : {item.des}</Text> }
    />


    <FlatList

      data={[{ title: 'This is an example of a Touchable (Button) in React Native', key: 'Hello' }]}
      renderItem={({ item }) => (
  
        <TouchableHighlight key={item.key} onPress={() => alert(item.key)}>
          <View style={{ backgroundColor: '#5E503F'}}>
            <Text style = {{color: '#EAE0D5'}}>{item.title}</Text>
          </View>
        </TouchableHighlight>
  
      )}
    />
    <PopUp/>

    <StatusBar style="auto" />

   </View>
 );
}
 
