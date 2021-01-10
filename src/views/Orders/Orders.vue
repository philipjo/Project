<template>
  <div>
    <v-layout wrap justify-center>
      <v-flex px-2 xs12 sm12 md12 lg12 xl12 text-center>
        <v-form ref="form" lazy-validation>
          <v-layout wrap>
            <v-flex xs12 pt-2>
              <v-card class="mb-1">
                <v-card-title> Orders </v-card-title>
              </v-card>
              <v-card class="mb-4">
                <v-card-text
                  style="
                    padding: 0px !important;
                    padding-top: 10px !important;
                    height: 4em !important;
                  "
                >
                  <v-layout wrap style="align-items: center" justify-center>
                    <v-flex xs6 sm6 md6></v-flex>
                    <v-flex xs6 sm6 md6>
                      <v-layout wrap justify-center>
                        <v-flex xs6 sm6 md4 text-right pt-2
                          >Items Per Page</v-flex
                        >
                        <v-flex xs6 sm6 md2>
                          <v-select
                            solo
                            flat
                            v-model="itemsPerPage"
                            :items="ItemsCount"
                            dense
                            required
                          ></v-select>
                        </v-flex>
                        <v-flex
                          xs6
                          sm6
                          md2
                          text-center
                          pt-2
                          style="color: black"
                        >
                          1 - 10 of 10
                        </v-flex>
                        <v-flex xs2 sm2 md1 pt-2 text-right>
                          <span v-if="page > 1">
                            <v-icon @click="prevpage" color="primary"
                              >mdi-chevron-left</v-icon
                            >
                          </span>
                          <span v-else>
                            <v-icon disabled color="primary"
                              >mdi-chevron-left</v-icon
                            >
                          </span>
                        </v-flex>
                        <v-flex xs2 sm2 md1 pt-2 text-center>
                          {{ page }}
                        </v-flex>
                        <v-flex xs2 sm2 md1 pt-2 text-left>
                          <span v-if="page < totalpages">
                            <v-icon @click="nextpage" color="primary"
                              >mdi-chevron-right</v-icon
                            >
                          </span>
                          <span v-else>
                            <v-icon disabled color="primary"
                              >mdi-chevron-right</v-icon
                            >
                          </span>
                        </v-flex>
                      </v-layout>
                    </v-flex>
                  </v-layout>
                </v-card-text>
                <v-data-table
                  bordered
                  :headers="headers"
                  :items="orders"
                  hide-default-footer
                  :items-per-page="itemsPerPage"
                  class="row-pointer pb-12"
                >
                  <template v-slot:item.status="{ item }">
                    <v-btn
                      v-if="item.status == 'orderReceived'"
                      text
                      color="warning"
                      @click.stop="changeStatus(item)"
                    >
                      Order Received
                    </v-btn>
                    <v-btn
                      v-if="item.status == 'preparing'"
                      text
                      color="primary"
                      @click.stop="changeStatus(item)"
                    >
                      Preparing
                    </v-btn>
                    <v-btn
                      v-if="item.status == 'readytoserve'"
                      text
                      color="success"
                      
                    >
                      Ready To Serve
                    </v-btn>
                  </template>
                </v-data-table>
              </v-card>
            </v-flex>
          </v-layout>
        </v-form>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
// import axios from "axios";
export default {
  data() {
    return {
      headers: [
        { text: "Customer Name", value: "name", sortable: true },
        { text: "No. of Items", value: "items" },
        { text: "Total Amt", value: "amount" },
        { text: "Status", value: "status",align:"center" }
      ],

      orders:[],
      Index:-1,
      Item:{},
     
      pageStart: 0,
      pageEnd: 0,
      count: 0,
      itemsPerPage: 10,
      page: 1,
      totalpages: 0,
      ItemsCount: [10, 25, 50],
    };
  },
 
  created () {
      this.initialize()
    },
  methods: {

    initialize(){
      this.orders = [
        {
          name: 'Tom JJ',
          items: 3,
          amount: 160,
          status:'orderReceived',
          id: '1',
        },
        {
          name: 'Alex Cook',
          items: 2,
          amount: 190,
          status:'orderReceived',
          id: '2',
        },
        {
          name: 'John M',
          items: 6,
          amount: 169,
          status:'orderReceived',
          id: '3',
        },
        {
          name: 'Thomas Jose',
          items: 5,
          amount: 311,
          status:'orderReceived',
          id: '4',
        },
        {
          name: 'James J',
          items: 3,
          amount: 160,
          status:'orderReceived',
          id: '5',
        },
        {
          name: 'Jose Mathew',
          items: 4,
          amount: 100,
          status:'orderReceived',
          id: '6',
        },
        {
          name: 'Chris Tom',
          items: 3,
          amount: 392,
          status:'orderReceived',
          id: '7',
        },
        {
          name: 'Ben Joe',
          items: 4,
          amount: 320,
          status:'orderReceived',
          id: '8',
        },
        {
          name: 'Paul George',
          items: 2,
          amount: 250,
          status:'orderReceived',
          id: '9',
        },
        {
          name: 'George ',
          items: 1,
          amount: 60,
          status:'orderReceived',
          id: '10',
        },
      ]
    },
    
    //Function changes the status with respect to current status
    changeStatus(item){
      if(item.status == 'orderReceived'){
         this.Index = this.orders.indexOf(item)
         item.status = 'preparing'

      }else if(item.status == 'preparing'){
         this.Index = this.orders.indexOf(item)
         item.status = 'readytoserve'
      }

    }
  },
};
</script>
<style >
tbody tr:nth-of-type(odd) {
  background-color: rgba(211, 22, 69, 0.05);
}
.row-pointer > .v-data-table__wrapper > table > tbody > tr :hover {
  cursor: pointer;
}
</style>



