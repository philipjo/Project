<template>
  <v-layout wrap justify-center>
    <v-flex px-2 xs12 sm12 md12 lg12 xl12 text-center>
      <v-layout wrap>
        <v-flex xs3 md3 pt-2 pr-2>
          <v-card class="mb-2">
            <v-card-text class="p-3 clearfix">
              <v-list-item>
                <v-list-item-icon>
                  <v-icon x-large color="primary" class="py-0"
                    >mdi-account-multiple</v-icon
                  >
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Total Customers</v-list-item-title>
                  <v-list-item-subtitle class="info--text">
                    <span
                      style="
                        font-family: poppins;
                        font-size: 18px;
                        color: #000000;
                      "
                    >
                      250
                    </span>
                    <span
                      class="pl-1"
                      style="
                        font-family: poppins;
                        font-size: 12px;
                        color: #3dc131;
                      "
                    >
                      <v-icon color="#3DC131" size="14">mdi-arrow-up</v-icon>
                      21%
                    </span>
                  </v-list-item-subtitle>
                  <v-list-item-subtitle class="info--text"
                    ><br
                  /></v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-card-text>
          </v-card>
        </v-flex>

        <v-flex xs3 md3 pt-2 pr-2>
          <v-card class="mb-2">
            <v-card-text class="p-3 clearfix">
              <v-list-item link to="/Orders">
                <v-list-item-icon>
                  <v-icon x-large color="warning" class="py-0"
                    >mdi-file-document</v-icon
                  >
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Total Orders</v-list-item-title>
                  <v-list-item-subtitle class="info--text">
                    <span
                      style="
                        font-family: poppins;
                        font-size: 18px;
                        color: #000000;
                      "
                    >
                      240
                    </span>
                    <span
                      class="pl-1"
                      style="
                        font-family: poppins;
                        font-size: 12px;
                        color: #3dc131;
                      "
                    >
                      <v-icon color="#3DC131" size="14">mdi-arrow-up</v-icon>
                      21%
                    </span>
                  </v-list-item-subtitle>
                  <v-list-item-subtitle class="info--text"
                    ><br
                  /></v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-card-text>
          </v-card>
        </v-flex>

        <v-flex xs3 md3 pt-2 pr-2>
          <v-card class="mb-2">
            <v-card-text class="p-3 clearfix">
              <v-list-item>
                <v-list-item-icon>
                  <v-icon x-large color="error" class="py-0"
                    >mdi-timer-sand</v-icon
                  >
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Preparing</v-list-item-title>
                  <v-list-item-subtitle class="info--text">
                    <span
                      style="
                        font-family: poppins;
                        font-size: 18px;
                        color: #000000;
                      "
                    >
                      50
                    </span>
                  </v-list-item-subtitle>
                  <v-list-item-subtitle class="info--text"
                    ><br
                  /></v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-card-text>
          </v-card>
        </v-flex>

        <v-flex xs3 md3 pt-2 pr-2>
          <v-card class="mb-2">
            <v-card-text class="p-3 clearfix">
              <v-list-item>
                <v-list-item-icon>
                  <v-icon x-large color="green" class="py-0"
                    >mdi-food-fork-drink</v-icon
                  >
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Ready To Serve</v-list-item-title>
                  <v-list-item-subtitle class="info--text">
                    <span
                      style="
                        font-family: poppins;
                        font-size: 18px;
                        color: #000000;
                      "
                    >
                      100
                    </span>
                  </v-list-item-subtitle>
                  <v-list-item-subtitle class="info--text"
                    ><br
                  /></v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>


<script>
export default {
  name: "BasicDashboard",
};
</script>