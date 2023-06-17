import { Component } from "react";

const Gender = {
    MALE: 'male',
    FEMALE: 'female'
}

const INITIAL_STATE = {
    login: "",
    email: "",
    password: "",
    agreed: false,
    gender: null,
    age: ""
}

export class SignUpForm extends Component {
    state = { ...INITIAL_STATE }

    handleChange = e => {
        const {value, name, type, checked } = e.target
        this.setState({ [name]: type === 'checkbox' ? checked : value })
    }

    handleSubmit = evt => {
        evt.preventDefault()
        if (!this.state.agreed) {
            return console.log('must agree to terms', this.state.agreed)
        }
        
        const { login, email, password } = this.state

        console.log(`Login: ${login}, Email: ${email},  Password: ${password}`)

        this.props.onSubmit({ ...this.state})
        this.reset()
    }

    reset = () => {
        this.setState({ ...INITIAL_STATE })
    }




    render() {
        const { login, email, password, agreed, gender, age } = this.state

        return (
        <form onSubmit={this.handleSubmit}>
            <label>
                Name
            <input
                type="text"
                placeholder="Enter login"
                name="login"
                value={login}
                onChange={this.handleChange}
            
            />
            </label>
            <label>
                Email
            <input
                type="email"
                placeholder="Enter email"
                name="email"
                value={email}
                onChange={this.handleChange}
            
            />
            </label>
            <label>
                Password
            <input
                type="password"
                name="password"
                placeholder="Enter password"
                value={password}
                onChange={this.handleChange}
            
            />
            </label>

            <label>
                Agree to terms
            <input
                type="checkbox"
                name="agreed"
                checked={agreed}
                onChange={this.handleChange}
            
            />
            </label>

            <section>
                <h3>Choose your gender</h3>
            <label>
                Male
            <input
                type="radio"
                name="gender"
                checked={gender === Gender.MALE}
                onChange={this.handleChange}
                value={Gender.MALE}
            
            />
            </label>
            <label>
                Female
            <input
                type="radio"
                name="gender"
                checked={gender === Gender.FEMALE}
                onChange={this.handleChange}
                value={Gender.FEMALE}
            
            />
            </label>
            </section>

            <label>
                Choose your age
            <select name="age" value={age} onChange={this.handleChange}>
                <option value="" disabled>
                    ...
                </option>
                <option value="18-25">
                    18-25
                </option>
                <option value="26-35">
                26-35
                </option>
                <option value="36+">
                36+
                </option>

            </select>
            </label>





            <button type="submit">Sign up as {login}</button>
        </form>
        )
    }
}

