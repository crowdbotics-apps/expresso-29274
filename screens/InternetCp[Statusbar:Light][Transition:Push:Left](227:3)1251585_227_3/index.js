import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@modules"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_233_96}>
        <View style={styles.View_233_95}>
          <View style={styles.View_233_80}>
            <View style={styles.View_233_81}>
              <Text style={styles.Text_233_81}>Paiement Services</Text>
            </View>
          </View>
          <View style={styles.View_233_82}>
            <View style={styles.View_233_83}>
              <Text style={styles.Text_233_83}>Payer Facture</Text>
            </View>
          </View>
          <View style={styles.View_233_84}>
            <View style={styles.View_233_85}>
              <Text style={styles.Text_233_85}>Forfait Deal bi</Text>
            </View>
          </View>
          <View style={styles.View_233_86}>
            <View style={styles.View_233_87}>
              <Text style={styles.Text_233_87}>Forfait Buur</Text>
            </View>
          </View>
          <View style={styles.View_233_88}>
            <View style={styles.View_233_89}>
              <Text style={styles.Text_233_89}>Achat Internet</Text>
            </View>
          </View>
          <View style={styles.View_233_90}>
            <View style={styles.View_233_91}>
              <Text style={styles.Text_233_91}>Achat Credit</Text>
            </View>
          </View>
          <View style={styles.View_233_92}>
            <Text style={styles.Text_233_92}>Forfait NET 30J</Text>
          </View>
        </View>
        <View style={styles.View_233_94}>
          <View style={styles.View_233_54}>
            <View style={styles.View_233_55}>
              <Text style={styles.Text_233_55}>Paiement Services</Text>
            </View>
          </View>
          <View style={styles.View_233_56}>
            <View style={styles.View_233_57}>
              <Text style={styles.Text_233_57}>Payer Facture</Text>
            </View>
          </View>
          <View style={styles.View_233_58}>
            <View style={styles.View_233_59}>
              <Text style={styles.Text_233_59}>Forfait Deal bi</Text>
            </View>
          </View>
          <View style={styles.View_233_60}>
            <View style={styles.View_233_61}>
              <Text style={styles.Text_233_61}>Forfait Buur</Text>
            </View>
          </View>
          <View style={styles.View_233_62}>
            <View style={styles.View_233_63}>
              <Text style={styles.Text_233_63}>Achat Internet</Text>
            </View>
          </View>
          <View style={styles.View_233_64}>
            <View style={styles.View_233_65}>
              <Text style={styles.Text_233_65}>Achat Credit</Text>
            </View>
          </View>
          <View style={styles.View_233_66}>
            <Text style={styles.Text_233_66}>Forfait NET 7J</Text>
          </View>
        </View>
        <View style={styles.View_233_93}>
          <View style={styles.View_233_15}>
            <View style={styles.View_233_16}>
              <Text style={styles.Text_233_16}>Paiement Services</Text>
            </View>
          </View>
          <View style={styles.View_233_26}>
            <View style={styles.View_233_27}>
              <Text style={styles.Text_233_27}>Payer Facture</Text>
            </View>
          </View>
          <View style={styles.View_233_29}>
            <View style={styles.View_233_30}>
              <Text style={styles.Text_233_30}>Forfait Deal bi</Text>
            </View>
          </View>
          <View style={styles.View_233_32}>
            <View style={styles.View_233_33}>
              <Text style={styles.Text_233_33}>Forfait Buur</Text>
            </View>
          </View>
          <View style={styles.View_233_39}>
            <View style={styles.View_233_40}>
              <Text style={styles.Text_233_40}>Achat Internet</Text>
            </View>
          </View>
          <View style={styles.View_233_45}>
            <View style={styles.View_233_46}>
              <Text style={styles.Text_233_46}>Achat Credit</Text>
            </View>
          </View>
          <View style={styles.View_233_53}>
            <Text style={styles.Text_233_53}>Forfait NET 24h</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_319_956}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b20/083a/327769472b9b89f0a6cec424cbab9711"
          }}
          style={styles.ImageBackground_I319_956_299_868}
        />
      </View>
      <View style={styles.View_235_562}>
        <View style={styles.View_I235_562_235_442} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6a77/bfd5/5a019baa384fae5a332a73f261f2ddcf"
          }}
          style={styles.ImageBackground_I235_562_296_77}
        />
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1190/c544/51124fd14f4901a34be6c043c2818798"
          }}
          style={styles.TouchableOpacity_I235_562_235_443}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("293_182"))
          }
        />
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(245, 243, 250, 1)" },
  View_2: { height: hp("115.43715846994536%") },
  View_233_96: {
    width: wp("100%"),
    height: hp("106.55737704918033%"),
    minHeight: hp("106.55737704918033%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("44.80874316939891%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_233_95: {
    width: wp("92.02127659574468%"),
    minWidth: wp("92.02127659574468%"),
    height: hp("30.46448087431694%"),
    minHeight: hp("30.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.9893617021276597%"),
    top: hp("72.67759562841529%")
  },
  View_233_80: {
    width: wp("44.22514489356508%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.79617634225399%"),
    top: hp("22.814207650273232%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_233_81: {
    width: wp("19.193965830701462%"),
    minWidth: wp("19.193965830701462%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.255319148936167%"),
    top: hp("1.9125683060109395%"),
    justifyContent: "flex-start"
  },
  Text_233_81: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.26,
    textTransform: "none"
  },
  View_233_82: {
    width: wp("44.22514895175366%"),
    height: hp("7.5136612021857925%"),
    minHeight: hp("7.5136612021857925%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14.207650273224033%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_233_83: {
    width: wp("12.23404255319149%"),
    minWidth: wp("12.23404255319149%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.925531914893617%"),
    top: hp("1.9125683060109395%"),
    justifyContent: "flex-start"
  },
  Text_233_83: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.26,
    textTransform: "none"
  },
  View_233_84: {
    width: wp("44.22514489356508%"),
    height: hp("7.5136612021857925%"),
    minHeight: hp("7.5136612021857925%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.79617634225399%"),
    top: hp("14.207650273224033%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_233_85: {
    width: wp("19.193973947078625%"),
    minWidth: wp("19.193973947078625%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.255319148936167%"),
    top: hp("1.9125683060109395%"),
    justifyContent: "flex-start"
  },
  Text_233_85: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.26,
    textTransform: "none"
  },
  View_233_86: {
    width: wp("44.22514489356508%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.79617634225399%"),
    top: hp("5.464480874316948%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_233_87: {
    width: wp("19.193965830701462%"),
    minWidth: wp("19.193965830701462%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.255319148936167%"),
    top: hp("1.9125683060109253%"),
    justifyContent: "flex-start"
  },
  Text_233_87: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.26,
    textTransform: "none"
  },
  View_233_88: {
    width: wp("44.22514895175366%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("22.814207650273232%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_233_89: {
    width: wp("12.76595744680851%"),
    minWidth: wp("12.76595744680851%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.925531914893617%"),
    top: hp("1.9125683060109395%"),
    justifyContent: "flex-start"
  },
  Text_233_89: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.26,
    textTransform: "none"
  },
  View_233_90: {
    width: wp("44.22514895175366%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.464480874316948%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_233_91: {
    width: wp("10.372340425531915%"),
    minWidth: wp("10.372340425531915%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.925531914893617%"),
    top: hp("1.9125683060109253%"),
    justifyContent: "flex-start"
  },
  Text_233_91: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.26,
    textTransform: "none"
  },
  View_233_92: {
    width: wp("33.51222707870159%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.648144011801862%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_233_92: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_233_94: {
    width: wp("92.02124413023604%"),
    minWidth: wp("92.02124413023604%"),
    height: hp("30.46448087431694%"),
    minHeight: hp("30.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.9893617021276597%"),
    top: hp("37.978142076502735%")
  },
  View_233_54: {
    width: wp("44.22515300994224%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.79611141123671%"),
    top: hp("22.814207650273204%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_233_55: {
    width: wp("19.193965830701462%"),
    minWidth: wp("19.193965830701462%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.255319148936167%"),
    top: hp("1.9125683060109537%"),
    justifyContent: "flex-start"
  },
  Text_233_55: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.26,
    textTransform: "none"
  },
  View_233_56: {
    width: wp("44.22514895175366%"),
    height: hp("7.5136612021857925%"),
    minHeight: hp("7.5136612021857925%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14.207650273224033%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_233_57: {
    width: wp("12.23404255319149%"),
    minWidth: wp("12.23404255319149%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.925531914893617%"),
    top: hp("1.9125683060109395%"),
    justifyContent: "flex-start"
  },
  Text_233_57: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.26,
    textTransform: "none"
  },
  View_233_58: {
    width: wp("44.22515300994224%"),
    height: hp("7.5136612021857925%"),
    minHeight: hp("7.5136612021857925%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.79611141123671%"),
    top: hp("14.207650273224033%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_233_59: {
    width: wp("19.193973947078625%"),
    minWidth: wp("19.193973947078625%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.255319148936167%"),
    top: hp("1.9125683060109395%"),
    justifyContent: "flex-start"
  },
  Text_233_59: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.26,
    textTransform: "none"
  },
  View_233_60: {
    width: wp("44.22515300994224%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.79611141123671%"),
    top: hp("5.4644808743169335%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_233_61: {
    width: wp("19.193965830701462%"),
    minWidth: wp("19.193965830701462%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.255319148936167%"),
    top: hp("1.9125683060109253%"),
    justifyContent: "flex-start"
  },
  Text_233_61: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.26,
    textTransform: "none"
  },
  View_233_62: {
    width: wp("44.22514895175366%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("22.814207650273204%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_233_63: {
    width: wp("12.76595744680851%"),
    minWidth: wp("12.76595744680851%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.925531914893617%"),
    top: hp("1.9125683060109537%"),
    justifyContent: "flex-start"
  },
  Text_233_63: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.26,
    textTransform: "none"
  },
  View_233_64: {
    width: wp("44.22514895175366%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.4644808743169335%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_233_65: {
    width: wp("10.372340425531915%"),
    minWidth: wp("10.372340425531915%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.925531914893617%"),
    top: hp("1.9125683060109253%"),
    justifyContent: "flex-start"
  },
  Text_233_65: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.26,
    textTransform: "none"
  },
  View_233_66: {
    width: wp("30.76532242145944%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.648144011801862%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_233_66: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_233_93: {
    width: wp("92.02124413023604%"),
    minWidth: wp("92.02124413023604%"),
    height: hp("30.46448087431694%"),
    minHeight: hp("30.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.9893617021276597%"),
    top: hp("3.2786885245901587%")
  },
  View_233_15: {
    width: wp("44.22514489356508%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.79611141123671%"),
    top: hp("22.814207650273225%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_233_16: {
    width: wp("19.193965830701462%"),
    minWidth: wp("19.193965830701462%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.255319148936167%"),
    top: hp("1.9125683060109253%"),
    justifyContent: "flex-start"
  },
  Text_233_16: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.26,
    textTransform: "none"
  },
  View_233_26: {
    width: wp("44.22515300994224%"),
    height: hp("7.5136612021857925%"),
    minHeight: hp("7.5136612021857925%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14.207650273224047%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_233_27: {
    width: wp("12.23404255319149%"),
    minWidth: wp("12.23404255319149%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.925531914893617%"),
    top: hp("1.9125683060109324%"),
    justifyContent: "flex-start"
  },
  Text_233_27: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.26,
    textTransform: "none"
  },
  View_233_29: {
    width: wp("44.22514489356508%"),
    height: hp("7.5136612021857925%"),
    minHeight: hp("7.5136612021857925%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.79611141123671%"),
    top: hp("14.207650273224047%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_233_30: {
    width: wp("19.193973947078625%"),
    minWidth: wp("19.193973947078625%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.255319148936167%"),
    top: hp("1.9125683060109324%"),
    justifyContent: "flex-start"
  },
  Text_233_30: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.26,
    textTransform: "none"
  },
  View_233_32: {
    width: wp("44.22514489356508%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.79611141123671%"),
    top: hp("5.464480874316948%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_233_33: {
    width: wp("19.193965830701462%"),
    minWidth: wp("19.193965830701462%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.255319148936167%"),
    top: hp("1.9125683060109182%"),
    justifyContent: "flex-start"
  },
  Text_233_33: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.26,
    textTransform: "none"
  },
  View_233_39: {
    width: wp("44.22515300994224%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("22.814207650273225%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_233_40: {
    width: wp("12.76595744680851%"),
    minWidth: wp("12.76595744680851%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.925531914893617%"),
    top: hp("1.9125683060109253%"),
    justifyContent: "flex-start"
  },
  Text_233_40: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.26,
    textTransform: "none"
  },
  View_233_45: {
    width: wp("44.22515300994224%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.464480874316948%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_233_46: {
    width: wp("10.372340425531915%"),
    minWidth: wp("10.372340425531915%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.925531914893617%"),
    top: hp("1.9125683060109182%"),
    justifyContent: "flex-start"
  },
  Text_233_46: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.26,
    textTransform: "none"
  },
  View_233_53: {
    width: wp("34.06161044506317%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.648144011801862%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_233_53: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_319_956: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("22.404371584699454%"),
    minHeight: hp("22.404371584699454%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("19.53551912568306%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_I319_956_299_868: {
    flexGrow: 1,
    width: wp("88.29787234042553%"),
    height: hp("16.256830601092894%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.851063829787234%"),
    top: hp("3.278688524590166%"),
    resizeMode: "cover",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_235_562: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("21.174863387978142%"),
    minHeight: hp("21.174863387978142%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I235_562_235_442: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("19.262295081967213%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(105, 98, 153, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40
  },
  ImageBackground_I235_562_296_77: {
    flexGrow: 1,
    width: wp("6.914893617021277%"),
    height: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.914893617021277%"),
    top: hp("10.51912568306011%")
  },
  TouchableOpacity_I235_562_235_443: {
    flexGrow: 1,
    width: wp("11.170212765957446%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.57446808510637%"),
    top: hp("9.153005464480875%")
  }
})
const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
