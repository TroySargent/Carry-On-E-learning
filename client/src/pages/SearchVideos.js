import React, {useState, useEffect} from "react";



export default function VideoSearch() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]); 

    const fetchData = async (query) => {
      let {items} = await fetch("api/videos/search", {
          method: 'GET'
      }).then(response => response.json())
      setItems(items);
    };

    useEffect(() => {
      try {
        fetchData()
      }
      catch {
        setIsLoaded(true);
        setError(error);
      }
    }, [])
  
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

