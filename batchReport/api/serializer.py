from rest_framework import serializers
from batchReport.models import BatchModel


class BatchReportSerializer(serializers.ModelSerializer):
    class Meta:
        model = BatchModel
        fields = [
            'start_time',
            'end_time',
            'job_name',
            'snapshot_date',
            'status'
        ]