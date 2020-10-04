import React, {useState, useEffect} from 'react';
import VideoTable from '../components/VideoTable';
import Container from '@material-ui/core/Container';
import Search from '../components/Search';
import useDebounce from "../utils/Debounce";

export default function VideoSearch() {
    const [videoState, setVideoState] = useState({
      initialVideos: [],
      searchedVideos: []
    });

    const [searchTerm, setSearchTerm] = useState('');

    const fetchData = async (query) => {
      let data = await fetch(`api/videos/search/q=${query}`, {
          method: 'GET'
      }).then(response => response.json())
      console.log(data)
      setVideoState({...videoState, searchedVideos : data.items});
    };

    const debouncedSearchTerm = useDebounce(searchTerm);

    useEffect(
      () => {
        if (debouncedSearchTerm) {
          fetchData(debouncedSearchTerm);
        } else {
          setVideoState({...videoState, searchedVideos : []});
        }
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
      ,[debouncedSearchTerm]);

      const handleChange = e => {
        setSearchTerm(e.target.value);
      };
  
      return (
        <>
        <Search handleChange={handleChange}/>
        <Container>
          <VideoTable
          videos={videoState.searchedVideos.length ? videoState.searchedVideos: videoState.initialVideos}>
          </VideoTable>
        </Container>
        </>
      );
  }

