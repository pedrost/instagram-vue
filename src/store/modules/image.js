
const state = {
  images: []
}

const getters = {
  getImages: function($state) {
    return $state.images;
  }
}

const actions = {
  inserirImagemDeGato($state) {
    
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("get", "https://api.thecatapi.com/v1/images/search", true);
    xmlhttp.send();
    
    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState === 4) {
        if (xmlhttp.status === 200) {
          $state.commit("INSERIR_IMAGEM", xmlhttp.responseText)
        }
      }
    };
    
  }
}

const mutations = {
  INSERIR_IMAGEM: function($state, data) {
    $state.images.push(JSON.parse(data));
  }

}

export default {
  state,
  actions,
  mutations,
  getters
}