<template>
    <div class="bye">
    <h1>Student Details</h1>
    <div class="row">
      <div class="col-sm-12">
        <div v-for="item in finallist" v-bind:key="item.id">
          <h4 class="mt-4">Student ID:{{item.detailid}}</h4>
          <h4 class="mt-2">Student Name:{{item.name}}</h4>
          <table class="table table-striped w-50 text-center mx-auto" aria-describedby="table">
              <tr>
                  <th colspan="2" class="mt-2">Result</th>
              </tr>
              <tr>
              <td>Semester1:</td>
              <td>{{item.result.semester1}}</td>
              </tr>
               <tr>
              <td>Semester2:</td>
              <td>{{item.result.semester2}}</td>
              </tr>
               <tr>
              <td>Semester3:</td>
              <td>{{item.result.semester3}}</td>
              </tr>
               <tr>
              <td>Semester4:</td>
              <td>{{item.result.semester4}}</td>
              </tr>
              <tr>
              <td><strong>Status:</strong></td>
              <td><strong>{{item.result.totalbacklogs}} backlogs</strong></td>
              </tr>
          </table>
          <hr>
          <table class="table table-striped mx-auto text-center w-50"  aria-describedby="table">
              <tr>
                  <th colspan="2">Fees Details</th>
              </tr>
              <tr>
                  <td>Semester 1:</td>
                  <td>{{item.fees.semester1}}</td>
              </tr>
                <tr>
                  <td>Semester 1:</td>
                  <td>{{item.fees.semester2}}</td>
                </tr>
                 <tr>
                   <td>Semester 3:</td>
                   <td>{{item.fees.semester3}}</td>
                 </tr>
                    <tr>
                     <td>Semester 4:</td>
                     <td>{{item.fees.semester4}}</td>
                   </tr>
                   <tr>
                  <td><strong>Status:</strong></td>
                  <td><strong>{{item.fees.status}}</strong></td>
                  </tr>
          </table>
        </div>
      </div>

    </div>
    </div> 
</template>


<script>
export default{
   name:"StudentDetails",
   data(){
       return{
           d1:"tanmay",
           studentdetails:[{detailid:1,name:"tanmay",result:{
               "semester1":"8 CGPA","semester2":"7 CGPA","semester3":"9 CGPA",
               "semester4":"7 CGPA","totalbacklogs":0
           },fees:{ 
               "semester1":25000,
               "semester2":25000,
               "semester3":30000,
               "semester4":30000,
               "status":"paid"
           }
           },
           {detailid:2,name:"Shivam",result:{
               "semester1":"5 CGPA","semester2":"fail","semester3":"7 CGPA",
               "semester4":"fail","totalbacklogs":2
           },fees:{ 
               "semester1":25000,
               "semester2":25000,
               "semester3":28000,
               "semester4":28000,
               "status":"4000 remainig"
           }},
           {detailid:3,name:"Smit",result:{
               "semester1":"6 CGPA","semester2":"7 CGPA","semester3":"backlog",
               "semester4":"7 CGPA","totalbacklogs":1
           },fees:{ 
               "semester1":25000,
               "semester2":25000,
               "semester3":0,
               "semester4":0,
               "status":"2 semesters fees pending"
           }
           },
           ],
       }
   },
   computed:{
    finallist(){
       return this.studentdetails.filter(i=>i.detailid == this.$route.params.id)
    }
   }
}
</script>


<style>

</style>