import React, {useState, useEffect} from "react";



export default function SavedSearch() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
  
    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
      fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&order=viewCount&q=skateboarding%20dog&type=video&videoDefinition=high&key=AIzaSyBbhfp3i26VJfbzmO9HH-3WzKnqmntJqSw")
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            console.log(result)
            setItems(result.items);
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])
  
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {items.map(item => (
            <li key={item.id.videoId}>
              {item.snippet.title}
            </li>
          ))}
        </ul>
      );
    }
  }

