from django.db import models



class SupportFiles(models.Model):
    uuid = models.CharField(max_length=255)
    file_field = models.FileField(upload_to='support_files/')



class Support(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100)
    phone = models.CharField(max_length=100)

    title = models.CharField(max_length=1000)
    description = models.TextField()
    attachments = models.ManyToManyField(SupportFiles, related_name='support_files')

    created_at = models.DateTimeField(auto_now_add=True)
    enquiry_type = models.CharField(max_length=100)
    status = models.CharField(max_length=100)
    priority = models.CharField(max_length=100)

    is_resolved = models.BooleanField(default=False)