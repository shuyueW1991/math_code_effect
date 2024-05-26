<script setup>
import {ref} from "vue";
import {useRouter} from "vue-router";
const password = ref("")

// used to define webpage routes
const route = useRouter()

 /* add your own logic to check if password is correct, 
  here you can define your own password */
const correctPassword = "COWSARECUTE"

function checkPassword () {
  if (password.value === correctPassword) {
    // if password is correct, navigate to another route to show it was granted
    route.push('/granted');
  } 
  else {
    console.log("Incorrect password");
  }
}

</script>

<!-- Enter Password should be in the middle of screen  -->
  <template>
    <v-container class="container">
      <v-row justify="center">
        <v-col cols="12">
          <v-row justify="center">
            <v-col cols="auto">
              <h1 class="text_theme">Enter Password [<input type="password" v-model="password" size="12" @keyup.enter="checkPassword"/>]</h1>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </template>

<style scoped lang="scss">
.container {
  height: 100vh; /* Set container to full viewport height */
  display: flex; /* Use flexbox layout */
  justify-content: center; /* Center contents horizontally */
  align-items: center; /* Center contents vertically */
}
.text_theme{
  font-style: normal;
  font-family: Courier New,serif, monospace;
  font-weight: 600;
  font-size: medium;
  line-height: 1.25;
  color: chartreuse;
}

input[type="password"] {
    color: chartreuse; /* Change to the color you desire */
  }

input[type="password"]:focus {
    outline: none; /* Remove the default blue outline */
  }

// other styles ...

</style>
