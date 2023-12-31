# Generated by Django 4.0.3 on 2022-05-11 08:11

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Marketplaces',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('url', models.CharField(max_length=200)),
                ('details', models.TextField()),
                ('country', models.CharField(max_length=100)),
                ('no_of_buyers', models.IntegerField(default=0)),
                ('total_visitors', models.IntegerField(default=0)),
                ('terms_and_compliences', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='MarketplaceIntegrationSetup',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('countires', models.CharField(max_length=1000)),
                ('is_part_of_gsp', models.BooleanField(default=False)),
                ('marketplaces', models.ManyToManyField(related_name='marketplaces', to='marketplace_integration.marketplaces')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='mp_user_setup', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
