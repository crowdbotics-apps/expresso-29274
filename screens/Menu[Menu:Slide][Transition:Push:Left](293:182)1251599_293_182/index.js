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
      <View style={styles.View_283_79}>
        <View style={styles.View_299_1035}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a87c/79f5/8f105fdfea9377f9a2a951ce7561507a"
            }}
            style={styles.ImageBackground_245_178}
          />
          <View style={styles.View_235_667}>
            <Text style={styles.Text_235_667}>EXP: 01 01 2022 a 00h 00min</Text>
          </View>
          <View style={styles.View_235_668}>
            <Text style={styles.Text_235_668}>Minute d’appel</Text>
          </View>
          <View style={styles.View_235_671}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d888/8285/4877b7ede6e9def64f6cbb99c1decaf4"
              }}
              style={styles.ImageBackground_235_670}
            />
            <View style={styles.View_235_672} />
            <View style={styles.View_235_673} />
            <View style={styles.View_235_674} />
          </View>
          <View style={styles.View_235_677}>
            <Text style={styles.Text_235_677}>EXP: 01 01 2022 a 00h 00min</Text>
          </View>
          <View style={styles.View_235_678}>
            <Text style={styles.Text_235_678}>Minute d’appel</Text>
          </View>
          <View style={styles.View_235_681}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d888/8285/4877b7ede6e9def64f6cbb99c1decaf4"
              }}
              style={styles.ImageBackground_235_680}
            />
            <View style={styles.View_235_682} />
            <View style={styles.View_235_683} />
            <View style={styles.View_235_684} />
          </View>
          <View style={styles.View_235_687}>
            <Text style={styles.Text_235_687}>EXP: 01 01 2022 a 00h 00min</Text>
          </View>
          <View style={styles.View_235_688}>
            <Text style={styles.Text_235_688}>Minute d’appel</Text>
          </View>
          <View style={styles.View_235_691}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d888/8285/4877b7ede6e9def64f6cbb99c1decaf4"
              }}
              style={styles.ImageBackground_235_690}
            />
            <View style={styles.View_235_692} />
            <View style={styles.View_235_693} />
            <View style={styles.View_235_694} />
          </View>
          <View style={styles.View_235_697}>
            <Text style={styles.Text_235_697}>EXP: 01 01 2022 a 00h 00min</Text>
          </View>
          <View style={styles.View_235_698}>
            <Text style={styles.Text_235_698}>Minute d’appel</Text>
          </View>
          <View style={styles.View_235_701}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d888/8285/4877b7ede6e9def64f6cbb99c1decaf4"
              }}
              style={styles.ImageBackground_235_700}
            />
            <View style={styles.View_235_702} />
            <View style={styles.View_235_703} />
            <View style={styles.View_235_704} />
          </View>
          <View style={styles.View_235_707}>
            <Text style={styles.Text_235_707}>EXP: 01 01 2022 a 00h 00min</Text>
          </View>
          <View style={styles.View_235_708}>
            <Text style={styles.Text_235_708}>Minute d’appel</Text>
          </View>
          <View style={styles.View_235_711}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d888/8285/4877b7ede6e9def64f6cbb99c1decaf4"
              }}
              style={styles.ImageBackground_235_710}
            />
            <View style={styles.View_235_712} />
            <View style={styles.View_235_713} />
            <View style={styles.View_235_714} />
          </View>
          <View style={styles.View_235_717}>
            <Text style={styles.Text_235_717}>EXP: 01 01 2022 a 00h 00min</Text>
          </View>
          <View style={styles.View_235_718}>
            <Text style={styles.Text_235_718}>Minute d’appel</Text>
          </View>
          <View style={styles.View_235_721}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d888/8285/4877b7ede6e9def64f6cbb99c1decaf4"
              }}
              style={styles.ImageBackground_235_720}
            />
            <View style={styles.View_235_722} />
            <View style={styles.View_235_723} />
            <View style={styles.View_235_724} />
          </View>
          <View style={styles.View_283_80}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7dbc/c3da/e7ef992632a6b716ed1444c918d0fea8"
              }}
              style={styles.ImageBackground_235_277}
            />
            <View style={styles.View_235_283}>
              <View style={styles.View_235_281} />
              <View style={styles.View_235_282} />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("115.43715846994536%") },
  View_283_79: {
    width: wp("65.69148936170212%"),
    height: hp("115.43715846994536%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_299_1035: {
    width: wp("54.78723404255319%"),
    minWidth: wp("54.78723404255319%"),
    height: hp("87.8415300546448%"),
    minHeight: hp("87.8415300546448%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.585106382978723%"),
    top: hp("13.797814207650273%")
  },
  ImageBackground_245_178: {
    width: wp("18.882978723404257%"),
    height: hp("7.786885245901639%"),
    minHeight: hp("7.786885245901639%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.5531914893617%"),
    top: hp("80.05464480874316%"),
    resizeMode: "cover"
  },
  View_235_667: {
    width: wp("28.45744680851064%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("29.508196721311474%"),
    justifyContent: "flex-start"
  },
  Text_235_667: {
    color: "rgba(105, 98, 153, 1)",
    fontSize: 6,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_235_668: {
    width: wp("24.46808510638298%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("26.502732240437158%"),
    justifyContent: "flex-start"
  },
  Text_235_668: {
    color: "rgba(105, 98, 153, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_235_671: {
    width: wp("5.053191489361701%"),
    minWidth: wp("5.053191489361701%"),
    height: hp("2.5956284153005464%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.93617021276596%"),
    top: hp("27.459016393442628%")
  },
  ImageBackground_235_670: {
    width: wp("5.053191489361701%"),
    height: hp("2.5956284153005464%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_235_672: {
    width: wp("1.1078130691609482%"),
    height: hp("0.5690405929023451%"),
    minHeight: hp("0.5690405929023451%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4206283244680904%"),
    top: hp("0.8196721311475414%"),
    backgroundColor: "rgba(105, 98, 153, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_235_673: {
    width: wp("1.047865000176937%"),
    height: hp("0.5382517647873508%"),
    minHeight: hp("0.5382517647873508%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.480624584441486%"),
    top: hp("1.1229134648223962%"),
    backgroundColor: "rgba(105, 98, 153, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_235_674: {
    width: wp("2.1275687724985977%"),
    height: hp("0.18540202268485814%"),
    minHeight: hp("0.18540202268485814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3297872340425485%"),
    top: hp("1.1635702164446684%"),
    backgroundColor: "rgba(105, 98, 153, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_235_677: {
    width: wp("28.45744680851064%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("39.754098360655746%"),
    justifyContent: "flex-start"
  },
  Text_235_677: {
    color: "rgba(105, 98, 153, 1)",
    fontSize: 6,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_235_678: {
    width: wp("24.46808510638298%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("36.74863387978142%"),
    justifyContent: "flex-start"
  },
  Text_235_678: {
    color: "rgba(105, 98, 153, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_235_681: {
    width: wp("5.053191489361701%"),
    minWidth: wp("5.053191489361701%"),
    height: hp("2.5956284153005464%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.93617021276596%"),
    top: hp("37.70491803278688%")
  },
  ImageBackground_235_680: {
    width: wp("5.053191489361701%"),
    height: hp("2.5956284153005464%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_235_682: {
    width: wp("1.1078130691609482%"),
    height: hp("0.5690405929023451%"),
    minHeight: hp("0.5690405929023451%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4206283244680904%"),
    top: hp("0.8196721311475414%"),
    backgroundColor: "rgba(105, 98, 153, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_235_683: {
    width: wp("1.047865000176937%"),
    height: hp("0.5382517647873508%"),
    minHeight: hp("0.5382517647873508%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.480624584441486%"),
    top: hp("1.1229134648224033%"),
    backgroundColor: "rgba(105, 98, 153, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_235_684: {
    width: wp("2.1275687724985977%"),
    height: hp("0.18540202268485814%"),
    minHeight: hp("0.18540202268485814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3297872340425485%"),
    top: hp("1.1635702164446755%"),
    backgroundColor: "rgba(105, 98, 153, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_235_687: {
    width: wp("28.45744680851064%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("50%"),
    justifyContent: "flex-start"
  },
  Text_235_687: {
    color: "rgba(105, 98, 153, 1)",
    fontSize: 6,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_235_688: {
    width: wp("24.46808510638298%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("46.99453551912568%"),
    justifyContent: "flex-start"
  },
  Text_235_688: {
    color: "rgba(105, 98, 153, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_235_691: {
    width: wp("5.053191489361701%"),
    minWidth: wp("5.053191489361701%"),
    height: hp("2.5956284153005464%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.93617021276596%"),
    top: hp("47.950819672131146%")
  },
  ImageBackground_235_690: {
    width: wp("5.053191489361701%"),
    height: hp("2.5956284153005464%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_235_692: {
    width: wp("1.1078130691609482%"),
    height: hp("0.5690405929023451%"),
    minHeight: hp("0.5690405929023451%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4206283244680904%"),
    top: hp("0.8196721311475414%"),
    backgroundColor: "rgba(105, 98, 153, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_235_693: {
    width: wp("1.047865000176937%"),
    height: hp("0.5382517647873508%"),
    minHeight: hp("0.5382517647873508%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.480624584441486%"),
    top: hp("1.1229134648224033%"),
    backgroundColor: "rgba(105, 98, 153, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_235_694: {
    width: wp("2.1275687724985977%"),
    height: hp("0.18540202268485814%"),
    minHeight: hp("0.18540202268485814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3297872340425485%"),
    top: hp("1.1635702164446684%"),
    backgroundColor: "rgba(105, 98, 153, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_235_697: {
    width: wp("28.45744680851064%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("60.24590163934427%"),
    justifyContent: "flex-start"
  },
  Text_235_697: {
    color: "rgba(105, 98, 153, 1)",
    fontSize: 6,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_235_698: {
    width: wp("24.46808510638298%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("57.240437158469945%"),
    justifyContent: "flex-start"
  },
  Text_235_698: {
    color: "rgba(105, 98, 153, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_235_701: {
    width: wp("5.053191489361701%"),
    minWidth: wp("5.053191489361701%"),
    height: hp("2.5956284153005464%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.93617021276596%"),
    top: hp("58.1967213114754%")
  },
  ImageBackground_235_700: {
    width: wp("5.053191489361701%"),
    height: hp("2.5956284153005464%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_235_702: {
    width: wp("1.107809010972368%"),
    height: hp("0.56904267743637%"),
    minHeight: hp("0.56904267743637%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4206283244680904%"),
    top: hp("0.8196721311475414%"),
    backgroundColor: "rgba(105, 98, 153, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_235_703: {
    width: wp("1.047865000176937%"),
    height: hp("0.5382517647873508%"),
    minHeight: hp("0.5382517647873508%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.480624584441486%"),
    top: hp("1.1229134648224033%"),
    backgroundColor: "rgba(105, 98, 153, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_235_704: {
    width: wp("2.1275687724985977%"),
    height: hp("0.18540202268485814%"),
    minHeight: hp("0.18540202268485814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3297872340425485%"),
    top: hp("1.1635702164446826%"),
    backgroundColor: "rgba(105, 98, 153, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_235_707: {
    width: wp("28.45744680851064%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("70.49180327868852%"),
    justifyContent: "flex-start"
  },
  Text_235_707: {
    color: "rgba(105, 98, 153, 1)",
    fontSize: 6,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_235_708: {
    width: wp("24.46808510638298%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("67.4863387978142%"),
    justifyContent: "flex-start"
  },
  Text_235_708: {
    color: "rgba(105, 98, 153, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_235_711: {
    width: wp("5.053191489361701%"),
    minWidth: wp("5.053191489361701%"),
    height: hp("2.5956284153005464%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.93617021276596%"),
    top: hp("68.44262295081967%")
  },
  ImageBackground_235_710: {
    width: wp("5.053191489361701%"),
    height: hp("2.5956284153005464%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_235_712: {
    width: wp("1.1078049527837874%"),
    height: hp("0.5690447619703949%"),
    minHeight: hp("0.5690447619703949%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4206283244680904%"),
    top: hp("0.8196721311475414%"),
    backgroundColor: "rgba(105, 98, 153, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_235_713: {
    width: wp("1.047867029271227%"),
    height: hp("0.5382507225203383%"),
    minHeight: hp("0.5382507225203383%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.480624584441486%"),
    top: hp("1.1229134648224033%"),
    backgroundColor: "rgba(105, 98, 153, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_235_714: {
    width: wp("2.1275687724985977%"),
    height: hp("0.18540202268485814%"),
    minHeight: hp("0.18540202268485814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3297872340425485%"),
    top: hp("1.1635702164446684%"),
    backgroundColor: "rgba(105, 98, 153, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_235_717: {
    width: wp("28.45744680851064%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("19.262295081967213%"),
    justifyContent: "flex-start"
  },
  Text_235_717: {
    color: "rgba(105, 98, 153, 1)",
    fontSize: 6,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_235_718: {
    width: wp("24.46808510638298%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16.256830601092897%"),
    justifyContent: "flex-start"
  },
  Text_235_718: {
    color: "rgba(105, 98, 153, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_235_721: {
    width: wp("5.053191489361701%"),
    minWidth: wp("5.053191489361701%"),
    height: hp("2.5956284153005464%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.93617021276596%"),
    top: hp("17.213114754098363%")
  },
  ImageBackground_235_720: {
    width: wp("5.053191489361701%"),
    height: hp("2.5956284153005464%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_235_722: {
    width: wp("1.1078130691609482%"),
    height: hp("0.5690405929023451%"),
    minHeight: hp("0.5690405929023451%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4206283244680904%"),
    top: hp("0.8196721311475414%"),
    backgroundColor: "rgba(105, 98, 153, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_235_723: {
    width: wp("1.0478690583655175%"),
    height: hp("0.5382496802533259%"),
    minHeight: hp("0.5382496802533259%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.480624584441486%"),
    top: hp("1.1229134648224068%"),
    backgroundColor: "rgba(105, 98, 153, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_235_724: {
    width: wp("2.1275687724985977%"),
    height: hp("0.18540202268485814%"),
    minHeight: hp("0.18540202268485814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3297872340425485%"),
    top: hp("1.163570216444672%"),
    backgroundColor: "rgba(105, 98, 153, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_283_80: {
    width: wp("11.170212765957446%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.61702127659574%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_235_277: {
    width: wp("11.170212765957446%"),
    minWidth: wp("11.170212765957446%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_235_283: {
    width: wp("3.8897387524868576%"),
    minWidth: wp("3.8897387524868576%"),
    height: hp("1.9980094471915824%"),
    minHeight: hp("1.9980094471915824%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.516534034242028%"),
    top: hp("1.8063070995560118%")
  },
  View_235_281: {
    width: wp("3.88973520157185%"),
    minWidth: wp("3.88973520157185%"),
    height: hp("1.9980081443578168%"),
    minHeight: hp("1.9980081443578168%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(105, 98, 153, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_235_282: {
    width: wp("3.8897372306661406%"),
    minWidth: wp("3.8897372306661406%"),
    height: hp("1.9980071020908046%"),
    minHeight: hp("1.9980071020908046%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(105, 98, 153, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
