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
      <View style={styles.View_299_954}>
        <View style={styles.View_299_955}>
          <View style={styles.View_299_956}>
            <View style={styles.View_299_957}>
              <Text style={styles.Text_299_957}>Paiement Services</Text>
            </View>
          </View>
          <View style={styles.View_299_958}>
            <View style={styles.View_299_959}>
              <Text style={styles.Text_299_959}>Payer Facture</Text>
            </View>
          </View>
          <View style={styles.View_299_960}>
            <View style={styles.View_299_961}>
              <Text style={styles.Text_299_961}>Forfait Deal bi</Text>
            </View>
          </View>
          <View style={styles.View_299_962}>
            <View style={styles.View_299_963}>
              <Text style={styles.Text_299_963}>Forfait Buur</Text>
            </View>
          </View>
          <View style={styles.View_299_964}>
            <View style={styles.View_299_965}>
              <Text style={styles.Text_299_965}>Achat Internet</Text>
            </View>
          </View>
          <View style={styles.View_299_966}>
            <View style={styles.View_299_967}>
              <Text style={styles.Text_299_967}>Achat Credit</Text>
            </View>
          </View>
          <View style={styles.View_299_968}>
            <Text style={styles.Text_299_968}>CHRONO Réduction</Text>
          </View>
        </View>
        <View style={styles.View_299_969}>
          <View style={styles.View_299_970}>
            <View style={styles.View_299_971}>
              <Text style={styles.Text_299_971}>Paiement Services</Text>
            </View>
          </View>
          <View style={styles.View_299_972}>
            <View style={styles.View_299_973}>
              <Text style={styles.Text_299_973}>Payer Facture</Text>
            </View>
          </View>
          <View style={styles.View_299_974}>
            <View style={styles.View_299_975}>
              <Text style={styles.Text_299_975}>Forfait Deal bi</Text>
            </View>
          </View>
          <View style={styles.View_299_976}>
            <View style={styles.View_299_977}>
              <Text style={styles.Text_299_977}>Forfait Buur</Text>
            </View>
          </View>
          <View style={styles.View_299_978}>
            <View style={styles.View_299_979}>
              <Text style={styles.Text_299_979}>Achat Internet</Text>
            </View>
          </View>
          <View style={styles.View_299_980}>
            <View style={styles.View_299_981}>
              <Text style={styles.Text_299_981}>Achat Credit</Text>
            </View>
          </View>
          <View style={styles.View_299_982}>
            <Text style={styles.Text_299_982}>BUUR Réduction</Text>
          </View>
        </View>
        <View style={styles.View_299_983}>
          <View style={styles.View_299_984}>
            <View style={styles.View_299_985}>
              <Text style={styles.Text_299_985}>Paiement Services</Text>
            </View>
          </View>
          <View style={styles.View_299_986}>
            <View style={styles.View_299_987}>
              <Text style={styles.Text_299_987}>Payer Facture</Text>
            </View>
          </View>
          <View style={styles.View_299_988}>
            <View style={styles.View_299_989}>
              <Text style={styles.Text_299_989}>Forfait Deal bi</Text>
            </View>
          </View>
          <View style={styles.View_299_990}>
            <View style={styles.View_299_991}>
              <Text style={styles.Text_299_991}>Forfait Buur</Text>
            </View>
          </View>
          <View style={styles.View_299_992}>
            <View style={styles.View_299_993}>
              <Text style={styles.Text_299_993}>Achat Internet</Text>
            </View>
          </View>
          <View style={styles.View_299_994}>
            <View style={styles.View_299_995}>
              <Text style={styles.Text_299_995}>Achat Credit</Text>
            </View>
          </View>
          <View style={styles.View_299_996}>
            <Text style={styles.Text_299_996}>NET Réduction</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_319_962}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b20/083a/327769472b9b89f0a6cec424cbab9711"
          }}
          style={styles.ImageBackground_I319_962_299_868}
        />
      </View>
      <View style={styles.View_245_89}>
        <View style={styles.View_I245_89_235_442} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6a77/bfd5/5a019baa384fae5a332a73f261f2ddcf"
          }}
          style={styles.ImageBackground_I245_89_296_77}
        />
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1190/c544/51124fd14f4901a34be6c043c2818798"
          }}
          style={styles.TouchableOpacity_I245_89_235_443}
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
  View_299_954: {
    width: wp("100%"),
    height: hp("107.5136612021858%"),
    minHeight: hp("107.5136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.26595744680851063%"),
    top: hp("44.80874316939891%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_299_955: {
    width: wp("92.02127659574468%"),
    minWidth: wp("92.02127659574468%"),
    height: hp("30.46448087431694%"),
    minHeight: hp("30.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.9893617021276597%"),
    top: hp("72.1311475409836%")
  },
  View_299_956: {
    width: wp("44.22514489356508%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.79611141123671%"),
    top: hp("22.814207650273232%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_299_957: {
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
  Text_299_957: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.26,
    textTransform: "none"
  },
  View_299_958: {
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
  View_299_959: {
    width: wp("12.23404255319149%"),
    minWidth: wp("12.23404255319149%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.925531914893618%"),
    top: hp("1.9125683060109395%"),
    justifyContent: "flex-start"
  },
  Text_299_959: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.26,
    textTransform: "none"
  },
  View_299_960: {
    width: wp("44.22514489356508%"),
    height: hp("7.5136612021857925%"),
    minHeight: hp("7.5136612021857925%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.79611141123671%"),
    top: hp("14.207650273224033%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_299_961: {
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
  Text_299_961: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.26,
    textTransform: "none"
  },
  View_299_962: {
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
  View_299_963: {
    width: wp("19.193965830701462%"),
    minWidth: wp("19.193965830701462%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.255319148936167%"),
    top: hp("1.912568306010911%"),
    justifyContent: "flex-start"
  },
  Text_299_963: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.26,
    textTransform: "none"
  },
  View_299_964: {
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
  View_299_965: {
    width: wp("12.76595744680851%"),
    minWidth: wp("12.76595744680851%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.925531914893618%"),
    top: hp("1.9125683060109395%"),
    justifyContent: "flex-start"
  },
  Text_299_965: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.26,
    textTransform: "none"
  },
  View_299_966: {
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
  View_299_967: {
    width: wp("10.372340425531915%"),
    minWidth: wp("10.372340425531915%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.925531914893618%"),
    top: hp("1.912568306010911%"),
    justifyContent: "flex-start"
  },
  Text_299_967: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.26,
    textTransform: "none"
  },
  View_299_968: {
    width: wp("42.28723404255319%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.648144011801861%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_299_968: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_299_969: {
    width: wp("92.02124413023604%"),
    minWidth: wp("92.02124413023604%"),
    height: hp("30.46448087431694%"),
    minHeight: hp("30.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.9893617021276597%"),
    top: hp("37.431693989071036%")
  },
  View_299_970: {
    width: wp("44.22515300994224%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.79611141123671%"),
    top: hp("22.814207650273218%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_299_971: {
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
  Text_299_971: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.26,
    textTransform: "none"
  },
  View_299_972: {
    width: wp("44.22514895175366%"),
    height: hp("7.5136612021857925%"),
    minHeight: hp("7.5136612021857925%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14.207650273224047%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_299_973: {
    width: wp("12.23404255319149%"),
    minWidth: wp("12.23404255319149%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.925531914893618%"),
    top: hp("1.9125683060109253%"),
    justifyContent: "flex-start"
  },
  Text_299_973: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.26,
    textTransform: "none"
  },
  View_299_974: {
    width: wp("44.22515300994224%"),
    height: hp("7.5136612021857925%"),
    minHeight: hp("7.5136612021857925%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.79611141123671%"),
    top: hp("14.207650273224047%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_299_975: {
    width: wp("19.193973947078625%"),
    minWidth: wp("19.193973947078625%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.255319148936167%"),
    top: hp("1.9125683060109253%"),
    justifyContent: "flex-start"
  },
  Text_299_975: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.26,
    textTransform: "none"
  },
  View_299_976: {
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
  View_299_977: {
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
  Text_299_977: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.26,
    textTransform: "none"
  },
  View_299_978: {
    width: wp("44.22514895175366%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("22.814207650273218%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_299_979: {
    width: wp("12.76595744680851%"),
    minWidth: wp("12.76595744680851%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.925531914893618%"),
    top: hp("1.9125683060109395%"),
    justifyContent: "flex-start"
  },
  Text_299_979: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.26,
    textTransform: "none"
  },
  View_299_980: {
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
  View_299_981: {
    width: wp("10.372340425531915%"),
    minWidth: wp("10.372340425531915%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.925531914893618%"),
    top: hp("1.9125683060109395%"),
    justifyContent: "flex-start"
  },
  Text_299_981: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.26,
    textTransform: "none"
  },
  View_299_982: {
    width: wp("34.57446808510639%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.648144011801861%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_299_982: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_299_983: {
    width: wp("92.02124413023604%"),
    minWidth: wp("92.02124413023604%"),
    height: hp("30.46448087431694%"),
    minHeight: hp("30.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.9893617021276597%"),
    top: hp("2.7322404371584668%")
  },
  View_299_984: {
    width: wp("44.22514489356508%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.79611141123671%"),
    top: hp("22.814207650273218%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_299_985: {
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
  Text_299_985: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.26,
    textTransform: "none"
  },
  View_299_986: {
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
  View_299_987: {
    width: wp("12.23404255319149%"),
    minWidth: wp("12.23404255319149%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.925531914893618%"),
    top: hp("1.9125683060109324%"),
    justifyContent: "flex-start"
  },
  Text_299_987: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.26,
    textTransform: "none"
  },
  View_299_988: {
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
  View_299_989: {
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
  Text_299_989: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.26,
    textTransform: "none"
  },
  View_299_990: {
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
  View_299_991: {
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
  Text_299_991: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.26,
    textTransform: "none"
  },
  View_299_992: {
    width: wp("44.22515300994224%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("22.814207650273218%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_299_993: {
    width: wp("12.76595744680851%"),
    minWidth: wp("12.76595744680851%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.925531914893618%"),
    top: hp("1.9125683060109395%"),
    justifyContent: "flex-start"
  },
  Text_299_993: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.26,
    textTransform: "none"
  },
  View_299_994: {
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
  View_299_995: {
    width: wp("10.372340425531915%"),
    minWidth: wp("10.372340425531915%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.925531914893618%"),
    top: hp("1.9125683060109253%"),
    justifyContent: "flex-start"
  },
  Text_299_995: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.26,
    textTransform: "none"
  },
  View_299_996: {
    width: wp("34.06161044506317%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.648144011801861%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_299_996: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_319_962: {
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
  ImageBackground_I319_962_299_868: {
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
  View_245_89: {
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
  View_I245_89_235_442: {
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
  ImageBackground_I245_89_296_77: {
    flexGrow: 1,
    width: wp("6.914893617021277%"),
    height: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.914893617021277%"),
    top: hp("10.51912568306011%")
  },
  TouchableOpacity_I245_89_235_443: {
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
