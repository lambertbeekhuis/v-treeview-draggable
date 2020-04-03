<template>
  <div class="home">
    Home pagina

    <div>
    <v-treeview-draggable v-model="animals"></v-treeview-draggable>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src

import VTreeviewDraggable from "../components/VTreeviewDraggable";

export default {
  name: 'Home',

  data () {
    return {
      animals: [
        {id: 1, name: 'mamal', children: [
            {id: 10, name: 'elephant', children: [
                {id: 101, name: 'indian', children: []},
                {id: 101, name: 'african', children: []},
              ]},
            {id: 11, name: 'lion', children: []},
            {id: 12, name: 'buffalo', children: []},

          ]},
        {id: 2, name: 'reptiles', children: [
            {id: 20, name: 'crocodile', children: []},
            {id: 21, name: 'snake', children: []},
          ]},
        {id: 2, name: 'reptiles', children: []},
      ]
    }
  },

  components: {
    VTreeviewDraggable
  }
}
</script>
