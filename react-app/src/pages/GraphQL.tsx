import React from 'react';
import { gql, useQuery, useLazyQuery  } from '@apollo/client';

// クエリ(READ)の形式
// query {
// クエリの名前(クエリに入れるパラメータ){
// クエリの結果の中で取りたいフィールド
// }
// }

function GraphQL() {

// -----------------Query-----------------
  const GET_INVENTORY = gql`
query {
  inventory(id: 1) {
    productName,
    quantityInStock,
    lastRestocked
  }
}
`;

 const GET_MULTI_QUERY = gql`
 query {
  firstData: inventory(id: 2) {
    productName,
    lastRestocked
  }
  secondData: inventory(id: 3) {
    productName,
    quantityInStock
  }
}
 `;

// パラメータをもらうクエリは以下のようにクエリの実行する
// タイプ指定はjsx,tsx両方いる
 const GET_FETCH_INVENTORY = gql`
query ($id:Int!){
    inventory(id: $id) {
    productName,
    quantityInStock
  }
}
 `;
// -----------------Mutaion-----------------

  const { loading:inventoryLoading, error:inventoryError, data:inventoryData } = useQuery(GET_INVENTORY);
  const { loading:multiQueryLoading, error:multiQueryError, data:multiQueryData } = useQuery(GET_MULTI_QUERY);
  // ボタンをクリックする際実行させるための関数fetchInventory
  const [fetchInventory, { loading, data:fetchData, error }] = useLazyQuery(GET_FETCH_INVENTORY,{ variables: { id: 1 } });

  // ForeignKeyを通じて参照しているデータを持ってくる＆その中で必要なデータだけ選択する。

  // N：M関係のテーブルのデータを持ってくる。


  const showGraphQl = (queryData:object):void => {
    console.log(queryData)
  }

  const handleFetchInventory = () => {
    fetchInventory();
    console.log(fetchData)
  };


  return (
    <div style={styles.container}>
      <button style={styles.button} onClick={() => showGraphQl(inventoryData)}>
        データ一つ取得
      </button>
      <button style={styles.button} onClick={() => showGraphQl(multiQueryData)}>
        マルチクエリ
      </button>
      <button style={styles.button} onClick={handleFetchInventory}>
        ボタンをクリックしたらリクエスト実行
        {fetchData &&
          <>
          <br/>
          結果
          <br/>
          製品名：{fetchData?.inventory.productName}
          <br/>
          在庫量：{fetchData?.inventory.quantityInStock}</>
        }
      </button>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display:'flex',
    flexDirection:'column',
    textAlign: 'center',
    padding: '50px',
    fontFamily: 'Arial, sans-serif',
  },
  button: {
    margin:'10px',
    width: 'fit-content',
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
