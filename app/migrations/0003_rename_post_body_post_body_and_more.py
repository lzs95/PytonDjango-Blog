# Generated by Django 4.0.6 on 2022-07-10 12:21

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0002_rename_posts_post'),
    ]

    operations = [
        migrations.RenameField(
            model_name='post',
            old_name='post_body',
            new_name='body',
        ),
        migrations.RenameField(
            model_name='post',
            old_name='post_title',
            new_name='title',
        ),
    ]
