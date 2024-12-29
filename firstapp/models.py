from django.db import models


class Inventory(models.Model):
    product_name = models.CharField(max_length=255)
    quantity_in_stock = models.PositiveIntegerField()
    reorder_level = models.PositiveIntegerField()
    supplier = models.CharField(max_length=255)
    last_restocked = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.product_name
