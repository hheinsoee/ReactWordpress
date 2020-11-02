import React from 'react';
import axios from 'axios';
import {Loading, Error} from '../../splash'

export default class Media extends React.Component {
    
    constructor(props) {
      super(props);
   
      this.state = {
        data: null,
        isLoading: false,
        error: null,
      };
    }
   
    myFetch(url){
        const secureUrl = url.replace(/^http:\/\//i, 'https://')
        const mediaLink = secureUrl+'?_fields=media_details,title';

        this.setState({ isLoading: true });
        axios.get(mediaLink)
        .then(result => this.setState({
          data: result.data,
          isLoading: false
        }))
        .catch(error => this.setState({
          error,
          isLoading: false
        }));
    }

    componentDidMount() {
        this.myFetch(this.props.json_link);
    }
    componentDidUpdate(prevProps) {
        if (prevProps.json_link !== this.props.json_link) {
            this.myFetch(this.props.json_link);
        }
    }
    
    render() {
        const {data, isLoading, error} = this.state;
        if (error) {
        return <center><Error {...error}/></center>;
        }

        if (isLoading||!data) {
            return <center><Loading/></center>;
        }
        else{
            const style={
                caption:{
                    color:'#fff',
                    height:'20px',
                    margin:'-25px 0px 0px 5px',
                }
            }
            const pic = data.media_details.sizes[this.props.size];
            return(
                <div>
                { pic ? (
                    <img style={this.props.style} src={pic.source_url}/>
                ):(<></>)}
                {this.props.caption ? (
                    <div style={style.caption}><i>{data.title.rendered}</i></div>
                ):(<></>)}
                </div>
            )
        }
      
    }
  }
