from django.db import models


class BatchModel(models.Model):
    """
    Model to map batch in database table.

    Attributes
    ----------
    start_time : DateTime
        Time job start
    end_time : DateTime
        Time job finish
    job_name : str
        The job name
    snapshot_date : str
        Date of the job
    status : str
        Status of the job (completed, aborted, ...)

    """
    start_time = models.DateTimeField(max_length=40, default="no")
    end_time = models.DateTimeField(max_length=40, default="no")
    job_name = models.CharField(max_length=40, default="no")
    snapshot_date = models.CharField(max_length=80, default="no")
    status = models.CharField(max_length=15, default="default")

    class Meta:
        db_table = "azgimmo_batch_processing"

    def __str__(self):
        return self.job_name