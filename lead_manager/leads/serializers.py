from rest_framework import serializers
from .models import Lead
# from leads.models import Lead

# LEAD SERIALIZER
class LeadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lead
        fields = '__all__'