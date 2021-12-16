import React,{useState} from 'react'
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableOpacity
} from 'react-native'
import styles from './Home.style'
import Icon from 'react-native-vector-icons/Ionicons'
import { connect, useDispatch } from 'react-redux'
import { fetchDataUser } from '../../stores/actions/user.action'
import {Ionicons} from 'react-native-vector-icons/Ionicons'
import Tts from 'react-native-tts';
import Clipboard from '@react-native-clipboard/clipboard';

Tts.setDefaultLanguage('en-IE');
Tts.setDefaultVoice('com.apple.ttsbundle.Moira-compact');
Tts.setDefaultRate(0.6);
Tts.setDefaultPitch(1.5);

const CopyAndVoice = ({ navigation, user }) => {
const [speackText , setSpeackText] = useState ("is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,")



const renderSpecking = () =>{
  Tts.speak(speackText);
}

const renderCopyText = () =>{
  Clipboard.setString(speackText);
}


  const renderText = () =>{
    return(
      <View style={{flex:1 ,alignItems:'center',justifyContent:'center'}}>
        <View style={{width:'70%',height:'40%',backgroundColor:'red',}}>
<View >
<Text style={{textAlign:'center',letterSpacing:1.1,color:'black'}}>
{speackText}</Text>
</View>
<View style={{justifyContent:'space-around',flexDirection:'row',}}>
  <TouchableOpacity onPress={renderSpecking}>
    <Text>
      Speack
    </Text>
  </TouchableOpacity>
  <TouchableOpacity onPress={renderCopyText}>
    <Text>
      Copy
    </Text>
  </TouchableOpacity>
  </View>
</View>
      </View>
    )
  }

  return (
    <View style={{flex:1}}>
      <StatusBar barStyle="dark-content" backgroundColor={'#f9f9f9'} />
     {renderText()}
    </View>
  )
}

const mapStateToProps = state => {
  return {
    user: state.userReducer.users
  }
}

export default connect(mapStateToProps, null)(CopyAndVoice)
