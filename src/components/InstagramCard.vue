<template>
  <div class="Instagram-card">
    <div class="Instagram-card-header">
      <img src="https://avatars3.githubusercontent.com/u/24485987?s=460&v=4" class="Instagram-card-user-image">
      <a class="Instagram-card-user-name" href="https://www.instagram.com/rogersbase/"> pedrosturmer </a>
      <div class="Instagram-card-time"> 1 sem </div>
    </div>

    <div class="Instagram-card-image">
      <img width="100%" :src="imagemUrl" height=600px/>
    </div>

    <div class="Instagram-card-content">
      <p class="Likes">640 likes</p>
     I GOT TO PLAY NINTENDO SWITCH ON #NINTENDO MINUTE! 😱 So happy that I can finally talk about this! @kitellis and @breath0air told me that we were going to be playing <a class="hashtag" href="https://www.instagram.com/explore/tags/poochy/">#Poochy</a> and <a class="hashtag" href="https://www.instagram.com/explore/tags/yoshi/">#Yoshi</a> but ended up surprising me with a private <a class="hashtag" href="https://www.instagram.com/explore/tags/nintendoswitch/">#NintendoSwitch</a> play session. I had the opportunity to play The Legend of <a class="hashtag" href="https://www.instagram.com/explore/tags/zelda/">#Zelda</a> <a class="hashtag" href="https://www.instagram.com/explore/tags/breathofthewild/">#BreathOfTheWild</a> and <a class="hashtag" href="https://www.instagram.com/explore/tags/12switch/">#12Switch</a>, both of which were a ton of fun! Massive thank you to the team at @Nintendo for having me on! I had an absolute blast! 🎉</p>
      <p class="comments">Ver los 12 comentarios</p>
      <br><a class="user-comment" href="https://www.instagram.com/chrisobrien64/">chrisobrien64</a> NO WAY! WAY TO GO ROGER MY BOI</br>
      <br><a class="user-comment" href="https://www.instagram.com/artie_mcparty/">artie_mcparty</a> ROGER = BEST NINTENDO FAN.</br>
      <br><a class="user-comment" href="https://www.instagram.com/theealeexj/">theealeexj</a> I JUST TRIED IT OUT TODAY ITS AMAZING</br>
    <hr>
    </div>  

    <div class="Instagram-card-footer">
      <a class="footer-action-icons"href="#"><i class="fa fa-heart-o"></i></a>
      <input class="comments-input" type="text" placeholder="Añade un comentario..."/>
      <a class="footer-action-icons"href="#"><i class="fa fa-ellipsis-h"></i></a>
    </div>

  </div>

</template>

<script>
  export default {
    name: 'InstagramCard',
    props: ['imagemUrl'],

  }
</script>

<style type="text/css">
.Instagram-card{
  background: #ffffff;
  border: 1px solid #f2f2f2;
  border-radius: 3px;
  width: 100%;
  max-width: 600px;
  margin: auto;
}

.Instagram-card-header{
  padding: 20px;
  height: 40px;
}

.Instagram-card-user-image{
  border-radius: 50%;
  width: 40px;
  height: 40px;
  vertical-align: middle;
} 

.Instagram-card-time{
  float: right;
  width: 80px;
  padding-top:10px;
  text-align: right;
  color: #999;
}

.Instagram-card-user-name{
    margin-left:20px;
    font-weight:bold;
  color: #262626;
}

.Instagram-card-content{
  padding: 20px;
}

.Instagram-card-image {
  padding: 24px;
}

.Likes{
  font-weight: bold;
}

.Instagram-card-content-user{
  font-weight: bold;
  color: #262626;
}

.hashtag{
  color: #003569;
}

.comments{
  color:#999;
}

.user-comment{
  color: #003569;
}

.Instagram-card-footer{
  padding: 20px;
  display: flex;
  align-items: center;
}

hr{
  border: none;
  border-bottom: 1px solid #ccc;
  margin-top: 30px;
  margin-bottom: 0px;
  padding-bottom: 0px;
 
}


.footer-action-icons{
  font-size: 16px;
  color: #ccc;
}

.comments-input{
  border: none;
  margin-left: 10px;
  width: 100%;
}
</style>