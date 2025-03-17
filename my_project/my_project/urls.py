from django.http import JsonResponse
from django.contrib import admin
from django.urls import path, include

# Функція для головної сторінки
def home(request):
    return JsonResponse({"message": "API працює!"})

urlpatterns = [
    path('', home),  # 👈 Додаємо цей маршрут
    path('admin/', admin.site.urls),
    path('api/', include('posts.urls')),
]
