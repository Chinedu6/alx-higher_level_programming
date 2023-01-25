<html>
<head>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script>
    $(document).ready(function() {
      $("#language_code").keypress(function(e) {
        if(e.which == 13) {
          translate();
        }
      });
      $("#btn_translate").click(function() {
        translate();
      });
    });
    function translate() {
      let language_code = $("#language_code").val();
      $.get("https://www.fourtonfish.com/hellosalut/hello/?lang=" + language_code, function(data) {
        $("#hello").text(data.hello);
      });
    }
  </script>
</head>
<body>
  <input type="text" id="language_code" />
  <input type="button" id="btn_translate" value="Translate">
  <div id="hello"></div>
</body>
</html>
