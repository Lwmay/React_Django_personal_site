# Generated by Django 4.0.1 on 2022-01-16 09:01

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='BatchModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('start_time', models.DateTimeField(default='no', max_length=40)),
                ('end_time', models.DateTimeField(default='no', max_length=40)),
                ('job_name', models.CharField(default='no', max_length=40)),
                ('snapshot_date', models.CharField(default='no', max_length=80)),
                ('status', models.CharField(default='default', max_length=15)),
            ],
            options={
                'db_table': 'azgimmo_batch_processing',
            },
        ),
    ]
