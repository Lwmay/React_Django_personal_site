from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view

from shared.shared_settings import APP_LIST
from batchReport.models import BatchModel
from batchReport.api.serializer import BatchReportSerializer


@api_view(['GET', ])
def api_log_all(request):
    try:
        batch_log = BatchModel.objects.all().order_by('-id')[:10]
        serializer = BatchReportSerializer(batch_log, many=True)
    except BatchModel.DoesNotExist:
        return Response(status.HTTP_503_SERVICE_UNAVAILABLE)

    if request.method == "GET":
        return Response(serializer.data, status=200)


@api_view(['GET', ])
def api_log_completed(request):
    data = []
    try:
        for app_name in APP_LIST:
            log_completed = {}
            batch_log = BatchModel.objects.filter(status='completed', job_name=app_name).order_by('-id')[:1]
            serializer = BatchReportSerializer(batch_log, many=True)
            if len(serializer.data) != 0:
                log_completed['app_name'] = app_name
                log_completed['last_update'] = serializer.data[0]['snapshot_date']
                data.append(log_completed)

    except BatchModel.DoesNotExist:
        return Response(status.HTTP_503_SERVICE_UNAVAILABLE)

    if request.method == "GET":
        return Response(data, status=200)


@api_view(['GET', ])
def last_batch(request):
    data = []
    try:
        for app_name in APP_LIST:
            last_log = {}
            batch_log = BatchModel.objects.filter(job_name=app_name).order_by('-id')[:1]
            serializer = BatchReportSerializer(batch_log, many=True)
            if len(serializer.data) != 0:
                last_log['app_name'] = app_name
                last_log['status'] = serializer.data[0]['status']
                data.append(last_log)

    except BatchModel.DoesNotExist:
        return Response(status.HTTP_503_SERVICE_UNAVAILABLE)

    return Response(data, status=200)