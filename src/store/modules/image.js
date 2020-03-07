
const state = {
  images: [
    {
      url: 'https://i.pinimg.com/236x/9c/9d/cf/9c9dcfd3c58955ff3769c12bfe22b891--baby-corgi-corgi-dog.jpg'
    }
  ]
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
    $state.images.push(data);
  }

}

export default {
  state,
  actions,
  mutations,
  getters
}