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
      <View style={styles.View_299_1001}>
        <View style={styles.View_309_124}>
          <View style={styles.View_I309_124_309_97} />
          <View style={styles.View_I309_124_309_565}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/49df/39cf/f26df1aefca8f0c2a4f8c351e99c3873"
              }}
              style={styles.ImageBackground_I309_124_309_461}
            />
            <View style={styles.View_I309_124_309_462}>
              <View style={styles.View_I309_124_309_463} />
              <View style={styles.View_I309_124_309_464} />
            </View>
          </View>
        </View>
        <View style={styles.View_245_353}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cf2f/b2d8/88b432f4435dd128381919008c5ad902"
            }}
            style={styles.ImageBackground_245_354}
          />
          <View style={styles.View_245_355}>
            <View style={styles.View_245_356} />
            <View style={styles.View_245_357} />
            <View style={styles.View_245_358} />
          </View>
        </View>
        <View style={styles.View_245_359}>
          <View style={styles.View_245_360}>
            <Text style={styles.Text_245_360}>Numéro d’abonnement</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("100%") },
  View_299_1001: {
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
  View_309_124: {
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
  View_I309_124_309_97: {
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
  View_I309_124_309_565: {
    flexGrow: 1,
    width: wp("8.51063829787234%"),
    height: hp("11.03448275862069%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.31914893617021%"),
    top: hp("8.275862068965518%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I309_124_309_461: {
    width: wp("8.51063829787234%"),
    height: hp("11.03448275862069%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I309_124_309_462: {
    width: wp("2.963610405617572%"),
    height: hp("3.8424771407554887%"),
    top: hp("3.473784348060345%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6793134973404307%")
  },
  View_I309_124_309_463: {
    width: wp("2.9636091374336404%"),
    height: hp("3.842472536810513%"),
    top: hp("0.00004209321120640652%"),
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
  View_I309_124_309_464: {
    width: wp("2.9636091374336404%"),
    height: hp("3.842472536810513%"),
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
  View_245_353: {
    width: wp("10.106382978723403%"),
    minWidth: wp("10.106382978723403%"),
    height: hp("13.10344827586207%"),
    minHeight: hp("13.10344827586207%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.4468085106383%"),
    top: hp("29.655172413793103%")
  },
  ImageBackground_245_354: {
    flexGrow: 1,
    width: wp("10.106382978723403%"),
    height: hp("13.10344827586207%"),
    minHeight: hp("13.10344827586207%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_245_355: {
    width: wp("4.39736285108201%"),
    minWidth: wp("4.39736285108201%"),
    height: hp("4.248090941330482%"),
    minHeight: hp("4.248090941330482%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.659574468085097%"),
    top: hp("4.137931034482762%")
  },
  View_245_356: {
    flexGrow: 1,
    width: wp("2.2156241092276066%"),
    height: hp("2.8726765205120217%"),
    minHeight: hp("2.8726765205120217%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1816821808510696%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_245_357: {
    flexGrow: 1,
    width: wp("2.0957321562665574%"),
    height: hp("2.7172407610663054%"),
    minHeight: hp("2.7172407610663054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.301674700797875%"),
    top: hp("1.5308459051724128%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_245_358: {
    flexGrow: 1,
    width: wp("4.255137544997195%"),
    height: hp("0.9359605558987322%"),
    minHeight: hp("0.9359605558987322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.7360924030172384%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_245_359: {
    flexGrow: 1,
    width: wp("71.01063829787235%"),
    height: hp("15.862068965517242%"),
    minHeight: hp("15.862068965517242%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.712765957446808%"),
    top: hp("28.27586206896552%"),
    backgroundColor: "rgba(245, 243, 250, 1)"
  },
  View_245_360: {
    width: wp("42.28723404255319%"),
    minWidth: wp("42.28723404255319%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.457446808510638%"),
    top: hp("4.482758620689655%"),
    justifyContent: "flex-start"
  },
  Text_245_360: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
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
