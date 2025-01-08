import React from 'react';
import { gql, useQuery } from '@apollo/client';



function GraphQL() {

  const GET_INVENTORY = gql`
query {
  inventory(id: 1) {
    productName,
    quantityInStock,
    lastRestocked
  }
}
`;


  const { loading:inventoryLoading, error:inventoryError, data:inventoryData } = useQuery(GET_INVENTORY);


  const showGraphQl = (queryData:object):void => {
    console.log(queryData)
  }

  return (
    <div style={styles.container}>
      <button style={styles.button} onClick={() => showGraphQl(inventoryData)}>
        データ一つ取得
      </button>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    textAlign: 'center',
    padding: '50px',
    fontFamily: 'Arial, sans-serif',
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

export default GraphQL;
