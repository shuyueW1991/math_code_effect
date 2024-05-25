  // Components
  import App from './App.vue'

  // Composables
  import { createApp } from 'vue'

  // Plugins
  import { registerPlugins } from '/src/plugins'

  const app = createApp(App)

  registerPlugins(app)

  app.mount('#app')
