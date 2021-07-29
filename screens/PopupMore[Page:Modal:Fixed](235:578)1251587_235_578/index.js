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
      <View style={styles.View_300_90}>
        <View style={styles.View_235_617}>
          <Text style={styles.Text_235_617}>EXP: 01 01 2022 a 00h 00min</Text>
        </View>
        <View style={styles.View_235_618}>
          <Text style={styles.Text_235_618}>Minute d’appel</Text>
        </View>
        <View style={styles.View_235_619}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2090/2f20/800bb68843b85e52abf9fccb655caf28"
            }}
            style={styles.ImageBackground_235_620}
          />
          <View style={styles.View_235_621}>
            <View style={styles.View_235_622} />
            <View style={styles.View_235_623} />
            <View style={styles.View_235_624} />
          </View>
        </View>
        <View style={styles.View_235_627}>
          <Text style={styles.Text_235_627}>EXP: 01 01 2022 a 00h 00min</Text>
        </View>
        <View style={styles.View_235_628}>
          <Text style={styles.Text_235_628}>Minute d’appel</Text>
        </View>
        <View style={styles.View_235_629}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2090/2f20/800bb68843b85e52abf9fccb655caf28"
            }}
            style={styles.ImageBackground_235_630}
          />
          <View style={styles.View_235_631}>
            <View style={styles.View_235_632} />
            <View style={styles.View_235_633} />
            <View style={styles.View_235_634} />
          </View>
        </View>
        <View style={styles.View_235_637}>
          <Text style={styles.Text_235_637}>EXP: 01 01 2022 a 00h 00min</Text>
        </View>
        <View style={styles.View_235_638}>
          <Text style={styles.Text_235_638}>Minute d’appel</Text>
        </View>
        <View style={styles.View_235_639}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2090/2f20/800bb68843b85e52abf9fccb655caf28"
            }}
            style={styles.ImageBackground_235_640}
          />
          <View style={styles.View_235_641}>
            <View style={styles.View_235_642} />
            <View style={styles.View_235_643} />
            <View style={styles.View_235_644} />
          </View>
        </View>
        <View style={styles.View_235_647}>
          <Text style={styles.Text_235_647}>EXP: 01 01 2022 a 00h 00min</Text>
        </View>
        <View style={styles.View_235_648}>
          <Text style={styles.Text_235_648}>Minute d’appel</Text>
        </View>
        <View style={styles.View_235_649}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2090/2f20/800bb68843b85e52abf9fccb655caf28"
            }}
            style={styles.ImageBackground_235_650}
          />
          <View style={styles.View_235_651}>
            <View style={styles.View_235_652} />
            <View style={styles.View_235_653} />
            <View style={styles.View_235_654} />
          </View>
        </View>
        <View style={styles.View_235_657}>
          <Text style={styles.Text_235_657}>EXP: 01 01 2022 a 00h 00min</Text>
        </View>
        <View style={styles.View_235_658}>
          <Text style={styles.Text_235_658}>Minute d’appel</Text>
        </View>
        <View style={styles.View_235_659}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2090/2f20/800bb68843b85e52abf9fccb655caf28"
            }}
            style={styles.ImageBackground_235_660}
          />
          <View style={styles.View_235_661}>
            <View style={styles.View_235_662} />
            <View style={styles.View_235_663} />
            <View style={styles.View_235_664} />
          </View>
        </View>
        <View style={styles.View_235_595}>
          <Text style={styles.Text_235_595}>EXP: 01 01 2022 a 00h 00min</Text>
        </View>
        <View style={styles.View_235_599}>
          <Text style={styles.Text_235_599}>Minute d’appel</Text>
        </View>
        <View style={styles.View_235_606}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2090/2f20/800bb68843b85e52abf9fccb655caf28"
            }}
            style={styles.ImageBackground_235_607}
          />
          <View style={styles.View_235_608}>
            <View style={styles.View_235_609} />
            <View style={styles.View_235_613} />
            <View style={styles.View_235_612} />
          </View>
        </View>
        <View style={styles.View_309_736}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/49df/39cf/f26df1aefca8f0c2a4f8c351e99c3873"
            }}
            style={styles.ImageBackground_309_737}
          />
          <View style={styles.View_309_738}>
            <View style={styles.View_309_739} />
            <View style={styles.View_309_740} />
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(105, 98, 153, 1)" },
  View_2: { height: hp("100%") },
  View_300_90: {
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
  View_235_617: {
    width: wp("28.45744680851064%"),
    minWidth: wp("28.45744680851064%"),
    minHeight: hp("2.127659574468085%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.436170212765957%"),
    top: hp("34.751773049645394%"),
    justifyContent: "flex-start"
  },
  Text_235_617: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_235_618: {
    width: wp("24.46808510638298%"),
    minWidth: wp("24.46808510638298%"),
    minHeight: hp("3.7825059101654848%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.436170212765957%"),
    top: hp("29.550827423167846%"),
    justifyContent: "flex-start"
  },
  Text_235_618: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_235_619: {
    width: wp("5.053191489361701%"),
    minWidth: wp("5.053191489361701%"),
    height: hp("4.491725768321513%"),
    minHeight: hp("4.491725768321513%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.37234042553192%"),
    top: hp("31.20567375886525%")
  },
  ImageBackground_235_620: {
    width: wp("5.053191489361701%"),
    minWidth: wp("5.053191489361701%"),
    height: hp("4.491725768321513%"),
    minHeight: hp("4.491725768321513%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_235_621: {
    width: wp("2.198681425541005%"),
    minWidth: wp("2.198681425541005%"),
    height: hp("1.456201386508085%"),
    minHeight: hp("1.456201386508085%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3297872340425556%"),
    top: hp("1.4184397163120614%")
  },
  View_235_622: {
    width: wp("1.1078171273495288%"),
    minWidth: wp("1.1078171273495288%"),
    height: hp("0.9847191208643271%"),
    minHeight: hp("0.9847191208643271%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0908410904255277%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_235_623: {
    width: wp("1.0478690583655175%"),
    minWidth: wp("1.0478690583655175%"),
    height: hp("0.9314391629915711%"),
    minHeight: hp("0.9314391629915711%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1508373503989304%"),
    top: hp("0.5247580526004683%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_235_624: {
    width: wp("2.1275687724985977%"),
    minWidth: wp("2.1275687724985977%"),
    height: hp("0.32083754280216586%"),
    minHeight: hp("0.32083754280216586%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.5951144171099259%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_235_627: {
    width: wp("28.45744680851064%"),
    minWidth: wp("28.45744680851064%"),
    minHeight: hp("2.127659574468085%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.436170212765957%"),
    top: hp("46.335697399527184%"),
    justifyContent: "flex-start"
  },
  Text_235_627: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_235_628: {
    width: wp("24.46808510638298%"),
    minWidth: wp("24.46808510638298%"),
    minHeight: hp("3.7825059101654848%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.436170212765957%"),
    top: hp("41.13475177304964%"),
    justifyContent: "flex-start"
  },
  Text_235_628: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_235_629: {
    width: wp("5.053191489361701%"),
    minWidth: wp("5.053191489361701%"),
    height: hp("4.491725768321513%"),
    minHeight: hp("4.491725768321513%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.37234042553192%"),
    top: hp("42.78959810874704%")
  },
  ImageBackground_235_630: {
    width: wp("5.053191489361701%"),
    minWidth: wp("5.053191489361701%"),
    height: hp("4.491725768321513%"),
    minHeight: hp("4.491725768321513%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_235_631: {
    width: wp("2.198681425541005%"),
    minWidth: wp("2.198681425541005%"),
    height: hp("1.456201386508085%"),
    minHeight: hp("1.456201386508085%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3297872340425556%"),
    top: hp("1.418439716312058%")
  },
  View_235_632: {
    width: wp("1.107819156443819%"),
    minWidth: wp("1.107819156443819%"),
    height: hp("0.984717317224958%"),
    minHeight: hp("0.984717317224958%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0908410904255277%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_235_633: {
    width: wp("1.0478710874598076%"),
    minWidth: wp("1.0478710874598076%"),
    height: hp("0.9314373593522021%"),
    minHeight: hp("0.9314373593522021%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1508373503989304%"),
    top: hp("0.5247580526004754%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_235_634: {
    width: wp("2.1275687724985977%"),
    minWidth: wp("2.1275687724985977%"),
    height: hp("0.32083754280216586%"),
    minHeight: hp("0.32083754280216586%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.595114417109933%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_235_637: {
    width: wp("28.45744680851064%"),
    minWidth: wp("28.45744680851064%"),
    minHeight: hp("2.127659574468085%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.436170212765957%"),
    top: hp("57.919621749408975%"),
    justifyContent: "flex-start"
  },
  Text_235_637: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_235_638: {
    width: wp("24.46808510638298%"),
    minWidth: wp("24.46808510638298%"),
    minHeight: hp("3.7825059101654848%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.436170212765957%"),
    top: hp("52.71867612293144%"),
    justifyContent: "flex-start"
  },
  Text_235_638: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_235_639: {
    width: wp("5.053191489361701%"),
    minWidth: wp("5.053191489361701%"),
    height: hp("4.491725768321513%"),
    minHeight: hp("4.491725768321513%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.37234042553192%"),
    top: hp("54.37352245862884%")
  },
  ImageBackground_235_640: {
    width: wp("5.053191489361701%"),
    minWidth: wp("5.053191489361701%"),
    height: hp("4.491725768321513%"),
    minHeight: hp("4.491725768321513%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_235_641: {
    width: wp("2.198681425541005%"),
    minWidth: wp("2.198681425541005%"),
    height: hp("1.456201386508085%"),
    minHeight: hp("1.456201386508085%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3297872340425556%"),
    top: hp("1.418439716312058%")
  },
  View_235_642: {
    width: wp("1.107819156443819%"),
    minWidth: wp("1.107819156443819%"),
    height: hp("0.984717317224958%"),
    minHeight: hp("0.984717317224958%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0908410904255277%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_235_643: {
    width: wp("1.0478710874598076%"),
    minWidth: wp("1.0478710874598076%"),
    height: hp("0.9314373593522021%"),
    minHeight: hp("0.9314373593522021%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1508373503989304%"),
    top: hp("0.5247580526004754%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_235_644: {
    width: wp("2.1275687724985977%"),
    minWidth: wp("2.1275687724985977%"),
    height: hp("0.32083754280216586%"),
    minHeight: hp("0.32083754280216586%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.5951144171099259%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_235_647: {
    width: wp("28.45744680851064%"),
    minWidth: wp("28.45744680851064%"),
    minHeight: hp("2.127659574468085%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.436170212765957%"),
    top: hp("69.50354609929079%"),
    justifyContent: "flex-start"
  },
  Text_235_647: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_235_648: {
    width: wp("24.46808510638298%"),
    minWidth: wp("24.46808510638298%"),
    minHeight: hp("3.7825059101654848%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.436170212765957%"),
    top: hp("64.30260047281324%"),
    justifyContent: "flex-start"
  },
  Text_235_648: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_235_649: {
    width: wp("5.053191489361701%"),
    minWidth: wp("5.053191489361701%"),
    height: hp("4.491725768321513%"),
    minHeight: hp("4.491725768321513%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.37234042553192%"),
    top: hp("65.95744680851064%")
  },
  ImageBackground_235_650: {
    width: wp("5.053191489361701%"),
    minWidth: wp("5.053191489361701%"),
    height: hp("4.491725768321513%"),
    minHeight: hp("4.491725768321513%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_235_651: {
    width: wp("2.198681425541005%"),
    minWidth: wp("2.198681425541005%"),
    height: hp("1.456201386508085%"),
    minHeight: hp("1.456201386508085%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3297872340425556%"),
    top: hp("1.4184397163120508%")
  },
  View_235_652: {
    width: wp("1.1078211855381093%"),
    minWidth: wp("1.1078211855381093%"),
    height: hp("0.9847155135855888%"),
    minHeight: hp("0.9847155135855888%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0908410904255277%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_235_653: {
    width: wp("1.047873116554098%"),
    minWidth: wp("1.047873116554098%"),
    height: hp("0.931435555712833%"),
    minHeight: hp("0.931435555712833%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1508373503989304%"),
    top: hp("0.5247580526004754%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_235_654: {
    width: wp("2.1275687724985977%"),
    minWidth: wp("2.1275687724985977%"),
    height: hp("0.32083754280216586%"),
    minHeight: hp("0.32083754280216586%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.5951144171099401%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_235_657: {
    width: wp("28.45744680851064%"),
    minWidth: wp("28.45744680851064%"),
    minHeight: hp("2.127659574468085%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.436170212765957%"),
    top: hp("81.08747044917257%"),
    justifyContent: "flex-start"
  },
  Text_235_657: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_235_658: {
    width: wp("24.46808510638298%"),
    minWidth: wp("24.46808510638298%"),
    minHeight: hp("3.7825059101654848%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.436170212765957%"),
    top: hp("75.88652482269504%"),
    justifyContent: "flex-start"
  },
  Text_235_658: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_235_659: {
    width: wp("5.053191489361701%"),
    minWidth: wp("5.053191489361701%"),
    height: hp("4.491725768321513%"),
    minHeight: hp("4.491725768321513%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.37234042553192%"),
    top: hp("77.54137115839244%")
  },
  ImageBackground_235_660: {
    width: wp("5.053191489361701%"),
    minWidth: wp("5.053191489361701%"),
    height: hp("4.491725768321513%"),
    minHeight: hp("4.491725768321513%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_235_661: {
    width: wp("2.198681425541005%"),
    minWidth: wp("2.198681425541005%"),
    height: hp("1.456201386508085%"),
    minHeight: hp("1.456201386508085%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3297872340425556%"),
    top: hp("1.4184397163120508%")
  },
  View_235_662: {
    width: wp("1.1078171273495288%"),
    minWidth: wp("1.1078171273495288%"),
    height: hp("0.9847191208643271%"),
    minHeight: hp("0.9847191208643271%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0908410904255277%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_235_663: {
    width: wp("1.047873116554098%"),
    minWidth: wp("1.047873116554098%"),
    height: hp("0.931435555712833%"),
    minHeight: hp("0.931435555712833%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1508373503989304%"),
    top: hp("0.5247580526004754%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_235_664: {
    width: wp("2.1275687724985977%"),
    minWidth: wp("2.1275687724985977%"),
    height: hp("0.32083754280216586%"),
    minHeight: hp("0.32083754280216586%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.5951144171099259%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_235_595: {
    width: wp("28.45744680851064%"),
    minWidth: wp("28.45744680851064%"),
    minHeight: hp("2.127659574468085%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.436170212765957%"),
    top: hp("23.167848699763592%"),
    justifyContent: "flex-start"
  },
  Text_235_595: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_235_599: {
    width: wp("24.46808510638298%"),
    minWidth: wp("24.46808510638298%"),
    minHeight: hp("3.7825059101654848%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.436170212765957%"),
    top: hp("17.96690307328605%"),
    justifyContent: "flex-start"
  },
  Text_235_599: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_235_606: {
    width: wp("5.053191489361701%"),
    minWidth: wp("5.053191489361701%"),
    height: hp("4.491725768321513%"),
    minHeight: hp("4.491725768321513%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.37234042553192%"),
    top: hp("19.62174940898345%")
  },
  ImageBackground_235_607: {
    width: wp("5.053191489361701%"),
    minWidth: wp("5.053191489361701%"),
    height: hp("4.491725768321513%"),
    minHeight: hp("4.491725768321513%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_235_608: {
    width: wp("2.198681425541005%"),
    minWidth: wp("2.198681425541005%"),
    height: hp("1.456201386508085%"),
    minHeight: hp("1.456201386508085%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3297872340425556%"),
    top: hp("1.418439716312058%")
  },
  View_235_609: {
    width: wp("1.1078171273495288%"),
    minWidth: wp("1.1078171273495288%"),
    height: hp("0.9847191208643271%"),
    minHeight: hp("0.9847191208643271%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0908410904255277%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_235_613: {
    width: wp("1.0478690583655175%"),
    minWidth: wp("1.0478690583655175%"),
    height: hp("0.9314391629915711%"),
    minHeight: hp("0.9314391629915711%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1508373503989304%"),
    top: hp("0.5247580526004718%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_235_612: {
    width: wp("2.1275687724985977%"),
    minWidth: wp("2.1275687724985977%"),
    height: hp("0.32083754280216586%"),
    minHeight: hp("0.32083754280216586%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.5951144171099294%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_309_736: {
    width: wp("8.51063829787234%"),
    minWidth: wp("8.51063829787234%"),
    height: hp("7.5650118203309695%"),
    minHeight: hp("7.5650118203309695%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.51063829787235%"),
    top: hp("4.7281323877068555%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_309_737: {
    width: wp("8.51063829787234%"),
    height: hp("7.5650118203309695%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_309_738: {
    width: wp("2.963610405617572%"),
    height: hp("2.634322389643243%"),
    top: hp("2.3815542811761237%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6792485663231247%")
  },
  View_309_739: {
    width: wp("2.9636091374336404%"),
    height: hp("2.634319233274347%"),
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
  View_309_740: {
    width: wp("2.9636091374336404%"),
    height: hp("2.634319233274347%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.00006493101730598028%"),
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
