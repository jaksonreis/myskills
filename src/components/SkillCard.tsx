import React from "react";
import { TouchableOpacity, StyleSheet, Text, TouchableOpacityProps } from 'react-native';

interface SkillCardProps extends TouchableOpacityProps {
  skill: {
          id: string;
          name: string;
          };
        
}

export function SkillCard( { skill, ...rest}: SkillCardProps ) {

    return (
        <TouchableOpacity style={styles.buttonSkill} activeOpacity={0.8} {...rest}>
            <Text style={styles.textSkill}>{skill.name}
            </Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
buttonSkill: {
  backgroundColor: '#1F1E25',
  padding: 15,
  borderRadius: 20,
  alignItems: 'center',
  marginVertical: 10

},
textSkill: {
  color: '#FFF',
  fontSize: 22,
  fontWeight: 'bold',
}
})