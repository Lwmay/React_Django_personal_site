from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from batchReport.api.views import api_log_all, api_log_completed, last_batch

app_name = 'batchReport'

urlpatterns = [
    path('log', api_log_all, name="log"),
    path('log-completed', api_log_completed, name="log-completed"),
    path('last-batch', last_batch, name="last_batch"),
]

urlpatterns = format_suffix_patterns(urlpatterns)