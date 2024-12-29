import graphene
from graphene_django import DjangoObjectType, DjangoListField
from .models import Inventory


class InventoryType(DjangoObjectType):
    class Meta:
        model = Inventory
        fields = (
            "product_name",
            "quantity_in_stock",
            "reorder_level",
            "supplier",
            "last_restocked",
        )


class Query(graphene.ObjectType):
    inventory_list = graphene.List(InventoryType)

    def resolve_inventory_list(self, info, **kwargs):
        return Inventory.objects.all()
