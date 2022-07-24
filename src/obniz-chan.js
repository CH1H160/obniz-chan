<!-- HTML Example -->
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <script src="https://obniz.com/js/jquery-3.2.1.min.js"></script>
  <script src="https://unpkg.com/obniz@3.22.0/obniz.js"></script>
</head>
<body>

<div id="obniz-debug"></div>
<h1>ServoMotor</h1>

<input id="slider1" type="range"  min="50" max="120" />
<input id="slider2" type="range"  min="0" max="180" />

<style>
  #slider1 {
    transform:rotate(90deg);
  }
</style>

<script>
var obniz = new Obniz("OBNIZ_ID_HERE");
obniz.onconnect = async function () {
  obniz.display.circle(65, 30, 25, true);
  var tilt = obniz.wired("ServoMotor", {gnd:3, vcc:4, signal:5});
  var pan = obniz.wired("ServoMotor", {gnd:6, vcc:7, signal:8});
  $("#slider1").on('input', function() {
    tilt.angle($("#slider1").val())
  });
  $("#slider2").on('input', function() {
    pan.angle($("#slider2").val())
  });
};

obniz.onclose = async function(){
   $("#slider1").off('input');
   $("#slider2").off('input');
};

</script>
</body>
</html>