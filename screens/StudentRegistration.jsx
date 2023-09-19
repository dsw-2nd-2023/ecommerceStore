import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';

const StudentRegistration = ({ navigation }) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({});

    const validationForm = () => {
        // Validate the form fields here
        const errors = {};
        if (!name) {
            errors.name = 'Name is required';
        }
        if (!email) {
            errors.email = 'Email is required';
        }
        if (password.length < 8) {
            errors.password = 'Password must be 8 characters long';
        }
        if(password != confirmPassword) {
            errors.confirmPassword = 'Passwords do not match';
        }
        return errors;
    };

    const handleSubmit = () => {

        const errors = validationForm();  
        if (Object.keys(errors).length === 0) {
        // Form is valid, navigate to the next screen or perform further actions
        // In this example, we'll just navigate to a success screen
            navigation.navigate('Tabs');
        } else {
            setErrors(errors);
        }
    };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Student Registration</Text>
      <Text style={styles.label}>Name</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
      />
      {errors.name && <Text style={styles.error}>{errors.name}</Text>}
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      {errors.email && <Text style={styles.error}>{errors.email}</Text>}
      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      {errors.password && <Text style={styles.error}>{errors.password}</Text>}
      <Text style={styles.label}>Confirm Password</Text>
      <TextInput
        style={styles.input}
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry={true}
      />
      {errors.confirmPassword && <Text style={styles.error}>{errors.confirmPassword}</Text>}
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f5f5f5',
    },
    heading: {
      fontSize: 24,
      marginBottom: 24,
      color: '#333',
    },
    label: {
      marginRight: "auto"
    },
    input: {
      width: '100%',
      height: 40,
      borderColor: '#ccc',
      borderWidth: 1,
      paddingHorizontal: 10,
      marginBottom: 16,
      borderRadius: 5,
      backgroundColor: '#fff',
    },
    error: {
      color: 'red',
      marginBottom: 8,
    },
    submitButton: {
      backgroundColor: '#007BFF',
      paddingVertical: 12,
      paddingHorizontal: 24,
      borderRadius: 9,
    },
    submitButtonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });

export default StudentRegistration;
