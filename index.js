  <container id="mainPage" orientation="vertical">
    var topBuffer = Constants['height'] * .1;
    <container id="blank" size="%topBuffer" />
    var textHeight = Constants['height'] / 4;
    <text id="alewife"
          size="%textHeight"
          text="To Alewife"
          textSize="20"
          textAlignX="center">
      <listener id="aleListener"
                 events="onclick"
                load="stationTimes"
                input="{'tripId':'ALEWIFE'}"
                replaces="mainPage" />
    </text>
    <text id="ashmont"
          size="%textHeight"
          text="To Ashmont/Braintree"
          textSize="20"
          textAlignX="center">
      <listener id="ashListener"
                events="onclick"
                load="stationTimes"
                input="{'tripId':'ASHBRAIN'}"
                replaces="mainPage" />
    </text>
  </container>
