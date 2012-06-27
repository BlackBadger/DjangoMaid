from django import forms
from django.forms import ModelForm
from django.db import models


allergies_choices = (
	('Cat', 'Cat'),
	('Dog', 'Dog'),
	('Other', 'Other'),
	('None', 'None'),
)

class Employee(models.Model):
	first_name = models.CharField(max_length=30)
	last_name = models.CharField(max_length=30)
	street_add = models.CharField(max_length=30)
	apt_add = models.CharField(max_length=30)
	city_add = models.CharField(max_length=30)
	state_add = models.CharField(max_length=30)
	zip_add = models.IntegerField()
	phone = models.IntegerField()
	email = models.CharField(max_length=30)
	dob = models.DateField()
	allergens = models.CharField(max_length=30, choices=allergies_choices)
	def __unicode__(self):
		return self.first_name + ' ' + self.last_name



class EmployeeForm(ModelForm):
	class Meta:
		model = Employee

