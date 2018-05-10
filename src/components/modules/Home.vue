<template>
<transition name="el-zoom-in-top">
    <div class="content-wrapper">
        <!-- Main content -->
        <section class="content pie-container">
            <div class="row">
                <div class="col-md-6 pie">
                    <!-- Default box -->
                    <div class="box">
                        <div class="box-body">
                            <div class="text-chart">Delivery Rate</div>
                            <ve-pie :data="chartData1" :settings="chartSettings"></ve-pie>
                        </div>
                        <!-- /.box-body -->
                    </div>
                </div>
                <div class="col-md-6 pie">
                    <!-- Default box -->
                    <div class="box">
                        <div class="box-body">
                            <div class="text-chart">Response Rate</div>
                            <ve-pie :data="chartData2" :settings="chartSettings"></ve-pie>
                        </div>
                        <!-- /.box-body -->
                    </div>
                </div>               
            </div>
        </section>
        <!-- /.content -->
    </div>
</transition>
</template>
<script>
  module.exports = {
    created: function () {
      this.chartData1 = {
        columns: ['title', 'value'],
        rows: [
          { 'title': 'new', 'value': 3 },
          { 'title': 'existing', 'value': 6 }
        ]
      }
      this.chartData2 = {
        columns: ['title', 'value'],
        rows: [
          { 'title': 'Lagos', 'value': 213 },
          { 'title': 'Abuja', 'value': 133 },
          { 'title': 'Kano', 'value': 62 }
        ]
      }
      this.chartSettings = {
        metrics: 'value',
        dimension: 'title'
      }
    }
  }
</script>
<style>
.pie{
    margin-top: 50px
}
@media  (max-width:767px) {
    ve-pie{
        width: 100%
    }
    .pie-container{
        margin-top: 30px
    }
}
</style>