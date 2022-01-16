import time
from django.test import TestCase
from batchReport.api.serializer import BatchReportSerializer
from batchReport.core.batchReport import BatchReport

from batchReport.models import BatchModel


class JobLogTestCase(TestCase):

    JOB_NAME = 'Test_job'
    
    def test_create_job_log(self):
        """
        Test report creation with compare number of job before and after creating.
        """
        
        nbr_log_entries_before_add = BatchModel.objects.count()
        print(nbr_log_entries_before_add)

        self.new_entry = BatchReport()
        self.new_entry.start(self.JOB_NAME)
        time.sleep(1)
        self.new_entry.finish()

        nbr_log_entries_after_add = BatchModel.objects.count()

        print(nbr_log_entries_after_add)

        self.assertTrue(nbr_log_entries_after_add == nbr_log_entries_before_add +1)
