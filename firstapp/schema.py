import graphene
from graphene_django import DjangoObjectType, DjangoListField
from .models import Inventory


class InventoryType(DjangoObjectType):
    class Meta:
        model = Inventory
        fields = "__all__"


class Query(graphene.ObjectType):
    # Queries - Fields
    inventory_list = graphene.List(InventoryType)
    # Queries - Arguments
    inventory = graphene.Field(InventoryType, id=graphene.Int(required=True))

    def resolve_inventory_list(self, info, **kwargs):
        return Inventory.objects.all()

    def resolve_inventory(self, info, id):
        try:
            return Inventory.objects.get(id=id)
        except Inventory.DoesNotExist:
            return None
