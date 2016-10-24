// Create new component. This component should produce some HTML
import React, {Component } from 'react';
import _ from 'lodash';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import SearchBar from './components/search_bar';
const YOUTUBE_API_KEY = 'AIzaSyBpiNLlhwdSX1I3s8q0eI7x4mqAMK8JaXs';



const containerElement = document.querySelector('.container');

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			videos: [],
			selectedVideo: null
		};
		this.videoSearch('alien');
	}

  render() {
	  
	  const videoSearch = _.debounce((query) => {this.videoSearch(query)}, 500);
	  
		return (
			<div>
				<SearchBar
					onSearchTermChange={videoSearch}/>
				<VideoDetail video={this.state.selectedVideo}/>
				<VideoList
					videos={this.state.videos}
					onVideoSelect={selectedVideo => this.setState({selectedVideo})}
				/>
			</div>
		);
	}
	
	videoSearch = (term) => {
		YTSearch({
			key: YOUTUBE_API_KEY, term: term
		}, (videos) => {
			this.setState({
				videos: videos,
				selectedVideo: videos[0]
			});
		});
	}
};

// Take this component's generated HTML and put it on the Page
ReactDOM.render(<App />, containerElement);
