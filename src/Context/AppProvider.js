import React from 'react'
import Axios from 'axios'
import AppContext from './AppContext'

const URL = {
    BASE: 'https://newsapi.org/v2/top-headlines',
    API_KEY: '0dc8ac7f0e564f7a98de3c56a0d9c640',
    COUNTRY: 'in',
    getDefaultUrl: function(country=this.COUNTRY){
        return this.BASE+'?apikey='+this.API_KEY+'&country='+country;
    }
};
class AppProvider extends React.Component{
    componentDidMount(){
        this.state.setNews();
    }
    state = {
        news: [],
        setNews: ()=>{
           
            Axios.get(URL.getDefaultUrl()).then((promise)=>{
                this.setState({
                    news: promise.data.articles
                });
                this.news = promise.data.articles;
            }, function(e){
                console.error(e);
            });
        },
        setUSNews: ()=>{
            Axios.get(URL.getDefaultUrl("US")).then((promise)=>{
                this.setState({
                    news: promise.data.articles
                });
                this.news = promise.data.articles;
            }, function(e){
                console.error(e);
            });

        }
    }

    render(){
        return(
            <AppContext.Provider
                value={this.state}>

                {this.props.children}
            </AppContext.Provider>
        )
    }
}

export default AppProvider;

