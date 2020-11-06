from django.urls import path, include
from .models import Plan
from rest_framework import routers, serializers, viewsets

#Encargado de serializar los datos que llegan
class PlanSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Plan
        fields = ['id','name', 'description', 'price', 'image']

class PlanViewSet(viewsets.ModelViewSet):
    queryset = Plan.objects.all()
    filter_backends = []
    serializer_class = PlanSerializer

router = routers.DefaultRouter()
router.register(r'', PlanViewSet)

urlpatterns = [
    path('', include(router.urls))
]