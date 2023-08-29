// Write your JS code here
import './index.css'
import {Component} from 'react'
class LoginForm extends Component{
    state={username:'',password:'',showErrorMsg:false,errorMsg:''}

    onChangeUsername=event=>{
        this.setState({username:event.target.value})
    }

    onChangePassword=event=>{
        this.setState({password:event.target.value})
    }

    onLoginSuccess=()=>{
        const {history}=this.props
        history.replace('/')
    }

    onLoginFailure=(errorMsg)=>{
        this.setState({showErrorMsg:true,errorMsg})
    }

    onSubmitForm = async event=>{
        event.preventDefault()
        const {username,password}=this.state
        const userDetails={username,password}
        const url = 'https://apis.ccbp.in/login'
        const options={
            method:'POST',
            body:JSON.stringify(userDetails),
        }
        const response = await fetch(url,options)
        const data= await response.json()
        if(response.ok===true){
            this.onLoginSuccess()
        }
        else{
            this.onLoginFailure(data.error_msg)
        }
    }

    render(){
        const {username,password,showErrorMsg,errorMsg}=this.state
        return(
            <div className="login-container">
            <img src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png" alt="website logo" className="logo-img-view"/>
            <img src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png" alt="website login" className="login-img"/>
            <form className="login-form" onSubmit={this.onSubmitForm}>
            <img src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png" alt="website logo" className="logo-img"/>
            <div className="login-sub-container">
            <label htmlFor="username" className="label">USERNAME</label>
            <input type="text" id="username" className="value" value={username} onChange={this.onChangeUsername} placeholder="Username"/>
            </div>
            <div className="login-sub-container">
            <label htmlFor="password" className="label">PASSWORD</label>
            <input type="password" id="password" className="value" value={password} onChange={this.onChangePassword} placeholder="Password"/>
            </div>
            <button type="submit" className="login-btn">Login</button>
            {showErrorMsg && <p className="error-message">*{errorMsg}</p>}
            </form>
            </div>
        )
    }
}
export default LoginForm
