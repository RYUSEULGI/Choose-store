<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="title">
                Using Vuetify
              </v-list-item-title>
              <v-list-item-subtitle>
                awesome
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
      absolute
      color="white"
      elevate-on-scroll
      scroll-target="#scrolling-techniques-7"
    >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Vue Study</v-toolbar-title>

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
    <v-sheet
      id="scrolling-techniques-4"
      class="overflow-y-auto"
      max-height="80"
    >
      <v-container style="height: 1000px;"></v-container>
    </v-sheet>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data() {
      return{
        drawer: null,
        items: [
          { title: 'TodoList', icon: 'mdi-format-list-checks', to: '/todoList'},
          { title: 'Calculator', icon: 'mdi-calculator', to: '/calculator'},
        ]
      }
    }
  }
</script>
