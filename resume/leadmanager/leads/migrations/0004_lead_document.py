# Generated by Django 3.0.2 on 2020-01-31 06:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('leads', '0003_auto_20200130_1754'),
    ]

    operations = [
        migrations.AddField(
            model_name='lead',
            name='document',
            field=models.FileField(blank=True, upload_to='documents/'),
        ),
    ]
