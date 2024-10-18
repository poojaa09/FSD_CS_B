function register(){
    wait()
    console.log("register end")
}
function login(){
    wait()
    console.log("register end")
}
function display(){
    wait()
    console.log("display user data")
}
function wait(){
    const m=5000+new Date().getTime()
    while(m>new Date()){}
}
register()
login()
display()