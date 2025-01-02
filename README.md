# django + graphql + react
## 目標
1. GraphQLを稼働できる環境を作る 〇
2. いろんなクエリを送ってみる
2. どんな場合GraphQLを使った方がいいなのかちゃんと理解する。
3. 依存性などを会社のプロジェットにインストールするため必要なのは何か把握する。

## 目標1：GraphQLを稼働できる環境を作る
### GraphQL稼働
 * pip install graphene-django
 * アプリケーションにschema.py追加 → projectの直下にschema.py追加＆中にアプリケーションのschema.pyをimport → settings.pyにGRAPHENE = {"SCHEMA": "myproject.schema.schema"}追加
 * アプリケーションのurls.pyにpath("graphql/", csrf_exempt(GraphQLView.as_view(graphiql=True))),追加
 * http://127.0.0.1:8000/first/graphql でクエリを送れるようになる。

### Reactとの連携
 * npm install @apollo/client graphql
 * App.jsxのようなエントリファイルにApolloClient設置
 * クエリを実行したいコンポーネントで
```javascript
const GET_TODOS = gql`
  query {
    todoListField(completed: false) {
      task
      timestamp
      completed
    }
  }
`;

const { loading, error, data } = useQuery(GET_TODOS);