function kirim() {
    let inp_nama = document.getElementById("username").value ;
    let inp_pass = document.getElementById("password").value ; 
    let form = document.getElementById("form") ;
    if (inp_nama == "username" && inp_pass == "password" ){
        form.setAttribute ("action" , "dashboard.html");
        alert("Login Berhasil!");
    }
    else {
        alert ("Login Gagal!!! \nUsername dan Password Salah!")
    }
    console.log(inp_pass + inp_nama);
     
}