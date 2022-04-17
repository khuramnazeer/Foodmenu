<template>
  <v-app id="inspire">
  <v-navigation-drawer
  v-model="drawer"
  app
  >
  <v-list-item>
    <v-list-item-content>
      <v-list-item-title class="text-h6">
       FOOD
      </v-list-item-title>
      <v-list-item-subtitle>
        Orders
      </v-list-item-subtitle>
    </v-list-item-content>
  </v-list-item>

  <v-divider></v-divider>

  <v-list
    dense
    nav
  >
    <v-list-item
      v-for="item in items"
      :key="item.title"
      :to="item.to"
      link
    >
      <v-list-item-icon>
        <v-icon>{{ item.icon }}</v-icon>
      </v-list-item-icon>

      <v-list-item-content>
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</v-navigation-drawer>

   <v-app-bar
      app
      color="primary"
      dark
      prominent
      src="headerbg.jpg"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon @click="drawer =!drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>FOOD ORDER</v-app-bar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
       <router-view></router-view>
       <v-footer
    dark
    padless
  >
    <v-card
      flat
      tile
      class="indigo lighten-1 white--text text-center"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-card-text>
    </v-card>
  </v-footer>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data: () => ({ 
      drawer: null, 
      items: [
          { title: 'Menu', icon: 'mdi-silverware-fork-knife', to:'/'},
          { title: 'About', icon: 'mdi-help-box', to: '/about'},
          { title: 'Contact', icon: 'mdi-contacts', to:'/contact'},
          { title: 'Food', icon: 'mdi-pasta', to:'/food'},
        ],
        icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
      }),
  }
</script>