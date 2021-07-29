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
      <View style={styles.View_299_1030}>
        <View style={styles.View_309_130}>
          <View style={styles.View_I309_130_309_97} />
          <View style={styles.View_I309_130_309_565}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/49df/39cf/f26df1aefca8f0c2a4f8c351e99c3873"
              }}
              style={styles.ImageBackground_I309_130_309_461}
            />
            <View style={styles.View_I309_130_309_462}>
              <View style={styles.View_I309_130_309_463} />
              <View style={styles.View_I309_130_309_464} />
            </View>
          </View>
        </View>
        <View style={styles.View_245_184}>
          <View style={styles.View_245_199}>
            <Text style={styles.Text_245_199}>Paiement En ligne</Text>
          </View>
        </View>
        <View style={styles.View_245_187}>
          <View style={styles.View_245_198}>
            <Text style={styles.Text_245_198}>Participer a un Dons</Text>
          </View>
        </View>
        <View style={styles.View_245_190}>
          <View style={styles.View_245_192}>
            <Text style={styles.Text_245_192}>Payer un Marchant</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("100%") },
  View_299_1030: {
    width: wp("98.40425531914893%"),
    minWidth: wp("98.40425531914893%"),
    height: hp("100%"),
    minHeight: hp("100%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_309_130: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("100%"),
    minHeight: hp("100%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.7978723404255319%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I309_130_309_97: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("100%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_I309_130_309_565: {
    flexGrow: 1,
    width: wp("8.51063829787234%"),
    height: hp("10.666666666666668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.31914893617021%"),
    top: hp("8%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I309_130_309_461: {
    width: wp("8.51063829787234%"),
    height: hp("10.666666666666668%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I309_130_309_462: {
    width: wp("2.963610405617572%"),
    height: hp("3.7143945693969727%"),
    top: hp("3.357991536458334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6793134973404165%")
  },
  View_I309_130_309_463: {
    width: wp("2.9636091374336404%"),
    height: hp("3.714390118916829%"),
    top: hp("0.00004069010416607455%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(105, 98, 153, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_I309_130_309_464: {
    width: wp("2.9636091374336404%"),
    height: hp("3.714390118916829%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(105, 98, 153, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_245_184: {
    flexGrow: 1,
    width: wp("42.819148936170215%"),
    height: hp("22.666666666666664%"),
    minHeight: hp("22.666666666666664%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.851063829787234%"),
    top: hp("54.666666666666664%"),
    backgroundColor: "rgba(245, 243, 250, 1)"
  },
  View_245_199: {
    width: wp("23.138297872340424%"),
    minHeight: hp("16.333333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.446808510638297%"),
    top: hp("3.6666666666666714%"),
    justifyContent: "flex-start"
  },
  Text_245_199: {
    color: "rgba(105, 98, 153, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4,
    textTransform: "none"
  },
  View_245_187: {
    flexGrow: 1,
    width: wp("42.819148936170215%"),
    height: hp("22.666666666666664%"),
    minHeight: hp("22.666666666666664%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.59574468085106%"),
    top: hp("28.000000000000004%"),
    backgroundColor: "rgba(245, 243, 250, 1)"
  },
  View_245_198: {
    width: wp("27.659574468085108%"),
    minHeight: hp("16.333333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.446808510638306%"),
    top: hp("3.6666666666666607%"),
    justifyContent: "flex-start"
  },
  Text_245_198: {
    color: "rgba(105, 98, 153, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4,
    textTransform: "none"
  },
  View_245_190: {
    flexGrow: 1,
    width: wp("42.819148936170215%"),
    height: hp("22.666666666666664%"),
    minHeight: hp("22.666666666666664%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.851063829787234%"),
    top: hp("28.000000000000004%"),
    backgroundColor: "rgba(245, 243, 250, 1)"
  },
  View_245_192: {
    width: wp("27.925531914893615%"),
    minHeight: hp("16.333333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.446808510638297%"),
    top: hp("3.6666666666666607%"),
    justifyContent: "flex-start"
  },
  Text_245_192: {
    color: "rgba(105, 98, 153, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
