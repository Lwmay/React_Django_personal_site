import time
from django.test import TestCase
from batchReport.core.batchReport import BatchReport

from batchReport.models import BatchModel


class DatabaseTestCase(TestCase):
    
    def test_create_job_log(self):
        
        nbr_log_entries_before_add = BatchModel.objects.count()

        new_entry = BatchReport()
        new_entry.start('Test_job')
        time.sleep(1)
        new_entry.finish()

        nbr_log_entries_after_add = BatchModel.objects.count()

        self.assertTrue(nbr_log_entries_after_add == nbr_log_entries_before_add +1)
