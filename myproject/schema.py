import graphene
import firstapp.schema


class Query(firstapp.schema.Query, graphene.ObjectType):
    pass


schema = graphene.Schema(query=Query)
