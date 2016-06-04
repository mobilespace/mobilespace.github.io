$(function(){
  var some;
  $.ajaxSetup({ cache: true });
  $.getScript('//connect.facebook.net/en_US/sdk.js', function(){
    FB.init({
      appId: '1789198617974435',
      version: 'v2.1' // or v2.0, v2.1, v2.2, v2.3
    });     
    FB.getLoginStatus(function(response){
      if(response.status === 'connected'){
        console.log('connected');
      }else {
        FB.login();
      }
    });
    FB.login(function() {
      FB.api('/100002330438004','get',{fields : 'picture'},function(response){
        console.log(response.picture.data.url);
      })
    },{scope : 'publish_actions'});
  });
});