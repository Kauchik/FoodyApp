import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { titles, colors, btn1, hr80 } from "../../globals/style";
import { Octicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const SignupScreen = ({ navigation }) => {
  const [nameFocus, setNameFocus] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [phoneNumberFocus, setPhoneNumberFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [confirmPasswordFocus, setConfirmPasswordFocus] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.head1}>Sign Up</Text>
        <View style={styles.inputout}>
          <FontAwesome5
            name="user"
            size={24}
            color={nameFocus === true ? colors.text1 : colors.text2}
          />
          <TextInput
            style={styles.input}
            placeholder="Name"
            onFocus={() => {
              setNameFocus(true);
              setEmailFocus(false);
              setPhoneNumberFocus(false);
              setPasswordFocus(false);
              setConfirmPasswordFocus(false);
              setShowPassword(false);
              setShowConfirmPassword(false);
            }}
          />
        </View>
        <View style={styles.inputout}>
          <Entypo
            name="email"
            size={24}
            color={emailFocus === true ? colors.text1 : colors.text2}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            onFocus={() => {
              setNameFocus(false);
              setEmailFocus(true);
              setPhoneNumberFocus(false);
              setPasswordFocus(false);
              setConfirmPasswordFocus(false);
              setShowPassword(false);
              setShowConfirmPassword(false);
            }}
          />
        </View>

        <View style={styles.inputout}>
          <Feather
            name="smartphone"
            size={24}
            color={phoneNumberFocus === true ? colors.text1 : colors.text2}
          />
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            onFocus={() => {
              setNameFocus(false);
              setEmailFocus(false);
              setPhoneNumberFocus(true);
              setPasswordFocus(false);
              setConfirmPasswordFocus(false);
              setShowPassword(false);
              setShowConfirmPassword(false);
            }}
          />
        </View>

        <View style={styles.inputout}>
          <MaterialCommunityIcons
            name="lock-outline"
            size={24}
            color={passwordFocus == true ? colors.text1 : colors.text2}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            onFocus={() => {
              setNameFocus(false);
              setEmailFocus(false);
              setPhoneNumberFocus(false);
              setPasswordFocus(true);
              setConfirmPasswordFocus(false);
              setShowConfirmPassword(false);
            }}
            secureTextEntry={showPassword === false ? true : false}
          />
          <Octicons
            name={showPassword == false ? "eye-closed" : "eye"}
            size={24}
            color="black"
            onPress={() => setShowPassword(!showPassword)}
          />
        </View>

        <View style={styles.inputout}>
          <MaterialCommunityIcons
            name="lock-outline"
            size={24}
            color={confirmPasswordFocus == true ? colors.text1 : colors.text2}
          />
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            onFocus={() => {
              setNameFocus(false);
              setEmailFocus(false);
              setPhoneNumberFocus(false);
              setPasswordFocus(false);
              setConfirmPasswordFocus(true);
            }}
            secureTextEntry={showConfirmPassword === false ? true : false}
          />
          <Octicons
            name={showConfirmPassword == false ? "eye-closed" : "eye"}
            size={24}
            color="black"
            onPress={() => setShowConfirmPassword(!showConfirmPassword)}
          />
        </View>

        <Text style={styles.address}>Please Enter Your Address</Text>
        <View style={styles.inputout}>
          <TextInput style={styles.input} placeholder="Enter Your Address" />
        </View>

        <TouchableOpacity style={btn1}>
          <Text
            style={{
              color: colors.col1,
              fontSize: titles.btntxt,
              fontWeight: "bold",
            }}
          >
            Sign up
          </Text>
        </TouchableOpacity>

        {/* <Text style={styles.forgot}>Forgot Password?</Text> */}
        <Text style={styles.or}>OR</Text>
        <Text style={styles.gftxt}>Sign in With</Text>

        <View style={styles.gf}>
          <TouchableOpacity>
            <View style={styles.gficon}>
              <AntDesign name="google" size={24} color="#EA4335" />
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.gficon}>
              <FontAwesome5 name="facebook-f" size={24} color="#4267B2" />
            </View>
          </TouchableOpacity>
        </View>

        <View style={hr80}></View>

        <Text>
          Already have an account?{" "}
          <Text
            style={styles.signup}
            onPress={() => navigation.navigate("login")}
          >
            Sign in
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 60,
  },
  container1: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 60,
  },
  head1: {
    fontSize: titles.title1,
    color: colors.text1,
    textAlign: "center",
    marginVertical: 10,
  },
  inputout: {
    flexDirection: "row",
    width: "80%",
    marginVertical: 10,
    backgroundColor: colors.col1,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignSelf: "center",
    elevation: 20,
  },
  input: {
    fontSize: 18,
    marginLeft: 10,
    width: "80%",
  },
  forgot: {
    color: colors.text2,
    marginTop: 20,
    marginBottom: 10,
  },
  or: {
    color: colors.text1,
    marginVertical: 10,
    fontWeight: "bold",
  },
  gftxt: {
    color: colors.text2,
    marginBottom: 10,
    fontSize: 25,
  },
  gf: {
    flexDirection: "row",
  },
  gficon: {
    backgroundColor: "white",
    width: 50,
    marginHorizontal: 10,
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    elevation: 20,
  },
  signup: {
    color: colors.text1,
  },
  address: {
    fontSize: 18,
    color: colors.text2,
    textAlign: "center",
    marginTop: 20,
  },
  errormsg: {
    color: "red",
    fontSize: 18,
    textAlign: "center",
    marginTop: 10,
    borderColor: "red",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
  successmessage: {
    color: "green",
    fontSize: 18,
    textAlign: "center",
    margin: 10,
    borderColor: "green",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
});
