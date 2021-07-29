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
      <View style={styles.View_296_114}>
        <View style={styles.View_235_411}>
          <View style={styles.View_235_412}>
            <Text style={styles.Text_235_412}>10 000 F CFA</Text>
          </View>
        </View>
        <View style={styles.View_235_413}>
          <View style={styles.View_235_414}>
            <Text style={styles.Text_235_414}>2000 F CFA</Text>
          </View>
        </View>
        <View style={styles.View_235_415}>
          <View style={styles.View_235_416}>
            <Text style={styles.Text_235_416}>2500 F CFA</Text>
          </View>
        </View>
        <View style={styles.View_235_417}>
          <View style={styles.View_235_418}>
            <Text style={styles.Text_235_418}>1000 F CFA</Text>
          </View>
        </View>
        <View style={styles.View_235_419}>
          <View style={styles.View_235_420}>
            <Text style={styles.Text_235_420}>5000 F CFA</Text>
          </View>
        </View>
        <View style={styles.View_235_421}>
          <View style={styles.View_235_422}>
            <Text style={styles.Text_235_422}>500 F CFA</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_243_94}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("235_456"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cf2f/b2d8/88b432f4435dd128381919008c5ad902"
            }}
            style={styles.ImageBackground_243_95}
          />
          <View style={styles.View_243_96}>
            <View style={styles.View_243_97} />
            <View style={styles.View_243_98} />
            <View style={styles.View_243_99} />
          </View>
        </TouchableOpacity>
        <View style={styles.View_243_100}>
          <View style={styles.View_235_451}>
            <Text style={styles.Text_235_451}>Montant</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_320_121}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b20/083a/327769472b9b89f0a6cec424cbab9711"
          }}
          style={styles.ImageBackground_I320_121_299_868}
        />
      </View>
      <View style={styles.View_235_556}>
        <View style={styles.View_I235_556_235_442} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6a77/bfd5/5a019baa384fae5a332a73f261f2ddcf"
          }}
          style={styles.ImageBackground_I235_556_296_77}
        />
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1190/c544/51124fd14f4901a34be6c043c2818798"
          }}
          style={styles.TouchableOpacity_I235_556_235_443}
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
  View_296_114: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("47.26775956284153%"),
    minHeight: hp("47.26775956284153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("53.825136612021865%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_235_411: {
    width: wp("44.22515300994224%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.78547311336437%"),
    top: hp("34.42622950819671%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_235_412: {
    width: wp("26.595744680851062%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.776595744680847%"),
    top: hp("2.868852459016395%"),
    justifyContent: "center"
  },
  Text_235_412: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.28,
    textTransform: "none"
  },
  View_235_413: {
    width: wp("44.22515300994224%"),
    height: hp("7.5136612021857925%"),
    minHeight: hp("7.5136612021857925%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.9893617021276597%"),
    top: hp("25.81967213114754%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_235_414: {
    width: wp("22.872340425531913%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.638297872340425%"),
    top: hp("2.868852459016395%"),
    justifyContent: "center"
  },
  Text_235_414: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.28,
    textTransform: "none"
  },
  View_235_415: {
    width: wp("44.22515300994224%"),
    height: hp("7.5136612021857925%"),
    minHeight: hp("7.5136612021857925%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.78547311336437%"),
    top: hp("25.81967213114754%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_235_416: {
    width: wp("22.872340425531913%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.638297872340416%"),
    top: hp("2.868852459016395%"),
    justifyContent: "center"
  },
  Text_235_416: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.28,
    textTransform: "none"
  },
  View_235_417: {
    width: wp("44.22515300994224%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.78547311336437%"),
    top: hp("17.076502732240428%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_235_418: {
    width: wp("22.872340425531913%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.638297872340416%"),
    top: hp("2.868852459016395%"),
    justifyContent: "center"
  },
  Text_235_418: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.28,
    textTransform: "none"
  },
  View_235_419: {
    width: wp("44.22515300994224%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.9893617021276597%"),
    top: hp("34.42622950819671%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_235_420: {
    width: wp("22.872340425531913%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.638297872340425%"),
    top: hp("2.868852459016395%"),
    justifyContent: "center"
  },
  Text_235_420: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.28,
    textTransform: "none"
  },
  View_235_421: {
    width: wp("44.22515300994224%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.9893617021276597%"),
    top: hp("17.076502732240428%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_235_422: {
    width: wp("20.212765957446805%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.96808510638298%"),
    top: hp("2.868852459016395%"),
    justifyContent: "center"
  },
  Text_235_422: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.28,
    textTransform: "none"
  },
  TouchableOpacity_243_94: {
    width: wp("10.106382978723403%"),
    minWidth: wp("10.106382978723403%"),
    height: hp("5.191256830601093%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.1063829787234%"),
    top: hp("4.234972677595621%")
  },
  ImageBackground_243_95: {
    width: wp("10.106382978723403%"),
    minWidth: wp("10.106382978723403%"),
    height: hp("5.191256830601093%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_243_96: {
    width: wp("4.39736285108201%"),
    minWidth: wp("4.39736285108201%"),
    height: hp("1.6829868483413113%"),
    minHeight: hp("1.6829868483413113%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.659574468085097%"),
    top: hp("1.63934426229509%")
  },
  View_243_97: {
    width: wp("2.2156256310483244%"),
    minWidth: wp("2.2156256310483244%"),
    height: hp("1.1380814463714433%"),
    minHeight: hp("1.1380814463714433%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.181617249833792%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_243_98: {
    width: wp("2.0957339317240615%"),
    minWidth: wp("2.0957339317240615%"),
    height: hp("1.0765015753240534%"),
    minHeight: hp("1.0765015753240534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3016097697805975%"),
    top: hp("0.6064826673497166%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_243_99: {
    width: wp("4.255137544997195%"),
    minWidth: wp("4.255137544997195%"),
    height: hp("0.3708040453697163%"),
    minHeight: hp("0.3708040453697163%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.6877961705942539%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_243_100: {
    width: wp("77.18799672228225%"),
    height: hp("6.284153005464481%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.9893617021276597%"),
    top: hp("3.6885245901639294%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_235_451: {
    width: wp("72.07446808510637%"),
    minWidth: wp("72.07446808510637%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.659574468085106%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_235_451: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_320_121: {
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
  ImageBackground_I320_121_299_868: {
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
  View_235_556: {
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
  View_I235_556_235_442: {
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
  ImageBackground_I235_556_296_77: {
    flexGrow: 1,
    width: wp("6.914893617021277%"),
    height: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.914893617021277%"),
    top: hp("10.51912568306011%")
  },
  TouchableOpacity_I235_556_235_443: {
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
