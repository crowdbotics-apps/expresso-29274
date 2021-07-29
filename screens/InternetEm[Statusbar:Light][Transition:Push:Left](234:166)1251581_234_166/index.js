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
      <View style={styles.View_234_167}>
        <View style={styles.View_234_168}>
          <View style={styles.View_234_169}>
            <View style={styles.View_234_170}>
              <Text style={styles.Text_234_170}>Paiement Services</Text>
            </View>
          </View>
          <View style={styles.View_234_171}>
            <View style={styles.View_234_172}>
              <Text style={styles.Text_234_172}>Payer Facture</Text>
            </View>
          </View>
          <View style={styles.View_234_173}>
            <View style={styles.View_234_174}>
              <Text style={styles.Text_234_174}>Forfait Deal bi</Text>
            </View>
          </View>
          <View style={styles.View_234_175}>
            <View style={styles.View_234_176}>
              <Text style={styles.Text_234_176}>Forfait Buur</Text>
            </View>
          </View>
          <View style={styles.View_234_177}>
            <View style={styles.View_234_178}>
              <Text style={styles.Text_234_178}>Achat Internet</Text>
            </View>
          </View>
          <View style={styles.View_234_179}>
            <View style={styles.View_234_180}>
              <Text style={styles.Text_234_180}>Achat Credit</Text>
            </View>
          </View>
          <View style={styles.View_234_181}>
            <Text style={styles.Text_234_181}>Forfait NET 30J</Text>
          </View>
        </View>
        <View style={styles.View_234_182}>
          <View style={styles.View_234_183}>
            <View style={styles.View_234_184}>
              <Text style={styles.Text_234_184}>Paiement Services</Text>
            </View>
          </View>
          <View style={styles.View_234_185}>
            <View style={styles.View_234_186}>
              <Text style={styles.Text_234_186}>Payer Facture</Text>
            </View>
          </View>
          <View style={styles.View_234_187}>
            <View style={styles.View_234_188}>
              <Text style={styles.Text_234_188}>Forfait Deal bi</Text>
            </View>
          </View>
          <View style={styles.View_234_189}>
            <View style={styles.View_234_190}>
              <Text style={styles.Text_234_190}>Forfait Buur</Text>
            </View>
          </View>
          <View style={styles.View_234_191}>
            <View style={styles.View_234_192}>
              <Text style={styles.Text_234_192}>Achat Internet</Text>
            </View>
          </View>
          <View style={styles.View_234_193}>
            <View style={styles.View_234_194}>
              <Text style={styles.Text_234_194}>Achat Credit</Text>
            </View>
          </View>
          <View style={styles.View_234_195}>
            <Text style={styles.Text_234_195}>Forfait NET 7J</Text>
          </View>
        </View>
        <View style={styles.View_234_196}>
          <View style={styles.View_234_197}>
            <View style={styles.View_234_198}>
              <Text style={styles.Text_234_198}>Paiement Services</Text>
            </View>
          </View>
          <View style={styles.View_234_199}>
            <View style={styles.View_234_200}>
              <Text style={styles.Text_234_200}>Payer Facture</Text>
            </View>
          </View>
          <View style={styles.View_234_201}>
            <View style={styles.View_234_202}>
              <Text style={styles.Text_234_202}>Forfait Deal bi</Text>
            </View>
          </View>
          <View style={styles.View_234_203}>
            <View style={styles.View_234_204}>
              <Text style={styles.Text_234_204}>Forfait Buur</Text>
            </View>
          </View>
          <View style={styles.View_234_205}>
            <View style={styles.View_234_206}>
              <Text style={styles.Text_234_206}>Achat Internet</Text>
            </View>
          </View>
          <View style={styles.View_234_207}>
            <View style={styles.View_234_208}>
              <Text style={styles.Text_234_208}>Achat Credit</Text>
            </View>
          </View>
          <View style={styles.View_234_209}>
            <Text style={styles.Text_234_209}>Forfait NET 24h</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_319_958}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b20/083a/327769472b9b89f0a6cec424cbab9711"
          }}
          style={styles.ImageBackground_I319_958_299_868}
        />
      </View>
      <View style={styles.View_235_535}>
        <View style={styles.View_I235_535_235_442} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6a77/bfd5/5a019baa384fae5a332a73f261f2ddcf"
          }}
          style={styles.ImageBackground_I235_535_296_77}
        />
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1190/c544/51124fd14f4901a34be6c043c2818798"
          }}
          style={styles.TouchableOpacity_I235_535_235_443}
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
  View_234_167: {
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
  View_234_168: {
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
  View_234_169: {
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
  View_234_170: {
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
  Text_234_170: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.26,
    textTransform: "none"
  },
  View_234_171: {
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
  View_234_172: {
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
  Text_234_172: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.26,
    textTransform: "none"
  },
  View_234_173: {
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
  View_234_174: {
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
  Text_234_174: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.26,
    textTransform: "none"
  },
  View_234_175: {
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
  View_234_176: {
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
  Text_234_176: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.26,
    textTransform: "none"
  },
  View_234_177: {
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
  View_234_178: {
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
  Text_234_178: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.26,
    textTransform: "none"
  },
  View_234_179: {
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
  View_234_180: {
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
  Text_234_180: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.26,
    textTransform: "none"
  },
  View_234_181: {
    width: wp("33.51222707870159%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.648144011801861%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_234_181: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_234_182: {
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
  View_234_183: {
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
  View_234_184: {
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
  Text_234_184: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.26,
    textTransform: "none"
  },
  View_234_185: {
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
  View_234_186: {
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
  Text_234_186: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.26,
    textTransform: "none"
  },
  View_234_187: {
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
  View_234_188: {
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
  Text_234_188: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.26,
    textTransform: "none"
  },
  View_234_189: {
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
  View_234_190: {
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
  Text_234_190: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.26,
    textTransform: "none"
  },
  View_234_191: {
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
  View_234_192: {
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
  Text_234_192: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.26,
    textTransform: "none"
  },
  View_234_193: {
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
  View_234_194: {
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
  Text_234_194: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.26,
    textTransform: "none"
  },
  View_234_195: {
    width: wp("30.76532242145944%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.648144011801861%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_234_195: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_234_196: {
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
  View_234_197: {
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
  View_234_198: {
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
  Text_234_198: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.26,
    textTransform: "none"
  },
  View_234_199: {
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
  View_234_200: {
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
  Text_234_200: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.26,
    textTransform: "none"
  },
  View_234_201: {
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
  View_234_202: {
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
  Text_234_202: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.26,
    textTransform: "none"
  },
  View_234_203: {
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
  View_234_204: {
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
  Text_234_204: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.26,
    textTransform: "none"
  },
  View_234_205: {
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
  View_234_206: {
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
  Text_234_206: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.26,
    textTransform: "none"
  },
  View_234_207: {
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
  View_234_208: {
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
  Text_234_208: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.26,
    textTransform: "none"
  },
  View_234_209: {
    width: wp("34.06161044506317%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.648144011801861%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_234_209: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_319_958: {
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
  ImageBackground_I319_958_299_868: {
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
  View_235_535: {
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
  View_I235_535_235_442: {
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
  ImageBackground_I235_535_296_77: {
    flexGrow: 1,
    width: wp("6.914893617021277%"),
    height: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.914893617021277%"),
    top: hp("10.51912568306011%")
  },
  TouchableOpacity_I235_535_235_443: {
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
