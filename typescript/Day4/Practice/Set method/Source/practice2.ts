var st = new Set()

st.add("tanmay")
st.add("vishwa")
st.add('harshit').add('jhon').add('vir').add('zara')
console.log(st)
console.log(st.has('tanmay'))
console.log(st.size)

var tm = st.forEach(function(value){
   console.log(value[2])
}) 