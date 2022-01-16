import datetime

from batchReport.models import BatchModel


class BatchReport:
    _params = {}

    def __init__(self):
        default_date = datetime.datetime.now()
        self._params['start_time'] = default_date
        self._params['end_time'] = default_date
        self._params['job_name'] = 'default'
        self._params['snapshot_date'] = default_date.date()
        self._params['status'] = 'no completed'
        self.init_batch()

    def init_batch(self):
        batch = BatchModel(
            start_time=self._params['start_time'],
            end_time=self._params['end_time'],
            job_name=self._params['job_name'],
            snapshot_date=self._params['snapshot_date'],
            status=self._params['status']
        )
        batch.save()

    def start(self, job_name):
        self._params['start_time'] = datetime.datetime.now()
        self._params['job_name'] = job_name
        self.next()

    def snapshot(self, snapshot_date):
        self._params['snapshot_date'] = snapshot_date
        self.next()

    def finish(self):
        self._params['end_time'] = datetime.datetime.now()
        self._params['status'] = 'completed'
        self.next()

    def next(self):
        obj = BatchModel.objects.order_by('-id')[0]
        obj.start_time = self._params['start_time']
        obj.end_time = self._params['end_time']
        obj.job_name = self._params['job_name']
        obj.snapshot_date = self._params['snapshot_date']
        obj.status = self._params['status']
        obj.save()