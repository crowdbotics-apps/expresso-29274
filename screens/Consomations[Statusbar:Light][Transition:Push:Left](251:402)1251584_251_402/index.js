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
      <View style={styles.View_252_197}>
        <View style={styles.View_252_135}>
          <View style={styles.View_252_134}>
            <View style={styles.View_252_187}>
              <View style={styles.View_252_174}>
                <Text style={styles.Text_252_174}>5 min / 300 f</Text>
              </View>
              <View style={styles.View_252_179}>
                <Text style={styles.Text_252_179}>Appel vers 70 777 70 77</Text>
              </View>
            </View>
            <View style={styles.View_252_191}>
              <View style={styles.View_252_192}>
                <Text style={styles.Text_252_192}>5 min / 300 f</Text>
              </View>
              <View style={styles.View_252_193}>
                <Text style={styles.Text_252_193}>Appel vers 70 777 70 77</Text>
              </View>
            </View>
            <View style={styles.View_252_194}>
              <View style={styles.View_252_195}>
                <Text style={styles.Text_252_195}>5 min / 300 f</Text>
              </View>
              <View style={styles.View_252_196}>
                <Text style={styles.Text_252_196}>Appel vers 70 777 70 77</Text>
              </View>
            </View>
            <View style={styles.View_252_188}>
              <View style={styles.View_252_189}>
                <Text style={styles.Text_252_189}>5 min / 300 f</Text>
              </View>
              <View style={styles.View_252_190}>
                <Text style={styles.Text_252_190}>Appel vers 70 777 70 77</Text>
              </View>
            </View>
            <View style={styles.View_252_186}>
              <View style={styles.View_252_176}>
                <Text style={styles.Text_252_176}>5 f</Text>
              </View>
              <View style={styles.View_252_180}>
                <Text style={styles.Text_252_180}>Sms vers 70 700 70 70</Text>
              </View>
            </View>
            <View style={styles.View_252_185}>
              <View style={styles.View_252_178}>
                <Text style={styles.Text_252_178}>50 min</Text>
              </View>
              <View style={styles.View_252_181}>
                <Text style={styles.Text_252_181}>Appel vers 70 700 70 70</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_252_125}>
            <Text style={styles.Text_252_125}>Historique</Text>
          </View>
        </View>
        <View style={styles.View_252_139}>
          <View style={styles.View_252_140}>
            <View style={styles.View_252_141}>
              <View style={styles.View_252_142}>
                <Text style={styles.Text_252_142}>460 MB</Text>
              </View>
              <View style={styles.View_252_143}>
                <Text style={styles.Text_252_143}>700 MB</Text>
              </View>
              <View style={styles.View_252_144}>
                <Text style={styles.Text_252_144}>609 MB</Text>
              </View>
              <View style={styles.View_252_145}>
                <Text style={styles.Text_252_145}>1,1 GB</Text>
              </View>
              <View style={styles.View_252_146}>
                <Text style={styles.Text_252_146}>720 MB</Text>
              </View>
              <View style={styles.View_252_147}>
                <Text style={styles.Text_252_147}>600 MB</Text>
              </View>
              <View style={styles.View_252_148}>
                <Text style={styles.Text_252_148}>dim</Text>
              </View>
              <View style={styles.View_252_149} />
              <View style={styles.View_252_150}>
                <Text style={styles.Text_252_150}>jeu</Text>
              </View>
              <View style={styles.View_252_151} />
              <View style={styles.View_252_152}>
                <Text style={styles.Text_252_152}>ven</Text>
              </View>
              <View style={styles.View_252_153} />
              <View style={styles.View_252_154}>
                <Text style={styles.Text_252_154}>sam</Text>
              </View>
              <View style={styles.View_252_155} />
              <View style={styles.View_252_156} />
              <View style={styles.View_252_157}>
                <Text style={styles.Text_252_157}>mar</Text>
              </View>
              <View style={styles.View_252_158} />
              <View style={styles.View_252_159}>
                <Text style={styles.Text_252_159}>mer</Text>
              </View>
              <View style={styles.View_252_160} />
              <View style={styles.View_252_161}>
                <Text style={styles.Text_252_161}>800 MB</Text>
              </View>
              <View style={styles.View_252_162}>
                <Text style={styles.Text_252_162}>lun</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_252_163}>
            <Text style={styles.Text_252_163}>Consomation internet</Text>
          </View>
        </View>
        <View style={styles.View_252_138}>
          <View style={styles.View_251_484}>
            <View style={styles.View_251_485}>
              <Text style={styles.Text_251_485}>
                EXP: 01 01 2022 a 00h 00min
              </Text>
            </View>
            <View style={styles.View_251_486}>
              <Text style={styles.Text_251_486}>309 sms</Text>
            </View>
            <View style={styles.View_251_487}>
              <Text style={styles.Text_251_487}>Sms tout réseaux</Text>
            </View>
          </View>
          <View style={styles.View_252_78}>
            <View style={styles.View_252_79}>
              <Text style={styles.Text_252_79}>
                EXP: 01 01 2022 a 00h 00min
              </Text>
            </View>
            <View style={styles.View_252_80}>
              <Text style={styles.Text_252_80}>190 sms</Text>
            </View>
            <View style={styles.View_252_81}>
              <Text style={styles.Text_252_81}>Sms vers Expresso</Text>
            </View>
          </View>
          <View style={styles.View_252_82}>
            <View style={styles.View_252_83}>
              <Text style={styles.Text_252_83}>
                EXP: 01 01 2022 a 00h 00min
              </Text>
            </View>
            <View style={styles.View_252_84}>
              <Text style={styles.Text_252_84}>150 min</Text>
            </View>
            <View style={styles.View_252_85}>
              <Text style={styles.Text_252_85}>Min d’appel tout rése…</Text>
            </View>
          </View>
          <View style={styles.View_252_86}>
            <View style={styles.View_252_87}>
              <Text style={styles.Text_252_87}>
                EXP: 01 01 2022 a 00h 00min
              </Text>
            </View>
            <View style={styles.View_252_88}>
              <Text style={styles.Text_252_88}>300 min</Text>
            </View>
            <View style={styles.View_252_89}>
              <Text style={styles.Text_252_89}>Min d’appel vers Expr…</Text>
            </View>
          </View>
          <View style={styles.View_252_90}>
            <View style={styles.View_252_91}>
              <Text style={styles.Text_252_91}>
                EXP: 01 01 2022 a 00h 00min
              </Text>
            </View>
            <View style={styles.View_252_92}>
              <Text style={styles.Text_252_92}>30 650 CFA</Text>
            </View>
            <View style={styles.View_252_93}>
              <Text style={styles.Text_252_93}>Bonus tout réseaux</Text>
            </View>
          </View>
          <View style={styles.View_252_94}>
            <View style={styles.View_252_95}>
              <Text style={styles.Text_252_95}>
                EXP: 01 01 2022 a 00h 00min
              </Text>
            </View>
            <View style={styles.View_252_96}>
              <Text style={styles.Text_252_96}>10 000 CFA</Text>
            </View>
            <View style={styles.View_252_97}>
              <Text style={styles.Text_252_97}>Bonus Expresso</Text>
            </View>
          </View>
          <View style={styles.View_251_468}>
            <View style={styles.View_251_469}>
              <Text style={styles.Text_251_469}>
                EXP: 01 01 2022 a 00h 00min
              </Text>
            </View>
            <View style={styles.View_251_470}>
              <Text style={styles.Text_251_470}>Internet 14Gb 240Mb</Text>
            </View>
          </View>
          <View style={styles.View_251_471}>
            <View style={styles.View_251_472}>
              <Text style={styles.Text_251_472}>
                EXP: 01 01 2022 a 00h 00min
              </Text>
            </View>
            <View style={styles.View_251_473}>
              <Text style={styles.Text_251_473}>
                Credit principale 10 500 CFA
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_319_952}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b20/083a/327769472b9b89f0a6cec424cbab9711"
          }}
          style={styles.ImageBackground_I319_952_299_868}
        />
      </View>
      <View style={styles.View_251_449}>
        <View style={styles.View_I251_449_235_442} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6a77/bfd5/5a019baa384fae5a332a73f261f2ddcf"
          }}
          style={styles.ImageBackground_I251_449_296_77}
        />
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1190/c544/51124fd14f4901a34be6c043c2818798"
          }}
          style={styles.TouchableOpacity_I251_449_235_443}
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
  View_252_197: {
    width: wp("100%"),
    height: hp("142.34972677595627%"),
    minHeight: hp("142.34972677595627%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("44.80874316939891%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_252_135: {
    width: wp("92.02127659574468%"),
    minWidth: wp("92.02127659574468%"),
    height: hp("39.61748633879781%"),
    minHeight: hp("39.61748633879781%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.9893617021276597%"),
    top: hp("99.72677595628416%")
  },
  View_252_134: {
    width: wp("92.02127659574468%"),
    height: hp("35.24590163934426%"),
    minHeight: hp("35.24590163934426%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.3715846994535354%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_252_187: {
    width: wp("84.04255319148936%"),
    minWidth: wp("84.04255319148936%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.9893617021276597%"),
    top: hp("18.579234972677597%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_252_174: {
    width: wp("24.46808510638298%"),
    minWidth: wp("24.46808510638298%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59.574468085106375%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_252_174: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_252_179: {
    width: wp("46.808510638297875%"),
    minWidth: wp("46.808510638297875%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_252_179: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_252_191: {
    width: wp("84.04255319148936%"),
    minWidth: wp("84.04255319148936%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.9893617021276597%"),
    top: hp("23.770491803278702%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_252_192: {
    width: wp("24.46808510638298%"),
    minWidth: wp("24.46808510638298%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59.574468085106375%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_252_192: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_252_193: {
    width: wp("46.808510638297875%"),
    minWidth: wp("46.808510638297875%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_252_193: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_252_194: {
    width: wp("84.04255319148936%"),
    minWidth: wp("84.04255319148936%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.9893617021276597%"),
    top: hp("28.961748633879807%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_252_195: {
    width: wp("24.46808510638298%"),
    minWidth: wp("24.46808510638298%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59.574468085106375%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_252_195: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_252_196: {
    width: wp("46.808510638297875%"),
    minWidth: wp("46.808510638297875%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_252_196: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_252_188: {
    width: wp("84.04255319148936%"),
    minWidth: wp("84.04255319148936%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.9893617021276597%"),
    top: hp("13.38797814207652%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_252_189: {
    width: wp("24.46808510638298%"),
    minWidth: wp("24.46808510638298%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59.574468085106375%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_252_189: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_252_190: {
    width: wp("46.808510638297875%"),
    minWidth: wp("46.808510638297875%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_252_190: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_252_186: {
    width: wp("84.04255319148936%"),
    minWidth: wp("84.04255319148936%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.9893617021276597%"),
    top: hp("8.196721311475414%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_252_176: {
    width: wp("5.053191489361701%"),
    minWidth: wp("5.053191489361701%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.98936170212765%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_252_176: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_252_180: {
    width: wp("42.819148936170215%"),
    minWidth: wp("42.819148936170215%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_252_180: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_252_185: {
    width: wp("84.04255319148936%"),
    minWidth: wp("84.04255319148936%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.9893617021276597%"),
    top: hp("3.005464480874309%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_252_178: {
    width: wp("12.5%"),
    minWidth: wp("12.5%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.54255319148936%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_252_178: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_252_181: {
    width: wp("46.54255319148936%"),
    minWidth: wp("46.54255319148936%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_252_181: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_252_125: {
    width: wp("22.340425531914892%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_252_125: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_252_139: {
    width: wp("92.02127659574468%"),
    minWidth: wp("92.02127659574468%"),
    height: hp("39.61748633879781%"),
    minHeight: hp("39.61748633879781%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.9893617021276597%"),
    top: hp("56.284153005464475%")
  },
  View_252_140: {
    width: wp("92.02127659574468%"),
    height: hp("35.24590163934426%"),
    minHeight: hp("35.24590163934426%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.371584699453564%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_252_141: {
    width: wp("82.7127659574468%"),
    minWidth: wp("82.7127659574468%"),
    height: hp("31.420765027322407%"),
    minHeight: hp("31.420765027322407%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.787234042553191%"),
    top: hp("3.005464480874309%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_252_142: {
    width: wp("9.042553191489363%"),
    minWidth: wp("9.042553191489363%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.67021276595746%"),
    top: hp("16.530054644808743%"),
    justifyContent: "flex-start"
  },
  Text_252_142: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 7,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_252_143: {
    width: wp("9.042553191489363%"),
    minWidth: wp("9.042553191489363%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.73404255319149%"),
    top: hp("6.693989071038246%"),
    justifyContent: "flex-start"
  },
  Text_252_143: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 7,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_252_144: {
    width: wp("9.042553191489363%"),
    minWidth: wp("9.042553191489363%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.70212765957447%"),
    top: hp("11.612021857923494%"),
    justifyContent: "flex-start"
  },
  Text_252_144: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 7,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_252_145: {
    width: wp("7.712765957446808%"),
    minWidth: wp("7.712765957446808%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.40425531914893%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_252_145: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 7,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_252_146: {
    width: wp("9.042553191489363%"),
    minWidth: wp("9.042553191489363%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60.904255319148945%"),
    top: hp("4.644808743169392%"),
    justifyContent: "flex-start"
  },
  Text_252_146: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 7,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_252_147: {
    width: wp("9.042553191489363%"),
    minWidth: wp("9.042553191489363%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.96808510638298%"),
    top: hp("11.612021857923494%"),
    justifyContent: "flex-start"
  },
  Text_252_147: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 7,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_252_148: {
    width: wp("6.117021276595745%"),
    minWidth: wp("6.117021276595745%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("28.825136612021865%"),
    justifyContent: "flex-start"
  },
  Text_252_148: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_252_149: {
    width: wp("2.6595744680851063%"),
    height: hp("8.469945355191257%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.86170212765958%"),
    top: hp("18.989071038251353%"),
    backgroundColor: "rgba(105, 98, 153, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_252_150: {
    width: wp("5.053191489361701%"),
    minWidth: wp("5.053191489361701%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.56382978723404%"),
    top: hp("28.825136612021865%"),
    justifyContent: "flex-start"
  },
  Text_252_150: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_252_151: {
    width: wp("2.6595744680851063%"),
    height: hp("13.661202185792352%"),
    minHeight: hp("13.661202185792352%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.8936170212766%"),
    top: hp("13.797814207650276%"),
    backgroundColor: "rgba(105, 98, 153, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_252_152: {
    width: wp("6.117021276595745%"),
    minWidth: wp("6.117021276595745%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.734042553191486%"),
    top: hp("28.825136612021865%"),
    justifyContent: "flex-start"
  },
  Text_252_152: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_252_153: {
    width: wp("2.6595744680851063%"),
    height: hp("25.273224043715846%"),
    minHeight: hp("25.273224043715846%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.595744680851055%"),
    top: hp("2.185792349726782%"),
    backgroundColor: "rgba(105, 98, 153, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_252_154: {
    width: wp("6.914893617021277%"),
    minWidth: wp("6.914893617021277%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61.968085106382986%"),
    top: hp("28.825136612021865%"),
    justifyContent: "flex-start"
  },
  Text_252_154: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_252_155: {
    width: wp("2.6595744680851063%"),
    height: hp("20.62841530054645%"),
    minHeight: hp("20.62841530054645%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.09574468085107%"),
    top: hp("6.830601092896174%"),
    backgroundColor: "rgba(105, 98, 153, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_252_156: {
    width: wp("2.6595744680851063%"),
    height: hp("13.661202185792352%"),
    minHeight: hp("13.661202185792352%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.893617021276597%"),
    top: hp("13.797814207650276%"),
    backgroundColor: "rgba(105, 98, 153, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_252_157: {
    width: wp("6.648936170212766%"),
    minWidth: wp("6.648936170212766%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.031914893617024%"),
    top: hp("28.825136612021865%"),
    justifyContent: "flex-start"
  },
  Text_252_157: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_252_158: {
    width: wp("2.6595744680851063%"),
    height: hp("18.579234972677597%"),
    minHeight: hp("18.579234972677597%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.925531914893615%"),
    top: hp("8.879781420765013%"),
    backgroundColor: "rgba(105, 98, 153, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_252_159: {
    width: wp("6.648936170212766%"),
    minWidth: wp("6.648936170212766%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.79787234042554%"),
    top: hp("28.825136612021865%"),
    justifyContent: "flex-start"
  },
  Text_252_159: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_252_160: {
    width: wp("2.6595744680851063%"),
    height: hp("22.404371584699454%"),
    minHeight: hp("22.404371584699454%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1914893617021285%"),
    top: hp("5.054644808743177%"),
    backgroundColor: "rgba(105, 98, 153, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_252_161: {
    width: wp("9.042553191489363%"),
    minWidth: wp("9.042553191489363%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.868852459016395%"),
    justifyContent: "flex-start"
  },
  Text_252_161: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 7,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_252_162: {
    width: wp("5.053191489361701%"),
    minWidth: wp("5.053191489361701%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8617021276595747%"),
    top: hp("28.825136612021865%"),
    justifyContent: "flex-start"
  },
  Text_252_162: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_252_163: {
    width: wp("46.01063829787234%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_252_163: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_252_138: {
    width: wp("92.02127659574468%"),
    height: hp("50%"),
    minHeight: hp("50%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.9893617021276597%"),
    top: hp("2.4590163934426243%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_251_484: {
    width: wp("45.21277001563539%"),
    height: hp("11.748633879781421%"),
    minHeight: hp("11.748633879781421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.808510638297875%"),
    top: hp("38.25136612021858%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_251_485: {
    width: wp("33.244680851063826%"),
    minWidth: wp("33.244680851063826%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1276595744680833%"),
    top: hp("8.743169398907114%"),
    justifyContent: "flex-start"
  },
  Text_251_485: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 7,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_251_486: {
    width: wp("26.595744680851062%"),
    minWidth: wp("26.595744680851062%"),
    minHeight: hp("4.508196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.659574468085097%"),
    top: hp("3.961748633879779%"),
    justifyContent: "flex-start"
  },
  Text_251_486: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 20,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_251_487: {
    width: wp("28.723404255319153%"),
    minWidth: wp("28.723404255319153%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1276595744680833%"),
    top: hp("1.2295081967213122%"),
    justifyContent: "flex-start"
  },
  Text_251_487: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_252_78: {
    width: wp("45.21276595744681%"),
    height: hp("11.748633879781421%"),
    minHeight: hp("11.748633879781421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("38.25136612021858%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_252_79: {
    width: wp("33.244680851063826%"),
    minWidth: wp("33.244680851063826%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.127659574468085%"),
    top: hp("8.743169398907114%"),
    justifyContent: "flex-start"
  },
  Text_252_79: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 7,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_252_80: {
    width: wp("26.329787234042552%"),
    minWidth: wp("26.329787234042552%"),
    minHeight: hp("4.508196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3936170212765955%"),
    top: hp("3.961748633879779%"),
    justifyContent: "flex-start"
  },
  Text_252_80: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 20,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_252_81: {
    width: wp("30.851063829787233%"),
    minWidth: wp("30.851063829787233%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.127659574468085%"),
    top: hp("1.2295081967213122%"),
    justifyContent: "flex-start"
  },
  Text_252_81: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_252_82: {
    width: wp("45.21277001563539%"),
    height: hp("11.748633879781421%"),
    minHeight: hp("11.748633879781421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.808510638297875%"),
    top: hp("24.86338797814207%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_252_83: {
    width: wp("33.244680851063826%"),
    minWidth: wp("33.244680851063826%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1276595744680833%"),
    top: hp("8.743169398907114%"),
    justifyContent: "flex-start"
  },
  Text_252_83: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 7,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_252_84: {
    width: wp("26.063829787234045%"),
    minWidth: wp("26.063829787234045%"),
    minHeight: hp("4.508196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.659574468085097%"),
    top: hp("3.961748633879779%"),
    justifyContent: "flex-start"
  },
  Text_252_84: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 20,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_252_85: {
    width: wp("40.159574468085104%"),
    minWidth: wp("40.159574468085104%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1276595744680833%"),
    top: hp("1.2295081967213122%"),
    justifyContent: "flex-start"
  },
  Text_252_85: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_252_86: {
    width: wp("45.21276595744681%"),
    height: hp("11.748633879781421%"),
    minHeight: hp("11.748633879781421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("24.86338797814207%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_252_87: {
    width: wp("33.244680851063826%"),
    minWidth: wp("33.244680851063826%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.127659574468085%"),
    top: hp("8.743169398907114%"),
    justifyContent: "flex-start"
  },
  Text_252_87: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 7,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_252_88: {
    width: wp("26.595744680851062%"),
    minWidth: wp("26.595744680851062%"),
    minHeight: hp("4.508196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.127659574468085%"),
    top: hp("4.37158469945355%"),
    justifyContent: "flex-start"
  },
  Text_252_88: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 20,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_252_89: {
    width: wp("41.48936170212766%"),
    minWidth: wp("41.48936170212766%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.127659574468085%"),
    top: hp("1.2295081967213122%"),
    justifyContent: "flex-start"
  },
  Text_252_89: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_252_90: {
    width: wp("45.21277001563539%"),
    height: hp("11.748633879781421%"),
    minHeight: hp("11.748633879781421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.808510638297875%"),
    top: hp("11.475409836065566%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_252_91: {
    width: wp("33.244680851063826%"),
    minWidth: wp("33.244680851063826%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1276595744680833%"),
    top: hp("8.7431693989071%"),
    justifyContent: "flex-start"
  },
  Text_252_91: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 7,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_252_92: {
    width: wp("39.8936170212766%"),
    minWidth: wp("39.8936170212766%"),
    minHeight: hp("4.508196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.659574468085097%"),
    top: hp("3.961748633879786%"),
    justifyContent: "flex-start"
  },
  Text_252_92: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 20,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_252_93: {
    width: wp("32.180851063829785%"),
    minWidth: wp("32.180851063829785%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1276595744680833%"),
    top: hp("1.2295081967213193%"),
    justifyContent: "flex-start"
  },
  Text_252_93: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_252_94: {
    width: wp("45.21276595744681%"),
    height: hp("11.748633879781421%"),
    minHeight: hp("11.748633879781421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11.475409836065566%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_252_95: {
    width: wp("33.244680851063826%"),
    minWidth: wp("33.244680851063826%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.127659574468085%"),
    top: hp("8.7431693989071%"),
    justifyContent: "flex-start"
  },
  Text_252_95: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 7,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_252_96: {
    width: wp("39.62765957446808%"),
    minWidth: wp("39.62765957446808%"),
    minHeight: hp("4.508196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.127659574468085%"),
    top: hp("3.961748633879786%"),
    justifyContent: "flex-start"
  },
  Text_252_96: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 20,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_252_97: {
    width: wp("26.329787234042552%"),
    minWidth: wp("26.329787234042552%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.127659574468085%"),
    top: hp("1.2295081967213193%"),
    justifyContent: "flex-start"
  },
  Text_252_97: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_251_468: {
    width: wp("45.212757841069646%"),
    height: hp("9.836065573770492%"),
    minHeight: hp("9.836065573770492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.72955452127659%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_251_469: {
    width: wp("33.244680851063826%"),
    minWidth: wp("33.244680851063826%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.206615691489368%"),
    top: hp("7.377049180327873%"),
    justifyContent: "flex-start"
  },
  Text_251_469: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 7,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_251_470: {
    width: wp("35.638297872340424%"),
    minWidth: wp("35.638297872340424%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.206615691489368%"),
    top: hp("0.6830601092896131%"),
    justifyContent: "flex-start"
  },
  Text_251_470: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_251_471: {
    width: wp("45.21276595744681%"),
    height: hp("9.836065573770492%"),
    minHeight: hp("9.836065573770492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_251_472: {
    width: wp("33.244680851063826%"),
    minWidth: wp("33.244680851063826%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.127659574468085%"),
    top: hp("7.1038251366120235%"),
    justifyContent: "flex-start"
  },
  Text_251_472: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 7,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_251_473: {
    width: wp("31.648936170212767%"),
    minWidth: wp("31.648936170212767%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.127659574468085%"),
    top: hp("0.6830601092896131%"),
    justifyContent: "flex-start"
  },
  Text_251_473: {
    color: "rgba(35, 34, 41, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_319_952: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("22.404371584699454%"),
    minHeight: hp("22.404371584699454%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("21.174863387978142%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_I319_952_299_868: {
    flexGrow: 1,
    width: wp("88.29787234042553%"),
    height: hp("16.256830601092894%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.851063829787234%"),
    top: hp("3.2786885245901622%"),
    resizeMode: "cover",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_251_449: {
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
  View_I251_449_235_442: {
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
  ImageBackground_I251_449_296_77: {
    flexGrow: 1,
    width: wp("6.914893617021277%"),
    height: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.914893617021277%"),
    top: hp("10.51912568306011%")
  },
  TouchableOpacity_I251_449_235_443: {
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
