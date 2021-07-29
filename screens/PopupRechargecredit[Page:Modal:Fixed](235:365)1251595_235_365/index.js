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
      <View style={styles.View_299_1033}>
        <View style={styles.View_309_103}>
          <View style={styles.View_I309_103_309_97} />
          <View style={styles.View_I309_103_309_565}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/49df/39cf/f26df1aefca8f0c2a4f8c351e99c3873"
              }}
              style={styles.ImageBackground_I309_103_309_461}
            />
            <View style={styles.View_I309_103_309_462}>
              <View style={styles.View_I309_103_309_463} />
              <View style={styles.View_I309_103_309_464} />
            </View>
          </View>
        </View>
        <View style={styles.View_243_85}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cf2f/b2d8/88b432f4435dd128381919008c5ad902"
            }}
            style={styles.ImageBackground_243_86}
          />
          <View style={styles.View_243_87}>
            <View style={styles.View_243_88} />
            <View style={styles.View_243_89} />
            <View style={styles.View_243_90} />
          </View>
        </View>
        <View style={styles.View_235_369}>
          <View style={styles.View_235_370}>
            <Text style={styles.Text_235_370}>Code de recharge</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("100%") },
  View_299_1033: {
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
  View_309_103: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("105.88235294117648%"),
    minHeight: hp("105.88235294117648%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-2.941176470588235%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I309_103_309_97: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("105.88235294117648%"),
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
  View_I309_103_309_565: {
    flexGrow: 1,
    width: wp("8.51063829787234%"),
    height: hp("18.823529411764707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.31914893617021%"),
    top: hp("14.11764705882353%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I309_103_309_461: {
    width: wp("8.51063829787234%"),
    height: hp("18.823529411764707%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I309_103_309_462: {
    width: wp("2.963610405617572%"),
    height: hp("6.554813945994657%"),
    top: hp("5.925867417279411%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.679248566323139%")
  },
  View_I309_103_309_463: {
    width: wp("2.9636091374336404%"),
    height: hp("6.55480609220617%"),
    top: hp("0.00007180606617396279%"),
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
  View_I309_103_309_464: {
    width: wp("2.9636091374336404%"),
    height: hp("6.55480609220617%"),
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
  View_243_85: {
    width: wp("10.106382978723403%"),
    minWidth: wp("10.106382978723403%"),
    height: hp("22.35294117647059%"),
    minHeight: hp("22.35294117647059%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.4468085106383%"),
    top: hp("41.76470588235294%")
  },
  ImageBackground_243_86: {
    width: wp("10.106382978723403%"),
    height: hp("22.35294117647059%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_243_87: {
    width: wp("4.39736285108201%"),
    minWidth: wp("4.39736285108201%"),
    height: hp("7.246743370504941%"),
    minHeight: hp("7.246743370504941%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.659574468085097%"),
    top: hp("7.058823529411761%")
  },
  View_243_88: {
    width: wp("2.215625123774752%"),
    height: hp("4.900445938110352%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.181617249833778%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_243_89: {
    width: wp("2.0957321562665574%"),
    height: hp("4.635293062995462%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.301642235289222%"),
    top: hp("2.611443014705891%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_243_90: {
    width: wp("4.255137544997195%"),
    height: hp("1.5966385953566606%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.961569393382355%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_235_369: {
    width: wp("71.01063829787235%"),
    height: hp("27.058823529411764%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.712765957446808%"),
    top: hp("39.411764705882355%"),
    backgroundColor: "rgba(245, 243, 250, 1)"
  },
  View_235_370: {
    width: wp("33.244680851063826%"),
    minWidth: wp("33.244680851063826%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.457446808510638%"),
    top: hp("7.647058823529406%"),
    justifyContent: "flex-start"
  },
  Text_235_370: {
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
