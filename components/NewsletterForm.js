import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const NewsletterForm = ({ featureFlag = true }) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = () => {
    if (!email) {
      setError('Por favor, insira seu e-mail');
      return;
    }

    setError('');
    setSuccess(true);
    // Mock o envio das informações em uma função de contexto
    console.log('Newsletter e-mail enviado:', email);

    // Limpar o formulário e voltar ao estado inicial após 5 segundos
    setTimeout(() => {
      setEmail('');
      setSuccess(false);
    }, 5000);
  };

  if (success) {
    return <Text style={styles.successText}>Inscrição realizada com sucesso!</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Assine nossa newsletter</Text>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="Digite seu e-mail"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
      {featureFlag ? (
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Inscrever-se</Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f5f5f5',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    fontSize: 14,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#2196f3',
    borderRadius: 5,
    padding: 10,
  },
  buttonText: {
    fontSize: 14,
    color: '#fff',
    textAlign: 'center',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  successText: {
    color: 'green',
    textAlign: 'center',
    marginBottom: 10,
  },
});

export default NewsletterForm;

