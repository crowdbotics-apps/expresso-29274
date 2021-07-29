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
      <View style={styles.View_299_1032}>
        <View style={styles.View_309_106}>
          <View style={styles.View_I309_106_309_97} />
          <View style={styles.View_I309_106_309_565}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/49df/39cf/f26df1aefca8f0c2a4f8c351e99c3873"
              }}
              style={styles.ImageBackground_I309_106_309_461}
            />
            <View style={styles.View_I309_106_309_462}>
              <View style={styles.View_I309_106_309_463} />
              <View style={styles.View_I309_106_309_464} />
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_235_333}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("234_166"))
          }
        >
          <View style={styles.View_235_334}>
            <Text style={styles.Text_235_334}>E-Money</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_235_335}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("227_3"))
          }
        >
          <View style={styles.View_235_336}>
            <Text style={styles.Text_235_336}>Credit principale</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("100%") },
  View_299_1032: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("100%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_309_106: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("100%"),
    minHeight: hp("100%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I309_106_309_97: {
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
  View_I309_106_309_565: {
    flexGrow: 1,
    width: wp("8.51063829787234%"),
    height: hp("17.77777777777778%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.31914893617021%"),
    top: hp("13.333333333333334%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I309_106_309_461: {
    width: wp("8.51063829787234%"),
    height: hp("17.77777777777778%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I309_106_309_462: {
    width: wp("2.963610405617572%"),
    height: hp("6.190657615661621%"),
    top: hp("5.5966525607638875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.679248566323139%")
  },
  View_I309_106_309_463: {
    width: wp("2.9636091374336404%"),
    height: hp("6.1906501981947155%"),
    top: hp("0.00006781684027856727%"),
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
  View_I309_106_309_464: {
    width: wp("2.9636091374336404%"),
    height: hp("6.1906501981947155%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.00006493101729176942%"),
    backgroundColor: "rgba(105, 98, 153, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  TouchableOpacity_235_333: {
    width: wp("40.42553191489361%"),
    minWidth: wp("40.42553191489361%"),
    height: hp("19.444444444444446%"),
    minHeight: hp("19.444444444444446%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.72340425531915%"),
    top: hp("43.333333333333336%"),
    backgroundColor: "rgba(245, 243, 250, 1)"
  },
  View_235_334: {
    width: wp("15.957446808510639%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.234042553191486%"),
    top: hp("3.3333333333333286%"),
    justifyContent: "flex-start"
  },
  Text_235_334: {
    color: "rgba(105, 98, 153, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_235_335: {
    width: wp("40.42553191489361%"),
    minWidth: wp("40.42553191489361%"),
    height: hp("19.444444444444446%"),
    minHeight: hp("19.444444444444446%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.24468085106383%"),
    top: hp("43.333333333333336%"),
    backgroundColor: "rgba(245, 243, 250, 1)"
  },
  View_235_336: {
    width: wp("30.319148936170215%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.053191489361701%"),
    top: hp("3.3333333333333286%"),
    justifyContent: "flex-start"
  },
  Text_235_336: {
    color: "rgba(105, 98, 153, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
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
