<template>
  <v-row justify="center" align="center">
    <v-col>
      <v-card>
  
        <v-card-title class="headline">
          <v-avatar size="128">
            <v-img src="/gather/mining.png"></v-img>
          </v-avatar>
        </v-card-title>
        <v-card-text>
          获得 10 铜矿/秒
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
          >
            采集
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>

    <v-col>
      <v-card>
        <v-card-title class="headline">
          木材
          <v-spacer></v-spacer>
          <v-avatar size="128">
            <v-img src="/gather/logging.png"></v-img>
          </v-avatar>
        </v-card-title>
        <v-card-text>
          获得 10 木材/秒
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
          >
            采集
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
    
    <v-col>
      <v-card>
        <v-card-title class="headline">
          <v-avatar size="128">
            <v-img src="/gather/logging.png"></v-img>
          </v-avatar>
        </v-card-title>
        <v-card-text>
          浆果
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            v-on:click="handleClick('hi')"
          >
            采集
          </v-btn>
        </v-card-actions>
      </v-card>

    </v-col>
  </v-row>
</template>

<script lang="ts">



</script>
