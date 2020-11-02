import React from 'react';
import axios from 'axios';

export class Fetcher extends React.Component {
    constructor(props) {
      super(props);
   
      this.state = {
        data: null,
        isLoading: false,
        error: null,
      };
    }
   
    myFetch(query){
        this.setState({ isLoading: true });
        // axios.get("https://burmese.dvb.no/wp-json/wp/v2/"+query)
        // axios.get("https://westernnewsagency.com/wp-json/wp/v2/"+query)
        axios.get("https://sportsmyanmar.com/wp-json/wp/v2/"+query)
        // axios.get("https://popularpostnews.com/wp-json/wp/v2/"+query)
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
        this.myFetch(this.props.query);
    }
    componentDidUpdate(prevProps) {
        if (prevProps.query !== this.props.query) {
            this.myFetch(this.props.query);
        }
    }
   
    render() {
      return this.props.children(this.state);
    }
  }

