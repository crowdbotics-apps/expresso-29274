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
      <View style={styles.View_203_278}>
        <TouchableOpacity
          style={styles.TouchableOpacity_210_45}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("245_179"))
          }
        >
          <View style={styles.View_5_13}>
            <Text style={styles.Text_5_13}>Paiement Services</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/71f4/7c5a/4bb3657a899c2efd249a3c779e03acf2"
            }}
            style={styles.ImageBackground_203_263}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_210_38}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("235_578"))
          }
        >
          <View style={styles.View_203_271}>
            <Text style={styles.Text_203_271}>Assistance</Text>
          </View>
          <View style={styles.View_203_270}>
            <Text style={styles.Text_203_270}>Transfert bonus</Text>
          </View>
          <View style={styles.View_203_269}>
            <Text style={styles.Text_203_269}>Historique transaction</Text>
          </View>
          <View style={styles.View_203_268}>
            <Text style={styles.Text_203_268}>Envoyer de L’argent</Text>
          </View>
          <View style={styles.View_203_266}>
            <Text style={styles.Text_203_266}>Votre solde</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a5d8/4623/fe5cd6267a403810d3fbd0cdb1f142c1"
            }}
            style={styles.ImageBackground_203_274}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_210_44}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("245_97"))
          }
        >
          <View style={styles.View_203_257}>
            <Text style={styles.Text_203_257}>Payer Facture</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a4e2/bd5d/f64d12513fa2859acf2b0527f8e2b0a9"
            }}
            style={styles.ImageBackground_203_258}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_210_43}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("245_42"))
          }
        >
          <View style={styles.View_203_227}>
            <Text style={styles.Text_203_227}>Forfait Deal bi</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1cd6/8a47/e8b846980f8d1acb53ae3d015c88e719"
            }}
            style={styles.ImageBackground_203_252}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_210_42}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("235_468"))
          }
        >
          <View style={styles.View_203_241}>
            <Text style={styles.Text_203_241}>Forfait Buur</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b9aa/4a32/78ca96ea53798d7a74a72c5437b4844d"
            }}
            style={styles.ImageBackground_203_242}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_210_41}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("235_288"))
          }
        >
          <View style={styles.View_203_223}>
            <Text style={styles.Text_203_223}>Achat Internet</Text>
          </View>
          <View style={styles.View_203_234}>
            <View style={styles.View_203_248} />
            <View style={styles.View_203_249} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a8ae/1ea5/b157c0d9d42fbebba4b8c90f98e926ea"
              }}
              style={styles.ImageBackground_203_237}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_210_39}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("235_353"))
          }
        >
          <View style={styles.View_203_211}>
            <Text style={styles.Text_203_211}>Achat Credit</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0ae9/c373/a40b8bf6d0e4bc1c4d1a9d80bd511ce1"
            }}
            style={styles.ImageBackground_203_220}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.View_201_178}>
        <View style={styles.View_287_77}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8b68/e701/cf46081262f680c7e3cac87eb3ccace1"
            }}
            style={styles.ImageBackground_293_180}
          />
        </View>
        <View style={styles.View_293_177}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4481/ce88/76f9aac90e5565bda4908ade38a697fe"
            }}
            style={styles.ImageBackground_293_178}
          />
        </View>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_201_106}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("251_402"))
        }
      >
        <View style={styles.View_293_181}>
          <View style={styles.View_201_88} />
          <View style={styles.View_201_86}>
            <Text style={styles.Text_201_86}>40 650 f</Text>
          </View>
          <View style={styles.View_201_82}>
            <Text style={styles.Text_201_82}>489 sms</Text>
          </View>
          <View style={styles.View_201_74}>
            <Text style={styles.Text_201_74}>450 min</Text>
          </View>
          <View style={styles.View_201_85}>
            <Text style={styles.Text_201_85}>EXP: 01 01 2022 a 00h 00min</Text>
          </View>
          <View style={styles.View_201_81}>
            <Text style={styles.Text_201_81}>EXP: 01 01 2022 a 00h 00min</Text>
          </View>
          <View style={styles.View_201_79}>
            <Text style={styles.Text_201_79}>EXP: 01 01 2022 a 00h 00min</Text>
          </View>
          <View style={styles.View_201_87}>
            <Text style={styles.Text_201_87}>Bonus</Text>
          </View>
          <View style={styles.View_201_83}>
            <Text style={styles.Text_201_83}>Sms</Text>
          </View>
          <View style={styles.View_201_73}>
            <Text style={styles.Text_201_73}>Minutes d’appel</Text>
          </View>
        </View>
        <View style={styles.View_210_47}>
          <View style={styles.View_203_184}>
            <Text style={styles.Text_203_184}>EXP: 01 01 2022 a 00h 00min</Text>
          </View>
          <View style={styles.View_201_70}>
            <Text style={styles.Text_201_70}>Internet 14Gb 240Mb</Text>
          </View>
        </View>
        <View style={styles.View_210_46}>
          <View style={styles.View_203_185}>
            <Text style={styles.Text_203_185}>EXP: 01 01 2022 a 00h 00min</Text>
          </View>
          <View style={styles.View_201_69}>
            <Text style={styles.Text_201_69}>Credit principale 10 500 CFA</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5270/099c/6bca90697b4f975999b6d3fd91aa478b"
          }}
          style={styles.ImageBackground_212_51}
        />
        <View style={styles.View_201_105}>
          <Text style={styles.Text_201_105}>CONSOMATIONS</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.View_201_68}>
        <View style={styles.View_1_3} />
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1190/c544/51124fd14f4901a34be6c043c2818798"
          }}
          style={styles.TouchableOpacity_210_8}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("293_182"))
          }
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e87e/c932/92921f898b25dd9a744d5889a8c8736c"
          }}
          style={styles.ImageBackground_212_49}
        />
        <View style={styles.View_201_183}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9de3/5321/459878aaed418deb6d637b5e2d46ad2d"
            }}
            style={styles.ImageBackground_201_181}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8718/4a8d/b8950a3f56585d4d0fc27b5c96cf9ca1"
            }}
            style={styles.ImageBackground_201_180}
          />
        </View>
        <View style={styles.View_32_5}>
          <Text style={styles.Text_32_5}>Bonjour Mbaye babacar</Text>
        </View>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(245, 243, 250, 1)" },
  View_2: { height: hp("113.3879781420765%") },
  View_203_278: {
    width: wp("100%"),
    height: hp("29.098360655737704%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("78.96174863387978%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  TouchableOpacity_210_45: {
    width: wp("21.808510638297875%"),
    height: hp("12.021857923497267%"),
    minHeight: hp("12.021857923497267%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.7340425531915%"),
    top: hp("14.480874316939904%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_5_13: {
    width: wp("19.193965830701462%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.4325081033909441%"),
    top: hp("7.103825136612016%"),
    justifyContent: "flex-start"
  },
  Text_5_13: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.24,
    textTransform: "none"
  },
  ImageBackground_203_263: {
    width: wp("10.316759474734043%"),
    height: hp("4.781420765027322%"),
    minHeight: hp("4.781420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.687827252327125%"),
    top: hp("1.229508196721298%")
  },
  TouchableOpacity_210_38: {
    width: wp("43.88297872340425%"),
    height: hp("12.021857923497267%"),
    minHeight: hp("12.021857923497267%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.191489361702125%"),
    top: hp("14.480874316939904%"),
    backgroundColor: "rgba(105, 98, 153, 1)"
  },
  View_203_271: {
    width: wp("16.48936170212766%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9255319148936216%"),
    top: hp("8.606557377049171%"),
    justifyContent: "flex-start"
  },
  Text_203_271: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.45,
    textTransform: "none"
  },
  View_203_270: {
    width: wp("22.074468085106382%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9255319148936216%"),
    top: hp("6.83060109289616%"),
    justifyContent: "flex-start"
  },
  Text_203_270: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.45,
    textTransform: "none"
  },
  View_203_269: {
    width: wp("29.521276595744684%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1914893617021285%"),
    top: hp("5.054644808743163%"),
    justifyContent: "flex-start"
  },
  Text_203_269: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.45,
    textTransform: "none"
  },
  View_203_268: {
    width: wp("27.127659574468083%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1914893617021285%"),
    top: hp("3.2786885245901516%"),
    justifyContent: "flex-start"
  },
  Text_203_268: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.45,
    textTransform: "none"
  },
  View_203_266: {
    width: wp("17.02127659574468%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9255319148936216%"),
    top: hp("1.5027322404371546%"),
    justifyContent: "flex-start"
  },
  Text_203_266: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.45,
    textTransform: "none"
  },
  ImageBackground_203_274: {
    width: wp("7.6005895087059505%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.143715716422875%"),
    top: hp("-0.546448087431699%")
  },
  TouchableOpacity_210_44: {
    width: wp("21.808510638297875%"),
    height: hp("12.021857923497267%"),
    minHeight: hp("12.021857923497267%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.723404255319149%"),
    top: hp("14.480874316939904%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_203_257: {
    width: wp("19.193965830701462%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3297872340425525%"),
    top: hp("7.103825136612016%"),
    justifyContent: "flex-start"
  },
  Text_203_257: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.24,
    textTransform: "none"
  },
  ImageBackground_203_258: {
    width: wp("9.308510638297872%"),
    height: hp("4.781420765027322%"),
    minHeight: hp("4.781420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.326618600398936%"),
    top: hp("1.229508196721298%")
  },
  TouchableOpacity_210_43: {
    width: wp("21.808510638297875%"),
    height: hp("12.021857923497267%"),
    minHeight: hp("12.021857923497267%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.7340425531915%"),
    top: hp("0.9562841530054698%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_203_227: {
    width: wp("19.193973947078625%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.192587994514625%"),
    top: hp("7.103825136612016%"),
    justifyContent: "flex-start"
  },
  Text_203_227: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.24,
    textTransform: "none"
  },
  ImageBackground_203_252: {
    width: wp("7.917517804084941%"),
    height: hp("4.781420765027322%"),
    minHeight: hp("4.781420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.043651824301847%"),
    top: hp("1.0928961748633839%")
  },
  TouchableOpacity_210_42: {
    width: wp("21.54255319148936%"),
    height: hp("12.021857923497267%"),
    minHeight: hp("12.021857923497267%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.329787234042556%"),
    top: hp("0.9562841530054698%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_203_241: {
    width: wp("19.193965830701462%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3269952002991943%"),
    top: hp("7.103825136612016%"),
    justifyContent: "flex-start"
  },
  Text_203_241: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.24,
    textTransform: "none"
  },
  ImageBackground_203_242: {
    width: wp("9.308510638297872%"),
    height: hp("4.781421807294335%"),
    minHeight: hp("4.781421807294335%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.201951047207444%"),
    top: hp("1.0928961748633839%")
  },
  TouchableOpacity_210_41: {
    width: wp("21.54255319148936%"),
    height: hp("12.021857923497267%"),
    minHeight: hp("12.021857923497267%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.393617021276594%"),
    top: hp("0.9562841530054698%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_203_223: {
    width: wp("18.93850083046771%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1794719290226077%"),
    top: hp("7.103825136612016%"),
    justifyContent: "flex-start"
  },
  Text_203_223: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.24,
    textTransform: "none"
  },
  View_203_234: {
    width: wp("9.308510638297872%"),
    height: hp("4.781420765027322%"),
    top: hp("1.0928961748633839%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.248571517619684%")
  },
  View_203_248: {
    width: wp("2.6595744680851063%"),
    height: hp("3.5860655737704916%"),
    minHeight: hp("3.5860655737704916%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.648936170212764%"),
    top: hp("1.195355191256823%"),
    backgroundColor: "rgba(105, 98, 153, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_203_249: {
    width: wp("2.6595744680851063%"),
    height: hp("4.648603637361787%"),
    minHeight: hp("4.648603637361787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.191489361702125%"),
    top: hp("0%"),
    backgroundColor: "rgba(105, 98, 153, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  ImageBackground_203_237: {
    width: wp("2.5791287422180176%"),
    height: hp("2.3405815082821038%"),
    minHeight: hp("2.3405815082821038%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.340114572660525%")
  },
  TouchableOpacity_210_39: {
    width: wp("21.808510638297875%"),
    height: hp("12.021857923497267%"),
    minHeight: hp("12.021857923497267%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.723404255319149%"),
    top: hp("0.9562841530054698%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_203_211: {
    width: wp("19.19396785979575%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3297872340425525%"),
    top: hp("7.103825136612016%"),
    justifyContent: "flex-start"
  },
  Text_203_211: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.24,
    textTransform: "none"
  },
  ImageBackground_203_220: {
    width: wp("10.638297872340425%"),
    height: hp("4.781420765027322%"),
    minHeight: hp("4.781420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.5287462599734045%"),
    top: hp("1.0928961748633839%")
  },
  View_201_178: {
    width: wp("100%"),
    height: hp("15.437158469945356%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("63.387978142076506%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_287_77: {
    width: wp("75.2659574468085%"),
    minWidth: wp("75.2659574468085%"),
    height: hp("15.710382513661203%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.2659574468085%"),
    top: hp("-0.1366120218579283%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_293_180: {
    width: wp("67.81914893617021%"),
    height: hp("12.704918032786885%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.723404255319153%"),
    top: hp("1.5027322404371688%"),
    resizeMode: "cover",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_293_177: {
    width: wp("75.2659574468085%"),
    height: hp("15.710382513661203%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-0.1366120218579283%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_293_178: {
    width: wp("67.81914893617021%"),
    height: hp("12.704918032786885%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.723404255319149%"),
    top: hp("1.5027322404371688%"),
    resizeMode: "cover",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  TouchableOpacity_201_106: {
    width: wp("100%"),
    height: hp("38.79781420765027%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("24.59016393442623%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_293_181: {
    width: wp("92.5531914893617%"),
    minWidth: wp("92.5531914893617%"),
    height: hp("21.85792349726776%"),
    minHeight: hp("21.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.723404255319149%"),
    top: hp("16.120218579234972%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_201_88: {
    flexGrow: 1,
    width: wp("92.5531914893617%"),
    height: hp("21.85792349726776%"),
    minHeight: hp("21.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_201_86: {
    width: wp("21.27659574468085%"),
    minWidth: wp("21.27659574468085%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67.08075340757978%"),
    top: hp("14.48087431693989%"),
    justifyContent: "flex-start"
  },
  Text_201_86: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_201_82: {
    width: wp("22.074468085106382%"),
    minWidth: wp("22.074468085106382%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.20360029504654%"),
    top: hp("8.060109289617486%"),
    justifyContent: "flex-start"
  },
  Text_201_82: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_201_74: {
    width: wp("21.01063829787234%"),
    minWidth: wp("21.01063829787234%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67.24762612200797%"),
    top: hp("1.639344262295083%"),
    justifyContent: "flex-start"
  },
  Text_201_74: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_201_85: {
    width: wp("35.638297872340424%"),
    minWidth: wp("35.638297872340424%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.723404255319149%"),
    top: hp("18.442622950819676%"),
    justifyContent: "flex-start"
  },
  Text_201_85: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_201_81: {
    width: wp("35.638297872340424%"),
    minWidth: wp("35.638297872340424%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.723404255319149%"),
    top: hp("12.021857923497272%"),
    justifyContent: "flex-start"
  },
  Text_201_81: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_201_79: {
    width: wp("35.638297872340424%"),
    minWidth: wp("35.638297872340424%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.723404255319149%"),
    top: hp("5.601092896174862%"),
    justifyContent: "flex-start"
  },
  Text_201_79: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_201_87: {
    width: wp("13.829787234042554%"),
    minWidth: wp("13.829787234042554%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.723404255319149%"),
    top: hp("15.027322404371581%"),
    justifyContent: "flex-start"
  },
  Text_201_87: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_201_83: {
    width: wp("9.574468085106384%"),
    minWidth: wp("9.574468085106384%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.723404255319149%"),
    top: hp("8.606557377049178%"),
    justifyContent: "flex-start"
  },
  Text_201_83: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_201_73: {
    width: wp("33.77659574468085%"),
    minWidth: wp("33.77659574468085%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.723404255319149%"),
    top: hp("2.185792349726775%"),
    justifyContent: "flex-start"
  },
  Text_201_73: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_210_47: {
    width: wp("45.47872340425532%"),
    height: hp("9.836065573770492%"),
    minHeight: hp("9.836065573770492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.797872340425535%"),
    top: hp("4.78142076502732%"),
    backgroundColor: "rgba(105, 98, 153, 1)"
  },
  View_203_184: {
    width: wp("32.180851063829785%"),
    minWidth: wp("32.180851063829785%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7234042553191458%"),
    top: hp("7.513661202185794%"),
    justifyContent: "flex-start"
  },
  Text_203_184: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_201_70: {
    width: wp("30.851063829787233%"),
    minWidth: wp("30.851063829787233%"),
    minHeight: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.457446808510632%"),
    top: hp("0.9562841530054662%"),
    justifyContent: "flex-start"
  },
  Text_201_70: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_210_46: {
    width: wp("45.47872340425532%"),
    height: hp("9.836065573770492%"),
    minHeight: hp("9.836065573770492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.723404255319149%"),
    top: hp("4.78142076502732%"),
    backgroundColor: "rgba(105, 98, 153, 1)"
  },
  View_203_185: {
    width: wp("32.180851063829785%"),
    minWidth: wp("32.180851063829785%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.723404255319149%"),
    top: hp("7.240437158469952%"),
    justifyContent: "flex-start"
  },
  Text_203_185: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_201_69: {
    width: wp("28.191489361702125%"),
    minWidth: wp("28.191489361702125%"),
    minHeight: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.723404255319149%"),
    top: hp("0.9562841530054662%"),
    justifyContent: "flex-start"
  },
  Text_201_69: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_212_51: {
    width: wp("3.477439474552236%"),
    minWidth: wp("3.477439474552236%"),
    height: hp("1.4723334807515795%"),
    minHeight: hp("1.4723334807515795%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.8269328665226%"),
    top: hp("0.6830601092896167%")
  },
  View_201_105: {
    width: wp("32.97872340425532%"),
    minWidth: wp("32.97872340425532%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.461799783909575%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_201_105: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_201_68: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("23.08743169398907%"),
    minHeight: hp("23.08743169398907%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_3: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("19.262295081967213%"),
    minHeight: hp("19.262295081967213%"),
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
  TouchableOpacity_210_8: {
    width: wp("11.170212765957446%"),
    minWidth: wp("11.170212765957446%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.4468085106383%"),
    top: hp("9.01639344262295%")
  },
  ImageBackground_212_49: {
    width: wp("30.319148936170215%"),
    minWidth: wp("30.319148936170215%"),
    height: hp("15.573770491803279%"),
    minHeight: hp("15.573770491803279%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.840425531914896%"),
    top: hp("6.693989071038252%")
  },
  View_201_183: {
    width: wp("26.086462304947222%"),
    minWidth: wp("26.086462304947222%"),
    height: hp("13.399603588333548%"),
    minHeight: hp("13.399603588333548%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.96808510638298%"),
    top: hp("7.786885245901639%")
  },
  ImageBackground_201_181: {
    width: wp("26.086462304947222%"),
    minWidth: wp("26.086462304947222%"),
    height: hp("13.399603588333548%"),
    minHeight: hp("13.399603588333548%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_201_180: {
    width: wp("26.086462304947222%"),
    minWidth: wp("26.086462304947222%"),
    height: hp("13.399603588333548%"),
    minHeight: hp("13.399603588333548%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_32_5: {
    width: wp("20.47872340425532%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.851063829787234%"),
    top: hp("7.650273224043716%"),
    justifyContent: "flex-start"
  },
  Text_32_5: {
    color: "rgba(255, 255, 255, 1)",
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
