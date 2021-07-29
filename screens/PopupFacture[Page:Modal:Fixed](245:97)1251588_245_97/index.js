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
      <View style={styles.View_303_90}>
        <View style={styles.View_309_132}>
          <View style={styles.View_I309_132_309_97} />
          <View style={styles.View_I309_132_309_565}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/49df/39cf/f26df1aefca8f0c2a4f8c351e99c3873"
              }}
              style={styles.ImageBackground_I309_132_309_461}
            />
            <View style={styles.View_I309_132_309_462}>
              <View style={styles.View_I309_132_309_463} />
              <View style={styles.View_I309_132_309_464} />
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_305_93}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("245_258"))
          }
        >
          <View style={styles.View_303_95} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4d9/68a0/c8dbc3425f164ee45495706d0ab808fd"
            }}
            style={styles.ImageBackground_245_166}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_305_92}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("245_239"))
          }
        >
          <View style={styles.View_303_94} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/023c/6dbe/cb3c87d83c3f27520cc8416e2f2c1b47"
            }}
            style={styles.ImageBackground_245_168}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_305_91}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("245_220"))
          }
        >
          <View style={styles.View_303_93} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9c91/2c40/b65432e2798ab5a883d25ab3dd724794"
            }}
            style={styles.ImageBackground_245_171}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_305_90}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("245_201"))
          }
        >
          <View style={styles.View_303_92} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4a57/489d/289868a13730b5bf748c6cbdae335b24"
            }}
            style={styles.ImageBackground_245_174}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("100%") },
  View_303_90: {
    width: wp("100%"),
    height: hp("100%"),
    minHeight: hp("100%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_309_132: {
    width: wp("100.26666666666667%"),
    minWidth: wp("100.26666666666667%"),
    height: hp("100%"),
    minHeight: hp("100%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I309_132_309_97: {
    flexGrow: 1,
    width: wp("100.26666666666667%"),
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
  View_I309_132_309_565: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("10.666666666666668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.53333333333333%"),
    top: hp("8%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I309_132_309_461: {
    width: wp("8.533333333333333%"),
    height: hp("10.666666666666668%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I309_132_309_462: {
    width: wp("2.971513366699219%"),
    height: hp("3.7143945693969727%"),
    top: hp("3.357991536458334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6864583333333343%")
  },
  View_I309_132_309_463: {
    width: wp("2.9715120951334635%"),
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
  View_I309_132_309_464: {
    width: wp("2.9715120951334635%"),
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
  TouchableOpacity_305_93: {
    width: wp("37.06666666666666%"),
    minWidth: wp("37.06666666666666%"),
    height: hp("30%"),
    minHeight: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.6%"),
    top: hp("57.333333333333336%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_303_95: {
    width: wp("37.06666666666666%"),
    height: hp("30%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(245, 243, 250, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  ImageBackground_245_166: {
    width: wp("17.066666666666666%"),
    height: hp("17.333333333333336%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.133333333333333%"),
    top: hp("6.333333333333336%"),
    resizeMode: "cover"
  },
  TouchableOpacity_305_92: {
    width: wp("38.666666666666664%"),
    minWidth: wp("38.666666666666664%"),
    height: hp("30%"),
    minHeight: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.333333333333334%"),
    top: hp("57.333333333333336%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_303_94: {
    width: wp("38.666666666666664%"),
    height: hp("30%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(245, 243, 250, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  ImageBackground_245_168: {
    width: wp("16.266666666666666%"),
    height: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.200000000000001%"),
    top: hp("6.999999999999993%"),
    resizeMode: "cover"
  },
  TouchableOpacity_305_91: {
    width: wp("37.06666666666666%"),
    minWidth: wp("37.06666666666666%"),
    height: hp("30%"),
    minHeight: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.6%"),
    top: hp("22.333333333333332%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_303_93: {
    width: wp("37.06666666666666%"),
    height: hp("30%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(245, 243, 250, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  ImageBackground_245_171: {
    width: wp("23.733333333333334%"),
    height: hp("22.333333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666664%"),
    top: hp("3.666666666666668%"),
    resizeMode: "cover"
  },
  TouchableOpacity_305_90: {
    width: wp("38.666666666666664%"),
    minWidth: wp("38.666666666666664%"),
    height: hp("31.333333333333336%"),
    minHeight: hp("31.333333333333336%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.333333333333334%"),
    top: hp("22.333333333333332%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_303_92: {
    width: wp("38.666666666666664%"),
    height: hp("31.333333333333336%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(245, 243, 250, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  ImageBackground_245_174: {
    width: wp("17.066666666666666%"),
    height: hp("17.333333333333336%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.933333333333332%"),
    top: hp("7%"),
    resizeMode: "cover"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
