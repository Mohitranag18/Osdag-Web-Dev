# connections/urls.py

from django.urls import path
from .views import beam_to_beam_connection_view

urlpatterns = [
    path('beam-to-beam-connection/', beam_to_beam_connection_view, name='beam-to-beam-connection'),
]
