from .models import Lead
from rest_framework import viewsets, permissions
from .serializers import LeadSerializer

# LEAD VIEWSETS
class LeadViewSet(viewsets.ModelViewSet):
    queryset = Lead.objects.all()
    permissions_class = [
        permissions.AllowAny
    ]

    serializer_class = LeadSerializer