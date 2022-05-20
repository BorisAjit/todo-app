class AuthenticationService{
    registerSuccessfullLogin(userName, password){
        console.log('registration Succssful')
        sessionStorage.setItem('authenticatedUser', userName);
    }
    logout(){
        sessionStorage.removeItem('authenticatedUser')
    }
    isUserLoggedin(){
        let user = sessionStorage.getItem('authenticatedUser')
        if(user === null) {
            return false
        }
        else{
            return true
        }
    }
}
export default new AuthenticationService();