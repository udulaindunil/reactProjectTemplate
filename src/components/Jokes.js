import React, {Component} from 'react';

const Joke = ({joke: {setup, punchline }}) => <p style={{margin:20}}>{setup} <em>{punchline}</em></p>
  

class Jokes extends Component{
     state ={joke:{}, jokes:[],profile:{},schoolDetails:{}};

     componentDidMount(){

        fetch('https://official-joke-api.appspot.com/random_joke').then(response=>{
             return response.json();
        }).then(json=>{this.setState({joke:json})
        }).catch(error=>alert(error.message));


        fetch('http://localhost:9092/user/123').then(response=>{
            console.log(response);
             return response.json();
        }).then(json=> {
            console.log(json.profile);
            console.log(json.schoolDetails);
            this.setState({profile:json.profile});
            this.setState({schoolDetails:json.schoolDetails});
        }).catch(error=>alert(error.message));
     }


     fetchJokes =()=>{
         fetch('https://official-joke-api.appspot.com/random_ten').then(response=>{
             return response.json();
         }).then(
             json=> this.setState({jokes:json})
         ).catch(error=>alert(error.message))
     }


     render(){

        
        const {userId,age,address} = this.state.profile;
        const x = this.state.schoolDetails.schools;
       
        console.log(x);
        

        // {"profile":{"userId":"123","age":23,"address":"Rathnapura"},"schoolDetails":{"schools":[{"schoolId":1,"schoolName":"no Schools","address":""}]}}
        // const {profile} = this.state.profile;
       


         return(

            <div>

               
                <h4>Highlighted Jokes</h4>
                <Joke joke={this.state.joke}/>

                <h4>
                    10 jokes 
                </h4>
                <button onClick={this.fetchJokes}>Click Me!</button>
                {
                    this.state.jokes.map(joke=> <Joke key={joke.id} joke={joke} />)
                }

                    <div>
                        <table style={{textAlign:"left"}}>
                            <tbody>
                            <tr><th colSpan="2">User Details</th>
                            </tr>
                            <tr><th>
                                    UserId
                                </th>
                                <td>
                                    {userId}
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    Age
                                </th>
                                <td>
                                    {age}
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    Address
                                </th>
                                <td>
                                    {address}
                                </td>
                            </tr>
                            </tbody>
                        </table>

                        <table>
                            
                            <tbody>
                                    <tr>
                                        <td>
                                            
                                        </td>
                                    </tr>
                           
                                    </tbody>
                            
                        </table>
                    </div>

                    <hr/>

                    <div>
                       
                    </div>

            </div>
         )
     }
}

export default Jokes;