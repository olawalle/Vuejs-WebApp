<template>
    <div class="create-contact">
        <el-button type="info" v-on:click="openForm" v-show="!isCreating"><i class='fa fa-pencil'></i>&nbsp;&nbsp;Add New Task</el-button>
        <div v-show="isCreating">
            
        <div class="add pull-right">
          <span class="secondary-btn" a href="#" data-toggle:tooltip title="enter details" :plain="true" @click="dialogTableVisible = true"><i class="fa fa-pencil"></i></span><br><br>
          <span class="secondary-btn" a href="#" data-toggle:tooltip title="Upload from file" :plain="true" @click="dialogTableVisible2 = true"><i class="fa fa-upload"></i></span><br><br>
            <a href="#">
              <div style="display:table-cell;
                        vertical-align:middle;
                        width:50px;
                        height:50px; 
                        box-shadow:3px 3px 3px #959595;
                        background-color: #2a3bd3;
                        border-radius: 50%">
                <div style="text-align:center; color:#fff; font-size:25px">+</div>
              </div>
            </a>  
        </div>   
            <el-dialog title="Add Contact" :visible.sync="dialogTableVisible">
              <form action="" class="contact">
                <fieldset class="contact-inner">
                  <p class="contact-input">
                    <input type="text" name="name" placeholder="FullName" autofocus>
                  </p>
                  <p class="contact-input">
                    <input type="number" name="number" placeholder="Number" autofocus>
                  </p>
                  <p class="contact-input">
                    <input type="text" name="address" placeholder="Address" autofocus>
                  </p>
                  <p class="contact-input">
                    <input type="text" name="email" placeholder="Email address" autofocus>
                  </p>
                  <p class="contact-submit">
                    <input type="submit" value="Create Contact">
                  </p>
                </fieldset>
              </form>
          </el-dialog>
          <el-dialog title="Add Contact" :visible.sync="dialogTableVisible2">
              <form action="" class="contact">
                <fieldset class="contact-inner">
                  <p class="contact-input">
                    <input type="file" name="upload" placeholder="Upload contact" autofocus>
                  </p>
                  <p class="contact-submit">
                    <input type="submit" value="Create Contact">
                  </p>
                </fieldset>
              </form>
          </el-dialog>
                <div>
                    <el-button v-on:click="sendForm()" type="info">Create</el-button>
                    <el-button v-on:click="closeForm" type="info">Cancel</el-button>
                  
              </div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      number: ''
    }
  },
  methods: {
    openForm () {
      this.isCreating = true
    },
    closeForm () {
      this.isCreating = false
    },
    sendForm () {
      if (this.name.length > 0 && this.number.length > 0) {
        const name = this.name
        const number = this.number
        this.$emit('create-contact', {
          name,
          number
        })
        this.name = ''
        this.number = ''
      }
    }
  }
}
</script>
