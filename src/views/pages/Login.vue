<template>
  <div id="app_signup">
    <v-layout wrap justify-center>
      <v-flex xs12 md12 pa-8>
        <v-card id="app_height" outlined tile>
          <v-layout pb-12 xs12 sm12 md12 wrap>
            <v-flex>
              <v-layout wrap pt-12 justify-center>
                <v-flex xs12 md8 text-center>
                  <span class="login_head">
                   
                  <h1 style="font-family:poppins;color:#FC4B4B">PIZZAMAX</h1>
                  </span>
                </v-flex>
              </v-layout>
              <v-layout wrap  justify-center>
                <v-flex xs12 md8 text-center>
                  <span class="login_head" style="font-family:poppins" ><b>Log in</b></span>
                </v-flex>
              </v-layout>

              <v-layout wrap justify-center pt-0>
                <v-flex xs12 sm6 md3 pt-5 px-2>
                  <v-text-field
                    ref="userName"
                     color="#FC4B4B"
                    v-model="username"
                    label="Username"
                    :rules="[rules.required]"
                    :error-messages="msg_username"
                    required
                  ></v-text-field>
                  <v-text-field
                    ref="password"
                     color="#FC4B4B"
                    v-model="password"
                    label="Password"
                    type="password"
                    :rules="[rules.required]"
                    :error-messages="msg_password"
                    required
                  ></v-text-field>
                </v-flex>
                 
              </v-layout>
              <v-layout wrap justify-center>
                <v-flex xs12 md3 pa-2 text-center>
                  <span style="font-size: 14px; color: grey">Hint : Type something to Login</span>
                </v-flex>
              </v-layout>

              <v-layout v-if="msg" wrap justify-center>
                <v-flex xs12 md3 pa-2 text-center>
                  <span style="font-size: 14px; color: red">{{ msg }}</span>
                </v-flex>
              </v-layout>

              <v-layout wrap justify-center>
                <v-flex xs12 md12 pt-2 text-center>
                  <v-btn
                    rounded
                    color="#FC4B4B"
                    width="250px"
                    class="text-capitalize"
                    dark
                    small
                    :ripple="true"
                    @click="appLogin"
                    >Log In</v-btn
                  >
                </v-flex>
              </v-layout>
              <v-layout wrap justify-center>
          <v-flex xs12 md3 pt-5 text-center>
            
              <span style="font-size:14px;color:#FC4B4B;text-decorations:none">Forgot Password?</span>
            
          </v-flex>
        </v-layout>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
// import axios from "axios";
import store from "../../store";

export default {
 
  data() {
    return {
      appLoading: false,
      username: null,
      password: null,
      msg: null,
      msg_username: null,
      msg_password: null,
      rules: {
        required: (value) => !!value || "Required",
      },
    };
  },

  methods: {
    //Function for appLogin and store login info into store
    appLogin(){
      if(this.username && this.password){
        store.commit("loginUser");
        this.$router.push({ path: "/Dashboard" });
         

      }else{
         this.msg = "Enter Username and Password"
      }
    },
   
   
  },
};
</script>

<style scoped>
.login_head {
  font-family: opensans;
  font-size: 25px;
  font-weight: 400;
}
#app_signup {
  background-color: #2c3341;
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
}
@media only screen and (min-width: 800px) {
  #app_height {
    min-height: 90vh;
  }
}
</style>