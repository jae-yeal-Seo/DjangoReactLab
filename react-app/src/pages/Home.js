import React from 'react';
import { gql, useQuery } from '@apollo/client';



function Home() {

  const GET_INVENTORY = gql`
query {
  inventoryList {
    productName,
    quantityInStock,
    lastRestocked
  }
}
`;

  const { loading, error, data } = useQuery(GET_INVENTORY);


  const showGraphQl = () => {
    console.log(data)
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to the Home Page</h1>
      <p style={styles.description}>
        This is the main page of our application. Feel free to explore and navigate to other sections using the menu.
      </p>
      <button style={styles.button} onClick={showGraphQl}>
        Click Me
      </button>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '50px',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    fontSize: '2.5em',
    color: '#333',
  },
  description: {
    fontSize: '1.2em',
    color: '#555',
    margin: '20px 0',
  },
  button: {
    padding: '10px 20px',
    fontSize: '1em',
    color: '#fff',
    backgroundColor: '#007BFF',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default Home;
