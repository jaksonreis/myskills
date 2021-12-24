import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  FlatList
} from 'react-native'
import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';

interface SkillData {
  id: string;
  name: string;
}

let control = 1

export default function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState<SkillData[]>([]);
  const [gretting, setGretting] = useState('');

  function handleAddNewSkill() {
    const data = {
      id: String(new Date().getTime()),
      name: newSkill
    }
    setMySkills(oldState => [...oldState, data])
  }

  function handleRemoveSkill(id: string) {
    setMySkills(oldState => oldState.filter(skill => skill.id !== id))
  }

  useEffect(() => {
    const currentHour = new Date().getHours();
    
    if (currentHour < 12) {
        setGretting('Good morning')
        
    } else if (currentHour < 18) {
        setGretting('Good afternoon')
        
    } else {
        setGretting('Good night')
    }
  }, [])

  return (
    <View style={styles.container}>
    <Text style={styles.title}>Bem Vindo Jakson </Text>

      <Text style={styles.gretting}>{gretting} </Text>

      <TextInput
        style={styles.input}
        placeholder='New skill'
        placeholderTextColor='#555'
        onChangeText={setNewSkill}
      />
      <Button title='Add' onPress={handleAddNewSkill}/>

      <Text style={[styles.title, { marginVertical: 50 }]}>My Skills</Text>

      <FlatList 
      data={mySkills} 
      keyExtractor={item => item.id} 
      renderItem={({item}) => (
      
      <SkillCard skill={item} onPress={() => handleRemoveSkill(item.id)}/>
          
      )}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121015",
    paddingHorizontal: 20,
    paddingVertical: 70,
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 24
  },
  input: {
    backgroundColor: '#1F1E25',
    color: '#fff',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 12,
    marginTop: 30,
    borderRadius: 7
  },
  gretting: {
      color: '#fff'
  }
});