import React, {useState, useEffect} from 'react';
import SearchTable from '../components/SearchTable';
import Container from '@material-ui/core/Container';
import Search from '../components/Search';
import useDebounce from "../utils/Debounce";

export default function App() {
  const [bookState, setBookState] = useState({
    initialBooks: [],
    searchedBooks: []
  });

  const [searchTerm, setSearchTerm] = useState('');

  const fetchData = async (query) => {
    let {items} = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`, {
        method: 'GET'
    }).then(response => response.json())
    setBookState({...bookState, searchedBooks : items});
  };
  
  const debouncedSearchTerm = useDebounce(searchTerm);

  useEffect(
    () => {
      if (debouncedSearchTerm) {
        fetchData(debouncedSearchTerm);
      } else {
        setBookState({...bookState, searchedBooks : []});
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
      <SearchTable
      books={bookState.searchedBooks.length ? bookState.searchedBooks: bookState.initialBooks}>
      </SearchTable>
    </Container>
    </>
  );
}