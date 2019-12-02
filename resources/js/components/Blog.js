import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
export default class Blog extends Component {
    constructor(){
        super();
        
        this.state = {
            blogs: []
        }
    }
        // console.log(super());  
        async componentDidMount() {
            const response = await axios.get('/blog/public/api/blog');
            //const data = await response.json();
            console.log(response.json())
            this.setState({blogs:response.data})


            /* this._isMounted = true;
            await axios.get('/blog/public/api/blog')
            .then(response =>{                
                this.setState({
                    blogs: response.data
                });
            })
            .catch(errors =>{
                console.log(errors);            
            }); */
        }

       
    render() {
        return (
            <div className="container">
                {this.state.blogs.map(blog=>{
                    return <li key="blog.id">{blog.name} </li>
                })}
            </div>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Blog />, document.getElementById('example'));
}
