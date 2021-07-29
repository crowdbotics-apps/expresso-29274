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
      <View style={styles.View_299_911}>
        <View style={styles.View_299_912}>
          <View style={styles.View_299_913}>
            <View style={styles.View_299_914}>
              <Text style={styles.Text_299_914}>Paiement Services</Text>
            </View>
          </View>
          <View style={styles.View_299_915}>
            <View style={styles.View_299_916}>
              <Text style={styles.Text_299_916}>Payer Facture</Text>
            </View>
          </View>
          <View style={styles.View_299_917}>
            <View style={styles.View_299_918}>
              <Text style={styles.Text_299_918}>Forfait Deal bi</Text>
            </View>
          </View>
          <View style={styles.View_299_919}>
            <View style={styles.View_299_920}>
              <Text style={styles.Text_299_920}>Forfait Buur</Text>
            </View>
          </View>
          <View style={styles.View_299_921}>
            <View style={styles.View_299_922}>
              <Text style={styles.Text_299_922}>Achat Internet</Text>
            </View>
          </View>
          <View style={styles.View_299_923}>
            <View style={styles.View_299_924}>
              <Text style={styles.Text_299_924}>Achat Credit</Text>
            </View>
          </View>
          <View style={styles.View_299_925}>
            <Text style={styles.Text_299_925}>Forfait BUUR 30J</Text>
          </View>
        </View>
        <View style={styles.View_299_926}>
          <View style={styles.View_299_927}>
            <View style={styles.View_299_928}>
              <Text style={styles.Text_299_928}>Paiement Services</Text>
            </View>
          </View>
          <View style={styles.View_299_929}>
            <View style={styles.View_299_930}>
              <Text style={styles.Text_299_930}>Payer Facture</Text>
            </View>
          </View>
          <View style={styles.View_299_931}>
            <View style={styles.View_299_932}>
              <Text style={styles.Text_299_932}>Forfait Deal bi</Text>
            </View>
          </View>
          <View style={styles.View_299_933}>
            <View style={styles.View_299_934}>
              <Text style={styles.Text_299_934}>Forfait Buur</Text>
            </View>
          </View>
          <View style={styles.View_299_935}>
            <View style={styles.View_299_936}>
              <Text style={styles.Text_299_936}>Achat Internet</Text>
            </View>
          </View>
          <View style={styles.View_299_937}>
            <View style={styles.View_299_938}>
              <Text style={styles.Text_299_938}>Achat Credit</Text>
            </View>
          </View>
          <View style={styles.View_299_939}>
            <Text style={styles.Text_299_939}>Forfait BUUR 7J</Text>
          </View>
        </View>
        <View style={styles.View_299_940}>
          <View style={styles.View_299_941}>
            <View style={styles.View_299_942}>
              <Text style={styles.Text_299_942}>Paiement Services</Text>
            </View>
          </View>
          <View style={styles.View_299_943}>
            <View style={styles.View_299_944}>
              <Text style={styles.Text_299_944}>Payer Facture</Text>
            </View>
          </View>
          <View style={styles.View_299_945}>
            <View style={styles.View_299_946}>
              <Text style={styles.Text_299_946}>Forfait Deal bi</Text>
            </View>
          </View>
          <View style={styles.View_299_947}>
            <View style={styles.View_299_948}>
              <Text style={styles.Text_299_948}>Forfait Buur</Text>
            </View>
          </View>
          <View style={styles.View_299_949}>
            <View style={styles.View_299_950}>
              <Text style={styles.Text_299_950}>Achat Internet</Text>
            </View>
          </View>
          <View style={styles.View_299_951}>
            <View style={styles.View_299_952}>
              <Text style={styles.Text_299_952}>Achat Credit</Text>
            </View>
          </View>
          <View style={styles.View_299_953}>
            <Text style={styles.Text_299_953}>Forfait BUUR 24h</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_319_960}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b20/083a/327769472b9b89f0a6cec424cbab9711"
          }}
          style={styles.ImageBackground_I319_960_299_868}
        />
      </View>
      <View style={styles.View_235_547}>
        <View style={styles.View_I235_547_235_442} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6a77/bfd5/5a019baa384fae5a332a73f261f2ddcf"
          }}
          style={styles.ImageBackground_I235_547_296_77}
        />
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1190/c544/51124fd14f4901a34be6c043c2818798"
          }}
          style={styles.TouchableOpacity_I235_547_235_443}
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
  View_299_911: {
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
  View_299_912: {
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
  View_299_913: {
    width: wp("44.22514489356508%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.796176342253986%"),
    top: hp("22.814207650273232%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_299_914: {
    width: wp("19.193965830701462%"),
    minWidth: wp("19.193965830701462%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.255319148936174%"),
    top: hp("1.9125683060109395%"),
    justifyContent: "flex-start"
  },
  Text_299_914: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.26,
    textTransform: "none"
  },
  View_299_915: {
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
  View_299_916: {
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
  Text_299_916: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.26,
    textTransform: "none"
  },
  View_299_917: {
    width: wp("44.22514489356508%"),
    height: hp("7.5136612021857925%"),
    minHeight: hp("7.5136612021857925%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.796176342253986%"),
    top: hp("14.207650273224033%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_299_918: {
    width: wp("19.193973947078625%"),
    minWidth: wp("19.193973947078625%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.255319148936174%"),
    top: hp("1.9125683060109395%"),
    justifyContent: "flex-start"
  },
  Text_299_918: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.26,
    textTransform: "none"
  },
  View_299_919: {
    width: wp("44.22514489356508%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.796176342253986%"),
    top: hp("5.464480874316948%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_299_920: {
    width: wp("19.193965830701462%"),
    minWidth: wp("19.193965830701462%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.255319148936174%"),
    top: hp("1.912568306010911%"),
    justifyContent: "flex-start"
  },
  Text_299_920: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.26,
    textTransform: "none"
  },
  View_299_921: {
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
  View_299_922: {
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
  Text_299_922: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.26,
    textTransform: "none"
  },
  View_299_923: {
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
  View_299_924: {
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
  Text_299_924: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.26,
    textTransform: "none"
  },
  View_299_925: {
    width: wp("36.43617021276596%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.648144011801861%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_299_925: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_299_926: {
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
  View_299_927: {
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
  View_299_928: {
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
  Text_299_928: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.26,
    textTransform: "none"
  },
  View_299_929: {
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
  View_299_930: {
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
  Text_299_930: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.26,
    textTransform: "none"
  },
  View_299_931: {
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
  View_299_932: {
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
  Text_299_932: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.26,
    textTransform: "none"
  },
  View_299_933: {
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
  View_299_934: {
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
  Text_299_934: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.26,
    textTransform: "none"
  },
  View_299_935: {
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
  View_299_936: {
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
  Text_299_936: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.26,
    textTransform: "none"
  },
  View_299_937: {
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
  View_299_938: {
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
  Text_299_938: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.26,
    textTransform: "none"
  },
  View_299_939: {
    width: wp("33.77659574468085%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.648144011801861%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_299_939: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_299_940: {
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
  View_299_941: {
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
  View_299_942: {
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
  Text_299_942: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.26,
    textTransform: "none"
  },
  View_299_943: {
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
  View_299_944: {
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
  Text_299_944: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.26,
    textTransform: "none"
  },
  View_299_945: {
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
  View_299_946: {
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
  Text_299_946: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.26,
    textTransform: "none"
  },
  View_299_947: {
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
  View_299_948: {
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
  Text_299_948: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.26,
    textTransform: "none"
  },
  View_299_949: {
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
  View_299_950: {
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
  Text_299_950: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.26,
    textTransform: "none"
  },
  View_299_951: {
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
  View_299_952: {
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
  Text_299_952: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.26,
    textTransform: "none"
  },
  View_299_953: {
    width: wp("36.96808510638298%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.648144011801861%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_299_953: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_319_960: {
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
  ImageBackground_I319_960_299_868: {
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
  View_235_547: {
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
  View_I235_547_235_442: {
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
  ImageBackground_I235_547_296_77: {
    flexGrow: 1,
    width: wp("6.914893617021277%"),
    height: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.914893617021277%"),
    top: hp("10.51912568306011%")
  },
  TouchableOpacity_I235_547_235_443: {
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
