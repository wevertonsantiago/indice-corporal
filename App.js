import React, { Component } from "react";
import {
 TextInput,
 TouchableOpacity,
 StyleSheet,
 Text,
 View
} from "react-native";
 

 
export default class App extends Component {
 constructor(props) {
   super(props);
   this.state = { altura: 0, messa: 0, resultado: 0, resultadoTxt: "" };
   this.calcular = this.calcular.bind(this);
 }
 
 calcular() {
 
   if (!this.state.altura) {
   alert("Altura sem valor!Erro!");
   return
   } else if (!this.state.massa) {
    alert("Massa sem valor!Erro!");
    return
  }
   let imc = this.state.massa / (this.state.altura * this.state.altura);
   let res = this.state;
   res.resultado = imc;
   this.setState(res);
 
   // < 16 Magreza grave
   // 16 a 17 Magreza moderada
   // 17 a 18,5 Magreza leve
   // 18,5 a  25 Saudável
   // 30 a 35 Obesidade I leve
   // 35 a 40 Obesidade II moderada
   // > 40 Obesidade III grave
 
   if (res.resultado < 16) {
     res.resultadoTxt = "Magreza grave";
   } else if (res.resultado < 17) {
     res.resultadoTxt = "Magreza moderada";
   } else if (res.resultado < 18.5) {
     res.resultadoTxt = "Magreza leve";
   } else if (res.resultado < 25) {
     res.resultadoTxt = "Saudável";
   } else if (res.resultado < 35) {
     res.resultadoTxt = "Obesidade leve";
   } else if (res.resultado < 40) {
     res.resultadoTxt = "Obesidade moderada";
   } else if (res.resultado > 40) {
     res.resultadoTxt = "Obesidade grave";
   } else {
     alert("Use apenas números com 'ponto' Ex: 1.60 / 70.50")
     return
   }
 }
 
 render() {
   return (
     <View style={styles.app}>
       <View>
         <TextInput
           placeholder="Altura"
           keyboardType="numeric"
           style={styles.input}
           onChangeText={(altura) => {
             this.setState({ altura });
           }}
         />
         <TextInput
           placeholder="Massa"
           keyboardType="numeric"
           style={styles.input}
           onChangeText={(massa) => {
             this.setState({ massa });
           }}
         />
       </View>
       <TouchableOpacity onPress={this.calcular} style={styles.btn}>
         <Text style={styles.btntxt}> Calcular </Text>
       </TouchableOpacity>
       <Text style={[styles.resultado, { fontSize: 30 }]}>
         {this.state.resultado.toFixed(2)}
       </Text>
       <Text style={styles.resultado}>{this.state.resultadoTxt}</Text>
       <Text>{this.state.alertMassa}</Text>
     </View>
   );
 }
}
 
const styles = StyleSheet.create({
 app: {
   //flex:1,
   flexDirection: "column"
 },
 input: {
   height: 80,
   fontSize: 50
 },
 
 btnBack: {},
 
 btn: {
   alignSelf: "center",
   padding: 30,
   backgroundColor: "#87CEFA",
   width: "100%"
 },
 
 btntxt: {
   alignSelf: "center",
   fontSize: 30,
   fontWeight: "bold"
 },
 
 resultado: {
   alignSelf: "center",
   fontSize: 40,
   padding: 15
 }
});
 

